<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-sheet class="d-flex">
            <v-sheet class="text-h5 pa-1">道路施設詳細</v-sheet>
            <v-sheet class="text-h6 pa-1">施設名:</v-sheet>
            <v-sheet class="text-h6 pa-1">{{ facilityInfo.facilityName }}</v-sheet>
            <v-sheet class="text-h6 pa-1">管理事務所:</v-sheet>
            <v-sheet class="text-h6 pa-1">{{ facilityInfo.office }}</v-sheet>
            <v-sheet class="text-h6 pa-1">管理工区:</v-sheet>
            <v-sheet class="text-h6 pa-1">{{ facilityInfo.area }}</v-sheet>
          </v-sheet>
          <div class="d-flex">
            <v-sheet class="pa-1 ma-1">ブロック番号</v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="numbers" item-title="page" variant="outlined" density="compact"
                hide-details></v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item v-for="item in facilityItems" :key="item.blockId" :value="item.blockId">
              <v-card>
                <v-row no-gutters>
                  <v-col v-for="img in item.Imgs" :key="img.imgNo" md="6" cols="12">
                    <v-table density="compact" height="128">
                      <tbody>
                        <tr>
                          <th class="border" nowrap>地点標</th>
                          <td class="border">{{ img.waypoint }}</td>
                          <th class="border" nowrap>写真番号</th>
                          <td class="border">{{ img.imgNo }}</td>
                        </tr>
                        <tr>
                          <th class="border" nowrap>部材名</th>
                          <td class="border">{{ img.partName }}</td>
                          <th class="border" nowrap>損傷の種類</th>
                          <td class="border">{{ img.damageType }}</td>
                        </tr>
                        <tr>
                          <th class="border" nowrap>状況</th>
                          <td class="border" colspan="3">{{ img.situation }}</td>
                        </tr>
                        <tr>
                          <th class="border" nowrap>備考</th>
                          <td class="border" colspan="3">{{ img.remarks }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                    <v-container class="border">
                      <v-img :src="img.imgFile" />
                    </v-container>
                  </v-col>
                </v-row>
              </v-card>
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
      //TODO:DBのテーブル、カラムが判明次第、それに合わせて改修する
      facilityInfo: {
        facilityName: '共同溝',
        office: '西多摩建設事務所',
        area: '青梅工区'
      },
      facilityItems: [
        {
          blockId: 1,
          Imgs: [
            {
              waypoint: null,
              imgNo: 1,
              partName: '側壁',
              damageType: 'ひびわれ',
              situation: '目地沿いのひび割れ8cm,ずれ1.5cm判定区分E',
              remarks: null,
              imgFile: '../../assets/img/utilitytunnel/s9-damageImg1-1.jpg',
            },
            {
              waypoint: null,
              imgNo: 2,
              partName: '側壁',
              damageType: 'ひびわれ',
              situation: '写真１の近景。幅72→80mmに拡大している。判定区分E',
              remarks: null,
              imgFile: '../../assets/img/utilitytunnel/s9-damageImg1-2.jpg',
            },
            {
              waypoint: null,
              imgNo: 3,
              partName: 'その他',
              damageType: '基礎基盤の洗堀',
              situation: '深礎杭周辺の土砂流出　判定区分E',
              remarks: null,
              imgFile: '../../assets/img/utilitytunnel/s9-damageImg1-3.jpg',
            },
            {
              waypoint: null,
              imgNo: 4,
              partName: 'その他',
              damageType: '基礎基盤の洗堀',
              situation: '浸食が進行し側溝の一部が落下している　判定区分E',
              remarks: null,
              imgFile: '../../assets/img/utilitytunnel/s9-damageImg2-1.jpg',
            },
          ],
        },
        {
          blockId: 2,
          Imgs: [
            {
              waypoint: null,
              imgNo: 5,
              partName: 'その他',
              damageType: 'その他',
              situation: '深礎杭周辺の土砂流出　判定区分E',
              remarks: null,
              imgFile: '../../assets/img/utilitytunnel/s9-damageImg2-2.jpg',
            },
          ],
        },
        {
          blockId: 3,
          Imgs: [
            {
              waypoint: null,
              imgNo: null,
              partName: null,
              damageType: null,
              situation: null,
              remarks: null,
              imgFile: null,
            },
          ],
        },
      ],
    }
  },
})
</script>