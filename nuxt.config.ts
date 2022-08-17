import { defineNuxtConfig } from 'nuxt'




// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    // target:'static',
    // router: {
    //   base: '/tokyoams-front/'
    // },
    publicRuntimeConfig: {
        // TODO: .vueファイル�?他�?�.tsファイルに環�?変数を展開する場合�?�ここに追記しま�?
        // apiURL: process.env.VITE_API_BASE_URL,
    },
    app: {
        cdnURL: '/tokyoams-front/',
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]    
        }
    },
    css: [
        "vuetify/lib/styles/main.sass",
        'mdi/css/materialdesignicons.min.css', // mdi font
    ],
    build: {
        transpile: ["vuetify"],
        publicPath:'/static/',
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
