<template>
  <v-card>
    <!--DBのテーブル,カラムが判明次第BEで取得した値を表示する-->
    <v-card-text class="text-center text-h6">構造一般図</v-card-text>
    <v-sheet class="d-flex">
      <v-sheet>【様式-2】</v-sheet>
      <v-sheet class="ml-auto">(作成年月日:{{ null }})</v-sheet>
    </v-sheet>
    <v-container>
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
      <div class="border rfaCardText">
        <v-card-text>(ファイル名:{{ null }})</v-card-text>
        <v-container>
          <v-img :src="null"></v-img>
        </v-container>
        <div class="d-flex tbTitle">
          <v-card-text class="title">ディスク内資料参照コードNo</v-card-text>
          <v-card-text>{{ null }}</v-card-text>
          <v-card-text class="title">道路台帳番号</v-card-text>
          <v-card-text>{{ null }}</v-card-text>
          <v-card-text class="title">住宅地図番号</v-card-text>
          <v-card-text>{{ null }}</v-card-text>
          <v-card-text class="pa-1">※平面図・立面図・横断図・道路附属物を記入</v-card-text>
        </div>
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