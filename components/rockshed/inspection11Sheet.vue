<template>
  <v-container>
    <v-table density="compact">
      <thead>
        <tr>
          <th rowspan="4" class="vertical">工種</th>
          <th rowspan="4" class="vertical">材料</th>
          <th colspan="2">部材種別</th>
          <th colspan="2">変状の程度</th>
          <th colspan="9">対策区分</th>
          <th>検査結果</th>
        </tr>
        <tr>
          <th rowspan="3" class="vertical">名称</th>
          <th rowspan="3" class="vertical">記号</th>
          <th rowspan="3" class="vertical">最大</th>
          <th rowspan="3" class="vertical">最小</th>
          <th colspan="3">補修等の必要性</th>
          <th>維持工事<br />で対応す<br />る必要性</th>
          <th colspan="2">緊急対応の<br />必要性</th>
          <th colspan="2">詳細調査の<br />必要性</th>
          <th rowspan="3">健全度<br />(部材単位)</th>
          <th rowspan="3">所見</th>
        </tr>
        <tr>
          <th rowspan="2">区分B<br />の変状</th>
          <th rowspan="2">区分C1<br />の変状</th>
          <th rowspan="2">区分C2<br />の変状</th>
          <th rowspan="2">区分M<br />の変状</th>
          <th colspan="2">区分Eの変状</th>
          <th rowspan="2">区分S1<br />の変状</th>
          <th rowspan="2">区分S2<br />の変状</th>
        </tr>
        <tr>
          <th>区分S1<br />の変状</th>
          <th>区分S2<br />の変状</th>
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