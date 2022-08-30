<template>
  <v-card class="rfaTable">
    <div class="d-flex">
      <v-sheet>
        <v-container>ブロック番号</v-container>
      </v-sheet>
      <v-sheet class="ma-1">
        <v-select v-model="page" :items="getPageNumber(items)" item-title="page" variant="outlined" density="compact" hide-details>
        </v-select>
      </v-sheet>
    </div>
    <v-window v-model="page">
      <v-window-item value="全て">
        <v-container v-for="item in items" :key="item.blockId">
          <v-table density="compact">
            <thead>
              <tr>
                <th rowspan="2">工種</th>
                <th rowspan="2">材料</th>
                <th colspan="3">部材種別</th>
                <th colspan="3">変状程度</th>
                <th rowspan="2">変状パターン</th>
                <th rowspan="2">変状の種類</th>
                <th rowspan="2">分類</th>
              </tr>
              <tr>
                <th>名称</th>
                <th>記号</th>
                <th>要素番号</th>
                <th>変状程度の評価</th>
                <th>定量的に取得した値</th>
                <th>単位</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 14">
                <!--TODO:DBから取得したデータを表示する-->
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
      </v-window-item>
      <v-window-item v-for="item in items" :key="item.blockId" :value="item.blockId">
        <v-container>
          <v-table density="compact">
            <thead>
              <tr>
                <th rowspan="2">工種</th>
                <th rowspan="2">材料</th>
                <th colspan="3">部材種別</th>
                <th colspan="3">変状程度</th>
                <th rowspan="2">変状パターン</th>
                <th rowspan="2">変状の種類</th>
                <th rowspan="2">分類</th>
              </tr>
              <tr>
                <th>名称</th>
                <th>記号</th>
                <th>要素番号</th>
                <th>変状程度の評価</th>
                <th>定量的に取得した値</th>
                <th>単位</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 14">
                <!--TODO:DBから取得したデータを表示する-->
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
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      page: '全て',
      items:[
        {blockId:1},{blockId:2},{blockId:3},
      ]
    }
  },
  methods: {
    //TODO:現在使わないためコメントアウト。最終的に使用しない場合は削除
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