#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { NuxtAppStack } from '../lib/nuxt-app-stack';

const app = new cdk.App();

const DEPLOY_STAGE = process.env.DEPLOY_STAGE ?? 'other';
const AWS_ACCOUNT_ID = '442226296935';
const AWS_REGION = 'ap-northeast-1';

new NuxtAppStack(app, 'NuxtAppStack', {
  stackName: `arps-ai-project-frontend-s3-stack-${DEPLOY_STAGE}`,
  env: { account: AWS_ACCOUNT_ID, region: AWS_REGION },
});
