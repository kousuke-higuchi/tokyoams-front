<template>
    <h2>損傷マップ</h2>
    <v-container fluid>
        <v-card>
            <v-card-title>
            <v-row class="justify-start mt-1 ml-1"></v-row>
            </v-card-title>

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
                        <v-btn value="4">
                            舗装
                        </v-btn>
                        <v-btn value="5">
                            共同溝
                        </v-btn>
                        <v-btn value="6">
                            擁壁
                        </v-btn>
                        <v-btn value="7">
                            掘割道路
                        </v-btn>
                        <v-btn value="8">
                            組立歩道
                        </v-btn>
                        <v-btn value="9">
                            桟道
                        </v-btn>
                        <v-btn value="10">
                            地下歩行者道
                        </v-btn>
                        <v-btn value="11">
                            ロックシェッド
                        </v-btn>
                        <v-btn value="12">
                            道路照明
                        </v-btn>
                        <v-btn value="13">
                            障害物表示灯
                        </v-btn>
                        <v-btn value="14">
                            配電盤
                        </v-btn>
                        <v-btn value="15">
                            道路標識
                        </v-btn>
                        <v-btn value="16">
                            反射鏡
                        </v-btn>
                    </v-btn-toggle>
                </v-col>
                <!-- <v-col
                cols="12"
                class="text-center"
                >
                Model: {{ select_kind }}
                </v-col> -->

            </v-row>
            <v-row>
                <v-col cols="4" class="py-2">
                    <p>■表示する路線を選択してください。</p>
                    <v-select clearable :items="items" v-model="select_route"></v-select>
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
              @click-marker="clickMarker"
              select-kind="select_kind"
              />
          </v-card>



        </v-row>
    </v-container>
</template>
<script lang="ts">
import bridgesJson from "@/assets/inspMap.json"

export default {
    data() {
        return {
            select: ['Vuetify', 'Programming'],
            items: [
                '全て',
                '新宿青梅線',
                '東京大師横浜線',
                '杉並あきる野線',
                '千代田練馬田無線',
            ],
            zoom: 15,
            center: [35.79112, 139.27753],
            bridges: bridgesJson,
            select_kind:["1","2"],
            select_route:'全て',
        }
    },
}
</script>