import aspidaAxios from '@aspida/axios';
import axios from 'axios';

import $api from '../../api/$api';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const $axios = axios.create({
    baseURL:
      'https://nufa3v4lw2.execute-api.ap-northeast-1.amazonaws.com/sasaki',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const aspidaClient = $api(aspidaAxios($axios));

  // エラーハンドリング無しのAxiosインスタンス
  const $looseAxios = axios.create({
    baseURL:
      'https://nufa3v4lw2.execute-api.ap-northeast-1.amazonaws.com/sasaki',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const looseAspidaClient = $api(aspidaAxios($looseAxios));

  return {
    provide: {
      api: aspidaClient,
      looseApi: looseAspidaClient,
    },
  };
});
