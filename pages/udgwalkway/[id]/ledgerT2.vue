<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <underground-walkway-side-card-details select-tab="ledger" />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-sheet class="d-flex tbTitle">
            <v-card-text class="title">管理番号</v-card-text>
            <v-card-text>{{  adminId  }}</v-card-text>
            <v-card-text class="title">路線名</v-card-text>
            <v-card-text>{{  routeName  }}</v-card-text>
            <v-card-text class="title">所在地</v-card-text>
            <v-card-text>{{  location  }}</v-card-text>
            <v-card-text class="title">地点標</v-card-text>
            <v-card-text>{{  waypointFrom  }}km~{{  waypointTo  }}km</v-card-text>
          </v-sheet>
          <v-row no-gutters class="rfaCardText">
            <v-col cols="12">
              <v-card class="border elevation-0 rounded-0">
                <v-card-text>(ファイル名:{{  groundViewfileName  }})</v-card-text>
                <v-card-text>平面図およびボーリング柱状図</v-card-text>
                <v-container>
                  <v-img :src="groundView" />
                </v-container>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card class="border elevation-0 rounded-0">
                <v-card-text>標準断面図</v-card-text>
                <v-container>
                  <v-img :src="crossSectionView" />
                </v-container>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card class="border elevation-0 rounded-0">
                <v-card-text>対象施設と関連施設関係</v-card-text>
                <v-container>
                  <v-img :src="relatedFacilities" />
                </v-container>
              </v-card>
            </v-col>
          </v-row>
          <v-sheet class="d-flex tbTitle">
            <v-card-text class="title">ディスク内資料参照コードNo</v-card-text>
            <v-card-text>{{  codeNo  }}</v-card-text>
            <v-card-text class="title">道路台帳番号</v-card-text>
            <v-card-text>{{  ledgerNo  }}</v-card-text>
            <v-card-text class="title">住宅地図番号</v-card-text>
            <v-card-text>{{  mapNo  }}</v-card-text>
            <v-card-text>
              ※平面図・標準断面図・対象施設と関連施設関係を記入
            </v-card-text>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      //DBのテーブル、カラムが判明次第修正する
      adminId: 0,
      routeName: '一般国道131号',
      location: null,
      waypointFrom: null,
      waypointTo: null,
      groundView: null,
      groundViewfileName: null,
      crossSectionView: null,
      relatedFacilities: null,
      codeNo: null,
      ledgerNo: null,
      mapNo: null,
    }
  }
})
</script>