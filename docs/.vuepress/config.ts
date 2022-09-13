import { defaultTheme } from 'vuepress';

export default {
  title: 'Documento de prueba',
  theme: defaultTheme({
    // default theme config
    sidebar: [
      {
        text: 'Introducción',
        link: '/',
      },
      {
        text: 'fw-theme',
        collapsible: true,
        children: [
          { text: 'matrix-card', link: '/fw-theme/matrix-card' },
          { text: 'matrix-menu', link: '/fw-theme/matrix-menu' },
        ],
      },
      {
        text: 'fw-app',
        collapsible: true,
        children: [
          { text: 'matrix-text', link: '/pages/fw-theme/matrix-text' },
          { text: 'matrix-card', link: '/pages/fw-theme/matrix-text' },
        ],
      },
      {
        text: 'fw-microservice',
        collapsible: true,
        children: [{ text: 'hierarchy-parameters', link: '/fw-microservice/hierarchy-parameters' }],
      },
      {
        text: 'ms-lotteries-game',
        collapsible: true,
        children: [
          {
            text: 'chances',
            children: [
              { text: 'getLotteries', link: '/pages/ms-lotteries-game/get-lotteries' },
              { text: 'createChance', link: '/pages/fw-theme/matrix-text' },
            ],
          },
          {
            text: 'modalidades',
            children: [
              { text: 'getModalities', link: '/ms-lotteries-game/modalities/get-modalities' },
              { text: 'postModality', link: '/ms-lotteries-game/modalities/post-modality' },
            ],
          },
          { text: 'lotteries', link: '/pages/fw-theme/matrix-text' },
        ],
      },
    ],
    navbar: [
      {
        text: 'Documentación',
        link: '/doc',
      },
      {
        text: 'Seller',
        link: 'https://v2.vuepress.vuejs.org/',
      },
      {
        text: 'Admin',
        link: '/',
      },
    ],
  }),
};
