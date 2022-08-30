<template>
  <v-card class="rfaTable">
    <!--DBのテーブル,カラムが判明次第BEで取得した値を表示する-->
    <div class="d-flex">
      <v-sheet>
        <v-container>ブロック番号</v-container>
      </v-sheet>
      <v-sheet class="ma-1">
        <v-select v-model="page" :items="numbers" item-title="page" variant="outlined" density="compact" hide-details>
        </v-select>
      </v-sheet>
    </div>
    <v-window v-model="page">
      <v-window-item value="全て">
        <v-container v-for="item in facilityItems" :key="item.blockId">
          <v-card elevation="0">
            <v-row no-gutters>
              <v-col v-for="img in item.Imgs" :key="img" md="6" cols="12">
                <v-table density="compact" height="128">
                  <tbody>
                    <tr>
                      <th nowrap>地点標</th>
                      <td>{{ null }}</td>
                      <th nowrap>写真番号</th>
                      <td>{{ null }}</td>
                    </tr>
                    <tr>
                      <th nowrap>部材名</th>
                      <td>{{ null }}</td>
                      <th nowrap>損傷の種類</th>
                      <td>{{ null }}</td>
                    </tr>
                    <tr>
                      <th nowrap>状況</th>
                      <td colspan="3">{{ null }}</td>
                    </tr>
                    <tr>
                      <th nowrap>備考</th>
                      <td colspan="3">{{ null }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-container class="border">
                  <v-img :src="null" />
                </v-container>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-window-item>

      <v-window-item v-for="item in facilityItems" :key="item.blockId" :value="item.blockId">
        <v-container>
          <v-card elevation="0">
            <v-row no-gutters>
              <v-col v-for="img in item.Imgs" :key="img" md="6" cols="12">
                <v-table density="compact" height="128">
                  <tbody>
                    <tr>
                      <th nowrap>地点標</th>
                      <td>{{ null }}</td>
                      <th nowrap>写真番号</th>
                      <td>{{ null }}</td>
                    </tr>
                    <tr>
                      <th nowrap>部材名</th>
                      <td>{{ null }}</td>
                      <th nowrap>損傷の種類</th>
                      <td>{{ null }}</td>
                    </tr>
                    <tr>
                      <th nowrap>状況</th>
                      <td colspan="3">{{ null }}</td>
                    </tr>
                    <tr>
                      <th nowrap>備考</th>
                      <td colspan="3">{{ null }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-container class="border">
                  <v-img :src="null" />
                </v-container>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  // props:{
  //   TODO:DBのテーブル,カラムが判明次第データを受け取る
  // },
  data() {
    return {
      page: '全て',
      numbers: [],
      //TODO:仮の値props使用時に削除
      facilityItems: [
        { blockId: '1', Imgs: [null, null, null, null] },
        { blockId: '2', Imgs: [null, null, null, null] },
        { blockId: '3', Imgs: [null, null, null, null] },
      ]
    }
  },
  mounted: function () {
    this.numbers = this.getPageNumber(this.facilityItems);
  },
  methods: {
    //ドロップダウンリストの項目を取得する
    getPageNumber(facilitys) {
      let nums = new Array<String>;
      nums.push('全て');
      facilitys.forEach(element => {
        nums.push(element.blockId);
      });
      return nums;
    },
  }
})
</script>