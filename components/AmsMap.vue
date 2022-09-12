<template>
    <!-- <div style="text-align: right;">
        <v-select v-model="selectedTile" :items="tileProviders" style="width: 500px;" 
        item-text="name" item-value = "url" return-object label="地図を選択可能です。">
        </v-select>
    </div> -->

    <select v-model="selectedTile">
        <option :value="tileProviders[0]">{{tileProviders[0].name}}</option>
        <option :value="tileProviders[1]">{{tileProviders[1].name}}</option>
        <option :value="tileProviders[2]">{{tileProviders[2].name}}</option>    
    </select>

    <!-- <div style="text-align: right;">
        <v-btn-toggle :v-model="selectedTile" tile color="deep-purple accent-3" group @change="changeMap(selectedMap)">
            <v-btn v-for="item in tileProviders" :key="item.url" :label="item.name" :value="item">
                {{item.name}}</v-btn>
        </v-btn-toggle>
    </div> -->
    <ol-map ref="mapObject" :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height: 100%" @moveend="onViewMoved">
        <ol-view ref="viewObject" 
            :center="center"
            :zoom="zoom"
            projection="EPSG:4326"
            :max-zoom="selectedTile.maxZoom"
            :min-zoom="selectedTile.minZoom"
          />

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
                    <ol-geom-point :coordinates="[m.wgsCoordinate.longitude, m.wgsCoordinate.latitude]" ></ol-geom-point>
                    <ol-style>
                        <ol-style-icon :src="markerIcon"></ol-style-icon>
                        <ol-style-text></ol-style-text>
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

</template>

<script lang="ts" setup>

    const markerIcon = new URL('../assets/img/map/MainPin_1_1.png', import.meta.url).href;
    const markerIcon2 = new URL('../assets/img/map/MainPin_1_2.png', import.meta.url).href;
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
        selectedFacility.value = marker.selected[0].values_;

        console.debug(selectedFacility);

        selectedMarker.value = marker.selected[0].getGeometry().extent_;
    }

    const changeMap = (event) => {
        selectedTile.value = tileProviders[event];

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
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        maxZoom:20,
        minZoom:7,
        },
    ];

    // TODO: タイルを選択できるようにする
    const selectedTile = ref(tileProviders[0]);

    /**
     * 地図の可視範囲が変更された場合（中心位置の移動・ズームの変更）のイベントハンドラ
     */
    const onViewMoved = (view) => {
        // 地図のサイズ（右下端のピクセル位置）を取得する
        let [width, height] = mapObject.value.map.getSize();

        // 地図の表示範囲（緯度・経度）を取得する
        const MARGIN = 10;
        let topLeftCoord = mapObject.value.getCoordinateFromPixel([0-MARGIN,0-MARGIN]);
        let bottomRightCoord = mapObject.value.getCoordinateFromPixel([width+MARGIN,height+MARGIN]);

        // TODO: 可視範囲のみ取得するWebAPIでマーカを更新する
    }
    const officeCenters = [
        { id:  0, location:  [ 35.689891291380505, 139.69207462644442 ] }, // 0  東京都全体
        { id:  1, location:  [ 35.669433204892215, 139.77770929804947 ] }, // 1  第一建設事務所
        { id:  2, location:  [ 35.60940497161191,  139.7300895850496  ] },  // 2  第二建設事務所
        { id:  3, location:  [ 35.70733725156625,  139.66381926921395 ] }, // 3  第三建設事務所
        { id:  4, location:  [ 35.72934238838235,  139.7307033730215  ] },  // 4  第四建設事務所
        { id:  5, location:  [ 35.72092523222241,  139.85959201154228 ] }, // 5  第五建設事務所
        { id:  6, location:  [ 35.745629825044496, 139.8080383418312  ] },  // 6  第六建設事務所
        { id: 10, location:  [ 35.790953482837146, 139.27761892688778 ] }, // 10 西多摩建設事務所
        { id: 11, location:  [ 35.58324916360244,  139.4712718922423  ] },  // 11 南多摩東部建設事務所
        { id: 12, location:  [ 35.680786638099114, 139.2713636909986  ] },  // 12 南多摩西部建設事務所
        { id: 13, location:  [ 35.6732890113619,   139.4846030980493  ] },  // 13 北多摩南部建設事務所
        { id: 14, location:  [ 35.69494489336145,  139.40866074037766 ] }, // 14 北多摩北部建設事務所
        { id: 21, location:  [ 34.757097107906574, 139.35692790612464 ] }, // 21 大島支庁
        { id: 22, location:  [ 34.11899892494774,  139.51719359591993 ] }, // 22 三宅支庁
        { id: 23, location:  [ 33.10959180431606,  139.78894869614817 ] }, // 23 八丈支庁
        { id: 24, location:  [ 27.095017860060928, 142.1893487093325  ] },  // 24 小笠原支庁
    ];
    const authState = useAuthUser();
    const center = ref( [props.center[1], props.center[0]]);

    if (authState.state.value.isLogin) {
        // NOTE: hitしないときは、東京都全体
        let loc = officeCenters[0].location;
        let defaultOffice = officeCenters.find((c)=>c.id == authState.state.value.currentUser.officeid);

        if(defaultOffice) {
            loc = defaultOffice.location;
        }
        center.value = [loc[1], loc[0]];
    }
</script>
