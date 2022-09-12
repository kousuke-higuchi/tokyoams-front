<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
      </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
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
                      <v-table density="compact" class="ledger" style="white-space:nowrap;">
                        <tbody>
                          <tr>
                            <th class="text-center">写真番号</th>
                            <td class="text-center">{{ photoInfo.imgNumber }}</td>
                            <th></th>
                            <td></td>
                            <th class="text-center">撮影年月日</th>
                            <td class="text-center">{{ photoInfo.time }}</td>
                          </tr>
                          <tr>
                            <th class="text-center">部材</th>
                            <td class="text-center">{{ photoInfo.materialName }}</td>
                            <th class="text-center">要素番号</th>
                            <td class="text-center">{{ photoInfo.no }}</td>
                            <th colspan="2" rowspan="2" class="text-center">メモ</th>
                          </tr>
                          <tr>
                            <th class="text-center">変状の種類</th>
                            <td class="text-center">{{ photoInfo.type }}</td>
                            <th class="text-center">変状程度</th>
                            <td class="text-center">{{ photoInfo.rank }}</td>
                          </tr>
                          <tr>
                            <td colspan="4">
                              <v-container>
                                <v-img :src="photoInfo.imgfile" style="height:250px" />
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
                    <v-table density="compact" class="ledger" style="white-space:nowrap;">
                      <tbody>
                        <tr>
                          <th>写真番号</th>
                          <td class="text-center">{{ photoInfo.imgNumber }}</td>
                          <th></th>
                          <td></td>
                          <th>撮影年月日</th>
                          <td class="text-center">{{ photoInfo.time }}</td>
                        </tr>
                        <tr>
                          <th>部材</th>
                          <td class="text-center">{{ photoInfo.materialName }}</td>
                          <th>要素番号</th>
                          <td class="text-center">{{ photoInfo.no }}</td>
                          <th colspan="2" rowspan="2">メモ</th>
                        </tr>
                        <tr>
                          <th>変状の種類</th>
                          <td class="text-center">{{ photoInfo.type }}</td>
                          <th>変状程度</th>
                          <td class="text-center">{{ photoInfo.rank }}</td>
                        </tr>
                        <tr>
                          <td colspan="4">
                            <v-container>
                              <v-img :src="photoInfo.imgfile" style="height:250px" />
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
      child_extend: true,
      page: '全て',
      sections: [
        {
          blockId: 1,
          photoInfos: [
            {
              imgfile: '../../assets/img/dmg/tnli6view1.jpg',
              imgNumber: '1-1',
              materialName: '頂版',
              no: '0101',
              type: 'うき',
              rank: 'e',
              time: '2019/1/18',
              memo: '頂版にうき。1.2ｍ×0.2ｍ。C1',
            },
            {
              imgfile: '../../assets/img/dmg/tnli6view2.jpg',
              imgNumber: '1-2',
              materialName: '頂版',
              no: '0101',
              type: 'うき',
              rank: 'e',
              time: '2019/1/18',
              memo: '頂版にうき。0.6ｍ×2.7ｍ。B',
            },
            {
              imgfile: '../../assets/img/dmg/tnli6view3.jpg',
              imgNumber: '1-3',
              materialName: '側壁',
              no: '0101',
              type: '叩き落とし',
              rank: 'c',
              time: '2019/1/18',
              memo: '側壁のうきに対して叩き落としを実施。0.2ｍ×0.2ｍ、D=0.2ｍ。A',
            },
            {
              imgfile: '../../assets/img/dmg/tnli6view4.jpg',
              imgNumber: '1-4',
              materialName: '頂版',
              no: '0101',
              type: 'うき',
              rank: 'e',
              time: '2019/1/18',
              memo: '頂版にうき。1.8ｍ×0.2ｍ。C1',
            },]
        },
        {
          blockId: 2,
          photoInfos: [
            {
              imgfile: '../../assets/img/dmg/tnli6view1.jpg',
              imgNumber: '1-1',
              materialName: '頂版',
              no: '0101',
              type: 'うき',
              rank: 'e',
              time: '2019/1/18',
              memo: '頂版にうき。1.2ｍ×0.2ｍ。C1',
            },
            {
              imgfile: '../../assets/img/dmg/tnli6view2.jpg',
              imgNumber: '1-2',
              materialName: '頂版',
              no: '0101',
              type: 'うき',
              rank: 'e',
              time: '2019/1/18',
              memo: '頂版にうき。0.6ｍ×2.7ｍ。B',
            },
            {
              imgfile: '../../assets/img/dmg/tnli6view3.jpg',
              imgNumber: '1-3',
              materialName: '側壁',
              no: '0101',
              type: '叩き落とし',
              rank: 'c',
              time: '2019/1/18',
              memo: '側壁のうきに対して叩き落としを実施。0.2ｍ×0.2ｍ、D=0.2ｍ。A',
            },
            {
              imgfile: '../../assets/img/dmg/tnli6view4.jpg',
              imgNumber: '1-4',
              materialName: '頂版',
              no: '0101',
              type: 'うき',
              rank: 'e',
              time: '2019/1/18',
              memo: '頂版にうき。1.8ｍ×0.2ｍ。C1',
            },]
        },
        {
          blockId: 3,
          photoInfos: [
            {
              imgfile: '../../assets/img/dmg/tnli6view1.jpg',
              imgNumber: '1-1',
              materialName: '頂版',
              no: '0101',
              type: 'うき',
              rank: 'e',
              time: '2019/1/18',
              memo: '頂版にうき。1.2ｍ×0.2ｍ。C1',
            },
            {
              imgfile: '../../assets/img/dmg/tnli6view2.jpg',
              imgNumber: '1-2',
              materialName: '頂版',
              no: '0101',
              type: 'うき',
              rank: 'e',
              time: '2019/1/18',
              memo: '頂版にうき。0.6ｍ×2.7ｍ。B',
            },
            {
              imgfile: '../../assets/img/dmg/tnli6view3.jpg',
              imgNumber: '1-3',
              materialName: '側壁',
              no: '0101',
              type: '叩き落とし',
              rank: 'c',
              time: '2019/1/18',
              memo: '側壁のうきに対して叩き落としを実施。0.2ｍ×0.2ｍ、D=0.2ｍ。A',
            },
            {
              imgfile: '../../assets/img/dmg/tnli6view4.jpg',
              imgNumber: '1-4',
              materialName: '頂版',
              no: '0101',
              type: 'うき',
              rank: 'e',
              time: '2019/1/18',
              memo: '頂版にうき。1.8ｍ×0.2ｍ。C1',
            },]
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