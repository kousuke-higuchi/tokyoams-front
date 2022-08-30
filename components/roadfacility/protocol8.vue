<template>
  <v-card class="rfaTable">
    <!--DBのテーブル,カラムが判明次第BEで取得した値を表示する-->
    <v-card-text class="text-center text-h6">点検結果総括表</v-card-text>
    <v-container>
      <v-sheet class="d-flex">
        <div>
          <v-sheet>【様式-8】</v-sheet>
          <v-sheet>道路管理者({{ null }})</v-sheet>
        </div>
        <v-sheet class="ml-auto">
          <v-table density="compact" >
            <tbody>
              <tr>
                <th rowspan="2">点検年月</th>
                <th>前回</th>
                <td>{{ null }}</td>
              </tr>
              <tr>
                <th>今回</th>
                <td>{{ null }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-sheet>
      </v-sheet>
      <div class="d-flex tbTitle">
        <v-card-text class="title">管理番号</v-card-text>
        <v-card-text>{{ null }}</v-card-text>
        <v-card-text class="title">路線番号</v-card-text>
        <v-card-text>{{ null }}</v-card-text>
        <v-card-text class="title">施設名</v-card-text>
        <v-card-text>{{ null }}</v-card-text>
        <v-card-text class="title">所在地</v-card-text>
        <v-card-text>{{ null }}</v-card-text>
        <v-card-text class="title">延長</v-card-text>
        <v-card-text>{{ null }}m</v-card-text>
      </div>
      <v-table density="compact" >
        <thead>
          <tr>
            <th>ブロックNO</th>
            <th>前回転換結果概要</th>
            <th>健全度ランク</th>
            <th>今回点検結果概要</th>
            <th>健全度ランク</th>
            <th>総合判定</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in 10" :key="item">
            <td>{{ null }}</td>
            <td>{{ null }}</td>
            <td>{{ null }}</td>
            <td>{{ null }}</td>
            <td>{{ null }}</td>
            <td>{{ null }}</td>
          </tr>
        </tbody>
      </v-table>
      <div class="border">
        <v-sheet class="d-flex">
          <v-sheet>(位置図)</v-sheet>
          <v-sheet class="ml-auto">
            <v-table density="compact" >
              <tbody>
                <tr>
                  <th>詳細点検</th>
                  <td>{{ null }}</td>
                </tr>
                <tr>
                  <th>路線特性評価</th>
                  <td>{{ null }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-sheet>
        </v-sheet>
        <v-container>
          <v-img :src="null" />
        </v-container>
      </div>
    </v-container>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  // props:{
  //   TODO:DBのテーブル,カラムが判明次第データを受け取る
  // },
  data() {
    return {

    }
  }
})
</script>