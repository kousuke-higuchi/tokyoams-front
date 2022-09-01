<template>

    <!-- <div>
    <v-label>{{select_kind}}</v-label>
</div>
<div>
    <v-label>{{select_route}}</v-label>
</div> -->
    <l-map ref="map" v-model="zoomComputed" v-model:zoom="zoomComputed" :center="center" :maxZoom="18" :minZoom="6"
        :zoomAnimation="true" :markerZoomAnimation="true" :useGlobalLeaflet="true" @ready="onLeafletReady">
        <l-control-layers position="topright"></l-control-layers>
        <l-control-scale position="topright" :imperial="false" :metric="true"></l-control-scale>
        <l-tile-layer v-for="tileProvider in tileProviders" :key="tileProvider.name" :name="tileProvider.name"
            :visible="tileProvider.visible" :url="tileProvider.url" :attribution="tileProvider.attribution"
            layer-type="base" />


        <marker-cluster :options="{ showCoverageOnHover: false, chunkedLoading: true }">

            <template v-for="(m, i) in innerMarkers" :key="i">


                <l-marker v-if="(m.wgsCoordinate != null)"
                    :lat-lng="[m.wgsCoordinate.latitude, m.wgsCoordinate.longitude]">
                    <l-tooltip>
                        <h2>{{ m.title }}</h2>
                    </l-tooltip>
                    <l-popup>
                        <h2>{{ m.title }}</h2>
                        <h2>{{ m.kind }}</h2>
                        <h2>{{ m.route_name }}</h2>
                        <v-list>
                            <v-list-item @click="onClickMarker(m)">
                                <v-list-item-title>詳細画面を表示する</v-list-item-title>
                            </v-list-item>
                            <v-list-item
                                :href="`https://www.google.com/maps?q=${m.wgsCoordinate.latitude},${m.wgsCoordinate.longitude}`"
                                target="_blank" style="color:black;">
                                <v-list-item-title>Google Mapsで表示する
                                    <v-icon aria-hidden="true" size="x-small" icon="mdi-open-in-new" />
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </l-popup>

                    <l-icon v-if="m.soundnessID > 0 && m.soundnessID < 6"
                        :icon-url="`../assets/img/map/MainPin_1_${m.soundnessID}.png`">
                    </l-icon>
                </l-marker>



            </template>

        </marker-cluster>

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
    LTooltip,
    LIcon
} from '@vue-leaflet/vue-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

export default defineComponent({
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LControlScale,
        LControlLayers,
        LPopup,
        LTooltip,
        LIcon,
    },
    computed: {
        dynamicSize() {
            return [this.iconSize, this.iconSize * 1.15];
        },
        dynamicAnchor() {
            return [this.iconSize / 2, this.iconSize * 1.15];
        }
    },
    props: {
        center: Array<number>,
        zoom: Number,
        markers: { type: Array, default: [] },
        markerTitle: String,
        markerLat: { type: String, default: "latitude" },
        markerLon: { type: String, default: "longitude" },
        soundnessID: Number,
        route_name: String,
        kind: { String, default: '' },
        leafletReady: { Boolean, default: "false" },
    },
    emits: {
        'click-marker': (marker: any) => true,
        'update:zoom': (value: number) => true,
    },
    methods: {
        async onLeafletReady(map) {
            await this.$nextTick();
            this.leafletReady = true;
        },
    },

    setup(prop, context) {
        const { zoom } = toRefs(prop)
        const zoomComputed = computed({
            get: () => zoom.value,
            set: (value) => {
                context.emit('update:zoom', value)
            },
        });

        const onClickMarker = (marker) => {
            context.emit("click-marker", marker);
        };

        const getTitle = (marker) => {
            if (prop.markerTitle && marker?.hasOwnProperty(prop.markerTitle)) {
                return marker[prop.markerTitle]
            }
            return marker.title
        };

        const getSoundnessID = (marker) => {
            if (prop.soundnessID && marker?.hasOwnProperty(prop.soundnessID)) {
                return marker[prop.soundnessID]
            }
            return marker.soundnessID
        };
        const getKind = (marker) => {
            if (prop.kind && marker?.hasOwnProperty(prop.kind)) {
                return marker[prop.kind]
            }
            return marker.kind
        };
        const getRouteName = (marker) => {
            if (prop.route_name && marker?.hasOwnProperty(prop.route_name)) {
                return marker[prop.route_name]
            }
            return marker.route_name
        };
        const innerMarkers = computed(() => {
            return prop.markers.map((m) => {
                let _m: any = m;
                _m.title = getTitle(m);
                _m.soundnessID = getSoundnessID(m);
                _m.kind = getKind(m);
                _m.route_name = getRouteName(m);
                return _m
            });
        })
        const tileProviders = [
            {
                name: '地理院地図',
                visible: true,
                url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
                attribution:
                    '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
            },
            {
                name: '国土画像情報',
                visible: false,
                url: 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
                attribution:
                    '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
            },
            {
                name: 'OpenStreetMap',
                visible: false,
                attribution:
                    '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            },
        ];

        return { onClickMarker, getTitle, zoomComputed, innerMarkers, tileProviders }
    }
})
</script>