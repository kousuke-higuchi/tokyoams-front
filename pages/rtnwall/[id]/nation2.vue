<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rtnwall-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-nation1and2 :form-info="nation2Info"></roadfacility-nation1and2>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { rfaNation1And2 } from '~~/types';
export default defineComponent({
  data() {
    return {
      nation2Info: {
        facilityType:'盛土',
        nationStyle: '【様式-国2】'
      } as rfaNation1And2
      /*TODO:BEで取得したデータを保持
      <roadfacility-nation1and2>に値を渡す
      以下サンプルデータ*/
      // facilityInfo: {
      //   prifecture: null,
      //   adminOffice: null,
      //   adminOfficeId: null,
      //   adminId: null,
      //   facilityName: null,
      //   route: null,
      //   waypointFrom: null,
      //   waypointTo: null,
      //   lanrType: '上・下・他',
      //   length: null,
      //   projectType: '一般・有料',
      //   routeType: '主要地方道',
      //   newOld: null,
      //   location: null,
      //   locationMark: null,
      //   lat: null,
      //   lng: null,
      //   control: '有(通行・特殊)・無',
      //   controlStandard: null,
      //   controlStandardHore: null,
      //   weekdayVolume: null,
      //   holidayVolume: null,
      //   did: '該当・非該当',
      //   bus: '該当・非該当',
      //   alternative: '有・無',
      // },
      // cuttentImg: {
      //   fileName: null,
      //   img: null,
      // },
      // locationMap: {
      //   fileName: null,
      //   img: null,
      // },
      // remarksInfo: {
      //   remarks: null,
      //   inspeDate: 'H 年 月 日',
      //   wether: ' ',
      //   inspeType: '目視調査',
      //   note: null
      // },
      // disasterInfo: {
      //   history: '有(1.被災履歴記録表参照、2.詳細不明：　　　　　　　　　　　）・無(H８年度以降）',
      //   inspelist: '対応施設管理番号：',
      //   presence: '落石・崩壊・岩石崩壊・雪崩・土石流・盛土・擁壁・橋梁・地吹雪・その他',
      //   insResult1: '評点（　　　点） 対応: （完了・施工中・未着手）',
      //   insResult2: '評点（　　　点）   総合評価：',
      //   area: null,
      //   search: '工種：　　　　　規格：　　　　　　数量：　　　　　概算工費：　　　　百万円',
      // },
    }
  }
})
</script>