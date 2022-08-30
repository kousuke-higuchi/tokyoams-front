<template>
  <v-card>
    <!--DBのテーブル,カラムが判明次第BEで取得した値を表示する-->
    <v-card-text class="text-center text-h6">写真台帳</v-card-text>
    <v-sheet class="d-flex">
      <v-sheet>【様式-3】</v-sheet>
      <v-sheet class="ml-auto">(作成年月日:{{ null }})</v-sheet>
    </v-sheet>
    <v-container>
      <div class="border">
        <v-sheet class="d-flex tbTitle">
          <v-card-text class="title">管理番号</v-card-text>
          <v-card-text>{{ null }}</v-card-text>
          <v-card-text class="title">路線名</v-card-text>
          <v-card-text>{{ null }}</v-card-text>
          <v-card-text class="title">所在地</v-card-text>
          <v-card-text>{{ null }}</v-card-text>
          <v-card-text class="title">地点標</v-card-text>
          <v-card-text>{{ null }}km~{{ null }}km</v-card-text>
        </v-sheet>
        <v-card-text class="pa-0">(ファイル名:{{ null }})</v-card-text>
        <v-container>
          <v-row>
            <v-col md="6" cols="12" class="rfaCardText">
              <v-card class="elevation-0 border">
                <v-card-title>起点側</v-card-title>
                <v-container>
                  <v-img :src="null"></v-img>
                </v-container>
              </v-card>
            </v-col>
            <v-col md="6" cols="12" class="rfaCardText">
              <v-card class="elevation-0 border">
                <v-card-title>中間</v-card-title>
                <v-container>
                  <v-img :src="null"></v-img>
                </v-container>
              </v-card>
            </v-col>
            <v-col md="6" cols="12" class="rfaCardText">
              <v-card class="elevation-0 border">
                <v-card-title>終点側</v-card-title>
                <v-container>
                  <v-img :src="null"></v-img>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card-text class="pa-0">※現状写真(起点、中間、終点側)</v-card-text>
      </div>
    </v-container>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  // props:{
  //   TODO:DBのテーブル,カラムが判明次第propsでデータを受け取る
  // },
  data() {
    return {

    }
  }
})
</script>