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
                      <th class="border" rowspan="5">工種</th>
                      <th class="border" rowspan="5">材料</th>
                      <th class="border" colspan="3">部材種別</th>
                      <th class="border" colspan="2">変状の程度</th>
                      <th class="border" colspan="10">対策区分</th>
                      <th class="border" colspan="4">診断結果</th>
                    </tr>
                    <tr>
                      <th class="border" rowspan="4">名称</th>
                      <th class="border" rowspan="4">記号</th>
                      <th class="border" rowspan="4" style="writing-mode: vertical-rl;">部材番号</th>
                      <th class="border" rowspan="4">最大</th>
                      <th class="border" rowspan="4">最小</th>
                      <th class="border" colspan="4">補修等の必要性</th>
                      <th class="border">維持工事<br />で対応する<br />必要性</th>
                      <th class="border" colspan="3">緊急対応の必要性</th>
                      <th class="border" colspan="2">詳細調査の<br />必要性</th>
                      <th class="border" colspan="2">原因</th>
                      <th class="border" rowspan="4">健全度<br />(部材単位)</th>
                      <th class="border" rowspan="4">所見</th>
                    </tr>
                    <tr>
                      <th class="border" rowspan="3">区分B<br />の変状</th>
                      <th class="border" rowspan="3">区分<br />C1<br />の変状</th>
                      <th class="border" rowspan="2"></th>
                      <th class="border" rowspan="3">区分<br />C2<br />の変状</th>
                      <th class="border" rowspan="3">区分M<br />の変状</th>
                      <th class="border" colspan="3">区分Eの変状</th>
                      <th class="border" rowspan="3">区分<br />S1<br />の変状</th>
                      <th class="border" rowspan="3">区分<br />S2<br />の変状</th>
                      <th class="border" rowspan="3">確定</th>
                      <th class="border" rowspan="3">確定</th>
                    </tr>
                    <tr>
                      <th class="border" rowspan="2">区分<br />E1<br />の変状</th>
                      <th class="border"></th>
                      <th class="border" rowspan="2">区分<br />E2<br />の変状</th>
                    </tr>
                    <tr>
                      <th class="border">更新</th>
                      <th class="border">更新</th>
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