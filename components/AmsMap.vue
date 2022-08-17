<template>
    <l-map
    v-model="zoomComputed"
    v-model:zoom="zoomComputed"
    :center="center"
    :maxZoom="19"
    :minZoom="6"
    :zoomAnimation="true"
    >
      <l-control-scale position="topright" :imperial="false" :metric="true"></l-control-scale>
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
      ></l-tile-layer>
      <template v-for="(m, i) in innerMarkers" :key="i">
      <!--TODO:座標返還はバックエンドで実装する-->
        <l-marker v-if="(m.latlon!=null)" 
          :lat-lng="m.latlon">
            <l-popup>
                <h2>{{m.title}}</h2>
                <v-list>
                    <v-list-item @click="onClickMarker(m)">
                        <v-list-item-title>詳細画面を表示する</v-list-item-title>
                    </v-list-item>
                    <v-list-item :href="`https://www.google.com/maps?q=${m.latlon[0]},${m.latlon[1]}`" target="_blank" style="color:black;">
                        <v-list-item-title>Google Mapsで表示する <v-icon aria-hidden="true" size="x-small" icon="mdi-open-in-new" /></v-list-item-title>
                    </v-list-item>
                </v-list>
            </l-popup>
        </l-marker>
      </template>
    </l-map>
</template>

<script lang="ts">

    import {   
        LMap,
        LTileLayer,
        LMarker,
        LControlScale,
        LControlLayers,
        LPopup,
    } from '@vue-leaflet/vue-leaflet'
    import "leaflet/dist/leaflet.css";

    export default defineComponent({
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LControlScale,
            LControlLayers,
            LPopup
        },
        props: {
            center: Array<number>,
            zoom: Number,
            markers: { type:Array, default:[]},
            markerTitle: String,
            markerLat: { type:String, default:"latitude" },
            markerLon: { type:String, default:"longitude"},
        },
        emits: {
            'click-marker': (marker: any) => true,
            'update:zoom' : (value: number) => true,
        },
        setup(prop, context) {
            const { zoom } = toRefs(prop)
            const zoomComputed = computed({
                get: () => zoom.value,
                set: (value) => {
                    context.emit('update:zoom', value)
                },
            });

            const onClickMarker = ( marker ) => {
                context.emit("click-marker", marker);
            };

            const getTitle = (marker) => {
                if(prop.markerTitle && marker?.hasOwnProperty(prop.markerTitle)) {
                    return marker[prop.markerTitle]
                }
                return marker.title
            };

            const getLatLon = (marker) => {
                let Wgs = marker.wgsCoordinate;
                if(Wgs == null)
                  return null;
                return [Wgs.latitude, Wgs.longitude];
            };

            const innerMarkers = prop.markers.map((m)=>{
                let _m:any = m;
                _m.latlon = getLatLon(m);
                _m.title = getTitle(m);
                return _m
            });
            return {onClickMarker, getTitle, getLatLon, zoomComputed, innerMarkers}
        }
    })
</script>