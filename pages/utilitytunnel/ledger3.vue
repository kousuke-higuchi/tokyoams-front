<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-card-text class="text-center text-h6">写真台帳</v-card-text>
          <v-sheet class="d-flex">
            <v-sheet>【様式-3】</v-sheet>
            <v-sheet class="ml-auto">(作成年月日:{{ date }})</v-sheet>
          </v-sheet>
          <div class="border">
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
            <v-card-text class="pa-0">(ファイル名:{{ structuralDiagramName }})</v-card-text>
            <v-row no-gutters>
              <v-col md="6" cols="12">
                <v-card>
                  <v-card-title>起点側</v-card-title>
                  <v-container>
                    <v-img :src="startImg"></v-img>
                  </v-container>
                </v-card>
              </v-col>
              <v-col md="6" cols="12">
                <v-card>
                  <v-card-title>中間</v-card-title>
                  <v-container>
                    <v-img :src="centerImg"></v-img>
                  </v-container>
                </v-card>
              </v-col>
              <v-col md="6" cols="12">
                <v-card>
                  <v-card-title>終点側</v-card-title>
                  <v-container>
                    <v-img :src="endImg"></v-img>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
            <v-card-text class="pa-0">※現状写真(起点、中間、終点側)</v-card-text>
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
      startImg: '../../assets/img/utilitytunnel/s3start.jpg',
      centerImg: '../../assets/img/utilitytunnel/s3center.jpg',
      endImg: '../../assets/img/utilitytunnel/s3end.jpg',
    }
  },
})
</script>