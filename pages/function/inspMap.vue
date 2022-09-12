<template>
    <div>
    <h3>東京都　損傷マップ</h3>
    <v-container fluid>
        <v-card>
            <v-card-title>
            <v-row class="justify-start mt-1 ml-1"></v-row>
            </v-card-title>


            <v-row>
                <v-col cols="12" class="py-2">
                    <a href="https://road-structures-map.mlit.go.jp/Map.aspx" target="_blank">損傷マップ（国）  </a>
                                <v-icon aria-hidden="true" size="x-small" icon="mdi-open-in-new" />

                    </v-col>
</v-row>

            <v-row>
                <v-col cols="12" class="py-2">
                    <p>■表示する施設種別を選択してください。</p>

                    <v-btn-toggle v-model="select_kind" tile color="deep-purple accent-3" multiple>


                        <v-btn value="1">
                            <span class="hidden-sm-and-down">橋梁</span>
                        </v-btn>
                        <v-btn value="2">
                            歩道橋
                        </v-btn>
                        <v-btn value="3">
                            トンネル
                        </v-btn>
                        <v-btn value="11">
                            ロックシェッド
                        </v-btn>
                        <v-btn value="12">
                            道路標識
                        </v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
        </v-card>
        <v-row>

          <!-- 地図 --> 
          <v-card style="height: 78vh; width: 94vw">
            <ams-map
              :zoom="zoom"
              :center="center"
              :markers="bridges"
              marker-title="bridge_name"
              @click-marker="onClickMarker"
              :select_kind="select_kind"
              :select_route="select_route"
              />
          </v-card>
        </v-row>
    </v-container>
    </div>
</template>
<script lang="ts" setup>
import bridgesJson from "@/assets/inspMap.json"

const items = ref([
                '全て',
                '一般都道奥多摩あきる野線184号',
                '一般都道上成木川井線202号',
                '一般都道日原鍾入洞線204号',
                '一般都道奥多摩あきる野線184号',
                '主要地方道青梅飯能線28号',
            ]);
const zoom = ref(15);
const center = ref([35.79112, 139.27753]);
const select_kind = ref(["1","2"]);
const select_route = ref('主要地方道青梅飯能線28号');

const bridges = computed(()=>{
    if(!select_route.value || select_route.value == '全て') return bridgesJson;
    let bridges = bridgesJson.filter((b)=> b.route_name == select_route.value);

    return bridges;
});

const onClickMarker = ()=>{

};
</script>