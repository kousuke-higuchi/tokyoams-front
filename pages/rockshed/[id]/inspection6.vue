<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rockshed-side-card-details select-tab="protocol" />
      </v-col>
      <v-col md="9" cols="12">
        <v-card class="rfaTable">
          <div class="d-flex">
            <v-sheet>
              <v-container>ブロック番号</v-container>
            </v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="getPageNumber(sections)" item-title="page" variant="outlined"
                density="compact" hide-details></v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item value="全て">
              <div v-for="(item, i) in sections" :key="item.blockId">
                <v-container>
                  <v-row no-gutters>
                    <v-col md="6" cols="12" v-for="(photoInfo, j) in item.photoInfos" :key="j">
                      <v-table density="compact" style="white-space:nowrap;">
                        <tbody>
                          <tr>
                            <th>写真番号</th>
                            <td>{{ null }}</td>
                            <th></th>
                            <td></td>
                            <th>撮影年月日</th>
                            <td>{{ null }}</td>
                          </tr>
                          <tr>
                            <th>部材名</th>
                            <td>{{ null }}</td>
                            <th>要素番号</th>
                            <td>{{ null }}</td>
                            <th colspan="2" rowspan="2">メモ</th>
                          </tr>
                          <tr>
                            <th>変状の種類</th>
                            <td>{{ null }}</td>
                            <th>変状程度</th>
                            <td>{{ null }}</td>
                          </tr>
                          <tr>
                            <td colspan="4">
                              <v-container>
                                <v-img :src="photoInfo.imgfile" />
                              </v-container>
                            </td>
                            <td colspan="2" class="editcell">
                              <v-textarea v-model="photoInfo.memo" :placeholder="photoInfo.memo" variant="plain"
                                hint="メモを入力してください" persistent-hint></v-textarea>
                            </td>
                          </tr>
                        </tbody>
                      </v-table>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
              <div class="float-bottom">
                <v-btn color="primary" elevation="6" @click="onclickRegistrationBtn(sections)">
                  <v-icon color="white">mdi-check</v-icon>保存
                </v-btn>
              </div>
            </v-window-item>
            <v-window-item v-for="(item, i) in sections" :key="item.blockId" :value="item.blockId">
              <!--TODO:テーブルのカラムに表示するデータを設定する-->
              <v-container>
                <v-row no-gutters>
                  <v-col md="6" cols="12" v-for="(photoInfo, j) in item.photoInfos" :key="j">
                    <v-table density="compact" style="white-space:nowrap;">
                      <tbody>
                        <tr>
                          <th>写真番号</th>
                          <td>{{ null }}</td>
                          <th></th>
                          <td></td>
                          <th>撮影年月日</th>
                          <td>{{ null }}</td>
                        </tr>
                        <tr>
                          <th>部材</th>
                          <td>{{ null }}</td>
                          <th>要素番号</th>
                          <td>{{ null }}</td>
                          <th colspan="2" rowspan="2">メモ</th>
                        </tr>
                        <tr>
                          <th>変状の種類</th>
                          <td>{{ null }}</td>
                          <th>変状程度</th>
                          <td>{{ null }}</td>
                        </tr>
                        <tr>
                          <td colspan="4">
                            <v-container>
                              <v-img :src="photoInfo.imgfile" />
                            </v-container>
                          </td>
                          <td colspan="2" class="editcell">
                            <v-textarea v-model="photoInfo.memo" :placeholder="photoInfo.memo" variant="plain"
                              hint="メモを入力してください" persistent-hint></v-textarea>
                          </td>
                        </tr>
                      </tbody>
                    </v-table>
                  </v-col>
                </v-row>
              </v-container>
              <div class="float-bottom">
                <v-btn color="primary" elevation="6" @click="onclickRegistrationBtn(sections[i].photoInfos)">
                  <v-icon color="white">mdi-check</v-icon>保存
                </v-btn>
              </div>
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
      //TODO:DBのカラムに合わせた形に修正する
      sections: [
        {
          blockId: 1,
          photoInfos: [
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },]
        },
        {
          blockId: 2,
          photoInfos: [
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },]
        },
        {
          blockId: 3,
          photoInfos: [
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },]
        },
      ],
    }
  },
  methods: {
    getPageNumber(facilitys) {
      let pageNumbers = new Array<String>;
      pageNumbers.push('全て');
      facilitys.forEach(element => {
        pageNumbers.push(element.blockId);
      });
      return pageNumbers;
    },
    onclickRegistrationBtn(infos) {
      //TODO:データが取得できていない。
      console.debug("RegistrationBtnが押下されました。photoInfos:" + infos);
    }
  }
})
</script>