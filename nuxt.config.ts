import { defineNuxtConfig } from 'nuxt'




// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        // TODO: .vueファイルや他の.tsファイルに環境変数を展開する場合はここに追記します
        // apiURL: process.env.VITE_API_BASE_URL,
    },
    css: [
        "vuetify/lib/styles/main.sass",
        'mdi/css/materialdesignicons.min.css', // mdi font
    ],
    build: {
        transpile: ["vuetify"]
    },
    vite: {
        define: {
            "process.env.DEBUG": true
        },
        server: {
            watch: {
              usePolling: true
            },
            proxy: {
                '^/api': {
                    target: process.env.VITE_API_BASE_URL,
                    changeOrigin: true,
                  }
            }
        }
    }
})
