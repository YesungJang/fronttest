import type { DefineMethods } from 'aspida';

type GetJobExperienceDTO = {
  id: number; // id
  jobExperience: string; // 経験職種
};

export type Methods = DefineMethods<{
  get: {
    resBody: {
      jobExperiencie: GetJobExperienceDTO[];
    };
  };
}>;
