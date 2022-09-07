<template>
    <!-- <v-select v-model="selectedMap" :items="mapName" style="width: 500px;" label="地図を選択可能です。" >
</v-select> -->

    <ol-map ref="mapObject" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height: 100%"
        @moveend="onViewMoved">
        <ol-view ref="vuew" :center="center" :zoom="zoom" :projection="projection" :max-zoom="selectedTile.maxZoom"
            :min-zoom="selectedTile.minZoom" />

        <ol-tile-layer :title="selectedTile.name">
            <ol-source-xyz :url="selectedTile.url" :attributions="selectedTile.attribution" />
        </ol-tile-layer>
        <ol-zoom-control />
        <ol-zoomslider-control />
        <ol-scaleline-control />

        <ol-attribution-control />
        <ol-interaction-select @select="featureSelected">
            <ol-style>
                <ol-style-icon :src="markerIcon2"></ol-style-icon>
            </ol-style>

        </ol-interaction-select>



        <ol-vector-layer v-if="innerMarkers!=null">
            <ol-source-vector>
                <ol-feature v-for="m in innerMarkers">
                    <ol-geom-point :coordinates="[m.wgsCoordinate.longitude, m.wgsCoordinate.latitude]"></ol-geom-point>
                    <ol-style>
                        <ol-style-icon :src="markerIcon"></ol-style-icon>
                    </ol-style>
                </ol-feature>
            </ol-source-vector>
        </ol-vector-layer>


        <ol-overlay v-if="selectedMarker!=null" :position="selectedMarker">
            <template v-slot="slotProps">
                <div class="overlay-content">
                    <h1>{{selectedFacility}}</h1>
                    <v-list>
                        <v-list-item @click="onClickMarker(selectedMarker)">
                            <v-list-item-title>詳細画面を表示する</v-list-item-title>
                        </v-list-item>
                        <v-list-item :href="`https://www.google.com/maps?q=${selectedMarker[1]},${selectedMarker[0]}`"
                            target="_blank" style="color:black;">
                            <v-list-item-title>Google Mapsで表示する
                                <v-icon aria-hidden="true" size="x-small" icon="mdi-open-in-new" />
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </div>
            </template>
        </ol-overlay>

    </ol-map>

    <v-radio-group v-model="selectedTile" mandatory row>
        <div>地図を選択可能です。</div>
        <!-- <v-radio v-for="item in tileProviders" :key="item.url"
:label="item.name"
:value = "item" > -->
        <v-radio :label=tileProviders[0].name :value="tileProviders[0]"></v-radio>
        <v-radio :label=tileProviders[1].name :value="tileProviders[1]"></v-radio>
        <v-radio :label=tileProviders[2].name :value="tileProviders[2]"></v-radio>
    </v-radio-group>


</template>

<script lang="ts" setup>
    
import { title } from 'process';

const markerIcon ='../assets/img/map/MainPin_1_1.png';
const markerIcon2 = '../assets/img/map/MainPin_1_2.png';
const projection = ref("EPSG:4326");
const selectedMarker = ref();
const selectedFacility = ref();
const mapObject = ref();
const viewObject = ref();
const selectedMap = ref();
interface Props {
    center: number[],
    zoom: number,
    markers?: Array<any>,
    markerTitle: string,
    soundnessID?: number,
    route_name?: string,
    kind?: string,
}
const props = withDefaults(defineProps<Props>(), {
    kind: "",
    soundnessID: null,
    zoom: 8,
})
interface Emits {
    (e: 'click-marker', maker: any): void,
    (e: 'update:zoom', zoom: number): void,
}
const emits = defineEmits<Emits>();

const center = computed(() => {
    return [props.center[1], props.center[0]]
});
const zoom = computed({
    get: () => props.zoom,
    set: (value) => {
        emits('update:zoom', value)
    },
});

const onClickMarker = (marker) => {
    emits("click-marker", marker);
};

const getTitle = (marker) => {
    if (!marker) return null;
    if (props.markerTitle && marker.hasOwnProperty(props.markerTitle)) {
        return marker[props.markerTitle]
    }
    return marker.title
};

const getSoundnessID = (marker) => {
    if (!marker) return null;
    if (props.soundnessID && marker.hasOwnProperty(props.soundnessID)) {
        return marker[props.soundnessID]
    }
    return marker.soundnessID
};
const getKind = (marker) => {
    if (!marker) return null;
    if (props.kind && marker.hasOwnProperty(props.kind)) {
        return marker[props.kind]
    }
    return marker.kind
};
const getRouteName = (marker) => {
    if (!marker) return null;
    if (props.route_name && marker.hasOwnProperty(props.route_name)) {
        return marker[props.route_name]
    }
    return marker.route_name
};

let getMarkers = (markers) => {
    return new Promise<any[]>((resolve) => {
        let result = markers?.filter((m) => m.wgsCoordinate != null)
            .map((m) => {
                let _m: any = m;
                _m.title = getTitle(m);
                _m.soundnessID = getSoundnessID(m);
                _m.kind = getKind(m);
                _m.route_name = getRouteName(m);
                return _m
            });
        resolve(result);
    })
};
const featureSelected = (marker) => {
    // selectedMarker.value =[marker.wgsCoordinate.longitude, marker.wgsCoordinate.latitude]
    selectedFacility.value = marker.selected[0].values_.name;

    console.debug(selectedFacility);

    selectedMarker.value = marker.selected[0].getGeometry().extent_;
}


const innerMarkers = ref([]);
innerMarkers.value = await getMarkers(props.markers)

watch(() => props.markers, (newVal, oldVal) => {
    getMarkers(newVal).then((ret) => {
        innerMarkers.value = ret;
        console.debug("update innermakers");
    })
})
const tileProviders = [
    {
        name: '地理院地図',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
        attribution:
            '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
        maxZoom: 18,
        minZoom: 7,
    },
    {
        name: '国土画像情報',
        url: 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
        attribution:
            '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
        maxZoom: 18,
        minZoom: 7,
    },
    {
        name: 'OpenStreetMap',
        attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        maxZoom: 20,
        minZoom: 7,
    },
];

// TODO: タイルを選択できるようにする
const selectedTile = ref(tileProviders[2]);

/* 地図の可視範囲が変更された場合（中心位置の移動・ズームの変更）のイベントハンドラ
*/
const onViewMoved = (view) => {
    // 地図のサイズ（右下端のピクセル位置）を取得する
    let [width, height] = mapObject.value.map.getSize();

    // 地図の表示範囲（緯度・経度）を取得する
    const MARGIN = 10;
    let topLeftCoord = mapObject.value.getCoordinateFromPixel([0 - MARGIN, 0 - MARGIN]);
    let bottomRightCoord = mapObject.value.getCoordinateFromPixel([width + MARGIN, height + MARGIN]);

    // TODO: 可視範囲のみ取得するWebAPIでマーカを更新する
}
</script>
