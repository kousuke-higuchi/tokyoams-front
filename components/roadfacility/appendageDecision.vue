<template>
  <v-card class="ledger">
    <!--TODO:{{ null }}の箇所はBEで取得した値を表示する-->
    <v-container>
      <v-sheet class="d-flex tbTitle">
        <v-card-text class=" text-center title">附属物健全度判定表</v-card-text>
        <v-card-text class=" text-center title">施設名</v-card-text>
        <v-card-text class=" text-center">{{ null }}</v-card-text>
      </v-sheet>
      <v-container>
        <v-row justify="end">
          <v-sheet class="text-caption">{{ null }}</v-sheet>
        </v-row>
      </v-container>
      <v-sheet class="d-flex tbTitle">
        <v-sheet class=" ml-auto title">作成年月日</v-sheet>
        <v-sheet>{{ '平成11年11月11日' }}</v-sheet>
      </v-sheet>
      <v-table density="compact">
        <thead>
          <tr>
            <th class=" text-center" rowspan="3">原因</th>
            <th class=" text-center vertical" rowspan="3">区分番号</th>
            <th class=" text-center" rowspan="3">小区分</th>
            <th class=" text-center" colspan="5">配点</th>
            <th class=" text-center" rowspan="3" colspan="3">備考</th>
          </tr>
          <tr>
            <th class=" text-center" colspan="5">損傷ランク</th>
          </tr>
          <tr>
            <th class=" text-center">A</th>
            <th class=" text-center">B</th>
            <th class=" text-center">C</th>
            <th class=" text-center">D</th>
            <th class=" text-center">E</th>
          </tr>
        </thead>
        <tbody>
          <!--附属物状況-->
          <tr v-for="( item, i ) in Attachments.subdivision" :key="i">
            <th v-if="i === 0" class=" text-center" rowspan="16">{{ Attachments.cause }}</th>
            <th class=" text-center">{{ item.id }}</th>
            <th>{{ item.subdivName }}</th>
            <td>
              <v-sheet v-if="item.rank === 'A'" class="rounded-circle text-center bg-red-lighten-4">{{ item.rankA }}
              </v-sheet>
              <v-sheet v-else class="text-center">{{ item.rankA }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'B'" class="rounded-circle text-center bg-red-lighten-4">{{ item.rankB }}
              </v-sheet>
              <v-sheet v-else class="text-center">{{ item.rankB }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'C'" class="rounded-circle text-center bg-red-lighten-4">{{ item.rankC }}
              </v-sheet>
              <v-sheet v-else class="text-center">{{ item.rankC }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'D'" class="rounded-circle text-center bg-red-lighten-4">{{ item.rankD }}
              </v-sheet>
              <v-sheet v-else class="text-center">{{ item.rankD }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'E'" class="rounded-circle text-center bg-red-lighten-4">{{ item.rankE }}
              </v-sheet>
              <v-sheet v-else class="text-center">{{ item.rankE }}</v-sheet>
            </td>
            <td colspan="3">{{ item.remarks }}</td>
          </tr>
          <tr>
            <th class=" text-center" colspan="2"></th>
            <td class=" text-center" colspan="5">{{ null }} / 50</td>
            <td colspan="3">【駆体状況】の最大値を記入</td>
          </tr>
          <!--判定-->
          <tr>
            <th class=" text-center" rowspan="3">判定</th>
            <th class=" text-center" colspan="2">判定区分(*)</th>
            <td colspan="5">
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
            <td colspan="3"></td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="d-flex justify-center">
                <v-sheet class="pa-1">詳細点検の実施</v-sheet>
                <v-sheet class="pa-1" v-if="judge.inspeFlag">要</v-sheet>
                <v-sheet class="pa-1" v-else-if="!judge.inspeFlag">不要</v-sheet>
              </div>
              <v-sheet class="text-center">(ランク1について要・不要と理由を記入)</v-sheet>
            </td>
            <th class=" text-center" colspan="2">理由</th>
            <td colspan="6">{{ null }}</td>
          </tr>
          <tr>
            <th class=" text-center" colspan="2">特記事項</th>
            <td colspan="8">{{ null }}</td>
          </tr>
          <tr>
            <td colspan="11">
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
    </v-container>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  // props:{
  //   TODO:DBのテーブル,カラムが判明次第データを受け取る
  // },
  data() {
    return {
      Attachments: {
        cause: '附属物状況',
        subdivision: [
          //TODO:rankはBEから取得した値を代入する String型
          {
            id: 1,
            subdivName: 'ボルト・アンカーのゆるみ',
            rankA: '0',
            rankB: '-',
            rankC: '-',
            rankD: '20',
            rankE: '40',
            remarks: '※',
            rank: null,
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
            rank: null,
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
            rank: null,
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
            rank: null,
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
            rank: null,
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
            rank: null,
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
        //TODO:maxScoreはBEで取得した値orフロントで求めた値を代入する
        //maxScore: 10,
      },
      judge: {
        //TODO:BEで取得した値をもとに決定する
        //判定区分
        facilityType: {
          type1: false,
          type2: false,
          type3: false,
          type4: false,
        },
        //判定区分
        judgeType: null,
        //詳細点検の実施
        inspeFlag: null,
      },
    }
  }
})
</script>