<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-card-text class="text-center text-h6">施設一覧</v-card-text>
          <v-sheet class="d-flex">
            <v-sheet>【様式-7】</v-sheet>
          </v-sheet>
          <v-table density="compact" :style="{ whiteSpace: 'nowrap' }" fixed-header max-height="700px">
            <thead>
              <tr>
                <th class="border"></th>
                <th class="border text-center" colspan="2">管理事務所</th>
                <th class="border text-center" colspan="4">建設事務所</th>
                <th class="border text-center" rowspan="3">道路総幅員(m)</th>
                <th class="border text-center" rowspan="3">構造形式</th>
                <th class="border text-center" rowspan="3">基盤形式</th>
                <th class="border text-center" rowspan="3">竣工年月</th>
                <th class="border text-center">12時間交通量</th>
                <th class="border text-center" colspan="2">定期点検ランク</th>
                <th class="border text-center" colspan="4">道路防災ランク</th>
                <th class="border text-center" colspan="2">点検年月</th>
                <th class="border text-center" rowspan="3">備考</th>
              </tr>
              <tr>
                <th class="border text-center" rowspan="2">No.</th>
                <th class="border text-center" rowspan="2">施設管理番号</th>
                <th class="border text-center" rowspan="2">路線名</th>
                <th class="border text-center" rowspan="2">施設種別</th>
                <th class="border text-center" rowspan="2">施設名</th>
                <th class="border text-center" rowspan="2">所在地</th>
                <th class="border text-center" rowspan="2">延長(m)</th>
                <th class="border text-center" rowspan="2">(H22年調査)</th>
                <th class="border text-center" rowspan="2">前回</th>
                <th class="border text-center" rowspan="2">今回</th>
                <th class="border text-center" colspan="2">豪雨・豪雪</th>
                <th class="border text-center" colspan="2">地震</th>
                <th class="border text-center" rowspan="2">前回</th>
                <th class="border text-center" rowspan="2">今回</th>
              </tr>
              <tr>
                <th class="border text-center">前回</th>
                <th class="border text-center">今回</th>
                <th class="border text-center">前回</th>
                <th class="border text-center">今回</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in facilitys" :key="item">
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
                <td class="border">{{ null }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      //TODO:DBのテーブル、カラムが分かり次第それに合わせてデータを取得できるよう改修する
      facilitys: [
        null, null, null, null, null, null, null, null, null, null, null, null, null,
      ]
    }
  }
})
</script>
