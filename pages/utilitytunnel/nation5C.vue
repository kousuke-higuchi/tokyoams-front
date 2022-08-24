<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-card-text class="text-center text-h6">防災カルテ様式C</v-card-text>
          <v-sheet class="d-flex">
            <v-card-text class="border pa-1">管理施設番号</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.adminId }}</v-card-text>
            <v-card-text class="border pa-1">点検対象項目</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.facilityName }}</v-card-text>
            <v-card-text class="border pa-1">路線名</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.routeName }}</v-card-text>
            <v-card-text class="border pa-1">距離標(自)</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.waypointFrom }}</v-card-text>
            <v-card-text class="border pa-1">(至)</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.waypointTo }}</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.upOrDown }}</v-card-text>
            <v-card-text class="border pa-1">延長 {{ facilityInfo.lengthM }}m</v-card-text>
          </v-sheet>
          <v-table density="compact">
            <tbody>
              <tr>
                <th class="border text-center" colspan="2" nowrap>点検月日</th>
                <th v-for="(inspectionDate, i) in inspections" :key="i" class="border text-center" nowrap>{{
                    inspectionDate.inspeDate
                }}</th>
              </tr>
              <!-- FIXME:データ数に対して柔軟性のないループ。 -->
              <!-- ここから -->
              <tr>
                <th class="border text-center" colspan="2">4床板ズレ</th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[0].note }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2">前回との差異</th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[0].difference }}
                </td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2"></th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[1].note }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2">前回との差異</th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[1].difference }}
                </td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2"></th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[2].note }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2">前回との差異</th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[2].difference }}
                </td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2"></th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[3].note }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2">前回との差異</th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[3].difference }}
                </td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2"></th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[4].note }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2">前回との差異</th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[4].difference }}
                </td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2"></th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[5].note }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2">前回との差異</th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[5].difference }}
                </td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2"></th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[6].note }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2">前回との差異</th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[6].difference }}
                </td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2"></th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[7].note }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2">前回との差異</th>
                <td v-for="(content, i) in inspections" :key="i" class="border">{{ content.Contents[7].difference }}
                </td>
              </tr>
              <!-- ここまで -->
              <tr>
                <th class="border text-center" rowspan="2" colspan="2">
                  点検時の特記事項<br />
                  (点検時の対応)
                </th>
                <td v-for="item in inspections" :key="item.wether" class="border">
                  天候:{{ item.wether }}
                </td>
              </tr>
              <tr>
                <td v-for="item in inspections" :key="item.comment" class="border">{{ item.comment }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2">点検者名</th>
                <td v-for="item in inspections" :key="item.inspector" class="border text-center">{{ item.inspector }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2">
                  点検後の対応<br />
                  (専門技術者の判定)
                </th>
                <td v-for="item in inspections" :key="item.judgement" class="border text-center">{{ item.judgement }}</td>
              </tr>
              <tr>
                <th class="border text-center">点検月日</th>
                <th class="border text-center">専門技術者名</th>
                <td v-for="(item, i) in inspections" :key="i" class="pa-0">
                  <v-sheet class="d-flex">
                    <v-card-text class="border">{{ item.judgeDate }}</v-card-text>
                    <v-card-text class="border">{{ item.engineer }}</v-card-text>
                  </v-sheet>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      //TODO:DBのテーブル,カラム判明次第、それに合わせた形に改修する
      facilityInfo: {
        adminId: null,
        facilityName: null,
        routeName: null,
        waypointFrom: null,
        waypointTo: null,
        upOrDown: null,
        lengthM: null,
      },
      inspections: [
        {
          inspeDate: ' 年 月　日',
          Contents: [
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
          ],
          wether: '晴',
          comment: null,
          inspector: '辻 源太郎',
          judgement: null,
          judgeDate: null,
          engineer: null,
        },
        {
          inspeDate: ' 年 月 日',
          Contents: [
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
          ],
          wether: null,
          inspector: null,
          comment: null,
          judgement: null,
          judgeDate: null,
          engineer: null,
        },
        {
          inspeDate: ' 年 月　日',
          Contents: [
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
          ],
          wether: null,
          inspector: null,
          comment: null,
          judgement: null,
          judgeDate: null,
          engineer: null,
        },
        {
          inspeDate: ' 年 月　日',
          Contents: [
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
          ],
          wether: null,
          inspector: null,
          comment: null,
          judgement: null,
          judgeDate: null,
          engineer: null,
        },
        {
          inspeDate: ' 年 月　日',
          Contents: [
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
          ],
          wether: null,
          inspector: null,
          comment: null,
          judgement: null,
          judgeDate: null,
          engineer: null,
        },
        {
          inspeDate: ' 年 月　日',
          Contents: [
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
          ],
          wether: null,
          inspector: null,
          comment: null,
          judgement: null,
          judgeDate: null,
          engineer: null,
        },
        {
          inspeDate: ' 年 月　日',
          Contents: [
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
            {
              note: null,
              difference: null,
            },
          ],
          wether: null,
          inspector: null,
          comment: null,
          judgement: null,
          judgeDate: null,
          engineer: null,
        },
      ]
    }
  },
})
</script>