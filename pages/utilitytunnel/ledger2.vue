<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-card-text class="text-center text-h6">構造一般図</v-card-text>
          <v-sheet class="d-flex">
            <v-sheet>【様式-2】</v-sheet>
            <v-sheet class="ml-auto">(作成年月日:{{ date }})</v-sheet>
          </v-sheet>
          <div class="d-flex">
            <v-card-text class="border pa-1">管理番号</v-card-text>
            <v-card-text class="border pa-1">{{ adminId }}</v-card-text>
            <v-card-text class="border pa-1">路線名</v-card-text>
            <v-card-text class="border pa-1">{{ routeName }}</v-card-text>
            <v-card-text class="border pa-1">所在地</v-card-text>
            <v-card-text class="border pa-1">{{ location }}</v-card-text>
            <v-card-text class="border pa-1">地点標</v-card-text>
            <v-card-text class="border pa-1">{{ waypointFrom }}km~{{ waypointTo }}km</v-card-text>
          </div>
          <div class="border">
            <v-card-text class="pa-0">(ファイル名:{{ structuralDiagramName }})</v-card-text>
            <v-container>
              <v-img :src="structuralDiagram"></v-img>
            </v-container>
            <div class="d-flex">
              <v-card-text class="border pa-1">ディスク内資料参照コードNo</v-card-text>
              <v-card-text class="border pa-1">{{ codeNo }}</v-card-text>
              <v-card-text class="border pa-1">道路台帳番号</v-card-text>
              <v-card-text class="border pa-1">{{ ledgerNo }}</v-card-text>
              <v-card-text class="border pa-1">住宅地図番号</v-card-text>
              <v-card-text class="border pa-1">{{ locationNo }}</v-card-text>
              <v-card-text class="pa-1">※平面図・立面図・横断図・道路附属物を記入</v-card-text>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      date: 'H26年11月7日',
      adminId: 'H033M0010-00',
      routeName: '主要地方道33号',
      location: 'あきる野市戸倉841-1335-4',
      waypointFrom: 17.290,
      waypointTo: 17.490,
      structuralDiagramName: null,
      structuralDiagram: '../../assets/img/utilitytunnel/structure.jpg',
      codeNo: null,
      ledgerNo: '56-65',
      locationNo: 'あきる野市53'
    }
  },
})
</script>