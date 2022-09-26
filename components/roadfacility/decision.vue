<template>
  <v-card class="rfaTable">
    <!--{{ null}}の箇所についてはDBのテーブル,カラムが判明次第BEで取得した値を表示する-->
    <v-container>
      <v-sheet class="d-flex tbTitle">
        <v-card-text  class="title text-center">{{title}}健全度判定表</v-card-text>
        <v-card-text class="title text-center">施設名</v-card-text>
        <v-card-text class="text-center">{{ null }}</v-card-text>
      </v-sheet>
      <v-container>
        <v-row justify="end">
          <!--管理番号-->
          <v-sheet class="text-caption">{{ null }}</v-sheet>
        </v-row>
      </v-container>
      <v-sheet class="d-flex tbTitle">
        <v-sheet class="ml-auto title">作成年月日</v-sheet>
        <v-sheet class="text-caption">{{ "平成31年11月11日" }}</v-sheet>
      </v-sheet>
      <v-table density="compact" class="text-center">
        <thead>
          <tr>
            <th rowspan="3" class="text-center">要因</th>
            <th rowspan="3" class="text-center vertical">区分番号</th>
            <th rowspan="3" class="text-center">小区分</th>
            <th colspan="5" class="text-center">配点</th>
            <th rowspan="3" colspan="3" class="text-center">備考</th>
          </tr>
          <tr>
            <th colspan="5" class="text-center">損傷ランク</th>
          </tr>
          <tr>
            <th class="text-center">A</th>
            <th class="text-center">B</th>
            <th class="text-center">C</th>
            <th class="text-center">D</th>
            <th class="text-center">E</th>
          </tr>
        </thead>
        <tbody>
          <!--(1)駆体状況-->
          <tr v-for="( item, i ) in runnerUp.subdivision" :key="i">
            <th v-if="i === 0" rowspan="16">{{ runnerUp.factor }}</th>
            <th>{{ item.id }}</th>
            <th>{{ item.subdivName }}</th>
            <td>
              <v-sheet v-if="item.rank === 'A'" class="rounded-circle  bg-red-lighten-4">{{ item.rankA }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankA }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'B'" class="rounded-circle  bg-red-lighten-4">{{ item.rankB }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankB }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'C'" class="rounded-circle  bg-red-lighten-4">{{ item.rankC }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankC }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'D'" class="rounded-circle  bg-red-lighten-4">{{ item.rankD }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankD }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'E'" class="rounded-circle  bg-red-lighten-4">{{ item.rankE }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankE }}</v-sheet>
            </td>
            <td colspan="3">{{ item.remarks }}</td>
          </tr>
          <tr>
            <th colspan="2" class="text-center">(A)</th>
            <td colspan="5">{{ null }}</td>
            <td colspan="3">{{ runnerUp.remarks }}</td>
          </tr>
          <!--(2)周辺状況-->
          <tr v-for="(item, i) in around.subdivision" :key="i">
            <th v-if="i === 0" rowspan="6">{{ around.factor }}</th>
            <th>{{ item.id }}</th>
            <th>{{ item.subdivName }}</th>
            <td>
              <v-sheet v-if="item.rank === 'A'" class="rounded-circle  bg-red-lighten-4">{{ item.rankA }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankA }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'B'" class="rounded-circle  bg-red-lighten-4">{{ item.rankB }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankB }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'C'" class="rounded-circle  bg-red-lighten-4">{{ item.rankC }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankC }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'D'" class="rounded-circle  bg-red-lighten-4">{{ item.rankD }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankD }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'E'" class="rounded-circle  bg-red-lighten-4">{{ item.rankE }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankE }}</v-sheet>
            </td>
            <td colspan="3">{{ item.remarks }}</td>
          </tr>
          <tr>
            <th colspan="2" class="text-center">(B)</th>
            <td colspan="5">{{ null }}</td>
            <td colspan="3">{{ around.remarks }}</td>
          </tr>
          <!--(3)排水状況-->
          <tr v-for="(item, i) in drainage.subdivision" :key="i">
            <th v-if="i === 0" rowspan="6">{{ drainage.factor }}</th>
            <th>{{ item.id }}</th>
            <th>{{ item.subdivName }}</th>
            <td>
              <v-sheet v-if="item.rank === 'A'" class="rounded-circle  bg-red-lighten-4">{{ item.rankA }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankA }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'B'" class="rounded-circle  bg-red-lighten-4">{{ item.rankB }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankB }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'C'" class="rounded-circle  bg-red-lighten-4">{{ item.rankC }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankC }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'D'" class="rounded-circle  bg-red-lighten-4">{{ item.rankD }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankD }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'E'" class="rounded-circle  bg-red-lighten-4">{{ item.rankE }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankE }}</v-sheet>
            </td>
            <td colspan="3">{{ item.remarks }}</td>
          </tr>
          <tr>
            <th colspan="2" class="text-center">(C)</th>
            <td colspan="5">{{ null }}</td>
            <td colspan="3">{{ drainage.remarks }}</td>
          </tr>
          <!--(4)立地状況-->
          <tr v-for="(item, i) in location.subdivision" :key="i">
            <th v-if="i === 0" rowspan="3">{{ location.factor }}</th>
            <th>{{ item.id }}</th>
            <th>{{ item.subdivName }}</th>
            <td>
              <v-sheet v-if="item.rank === 'A'" class="rounded-circle  bg-red-lighten-4">{{ item.rankA }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankA }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'B'" class="rounded-circle  bg-red-lighten-4">{{ item.rankB }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankB }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'C'" class="rounded-circle  bg-red-lighten-4">{{ item.rankC }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankC }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'D'" class="rounded-circle  bg-red-lighten-4">{{ item.rankD }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankD }}</v-sheet>
            </td>
            <td>
              <v-sheet v-if="item.rank === 'E'" class="rounded-circle  bg-red-lighten-4">{{ item.rankE }}
              </v-sheet>
              <v-sheet v-else>{{ item.rankE }}</v-sheet>
            </td>
            <td colspan="3">{{ item.remarks }}</td>
          </tr>
          <tr>
            <th colspan="2" class="text-center">(D)</th>
            <td colspan="5">{{ null }}</td>
            <td colspan="3">{{ location.remarks }}</td>
          </tr>
          <!--判定-->
          <tr>
            <th rowspan="6">判定</th>
            <th rowspan="2" colspan="2" class="text-center">(A),(B),(C),(D)の最大値を記入</th>
            <td rowspan="2" colspan="5">{{ null }} / 50</td>
            <th rowspan="4">擁壁種別</th>
            <td>
              <v-sheet v-if="judge.facilityType.type1">〇</v-sheet>
            </td>
            <td>コンクリート擁壁</td>
          </tr>
          <tr>
            <td>
              <v-sheet v-if="judge.facilityType.type2">〇</v-sheet>
            </td>
            <td>石積み(錬積み)</td>
          </tr>
          <tr>
            <th rowspan="2" colspan="2" class="text-center">判定区分(*)</th>
            <td rowspan="2" colspan="5">
              <div class="d-flex justify-center">
                <v-sheet v-if="judge.judgeType === 1" class="rounded-circle  bg-red-lighten-4 pa-2">
                  1
                </v-sheet>
                <v-sheet v-else class="textcenter pa-2">
                  1
                </v-sheet>
                <v-sheet v-if="judge.judgeType === 2" class="rounded-circle  bg-red-lighten-4 pa-2">
                  2
                </v-sheet>
                <v-sheet v-else class="textcenter pa-2">
                  2
                </v-sheet>
                <v-sheet v-if="judge.judgeType === 3" class="rounded-circle  bg-red-lighten-4 pa-2">
                  3
                </v-sheet>
                <v-sheet v-else class="textcenter pa-2">
                  3
                </v-sheet>
                <v-sheet v-if="judge.judgeType === 4" class="rounded-circle  bg-red-lighten-4 pa-2">
                  4
                </v-sheet>
                <v-sheet v-else class="textcenter pa-2">
                  4
                </v-sheet>
              </div>
            </td>
            <td>
              <v-sheet v-if="judge.facilityType.type3">〇</v-sheet>
            </td>
            <td>石積み(空石積み)</td>
          </tr>
          <tr>
            <td>
              <v-sheet v-if="judge.facilityType.type4">〇</v-sheet>
            </td>
            <td>その他</td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="d-flex justify-center">
                <v-sheet class="pa-1">詳細点検の実施</v-sheet>
                <v-sheet class="pa-1" v-if="judge.inspeFlag">要</v-sheet>
                <v-sheet class="pa-1" v-else-if="!judge.inspeFlag">不要</v-sheet>
              </div>
              <v-sheet>(ランク1について要・不要と理由を記入)</v-sheet>
            </td>
            <th colspan="2" class="text-center">理由</th>
            <td colspan="6">{{ null }}</td>
          </tr>
          <tr>
            <th colspan="2" class="text-center">特記事項</th>
            <td colspan="8">{{ null }}</td>
          </tr>
          <tr>
            <td colspan="11">
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
    </v-container>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  props:{
    title:String,
    //TODO:DBのテーブル,カラムが判明次第データを受け取る
  },
  data() {
    return {
      runnerUp: {
        factor: '(1)駆体状況',
        subdivision: [
          //TODO:rankはBEから取得した値を代入する String型
          {
            id: 1,
            subdivName: 'ひびわれ',
            rankA: '0',
            rankB: '-',
            rankC: '10',
            rankD: '30',
            rankE: '50',
            remarks: null,
            rank: null,
          },
          {
            id: 2,
            subdivName: '遊離石灰',
            rankA: '0',
            rankB: '10',
            rankC: '-',
            rankD: '-',
            rankE: '-',
            remarks: null,
            rank: null,
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
            rank: null,
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
            rank: null,
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
            rank: null,
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
            rank: null,
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
            rank: null,
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
            rank: null,
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
            rank: null,
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
            rank: null,
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
            rank: null,
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
            rank: null,
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
        remarks: '【駆体状況】の最大値を記入'
      },
      around: {
        factor: '(2)周辺状況',
        subdivision: [
          //TODO:rankはBEから取得した値を代入する String型
          {
            id: 1,
            subdivName: '背面地盤の亀裂',
            rankA: '0',
            rankB: '-',
            rankC: '10',
            rankD: '-',
            rankE: '20',
            remarks: null,
            rank: null,
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
            rank: null,
          },
          {
            id: 3,
            subdivName: '擁壁前面地盤の隆起',
            rankA: '0',
            rankB: '-',
            rankC: '30',
            rankD: '40',
            rankE: '50',
            remarks: null,
            rank: null,
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
        //maxScore: 0,
        remarks: '【周辺状況】の最大値を記入'
      },
      drainage: {
        factor: '(3)排水状況',
        subdivision: [
          //TODO:rankはBEから取得した値を代入する String型
          {
            id: 1,
            subdivName: '排水パイプの土砂詰まり',
            rankA: '0',
            rankB: '-',
            rankC: '-',
            rankD: '10',
            rankE: '-',
            remarks: null,
            rank: null,
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
            rank: null,
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
        //maxScore: 0,
        remarks: '【排水状況】の最大値を記入'
      },
      location: {
        factor: '(4)立地状況',
        subdivision: [
          //TODO:rankはBEから取得した値を代入する String型
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
            rank: null,
          },
        ],
        //TODO:maxScoreはBEで取得した値orフロントで求めた値を代入する
        //maxScore: 0,
        remarks: '【立地状況】の最大値を記入'
      },
      //TODO:BEで取得した値をもとに決定する
      //判定区分
      judge: {
        //擁壁種別
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
      }
    }
  },
})
</script>