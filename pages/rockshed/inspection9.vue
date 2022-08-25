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
                  <!--TODO:DBから取得したデータを表示する-->
                  <thead>
                    <tr>
                      <th class="border" rowspan="2">工種</th>
                      <th class="border" rowspan="2">材料</th>
                      <th class="border" colspan="3">部材種別</th>
                      <th class="border">今回定期点検</th>
                      <th class="border">点検日</th>
                      <td class="border">{{ null }}</td>
                      <th class="border">前回定期点検</th>
                      <th class="border">点検日</th>
                      <td class="border">{{ null }}</td>
                    </tr>
                    <tr>
                      <th class="border">名称</th>
                      <th class="border">記号</th>
                      <th class="border">部材番号</th>
                      <th class="border" colspan="3">変状の種類(程度)</th>
                      <th class="border" colspan="3">変状の種類(程度)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 14">
                      <td class="border">{{ null }}</td>
                      <td class="border">{{ null }}</td>
                      <td class="border">{{ null }}</td>
                      <td class="border">{{ null }}</td>
                      <td class="border">{{ null }}</td>
                      <td class="border" colspan="3">{{ null }}</td>
                      <td class="border" colspan="3">{{ null }}</td>
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