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
                      <th class="border" rowspan="4">工種</th>
                      <th class="border" rowspan="4">材料</th>
                      <th class="border" colspan="2">部材種別</th>
                      <th class="border" colspan="2">変状の程度</th>
                      <th class="border" colspan="9">対策区分</th>
                      <th class="border">検査結果</th>
                    </tr>
                    <tr>
                      <th class="border" rowspan="3">名称</th>
                      <th class="border" rowspan="3">記号</th>
                      <th class="border" rowspan="3">最大</th>
                      <th class="border" rowspan="3">最小</th>
                      <th class="border" colspan="3">補修等の必要性</th>
                      <th class="border">維持工事<br />で対応す<br />る必要性</th>
                      <th class="border" colspan="2">緊急対応の<br />必要性</th>
                      <th class="border" colspan="2">詳細調査の<br />必要性</th>
                      <th class="border" rowspan="3">健全度<br />(部材単位)</th>
                      <th class="border" rowspan="3">所見</th>
                    </tr>
                    <tr>
                      <th class="border" rowspan="2">区分B<br />の変状</th>
                      <th class="border" rowspan="2">区分C1<br />の変状</th>
                      <th class="border" rowspan="2">区分C2<br />の変状</th>
                      <th class="border" rowspan="2">区分M<br />の変状</th>
                      <th class="border" colspan="2">区分E<br />の変状</th>
                      <th class="border" rowspan="2">区分S1<br />の変状</th>
                      <th class="border" rowspan="2">区分S2<br />の変状</th>
                    </tr>
                    <tr>
                      <th class="border">区分S1<br />の変状</th>
                      <th class="border">区分S2<br />の変状</th>
                    </tr>
                  </thead>
                  <!--TODO:DBから取得したデータを表示する-->
                  <tbody>
                    <tr v-for="i in 15" :key="i">
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
      numbers: [1, 2, 3],
    }
  }
})
</script>