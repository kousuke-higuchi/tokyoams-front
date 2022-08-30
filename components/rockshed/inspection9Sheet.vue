<template>
  <v-container>
    <v-table density="compact">
      <!--TODO:DBから取得したデータを表示する-->
      <thead>
        <tr>
          <th rowspan="2">工種</th>
          <th rowspan="2">材料</th>
          <th colspan="3">部材種別</th>
          <th>今回定期点検</th>
          <th>点検日</th>
          <td>{{ null }}</td>
          <th>前回定期点検</th>
          <th>点検日</th>
          <td>{{ null }}</td>
        </tr>
        <tr>
          <th>名称</th>
          <th>記号</th>
          <th>部材番号</th>
          <th colspan="3">変状の種類(程度)</th>
          <th colspan="3">変状の種類(程度)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 14">
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td>{{ null }}</td>
          <td colspan="3">{{ null }}</td>
          <td colspan="3">{{ null }}</td>
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