import type { AspidaClient } from 'aspida';
import type { Methods as Methods_1mdionq } from './ai-resume/generator-resume';
import type { Methods as Methods_1s90ajp } from './ai-resume/match-keywords';
import type { Methods as Methods_80jbxo } from './job-experience';
import type { Methods as Methods_1t09bg2 } from './job-experience/detail/_jobExperience@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/ai-resume/generator-resume';
  const PATH1 = '/ai-resume/match-keywords';
  const PATH2 = '/job-experience';
  const PATH3 = '/job-experience/detail';
  const GET = 'GET';
  const POST = 'POST';

  return {
    ai_resume: {
      generator_resume: {
        post: (option: { body: Methods_1mdionq['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1mdionq['post']['resBody']>(prefix, PATH0, POST, option).json(),
        $post: (option: { body: Methods_1mdionq['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1mdionq['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
      match_keywords: {
        post: (option: { body: Methods_1s90ajp['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1s90ajp['post']['resBody']>(prefix, PATH1, POST, option).json(),
        $post: (option: { body: Methods_1s90ajp['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_1s90ajp['post']['resBody']>(prefix, PATH1, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
    },
    job_experience: {
      detail: {
        _jobExperience: (val2: string) => {
          const prefix2 = `${PATH3}/${val2}`;

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1t09bg2['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1t09bg2['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_80jbxo['get']['resBody']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_80jbxo['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
