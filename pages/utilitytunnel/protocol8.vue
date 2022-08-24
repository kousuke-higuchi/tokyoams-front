<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-card-text class="text-center text-h6">点検結果総括表</v-card-text>
          <v-sheet class="d-flex">
            <div>
              <v-sheet>【様式-8】</v-sheet>
              <v-sheet>道路管理者({{ facilityInfo.office }})</v-sheet>
            </div>
            <v-sheet class="ml-auto">
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <tbody>
                  <tr>
                    <th class="border text-center" rowspan="2">点検年月</th>
                    <th class="border text-center">前回</th>
                    <td class="border text-center">{{ facilityInfo.oldInspectionDate }}</td>
                  </tr>
                  <tr>
                    <th class="border text-center">今回</th>
                    <td class="border text-center">{{ facilityInfo.newInspectionDate }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-sheet>
          </v-sheet>
          <div class="d-flex">
            <v-card-text class="border pa-1">管理番号</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.adminId }}</v-card-text>
            <v-card-text class="border pa-1">路線番号</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.route }}</v-card-text>
            <v-card-text class="border pa-1">施設名</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.facilityName }}</v-card-text>
            <v-card-text class="border pa-1">所在地</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.location }}</v-card-text>
            <v-card-text class="border pa-1">延長</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.length }}m</v-card-text>
          </div>
          <v-table density="compact">
            <thead :style="{ whiteSpace: 'nowrap' }">
              <tr>
                <th class="border text-center">ブロックNO</th>
                <th class="border text-center">前回転換結果概要</th>
                <th class="border text-center">健全度ランク</th>
                <th class="border text-center">今回点検結果概要</th>
                <th class="border text-center">健全度ランク</th>
                <th class="border text-center">総合判定</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in inspectionDeteils" :key="item.blockNo">
                <td class="border text-center">{{ item.blockNo }}</td>
                <td class="border">{{ item.oldIns }}</td>
                <td class="border text-center">{{ item.oldRank }}</td>
                <td class="border">{{ item.newIns }}</td>
                <td class="border text-center">{{ item.newRank }}</td>
                <td class="border">{{ item.judge }}</td>
              </tr>
            </tbody>
          </v-table>
          <div class="border">
            <v-sheet class="d-flex">
              <v-sheet>(位置図)</v-sheet>
              <v-sheet class="ml-auto">
                <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                  <tbody>
                    <tr>
                      <th class="border text-center">詳細点検</th>
                      <td class="border text-center">{{ locationMap.inspection }}</td>
                    </tr>
                    <tr>
                      <th class="border text-center">路線特性評価</th>
                      <td class="border text-center">{{ locationMap.routeJudge }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-sheet>
            </v-sheet>
            <v-container>
              <v-img :src="locationMap.img" />
            </v-container>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      //TODO:DBのテーブル、カラムが判明次第、それに合わせて改修する
      facilityInfo: {
        office: '東京都西多摩建設事務所',
        oldInspectionDate: 'H23年3月15日',
        newInspectionDate: 'H26年11月7日',
        adminId: 'H033M0010-00',
        route: '主要地方道33号',
        facilityName: '共同溝',
        location: 'あきる野市戸倉841-1335-4',
        length: 199.90,
      },
      inspectionDeteils: [
        {
          blockNo: 1,
          oldIns: '基礎周囲部の陥没が数箇所発生しており、一部で進行がみられる。起点側擁壁のひびわれは55→72mmに増加している。遊離石灰に目立つ進行はみられない。',
          oldRank: 2,
          newIns: '深礎杭周辺の土砂流出が目立つ。起点側の擁壁に目地沿いのひびわれ進行。起点側の擁壁に目地沿いのひびわれによりランク1',
          newRank: 1,
          judge: '桟道基礎の深礎杭全体に土砂流出が認められる。起点側目地沿いのひびわれは進行しており72mm→80mmを確認した。起点側ひびわれは早急な対策が必要と考えられる。また、上部路面からの排水設備の不備から土砂流出が懸念されるため合わせて対策が必要と考えられる。',
        }
      ],
      locationMap: {
        inspection: '要',
        routeJudge: null,
        img: '../../assets/img/utilitytunnel/inspectionMap.jpg'
      }
    }
  }
})
</script>
