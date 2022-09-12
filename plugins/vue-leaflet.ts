import { defineNuxtPlugin } from '#app'
import { LMap, LTileLayer, LMarker, LControlScale, LControlLayers, LPopup, LTooltip, LIcon} from '@vue-leaflet/vue-leaflet'

import "leaflet/dist/leaflet.css";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('LMap', LMap)
  nuxtApp.vueApp.component('LTileLayer', LTileLayer)
  nuxtApp.vueApp.component('LMarker', LMarker)
  nuxtApp.vueApp.component('LControlScale', LControlScale)
  nuxtApp.vueApp.component('LControlLayers', LControlLayers)
  nuxtApp.vueApp.component('LPopup', LPopup)
  nuxtApp.vueApp.component('LTooltip', LTooltip)
  nuxtApp.vueApp.component('LIcon', LIcon)
})
