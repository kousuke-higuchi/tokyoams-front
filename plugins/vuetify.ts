import { defineNuxtPlugin } from '#app'
import { createVuetify, ThemeDefinition } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
   const amsTheme: ThemeDefinition = {
      dark: false,
      colors: {
         // background: '#FFFFFF',
         // surface: '#FFFFFF',
         primary: '1565c0',
         'primary-darken-1': '#3700B3',
         secondary: '#03DAC6',
         'secondary-darken-1': '#018786',
         error: '#cf6679',
         info: '#2196F3',
         success: '#4CAF50',
         warning: '#FB8C00',
      }
   }

   const vuetify = createVuetify({
      theme: {
         defaultTheme: 'amsTheme',
         themes: {
            amsTheme
         }
      },
      components,
      directives
   })
   nuxtApp.vueApp.use(vuetify)
})