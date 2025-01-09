import type { DefineMethods } from 'aspida';

type GetKeywordDTO = {
  jobExperience: string; // 経験職種
  jobExperienceDetails: string; // 経験職種の詳細
};

export type Methods = DefineMethods<{
  post: {
    reqBody: GetKeywordDTO;
    resBody: {
      keywords: string[];
    };
  };
}>;
