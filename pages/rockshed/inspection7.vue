<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rockshed-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <div class="d-flex">
            <v-sheet>
              <v-container>ブロック番号</v-container>
            </v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="numbers" item-title="page" variant="outlined" density="compact"
                hide-details></v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item v-for="item in numbers" :key="item" :value="item">
              <v-container>
                <v-table density="compact" style="white-space:nowrap;">
                  <thead>
                    <tr>
                      <th class="border" rowspan="2">工種</th>
                      <th class="border" rowspan="2">材料</th>
                      <th class="border" colspan="3">部材種別</th>
                      <th class="border" colspan="3">変状程度</th>
                      <th class="border" rowspan="2">変状パターン</th>
                      <th class="border" rowspan="2">変状の種類</th>
                      <th class="border" rowspan="2">分類</th>
                    </tr>
                    <tr>
                      <th class="border">名称</th>
                      <th class="border">記号</th>
                      <th class="border">要素番号</th>
                      <th class="border">変状程度の評価</th>
                      <th class="border">定量的に取得した値</th>
                      <th class="border">単位</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 14">
                      <!--TODO:DBから取得したデータを表示する-->
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
              </v-container>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      page: 1,
      numbers: [1, 2, 3]
    }
  },
})
</script>