<template>
    <h2>損傷マップ</h2>
    <v-container fluid>
        <v-card>
            <v-card-title>
            <v-row class="justify-start mt-1 ml-1"></v-row>
            </v-card-title>

            <v-row>
                <v-col cols="4" class="py-2">
                    <p>■表示する路線を選択してください。</p>
                    <v-select @change="selectRoute" clearable :items="items" v-model="select_route"></v-select>
                </v-col>
            </v-row>
        </v-card>
        <v-row>

          <!-- 地図 --> 
          <v-card style="height: 78vh; width: 94vw">
            <test-map></test-map>
          </v-card>
        </v-row>
    </v-container>
</template>
<script lang="ts">
import bridgesJson from "@/assets/inspMap.json"
export default {


    data() {
        return {
            key:0,
            select: ['Vuetify', 'Programming'],
            items: [
                '全て',
                '一般都道奥多摩あきる野線184号',
                '一般都道上成木川井線202号',
                '一般都道日原鍾入洞線204号',
                '一般都道奥多摩あきる野線184号',
                '主要地方道青梅飯能線28号',
            ],
            zoom: 15,
            center: [35.79112, 139.27753],
            bridges: bridgesJson,
            select_kind:["1","2"],
            select_route:'主要地方道青梅飯能線28号',
        }
    },
  methods: {
    selectRoute() {
      this.key = this.key ? 0 : 1;
    }
  }
}
</script>