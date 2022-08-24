<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-sheet class="d-flex">
            <v-card-text class="border text-center text-h6">附属物溝健全度判定表</v-card-text>
            <v-card-text class="border text-center text-h6">施設名</v-card-text>
            <v-card-text class="border text-center text-h6">{{ facilityInfo.facilityName }}</v-card-text>
          </v-sheet>
          <v-container>
            <v-row justify="end">
              <v-sheet>{{ facilityInfo.facilityId }}</v-sheet>
            </v-row>
          </v-container>
          <v-sheet class="d-flex">
            <v-sheet class="border ml-auto">作成年月日</v-sheet>
            <v-sheet class="border">{{ facilityInfo.creationDate }}</v-sheet>
          </v-sheet>
          <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
            <thead>
              <tr>
                <th class="border text-center" rowspan="3">原因</th>
                <th class="border text-center" rowspan="3">区分番号</th>
                <th class="border text-center" rowspan="3">小区分</th>
                <th class="border text-center" colspan="5">配点</th>
                <th class="border text-center" rowspan="3" colspan="3">備考</th>
              </tr>
              <tr>
                <th class="border text-center" colspan="5">損傷ランク</th>
              </tr>
              <tr>
                <th class="border text-center">A</th>
                <th class="border text-center">B</th>
                <th class="border text-center">C</th>
                <th class="border text-center">D</th>
                <th class="border text-center">E</th>
              </tr>
            </thead>
            <tbody>
              <!--附属物状況-->
              <tr v-for="( item, i ) in Attachments.subdivision" :key="i">
                <th v-if="i === 0" class="border text-center" rowspan="16">{{ Attachments.cause }}</th>
                <th class="border text-center">{{ item.id }}</th>
                <th class="border">{{ item.subdivName }}</th>
                <td class="border">
                  <v-sheet v-if="item.rank === 'A'" class="rounded-circle text-center bg-red-lighten-4">{{ item.rankA }}
                  </v-sheet>
                  <v-sheet v-else class="text-center">{{ item.rankA }}</v-sheet>
                </td>
                <td class="border">
                  <v-sheet v-if="item.rank === 'B'" class="rounded-circle text-center bg-red-lighten-4">{{ item.rankB }}
                  </v-sheet>
                  <v-sheet v-else class="text-center">{{ item.rankB }}</v-sheet>
                </td>
                <td class="border">
                  <v-sheet v-if="item.rank === 'C'" class="rounded-circle text-center bg-red-lighten-4">{{ item.rankC }}
                  </v-sheet>
                  <v-sheet v-else class="text-center">{{ item.rankC }}</v-sheet>
                </td>
                <td class="border">
                  <v-sheet v-if="item.rank === 'D'" class="rounded-circle text-center bg-red-lighten-4">{{ item.rankD }}
                  </v-sheet>
                  <v-sheet v-else class="text-center">{{ item.rankD }}</v-sheet>
                </td>
                <td class="border">
                  <v-sheet v-if="item.rank === 'E'" class="rounded-circle text-center bg-red-lighten-4">{{ item.rankE }}
                  </v-sheet>
                  <v-sheet v-else class="text-center">{{ item.rankE }}</v-sheet>
                </td>
                <td class="border" colspan="3">{{ item.remarks }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2"></th>
                <td class="border text-center" colspan="5">{{ Attachments.maxScore }} / 50</td>
                <td class="border" colspan="3">{{ Attachments.remarks }}</td>
              </tr>
              <!--判定-->
              <tr>
                <th class="border text-center" rowspan="3">判定</th>
                <th class="border text-center" colspan="2">判定区分(*)</th>
                <td class="border" colspan="5">
                  <div class="d-flex justify-center">
                    <v-sheet v-if="judge.judgeType === 1" class="rounded-circle text-center bg-red-lighten-4 pa-2">
                      1
                    </v-sheet>
                    <v-sheet v-else class="textcenter pa-2">
                      1
                    </v-sheet>
                    <v-sheet v-if="judge.judgeType === 2" class="rounded-circle text-center bg-red-lighten-4 pa-2">
                      2
                    </v-sheet>
                    <v-sheet v-else class="textcenter pa-2">
                      2
                    </v-sheet>
                    <v-sheet v-if="judge.judgeType === 3" class="rounded-circle text-center bg-red-lighten-4 pa-2">
                      3
                    </v-sheet>
                    <v-sheet v-else class="textcenter pa-2">
                      3
                    </v-sheet>
                    <v-sheet v-if="judge.judgeType === 4" class="rounded-circle text-center bg-red-lighten-4 pa-2">
                      4
                    </v-sheet>
                    <v-sheet v-else class="textcenter pa-2">
                      4
                    </v-sheet>
                  </div>
                </td>
                <td class="border" colspan="3"></td>
              </tr>
              <tr>
                <td class="border" colspan="2">
                  <div class="d-flex justify-center">
                    <v-sheet class="pa-1">詳細点検の実施</v-sheet>
                    <v-sheet class="pa-1" v-if="judge.inspeFlag">要</v-sheet>
                    <v-sheet class="pa-1" v-else>不要</v-sheet>
                  </div>
                  <v-sheet class="text-center">(ランク1について要・不要と理由を記入)</v-sheet>
                </td>
                <th class="border text-center" colspan="2">理由</th>
                <td class="border" colspan="6">{{ judge.reason }}</td>
              </tr>
              <tr>
                <th class="border text-center" colspan="2">特記事項</th>
                <td class="border" colspan="8">{{ judge.note }}</td>
              </tr>
              <tr>
                <td class="border" colspan="11">
                  <div class="d-flex">
                    <v-container>
                      <v-sheet>
                        ※発見した場合は台帳に記載し<br />
                        速やかに対応することとする。
                      </v-sheet>
                    </v-container>
                    <v-container>
                      <v-sheet>
                        * 判定区分<br />
                        ランク1（対応の検討）・・・40・50点<br />
                        ランク2（注意）・・・30点<br />
                        ランク3（ほぼ健全）・・・20点<br />
                        ランク4（健全）・・・0・5・10・15点
                      </v-sheet>
                    </v-container>
                  </div>
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
      //DBのテーブル、カラムが判明次第、それに合わせた形に改修する
      facilityInfo: {
        facilityName: '札の辻橋',
        facilityId: 'B409G0610',
        creationDate: '平成31年1月28日'
      },
      Attachments: {
        cause: '附属物状況',
        subdivision: [
          {
            id: 1,
            subdivName: 'ボルト・アンカーのゆるみ',
            rankA: '0',
            rankB: '-',
            rankC: '-',
            rankD: '20',
            rankE: '40',
            remarks: '※',
            rank: 'A',
          },
          {
            id: 2,
            subdivName: 'ボルト・アンカーの脱落',
            rankA: '0',
            rankB: '-',
            rankC: '-',
            rankD: '30',
            rankE: '50',
            remarks: '※',
            rank: 'A',
          },
          {
            id: 3,
            subdivName: '亀裂',
            rankA: '0',
            rankB: '-',
            rankC: '-',
            rankD: '30',
            rankE: '50',
            remarks: null,
            rank: 'A',
          },
          {
            id: 4,
            subdivName: '破断',
            rankA: '0',
            rankB: '-',
            rankC: '-',
            rankD: '-',
            rankE: '50',
            remarks: null,
            rank: 'A',
          },
          {
            id: 5,
            subdivName: '鋼材塗装の劣化',
            rankA: '0',
            rankB: '-',
            rankC: '-',
            rankD: '20',
            rankE: '30',
            remarks: null,
            rank: 'A',
          },
          {
            id: 6,
            subdivName: '腐食',
            rankA: '0',
            rankB: '-',
            rankC: '-',
            rankD: '30',
            rankE: '50',
            remarks: null,
            rank: 'A',
          },
          {
            id: 7,
            subdivName: '本体の剥離・落下',
            rankA: '0',
            rankB: '-',
            rankC: '20',
            rankD: '40',
            rankE: '50',
            remarks: null,
            rank: 'A',
          },
          {
            id: null,
            subdivName: null,
            rankA: null,
            rankB: null,
            rankC: null,
            rankD: null,
            rankE: null,
            remarks: null,
            rank: null,
          },
          {
            id: null,
            subdivName: null,
            rankA: null,
            rankB: null,
            rankC: null,
            rankD: null,
            rankE: null,
            remarks: null,
            rank: null,
          },
          {
            id: null,
            subdivName: null,
            rankA: null,
            rankB: null,
            rankC: null,
            rankD: null,
            rankE: null,
            remarks: null,
            rank: null,
          },
          {
            id: null,
            subdivName: null,
            rankA: null,
            rankB: null,
            rankC: null,
            rankD: null,
            rankE: null,
            remarks: null,
            rank: null,
          },
          {
            id: null,
            subdivName: null,
            rankA: null,
            rankB: null,
            rankC: null,
            rankD: null,
            rankE: null,
            remarks: null,
            rank: null,
          },
          {
            id: null,
            subdivName: null,
            rankA: null,
            rankB: null,
            rankC: null,
            rankD: null,
            rankE: null,
            remarks: null,
            rank: null,
          },
          {
            id: null,
            subdivName: null,
            rankA: null,
            rankB: null,
            rankC: null,
            rankD: null,
            rankE: null,
            remarks: null,
            rank: null,
          },
          {
            id: null,
            subdivName: '該当なし',
            rankA: '0',
            rankB: '-',
            rankC: '-',
            rankD: '-',
            rankE: '-',
            remarks: null,
            rank: null,
          },
        ],
        maxScore: 10,
        remarks: '【駆体状況】の最大値を記入'
      },
      judge: {
        maxScore: 10,
        facilityType: {
          type1: true,
          type2: false,
          type3: false,
          type4: false,
        },
        judgeType: 4,
        inspeFlag: null,
        reason: null,
        note: null,
      },
    }
  }
})
</script>
