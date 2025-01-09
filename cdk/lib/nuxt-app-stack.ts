import * as cdk from 'aws-cdk-lib';
import { Stack, StackProps } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import { BlockPublicAccess } from 'aws-cdk-lib/aws-s3';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class NuxtAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const DEPLOY_STAGE = process.env.DEPLOY_STAGE ?? 'other';

    // S3 バケットの作成
    const bucket = new s3.Bucket(this, 'arps-ai-project-frontend-s3', {
      bucketName: `arps-ai-project-frontend-s3-${DEPLOY_STAGE}`,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: '404.html',
      publicReadAccess: true,
      blockPublicAccess: new BlockPublicAccess({
        // Block Public Access を無効化
        blockPublicAcls: false,
        blockPublicPolicy: false,
      }),
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    new s3deploy.BucketDeployment(this, 'DeployNuxt3Website', {
      sources: [s3deploy.Source.asset('../dist')], // Nuxt3 のビルド成果物フォルダを指定
      destinationBucket: bucket,
    });

    // バケットポリシーに IP 制限を追加
    const bucketAllowPolicy = new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [`${bucket.bucketArn}/*`], // バケット内のすべてのオブジェクトが対象
      effect: iam.Effect.ALLOW,
      principals: [new iam.AnyPrincipal()],
      conditions: {
        IpAddress: {
          'aws:SourceIp': ['18.178.223.251/32', '122.208.209.60/32'],
        },
      },
    });

    const bucketDenyPolicy = new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [`${bucket.bucketArn}/*`], // バケット内のすべてのオブジェクトが対象
      effect: iam.Effect.DENY,
      principals: [new iam.AnyPrincipal()],
      conditions: {
        NotIpAddress: {
          'aws:SourceIp': ['18.178.223.251/32', '122.208.209.60/32'],
        },
      },
    });

    // バケットポリシーをバケットにアタッチ
    bucket.addToResourcePolicy(bucketAllowPolicy);
    bucket.addToResourcePolicy(bucketDenyPolicy);
  }
}
