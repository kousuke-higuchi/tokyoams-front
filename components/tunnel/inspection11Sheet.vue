<template>
  <v-container>
    <v-table density="compact" class="ledger">
      <thead>
        <tr>
          <th rowspan="4" class="text-center vertical">工種</th>
          <th rowspan="4" class="text-center vertical">材料</th>
          <th colspan="2" class="text-center">部材種別</th>
          <th colspan="2" class="text-center">変状の程度</th>
          <th colspan="9" class="text-center">対策区分</th>
          <th class="text-center">検査結果</th>
        </tr>
        <tr>
          <th rowspan="3" class="text-center vertical">名称</th>
          <th rowspan="3" class="text-center vertical">記号</th>
          <th rowspan="3" class="text-center vertical">最大</th>
          <th rowspan="3" class="text-center vertical">最小</th>
          <th colspan="3" class="text-center">補修等の必要性</th>
          <th class="text-center">維持工事で<br />対応する<br />必要性</th>
          <th colspan="2" class="text-center">緊急対応の必要性</th>
          <th colspan="2" class="text-center">詳細調査の<br />必要性</th>
          <th rowspan="3" class="text-center">健全度<br />(部材単位)</th>
          <th rowspan="3" class="text-center">所見</th>
        </tr>
        <tr>
          <th rowspan="2" class="text-center">区分B<br />の変状</th>
          <th rowspan="2" class="text-center">区分C1<br />の変状</th>
          <th rowspan="2" class="text-center">区分C2<br />の変状</th>
          <th rowspan="2" class="text-center">区分M<br />の変状</th>
          <th colspan="2" class="text-center">区分Eの変状</th>
          <th rowspan="2" class="text-center">区分S1<br />の変状</th>
          <th rowspan="2" class="text-center">区分S2<br />の変状</th>
        </tr>
        <tr>
          <th class="text-center">区分E1<br />の変状</th>
          <th class="text-center">区分E2<br />の変状</th>
        </tr>
      </thead>
      <!--TODO:DBから取得したデータを表示する-->
      <tbody>
        <tr v-for="i in 15" :key="i">
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script lang="ts">
export default defineComponent({
  // props:{
  //   //TODO:表示するデータを受け取る
  // }
})
</script>

<style>
.vertical {
  writing-mode: vertical-rl;
}
</style>