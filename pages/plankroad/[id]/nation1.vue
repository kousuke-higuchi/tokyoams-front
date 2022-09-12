<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <plankroad-side-card-details select-tab="nation" />
      </v-col>
      <v-col md="9" cols="12">
        <roadfacility-nation1and2 :form-info="nation1Info"></roadfacility-nation1and2>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { RfaNation1And2 } from '~~/types'
export default defineComponent({
  data() {
    return {
      nation1Info: {
        facilityType:'擁壁',
        nationStyle: '【様式-国1】'
      } as RfaNation1And2,
      /*TODO:BEで取得したデータを保持
      <roadfacility-nation1and2>に値を渡す
      以下サンプルデータ*/
      // facilityInfo: {
      //   prifecture: '東京都',
      //   adminOffice: '東京都西多摩建設事務所',
      //   adminOfficeId: 1322840,
      //   adminId: 'H033M0010-00',
      //   facilityName: '共同溝',
      //   route: '主要地方道33号',
      //   waypointFrom: 27.290,
      //   waypointTo: 17.490,
      //   lanrType: '下',
      //   length: 199.90,
      //   projectType: '一般',
      //   routeType: '主要地方道',
      //   newOld: '現道',
      //   location: 'あきる野市戸倉',
      //   locationMark: null,
      //   lat: '35°43’42.8',
      //   lng: '139°11’32.0',
      //   control: '有(通行)',
      //   controlStandard: 140,
      //   controlStandardHore: null,
      //   weekdayVolume: 10885,
      //   holidayVolume: 10318,
      //   did: '非該当',
      //   bus: '該当',
      //   alternative: '無',
      // },
      // cuttentImg: {
      //   fileName: null,
      //   img: null,
      // },
      // locationMap: {
      //   fileName: null,
      //   img: '../../assets/img/utilitytunnel/n1-location.jpg'
      // },
      // remarksInfo: {
      //   remarks: null,
      //   inspeDate: 'H26年11月7日',
      //   wether: '曇',
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