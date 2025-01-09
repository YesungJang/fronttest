import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import type { ThemeDefinition } from 'vuetify';

//Lightthemeを追加
const Lighttheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f5f6f6', //背景色の設定
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    components,
    directives,
    //themeの追加
    theme: {
      themes: { light: Lighttheme, variables: {} },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
