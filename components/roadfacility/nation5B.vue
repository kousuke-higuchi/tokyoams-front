<template>
  <v-card class="rfaTable">
    <!--TODO:{{ null }}の箇所はBEで取得した値を表示する-->
    <v-card-text class="text-center text-h6">防災カルテ様式B</v-card-text>
    <v-container>
      <v-sheet class="d-flex tbTitle">
        <v-card-text class="title">管理施設番号</v-card-text>
        <v-card-text>{{ null }}</v-card-text>
        <v-card-text class="title">点検対象項目</v-card-text>
        <v-card-text>{{ null }}</v-card-text>
        <v-card-text class="title">路線名</v-card-text>
        <v-card-text>{{ null }}</v-card-text>
      </v-sheet>
      <v-row no-gutters>
        <v-col md="6" cols="12" class="border">
          <div class="d-flex rfaCardText">
            <v-card-text class="border">変状No.{{ null }}</v-card-text>
            <v-card-text>(評価スケッチ)</v-card-text>
          </div>
        </v-col>
        <v-col md="6" cols="12" class="border">
          <div class="rfaCardText">
            <v-sheet>(写真貼付欄)</v-sheet>
            <v-container>
              <v-img :src="null" />
            </v-container>
          </div>
          <v-table density="compact">
            <thead>
              <tr>
                <th nowrap>着目すべき点</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ null }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-table density="compact">
            <thead>
              <tr>
                <th nowrap>チェック項目</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ null }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  // props:{
  //TODO:表示するデータを取得する
  // }
})
</script>