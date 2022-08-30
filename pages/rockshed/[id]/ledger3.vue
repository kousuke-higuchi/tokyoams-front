<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rockshed-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card class="rfaTable">
          <div class="d-flex">
            <v-sheet>
              <v-container>ブロック番号</v-container>
            </v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="dropDownItems" item-title="page" variant="outlined" density="compact"
                hide-details>
              </v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item value="全て">
              <v-container v-for="item in 3" :key="item">
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th rowspan="2">工種</th>
                      <th rowspan="2">材料</th>
                      <th colspan="3">部材種別</th>
                      <th colspan="4">判定区分</th>
                      <th rowspan="2">備考</th>
                    </tr>
                    <tr>
                      <th>名称</th>
                      <th>記号</th>
                      <th>部材番号</th>
                      <th>区分Ⅰの変状</th>
                      <th>区分Ⅱの変状</th>
                      <th>区分Ⅲの変状</th>
                      <th>区分Ⅳの変状</th>
                    </tr>
                  </thead>
                  <!--DBカラムが判明次第適切な値が表示されるよう修正-->
                  <tbody>
                    <tr v-for="i in 14" :key="i">
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
            </v-window-item>
            <v-window-item v-for="i in pages" :key="i" :value="i">
              <v-container>
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th rowspan="2">工種</th>
                      <th rowspan="2">材料</th>
                      <th colspan="3">部材種別</th>
                      <th colspan="4">判定区分</th>
                      <th rowspan="2">備考</th>
                    </tr>
                    <tr>
                      <th>名称</th>
                      <th>記号</th>
                      <th>部材番号</th>
                      <th>区分Ⅰの変状</th>
                      <th>区分Ⅱの変状</th>
                      <th>区分Ⅲの変状</th>
                      <th>区分Ⅳの変状</th>
                    </tr>
                  </thead>
                  <!--DBカラムが判明次第適切な値が表示されるよう修正-->
                  <tbody>
                    <tr v-for="j in 14" :key="j">
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
      page: '全て',
      pages:['1', '2', '3'],
      dropDownItems: ['全て', '1', '2', '3'],
    }
  },
  methods: {
    //ドロップダウンリストの項目を取得する
    getPageNumber(facilities) {
      let nums = new Array<String>;
      nums.push('全て');
      facilities.forEach(element => {
        nums.push(element.blockId);
      });
      return nums;
    },
  }
})
</script>