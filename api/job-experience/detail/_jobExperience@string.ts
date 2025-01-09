import type { DefineMethods } from 'aspida';

type GetJobExperienceDetailDTO = {
  jobExperienceDetail: string; // 経験職種の詳細
};

export type Methods = DefineMethods<{
  get: {
    resBody: {
      jobExperienceDetails: GetJobExperienceDetailDTO[];
    };
  };
}>;
