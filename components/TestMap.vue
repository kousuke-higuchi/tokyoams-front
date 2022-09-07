<template>
    <l-map
      ref="map"
      :max-zoom="19"
      v-model:zoom="zoom"
      v-model:center="center"
      :zoomAnimation="true"
      :markerZoomAnimation="true"
      :useGlobalLeaflet="true"
      :options="{ zoomControl: false }"
      @ready="onLeafletReady"
    >
      <template v-if="leafletReady">
        <l-control-layers position="bottomright" />
        <l-control-zoom position="bottomright" />
        <l-tile-layer
          v-for="tileProvider in tileProviders"
          :key="tileProvider.name"
          :name="tileProvider.name"
          :visible="tileProvider.visible"
          :url="tileProvider.url"
          :attribution="tileProvider.attribution"
          layer-type="base"
        />
        <marker-cluster
          :options="{ showCoverageOnHover: false, chunkedLoading: true }"
        >
          <l-marker :lat-lng="[35.62477192, 35.92365592]" />
          <l-marker :lat-lng="[35.61477192, 35.92365592]" />
          <l-marker :lat-lng="[35.60477192, 35.92365592]" />
          <l-marker :lat-lng="[35.63477192, 35.92365592]" />
          <l-marker :lat-lng="[35.64477192, 35.92365592]" />
          <l-marker :lat-lng="[35.65477192, 35.92365592]" />
          <l-marker :lat-lng="[35.66477192, 35.92365592]" />
          <l-marker :lat-lng="[35.67477192, 35.92365592]" />
        </marker-cluster>
        
      </template>
    </l-map>
  </template>
  <script >
  import * as L from "leaflet";
  import "leaflet.markercluster/dist/leaflet.markercluster.js";
  import "leaflet/dist/leaflet.css";
  import "leaflet.markercluster/dist/MarkerCluster.css";
  import "leaflet.markercluster/dist/MarkerCluster.Default.css";
  import {
    LMap,
    LTileLayer,
    LMarker,
    LControlZoom,
    LControlLayers,
  } from "@vue-leaflet/vue-leaflet";
  
  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LControlZoom,
      LControlLayers,
    },
  
    data() {
      return {
        zoom: 10,
        center: [36, 140],
        tileProviders: [
          {
            name: "Street",
            visible: false,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            url:
              "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
            id: "mapbox/streets-v11",
          },
          {
            name: "Grayscale",
            visible: true,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            url:
              "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
          },
          {
            name: "Darkmode",
            visible: false,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            url:
              "https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
          },
        ],
  
        leafletReady: false,
        leafletObject: null,
      };
    },
  
    methods: {
      async onLeafletReady(map) {
        await this.$nextTick();
        this.leafletReady = true;
      },
    },
  
  };
  </script>
  