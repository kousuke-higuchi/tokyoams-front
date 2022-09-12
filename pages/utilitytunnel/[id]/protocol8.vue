<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details select-tab="protocol" />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-protocol8></roadfacility-protocol8>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      /*TODO:BEで取得したデータを保持
      <roardfacility-protocol8>に値を渡す*/

      //サンプルデータ
      /*facilityInfo: {
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
      }*/
    }
  }
})
</script>
