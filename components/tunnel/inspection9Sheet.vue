<template>
  <v-container>
    <v-table density="compact" class="ledger">
      <!--TODO:DBから取得したデータを表示する-->
      <thead>
        <tr>
          <th rowspan="2" class="text-center">工種</th>
          <th rowspan="2" class="text-center">材料</th>
          <th colspan="3" class="text-center">部材種別</th>
          <th class="text-center">今回定期点検</th>
          <th class="text-center">点検日</th>
          <td>{{ "2019年 1月 18日" }}</td>
          <th class="text-center">前回定期点検</th>
          <th class="text-center">点検日</th>
          <td>{{ "2013年 2月 14日" }}</td>
        </tr>
        <tr>
          <th class="text-center">名称</th>
          <th class="text-center">記号</th>
          <th class="text-center">部材番号</th>
          <th colspan="3" class="text-center">変状の種類(程度)</th>
          <th colspan="3" class="text-center">変状の種類(程度)</th>
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