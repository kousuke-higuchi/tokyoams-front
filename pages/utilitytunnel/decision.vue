<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-sheet class="d-flex">
            <v-card-text class="border text-center text-h6">共同溝健全度判定表</v-card-text>
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
                <th class="border text-center" rowspan="3">要因</th>
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
              <!--(1)駆体状況-->
              <tr v-for="( item, i ) in runnerUp.subdivision" :key="i">
                <th v-if="i === 0" class="border text-center" rowspan="16">{{ runnerUp.factor }}</th>
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
                <th class="border text-center" colspan="2">(A)</th>
                <td class="border text-center" colspan="5">{{ runnerUp.maxScore }}</td>
                <td class="border" colspan="3">{{ runnerUp.remarks }}</td>
              </tr>
              <!--(2)周辺状況-->
              <tr v-for="(item, i) in around.subdivision" :key="i">
                <th v-if="i === 0" class="border text-center" rowspan="6">{{ around.factor }}</th>
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
                <th class="border text-center" colspan="2">(B)</th>
                <td class="border text-center" colspan="5">{{ around.maxScore }}</td>
                <td class="border" colspan="3">{{ around.remarks }}</td>
              </tr>
              <!--(3)排水状況-->
              <tr v-for="(item, i) in drainage.subdivision" :key="i">
                <th v-if="i === 0" class="border text-center" rowspan="6">{{ drainage.factor }}</th>
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
                <th class="border text-center" colspan="2">(C)</th>
                <td class="border text-center" colspan="5">{{ drainage.maxScore }}</td>
                <td class="border" colspan="3">{{ drainage.remarks }}</td>
              </tr>
              <!--(4)立地状況-->
              <tr v-for="(item, i) in location.subdivision" :key="i">
                <th v-if="i === 0" class="border text-center" rowspan="3">{{ location.factor }}</th>
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
                <th class="border text-center" colspan="2">(D)</th>
                <td class="border text-center" colspan="5">{{ location.maxScore }}</td>
                <td class="border" colspan="3">{{ location.remarks }}</td>
              </tr>
              <!--判定-->
              <tr>
                <th class="border text-center" rowspan="6">判定</th>
                <th class="border text-center" rowspan="2" colspan="2">(A),(B),(C),(D)の最大値を記入</th>
                <td class="border text-center" rowspan="2" colspan="5">{{ judge.maxScore }} / 50</td>
                <th class="border text-center" rowspan="4">擁壁種別</th>
                <td class="border text-center">
                  <v-sheet v-if="judge.facilityType.type1">〇</v-sheet>
                </td>
                <td class="border">コンクリート擁壁</td>
              </tr>
              <tr>
                <td class="border text-center">
                  <v-sheet v-if="judge.facilityType.type2">〇</v-sheet>
                </td>
                <td class="border">石積み(錬積み)</td>
              </tr>
              <tr>
                <th class="border text-center" rowspan="2" colspan="2">判定区分(*)</th>
                <td class="border" rowspan="2" colspan="5">
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
                <td class="border text-center">
                  <v-sheet v-if="judge.facilityType.type3">〇</v-sheet>
                </td>
                <td class="border">石積み(空石積み)</td>
              </tr>
              <tr>
                <td class="border text-center">
                  <v-sheet v-if="judge.facilityType.type3">〇</v-sheet>
                </td>
                <td class="border">その他</td>
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
                  <v-sheet>
                    * 判定区分<br />
                    ランク1（対応の検討）・・・40・50点<br />
                    ランク2（注意）・・・30点<br />
                    ランク3（ほぼ健全）・・・20点<br />
                    ランク4（健全）・・・0・5・10・15点
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
      //DBのテーブル、カラムが判明次第、それに合わせた形に改修する
      facilityInfo: {
        facilityName: '札の辻橋',
        facilityId: 'B409G0610',
        creationDate: '平成31年1月28日'
      },
      runnerUp: {
        factor: '(1)駆体状況',
        subdivision: [
          {
            id: 1,
            subdivName: 'ひびわれ',
            rankA: '0',
            rankB: '-',
            rankC: '10',
            rankD: '30',
            rankE: '50',
            remarks: null,
            rank: 'C',
          },
          {
            id: 2,
            subdivName: '有利石灰',
            rankA: '0',
            rankB: '10',
            rankC: '-',
            rankD: '-',
            rankE: '-',
            remarks: null,
            rank: 'B',
          },
          {
            id: 3,
            subdivName: '漏水',
            rankA: '0',
            rankB: '5',
            rankC: '10',
            rankD: '20',
            rankE: '50',
            remarks: null,
            rank: 'B',
          },
          {
            id: 4,
            subdivName: '移動(ずれ)',
            rankA: '0',
            rankB: '-',
            rankC: '30',
            rankD: '-',
            rankE: '50',
            remarks: null,
            rank: 'A',
          },
          {
            id: 5,
            subdivName: '沈下(段差)',
            rankA: '0',
            rankB: '-',
            rankC: '30',
            rankD: '-',
            rankE: '50',
            remarks: null,
            rank: 'A',
          },
          {
            id: 6,
            subdivName: '変形(はらみだし)',
            rankA: '0',
            rankB: '-',
            rankC: '30',
            rankD: '-',
            rankE: '50',
            remarks: null,
            rank: 'A',
          },
          {
            id: 7,
            subdivName: '傾斜',
            rankA: '0',
            rankB: '-',
            rankC: '30',
            rankD: '-',
            rankE: '50',
            remarks: null,
            rank: 'A',
          },
          {
            id: 8,
            subdivName: '浮き、剥離、鉄筋露出',
            rankA: '0',
            rankB: '10',
            rankC: '20',
            rankD: '40',
            rankE: '50',
            remarks: null,
            rank: 'A',
          },
          {
            id: 9,
            subdivName: '補修箇所の変状',
            rankA: '0',
            rankB: '-',
            rankC: '20',
            rankD: '30',
            rankE: '50',
            remarks: null,
            rank: 'A',
          },
          {
            id: 10,
            subdivName: '目地からの背面土砂流出',
            rankA: '0',
            rankB: '-',
            rankC: '30',
            rankD: '-',
            rankE: '50',
            remarks: null,
            rank: 'A',
          },
          {
            id: 11,
            subdivName: '擁壁高',
            rankA: '0',
            rankB: '-',
            rankC: '10',
            rankD: '20',
            rankE: '30',
            remarks: '石積擁壁のみ点検対象',
            rank: 'A',
          },
          {
            id: 12,
            subdivName: '勾配',
            rankA: '0',
            rankB: '-',
            rankC: '15',
            rankD: '-',
            rankE: '30',
            remarks: '石積擁壁のみ点検対象',
            rank: 'A',
          },
          {
            id: 13,
            subdivName: '擁壁設置状況',
            rankA: '0',
            rankB: '-',
            rankC: '-',
            rankD: '30',
            rankE: '-',
            remarks: '石積擁壁のみ点検対象',
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
      around: {
        factor: '(2)周辺状況',
        subdivision: [
          {
            id: 1,
            subdivName: '背面地盤の亀裂',
            rankA: '0',
            rankB: '-',
            rankC: '10',
            rankD: '-',
            rankE: '20',
            remarks: null,
            rank: 'A',
          },
          {
            id: 2,
            subdivName: '背面地盤の陥没・沈下',
            rankA: '0',
            rankB: '-',
            rankC: '15',
            rankD: '-',
            rankE: '30',
            remarks: null,
            rank: 'A',
          },
          {
            id: 3,
            subdivName: '擁壁全面地盤の隆起',
            rankA: '0',
            rankB: '-',
            rankC: '30',
            rankD: '40',
            rankE: '50',
            remarks: null,
            rank: 'A',
          },
          {
            id: 4,
            subdivName: '擁壁に影響を与える樹木の有無',
            rankA: '0',
            rankB: '10',
            rankC: '-',
            rankD: '-',
            rankE: '-',
            remarks: null,
            rank: 'A',
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
        maxScore: 0,
        remarks: '【周辺状況】の最大値を記入'
      },
      drainage: {
        factor: '(3)排水状況',
        subdivision: [
          {
            id: 1,
            subdivName: '排水パイプの土砂詰まり',
            rankA: '0',
            rankB: '-',
            rankC: '-',
            rankD: '10',
            rankE: '-',
            remarks: null,
            rank: 'A',
          },
          {
            id: 2,
            subdivName: '排水パイプからの背面土の流出',
            rankA: '0',
            rankB: '-',
            rankC: '5',
            rankD: '-',
            rankE: '10',
            remarks: null,
            rank: 'A',
          },
          {
            id: 3,
            subdivName: '擁壁背面への雨水の浸透・流入',
            rankA: '0',
            rankB: '-',
            rankC: '10',
            rankD: '30',
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
        maxScore: 0,
        remarks: '【排水状況】の最大値を記入'
      },
      location: {
        factor: '(4)立地状況',
        subdivision: [
          {
            id: 1,
            subdivName: '河川等による洗堀',
            rankA: '0',
            rankB: '-',
            rankC: '30',
            rankD: '-',
            rankE: '50',
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
            rank: 'A',
          },
        ],
        maxScore: 0,
        remarks: '【立地状況】の最大値を記入'
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
      }
    }
  },
})
</script>
