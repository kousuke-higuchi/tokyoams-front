<template>

<!-- <div>
    <v-label>{{select_kind}}</v-label>
</div>
<div>
    <v-label>{{select_route}}</v-label>
</div> -->
    <l-map
    v-model="zoomComputed"
    v-model:zoom="zoomComputed"
    :center="setCenter"
    :maxZoom="18"
    :minZoom="6"
    :zoomAnimation="true"
    >
      <l-control-layers position="topright"></l-control-layers>
      <l-control-scale position="topright" :imperial="false" :metric="true"></l-control-scale>
      <l-tile-layer
      v-for="tileProvider in tileProviders"
      :key="tileProvider.name"
      :name="tileProvider.name"
      :visible="tileProvider.visible"
      :url="tileProvider.url"
      :attribution="tileProvider.attribution"
      layer-type="base"/>

      <template v-for="(m, i) in innerMarkers" :key="i">
        <l-marker v-if="(m.wgsCoordinate!=null)" 
          :lat-lng="[m.wgsCoordinate.latitude, m.wgsCoordinate.longitude]">
            <l-popup>
                <h2>{{m.title}}</h2>
                <h2>{{m.kind}}</h2>
                <h2>{{m.route_name}}</h2>
                <v-list>
                    <v-list-item @click="onClickMarker(m)">
                        <v-list-item-title>詳細画面を表示する</v-list-item-title>
                    </v-list-item>
                    <v-list-item :href="`https://www.google.com/maps?q=${m.wgsCoordinate.latitude},${m.wgsCoordinate.longitude}`" target="_blank" style="color:black;">
                        <v-list-item-title>Google Mapsで表示する <v-icon aria-hidden="true" size="x-small" icon="mdi-open-in-new" /></v-list-item-title>
                    </v-list-item>
                </v-list>
            </l-popup>
        
            <l-icon v-if="m.soundnessID>0 && m.soundnessID < 6" :icon-url="`../assets/img/map/MainPin_1_${m.soundnessID}.png`" >
            </l-icon>
        </l-marker>
      </template>
    </l-map>

</template>

<script lang="ts" setup>
import { arrayBuffer } from 'stream/consumers';

    interface Props {
        center: number[],
        zoom: number,
        markers?: any[],
        markerTitle: string,
        soundnessID?: number,
        route_name?: string,
        kind?: string,
    }
    const props = withDefaults(defineProps<Props>(), {
        isOpen:false,
        kind: "",
        soundnessID: null,
        makers: ([] as any[])
    })

    interface Emits {
        (e: 'click-marker', maker:any): void,
        (e: 'update:zoom', zoom:number ): void,
    }
    const emits = defineEmits<Emits>();

    const zoomComputed = computed({
        get: () => props.zoom,
        set: (value) => {
            emits('update:zoom', value)
        },
    });

    const onClickMarker = ( marker ) => {
        emits("click-marker", marker);
    };

    const getTitle = (marker) => {
        if(props.markerTitle && marker?.hasOwnProperty(props.markerTitle)) {
            return marker[props.markerTitle]
        }
        return marker.title
    };

    const getSoundnessID  = (marker) => {
        if(props.soundnessID && marker?.hasOwnProperty(props.soundnessID)) {
            return marker[props.soundnessID]
        }
        return marker.soundnessID
    };
    const getKind  = (marker) => {
        if(props.kind && marker?.hasOwnProperty(props.kind)) {
            return marker[props.kind]
        }
        return marker.kind
    };
    const getRouteName  = (marker) => {
        if(props.route_name && marker?.hasOwnProperty(props.route_name)) {
            return marker[props.route_name]
        }
        return marker.route_name
    };
    const innerMarkers = computed(()=>{
        return props.markers.map((m)=>{
            let _m:any = m;
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
    const setCenter = ref(props.center);
    const officeCenters = [
        { id:  0, location:  [ 35.689891291380505, 139.69207462644442 ] }, // 0  東京都全体
        { id:  1, location:  [ 35.669433204892215, 139.77770929804947 ] }, // 1  第一建設事務所
        { id:  2, location:  [ 35.60940497161191,  139.7300895850496 ] },  // 2  第二建設事務所
        { id:  3, location:  [ 35.70733725156625,  139.66381926921395 ] }, // 3  第三建設事務所
        { id:  4, location:  [ 35.72934238838235,  139.7307033730215 ] },  // 4  第四建設事務所
        { id:  5, location:  [ 35.72092523222241,  139.85959201154228 ] }, // 5  第五建設事務所
        { id:  6, location:  [ 35.745629825044496, 139.8080383418312 ] },  // 6  第六建設事務所
        { id: 10, location:  [ 35.790953482837146, 139.27761892688778 ] }, // 10 西多摩建設事務所
        { id: 11, location:  [ 35.58324916360244,  139.4712718922423 ] },  // 11 南多摩東部建設事務所
        { id: 12, location:  [ 35.680786638099114, 139.2713636909986 ] },  // 12 南多摩西部建設事務所
        { id: 13, location:  [ 35.6732890113619,   139.4846030980493 ] },  // 13 北多摩南部建設事務所
        { id: 14, location:  [ 35.69494489336145,  139.40866074037766 ] }, // 14 北多摩北部建設事務所
        { id: 21, location:  [ 34.757097107906574, 139.35692790612464 ] }, // 21 大島支庁
        { id: 22, location:  [ 34.11899892494774,  139.51719359591993 ] }, // 22 三宅支庁
        { id: 23, location:  [ 33.10959180431606,  139.78894869614817 ] }, // 23 八丈支庁
        { id: 24, location:  [ 27.095017860060928, 142.1893487093325 ] },  // 24 小笠原支庁
    ];
    const authState = useAuthUser();
    if (authState.state.value.isLogin) {
        // NOTE: hitしないときは、東京都全体
        setCenter.value = officeCenters[0].location;
        for (let n = 0; n < officeCenters.length; n++) {
            if (officeCenters[n].id == authState.state.value.currentUser.officeid) {
                setCenter.value = officeCenters[n].location;
                console.log("set center ", officeCenters[n].id, authState.state.value.currentUser.officeid, setCenter);
                break;
            }
        }
    }
</script>