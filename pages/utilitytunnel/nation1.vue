<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-card-text class="text-center text-h6">箇所別記録表(共同溝)</v-card-text>
          <v-sheet class="d-flex">
            <div>
              <v-sheet>【様式-国1】</v-sheet>
            </div>
            <v-sheet class="ml-auto">
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <tbody>
                  <tr>
                    <th class="border text-center">地建・都道府県名</th>
                    <td class="border text-center">{{ facilityInfo.prifecture }}</td>
                  </tr>
                  <tr>
                    <th class="border text-center">管理機関名</th>
                    <td class="border text-center">{{ facilityInfo.adminOffice }}</td>
                  </tr>
                  <tr>
                    <th class="border text-center">管理機関コード</th>
                    <td class="border text-cneter">{{ facilityInfo.adminOfficeId }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-sheet>
          </v-sheet>
          <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
            <thead>
              <tr>
                <th class="border text-center" colspan="2">施設管理番号</th>
                <td class="border">{{ facilityInfo.adminId }}</td>
                <th class="border text-center">点検対象項目</th>
                <td class="border" colspan="2">{{ facilityInfo.facilityName }}</td>
                <th class="border text-center">路線名</th>
                <td class="border" colspan="2">{{ facilityInfo.route }}</td>
                <th class="border text-center">距離標(自)</th>
                <td class="border">{{ facilityInfo.waypointFrom }}</td>
                <th class="border text-center">距離標(至)</th>
                <td class="border" colspan="2">{{ facilityInfo.waypointTo }}</td>
                <td class="border">{{ facilityInfo.lanrType }}</td>
                <td class="border text-center" colspan="2">延長 {{ facilityInfo.length }} m</td>
              </tr>
              <tr>
                <th class="border text-center">事業区分</th>
                <td class="border">{{ facilityInfo.projectType }}</td>
                <th class="border text-center">道路種別</th>
                <td class="border">{{ facilityInfo.routeType }}</td>
                <th class="border text-center">現道・旧道区分</th>
                <td class="border">{{ facilityInfo.newOld }}</td>
                <th class="border text-center">所在地</th>
                <td class="border" colspan="2">{{ facilityInfo.location }}</td>
                <th class="border text-center">位置目印</th>
                <td class="border">{{ facilityInfo.locationMark }}</td>
                <th class="border text-center">北緯</th>
                <td class="border" colspan="2">{{ facilityInfo.lat }}</td>
                <th class="border text-center">東経</th>
                <td class="border" colspan="2">{{ facilityInfo.lng }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2">事前通行規制区分</th>
                <td class="border">{{ facilityInfo.control }}</td>
                <th class="border text-center">規制基準</th>
                <td class="border">連続 {{ facilityInfo.controlStandard }}mm</td>
                <td class="border">時間 {{ facilityInfo.controlStandardHore }}mm</td>
                <th class="border text-center">交通量</th>
                <th class="border text-center">平日</th>
                <td class="border">{{ facilityInfo.weekdayVolume }}台/12h</td>
                <th class="border text-center">休日</th>
                <td class="border">{{ facilityInfo.holidayVolume }}台/12h</td>
                <th class="border text-center">DID区間</th>
                <td class="border">{{ facilityInfo.did }}</td>
                <th class="border text-center">バス路線</th>
                <td class="border">{{ facilityInfo.bus }}</td>
                <th class="border text-center">迂回路</th>
                <td class="border">{{ facilityInfo.alternative }}</td>
              </tr>
            </thead>
          </v-table>
          <v-row no-gutters>
            <v-col class="border" cols="6">
              <v-card>
                <v-card-text>現状写真・スケッチ(既設対策工、位置目印との位置関係が分かるもの)</v-card-text>
                <v-card-text>(ファイル名:{{ cuttentImg.fileName }})</v-card-text>
                <v-container>
                  <v-img :src="cuttentImg.img" />
                </v-container>
              </v-card>
            </v-col>
            <v-col class="border" cols="6">
              <v-card>
                <v-card-text>位置図</v-card-text>
                <v-card-text>(ファイル名:{{ locationMap.fileName }})</v-card-text>
                <v-container>
                  <v-img :src="locationMap.img" />
                </v-container>
              </v-card>
            </v-col>
            <v-col class="border" cols="6">
              <v-table density="compact">
                <tbody>
                  <tr>
                    <th>特記事項</th>
                    <td colspan="2">{{ remarksInfo.remarks }}</td>
                  </tr>
                  <tr>
                    <th>点検実施</th>
                    <td>{{ remarksInfo.inspeDate }}</td>
                    <td>(天候:{{ remarksInfo.wether }})</td>
                  </tr>
                  <tr>
                    <th>調査方法</th>
                    <td colspan="2">{{ remarksInfo.inspeType }}</td>
                  </tr>
                  <tr>
                    <th>所見:(評価理由)</th>
                    <td colspan="2">{{ remarksInfo.note }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col class="border" cols="6">
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <tbody>
                  <tr>
                    <th class="border text-center">罹災履歴</th>
                    <td class="border">{{ disasterInfo.history }}</td>
                  </tr>
                  <tr>
                    <th class="border text-center">重複点検対策項目</th>
                    <td class="border">{{ disasterInfo.inspelist }}</td>
                  </tr>
                  <tr>
                    <th class="border text-center">有・無</th>
                    <td class="border">{{ disasterInfo.presence }}</td>
                  </tr>
                  <tr>
                    <th class="border text-center">平成　年度点検結果</th>
                    <td class="border">{{ disasterInfo.insResult1 }}</td>
                  </tr>
                  <tr>
                    <th class="border text-center">平成　年度点検結果</th>
                    <td class="border">{{ disasterInfo.insResult2 }}</td>
                  </tr>
                  <tr>
                    <th class="border text-center">干想災害地域</th>
                    <td class="border">{{ disasterInfo.area }}</td>
                  </tr>
                  <tr>
                    <th class="border text-center">捜索対策工</th>
                    <td class="border">{{ disasterInfo.search }}</td>
                  </tr>
                  <tr>
                    <td class="border" colspan="2">地震時の安定性(拓積・崩壊のみ)：安定・不安定</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
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
        prifecture: '東京都',
        adminOffice: '東京都西多摩建設事務所',
        adminOfficeId: 1322840,
        adminId: 'H033M0010-00',
        facilityName: '共同溝',
        route: '主要地方道33号',
        waypointFrom: 27.290,
        waypointTo: 17.490,
        lanrType: '下',
        length: 199.90,
        projectType: '一般',
        routeType: '主要地方道',
        newOld: '現道',
        location: 'あきる野市戸倉',
        locationMark: null,
        lat: '35°43’42.8',
        lng: '139°11’32.0',
        control: '有(通行)',
        controlStandard: 140,
        controlStandardHore: null,
        weekdayVolume: 10885,
        holidayVolume: 10318,
        did: '非該当',
        bus: '該当',
        alternative: '無',
      },
      cuttentImg: {
        fileName: null,
        img: null,
      },
      locationMap: {
        fileName: null,
        img: '../../assets/img/utilitytunnel/n1-location.jpg'
      },
      remarksInfo: {
        remarks: null,
        inspeDate: 'H26年11月7日',
        wether: '曇',
        inspeType: '目視調査',
        note: null
      },
      disasterInfo: {
        history: '有(1.被災履歴記録表参照、2.詳細不明：　　　　　　　　　　　）・無(H８年度以降）',
        inspelist: '対応施設管理番号：',
        presence: '落石・崩壊・岩石崩壊・雪崩・土石流・盛土・擁壁・橋梁・地吹雪・その他',
        insResult1: '評点（　　　点） 対応: （完了・施工中・未着手）',
        insResult2: '評点（　　　点）   総合評価：',
        area: null,
        search: '工種：　　　　　規格：　　　　　　数量：　　　　　概算工費：　　　　百万円',
      },
    }
  }
})
</script>