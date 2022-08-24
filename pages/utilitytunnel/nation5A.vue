<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-card-text class="text-center text-h6">防災カルテ様式A</v-card-text>
          <v-sheet class="d-flex">
            <div>
              <v-sheet>【様式-国5】</v-sheet>
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
          <div class="border">
            <v-row>
              <v-col cols="9">
                <v-sheet>【点検地点位置図】※スケッチと位置を明記する</v-sheet>
                <v-img :src="engineerInspe.img" />
              </v-col>
              <v-col cols="3">
                <v-table>
                  <thead>
                    <tr>
                      <th class="border text-center" colspan="2" nowrap>専門技術者による点検</th>
                    </tr>
                    <tr>
                      <th class="border text-center" nowrap>着目すべき変状</th>
                      <th class="border text-center" nowrap>点検内容の要点</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border">{{ engineerInspe.accident }}</td>
                      <td class="border">{{ engineerInspe.point }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
          </div>
          <div class="border" :style="{ whiteSpace: 'nowrap' }">
            <v-row>
              <v-col cols="9">
                <v-sheet>[専門技術者のコメント]</v-sheet>
                <v-sheet>{{ engineerComments.comment }}</v-sheet>
              </v-col>
              <v-col cols="3">
                <v-container>
                  <v-table :style="{ whiteSpace: 'nowrap' }">
                    <tbody>
                      <tr>
                        <th class="border">1</th>
                        <td class="border">対策工が必要</td>
                      </tr>
                      <tr>
                        <th class="border">2</th>
                        <td class="border">カルテ対応</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-sheet class="overflow-x-auto">1、2のどちらか対応するものに〇印</v-sheet>
                </v-container>
              </v-col>
            </v-row>
          </div>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="border text-center" nowrap>着目すべき変状</th>
                <th class="border text-center" nowrap>点検の時期</th>
                <th class="border text-center" nowrap>想定される災害形態</th>
                <th class="border text-center" nowrap>変状が出た時の対応</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border"></td>
                <td class="border"></td>
                <td class="border"></td>
                <td class="border"></td>
              </tr>
            </tbody>
          </v-table>
          <div class="d-flex">
            <v-card-text class="border pa-1">作成年月日</v-card-text>
            <v-card-text class="border pa-1">{{ sheetInfo.createDate }} (天候:{{ sheetInfo.wether }})</v-card-text>
            <v-card-text class="border pa-1">専門技術者</v-card-text>
            <v-card-text class="border pa-1">{{ sheetInfo.engineer }}</v-card-text>
            <v-card-text class="border pa-1">会社名</v-card-text>
            <v-card-text class="border pa-1">{{ sheetInfo.company }}</v-card-text>
            <v-card-text class="border pa-1">連絡先　{{ sheetInfo.contact }}</v-card-text>
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
        prifecture: null,
        adminOffice: null,
        adminOfficeId: null,
        adminId: null,
        facilityName: null,
        route: null,
        waypointFrom: null,
        waypointTo: null,
        lanrType: null,
        length: null,
        projectType: null,
        routeType: null,
        newOld: null,
        location: null,
        locationMark: null,
        lat: null,
        lng: null,
        control: null,
        controlStandard: null,
        controlStandardHore: null,
        weekdayVolume: null,
        holidayVolume: null,
        did: null,
        bus: null,
        alternative: null,
      },
      engineerInspe: {
        accident: null,
        point: null,
        img: null,
      },
      engineerComments: {
        comment: null,
        result: null,
      },
      sheetInfo: {
        createDate: ' 年　月　日',
        wether: '晴れ',
        engineer: null,
        company: null,
        contact: null,
      }
    }
  }
})
</script>
