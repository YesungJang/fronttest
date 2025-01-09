import type { DefineMethods } from 'aspida';

type GeneratorResumeDTO = {
  jobExperience: string; // 経験職種
  jobExperienceDetails: string; // 経験職種の詳細
  product: string; // 商材
  keywords: string[]; // キーワード
};

type GeneratorResumeResponseDTO = {
  jobTitle: string; // 職務経歴書のタイトル
  jobDescription: string[]; // 職務内容
  achievements: string[]; // 成果・実績
};

export type Methods = DefineMethods<{
  post: {
    reqBody: GeneratorResumeDTO;
    resBody: GeneratorResumeResponseDTO;
  };
}>;
