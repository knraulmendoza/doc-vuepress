export const themeData = JSON.parse("{\"sidebar\":[{\"text\":\"Introducción\",\"link\":\"/\"},{\"text\":\"fw-theme\",\"collapsible\":true,\"children\":[{\"text\":\"matrix-card\",\"link\":\"/fw-theme/matrix-card\"},{\"text\":\"matrix-menu\",\"link\":\"/fw-theme/matrix-menu\"}]},{\"text\":\"fw-app\",\"collapsible\":true,\"children\":[{\"text\":\"matrix-text\",\"link\":\"/pages/fw-theme/matrix-text\"},{\"text\":\"matrix-card\",\"link\":\"/pages/fw-theme/matrix-text\"}]},{\"text\":\"fw-microservice\",\"collapsible\":true,\"children\":[{\"text\":\"hierarchy-parameters\",\"link\":\"/fw-microservice/hierarchy-parameters\"}]},{\"text\":\"ms-lotteries-game\",\"collapsible\":true,\"children\":[{\"text\":\"chances\",\"children\":[{\"text\":\"getLotteries\",\"link\":\"/pages/ms-lotteries-game/get-lotteries\"},{\"text\":\"createChance\",\"link\":\"/pages/fw-theme/matrix-text\"}]},{\"text\":\"modalidades\",\"children\":[{\"text\":\"getModalities\",\"link\":\"/ms-lotteries-game/modalities/get-modalities\"},{\"text\":\"postModality\",\"link\":\"/ms-lotteries-game/modalities/post-modality\"}]},{\"text\":\"lotteries\",\"link\":\"/pages/fw-theme/matrix-text\"}]}],\"navbar\":[{\"text\":\"Documentación\",\"link\":\"/doc\"},{\"text\":\"Seller\",\"link\":\"https://v2.vuepress.vuejs.org/\"},{\"text\":\"Admin\",\"link\":\"/\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
