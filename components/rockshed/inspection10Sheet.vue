<template>
  <v-container>
    <v-table density="compact">
      <thead>
        <tr>
          <th rowspan="5" class="vertical">工種</th>
          <th rowspan="5" class="vertical">材料</th>
          <th colspan="3">部材種別</th>
          <th colspan="2">変状の程度</th>
          <th colspan="10">対策区分</th>
          <th colspan="4">診断結果</th>
        </tr>
        <tr>
          <th rowspan="4" class="vertical">名称</th>
          <th rowspan="4" class="vertical">記号</th>
          <th rowspan="4" class="vertical">部材番号</th>
          <th rowspan="4" class="vertical">最大</th>
          <th rowspan="4" class="vertical">最小</th>
          <th colspan="4">補修等の必要性</th>
          <th>維持工事<br />で対応する<br />必要性</th>
          <th colspan="3">緊急対応の必要性</th>
          <th colspan="2">詳細調査の<br />必要性</th>
          <th colspan="2">原因</th>
          <th rowspan="4">健全度<br />(部材単位)</th>
          <th rowspan="4">所見</th>
        </tr>
        <tr>
          <th rowspan="3">区分B<br />の変状</th>
          <th rowspan="3">区分<br />C1<br />の変状</th>
          <th rowspan="2"></th>
          <th rowspan="3">区分<br />C2<br />の変状</th>
          <th rowspan="3">区分M<br />の変状</th>
          <th colspan="3">区分Eの変状</th>
          <th rowspan="3">区分<br />S1<br />の変状</th>
          <th rowspan="3">区分<br />S2<br />の変状</th>
          <th rowspan="3">確定</th>
          <th rowspan="3">確定</th>
        </tr>
        <tr>
          <th rowspan="2">区分<br />E1<br />の変状</th>
          <th></th>
          <th rowspan="2">区分<br />E2<br />の変状</th>
        </tr>
        <tr>
          <th class="vertical">更新</th>
          <th class="vertical">更新</th>
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