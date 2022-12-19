// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //   buildModules: ["@nuxtjs/tailwindcss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-vite",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'

          // automatically imports `storeToRefs`
          "storeToRefs",
        ],
      },
    ],
  ],
});
