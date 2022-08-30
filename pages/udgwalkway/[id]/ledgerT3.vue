<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <underground-walkway-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3" class="border">
          <v-sheet class="d-flex tbTitle">
            <v-card-text class="title">管理番号</v-card-text>
            <v-card-text>{{ adminId }}</v-card-text>
            <v-card-text class="title">路線名</v-card-text>
            <v-card-text>{{ routeName }}</v-card-text>
            <v-card-text class="title">所在地</v-card-text>
            <v-card-text>{{ location }}</v-card-text>
            <v-card-text class="title">地点標</v-card-text>
            <v-card-text>{{ waypointFrom }}km~{{ waypointTo }}km</v-card-text>
          </v-sheet>
          <v-card-text>(ファイル名:{{ faileName }})</v-card-text>
          <v-row class="ma-1">
            <v-col md="6" cols="12">
              <v-card class="rounded-0">
                <v-sheet>起点側</v-sheet>
                <v-container class="border rounded-0">
                  <v-img :src="startImg" />
                </v-container>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card class="rounded-0">
                <v-sheet>中間</v-sheet>
                <v-container class="border rounded-0">
                  <v-img :src="centerImg" />
                </v-container>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card class="rounded-0">
                <v-sheet>終点側</v-sheet>
                <v-container class="border rounded-0">
                  <v-img :src="endImg" />
                </v-container>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card class="rounded-0">
                <v-sheet>トンネル銘板</v-sheet>
                <v-container class="border rounded-0">
                  <v-img :src="nameplate" />
                </v-container>
              </v-card>
            </v-col>
          </v-row>
          <v-card-text>※現状写真(起点、中間、終点側)</v-card-text>
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
      faileName: null,
      startImg: null,
      centerImg: null,
      endImg: null,
      nameplate: null,
    }
  }
})
</script>