import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'path'


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  components: true,
  buildModules: [
     '@nuxtjs/tailwindcss',
     '@backmarket/design-system/tailwind.config',
  ],
  build: {
    transpile: ['@backmarket/design-system']
  },
  css: [
    resolve(
      __dirname,
      'node_modules/@backmarket/design-system/dist/styles.css',
    ),
  ],
  vite: {
        css: {
            preprocessorOptions: {
                tailwindcss: {
    cssPath: resolve(
      __dirname,
      'node_modules/@backmarket/design-system/dist/styles.css',
    ),
    configPath: resolve(__dirname, 'tailwind.config.js'),
  },
            },
        },
    }

})
