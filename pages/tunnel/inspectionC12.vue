<template>
  <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            ■点検調書 点検結果総括表（トンネル内附属物の取付状態） 【様式C-1-2】
          </v-card-title>
        </div>
        <v-card-text>
          <v-row no-gutters>
            <v-col md="12" cols="12">
              <v-table density="compact" class="ledger">
                <tbody>
                  <tr>
                    <th>フリガナ</th>
                    <td>ゴンダトンネル</td>
                    <th>路線名</th>
                    <td>主32 八王子五日市線</td>
                    <th>点検業者・点検者名</th>
                    <td>アジア航測（株）青柳健二</td>
                    <th>点検年月日</th>
                    <td>2018年11月9日</td>
                  </tr>
                  <tr>
                    <th>名称</th>
                    <td>権田トンネル</td>
                    <th>管理事務所</th>
                    <td>西多摩建設事務所</td>
                    <th>調査業者・調査技術者名</th>
                    <td>・</td>
                    <th>調査年月日</th>
                    <td></td>
                  </tr>
                </tbody>
              </v-table>
              <v-table density="compact" class="ledger">
                <tbody>
                  <tr>
                    <th rowspan="25" class="text-center vertical" style="width:3em">点検結果</th>
                    <th rowspan="2" class="text-center">覆工<br>スバン<br>番号</th>
                    <th rowspan="2" class="text-center">異常<br>番号</th>
                    <th rowspan="2" class="text-center">距離<br>（ｍ）</th>
                    <th colspan="2" class="text-center">異常部位</th>
                    <th colspan="2" class="text-center">異常の内容</th>
                    <th colspan="2" class="text-center">前回点検時の状態</th>
                    <th colspan="4" class="text-center">点検・調査履歴</th>
                    <th colspan="2" class="text-center">措置履歴</th>
                    <th rowspan="2" class="text-center">対応方針<br>・<br>特記事項</th>
                  </tr>
                  <tr>
                    <th class="text-center">対象箇所</th>
                    <th class="text-center">部位区分</th>
                    <th class="text-center">異常種類</th>
                    <th class="text-center">異常の発生範囲の規模</th>
                    <th class="text-center">状態</th>
                    <th class="text-center">健全性</th>
                    <th class="text-center">調査<br>の<br>要否</th>
                    <th class="text-center vertical" style="width:3em">実施</th>
                    <th class="text-center">健全性<br>（点検後）</th>
                    <th class="text-center">措置の内容</th>
                    <th class="text-center vertical" style="width:3em">実施</th>
                    <th class="text-center">健全性<br>（措置後）</th>
                  </tr>
                  <tr v-for="item in items" :key="item.no">
                    <td>{{ item.c1 }}</td>
                    <td>{{ item.c2 }}</td>
                    <td>{{ item.c3 }}</td>
                    <td>{{ item.c4 }}</td>
                    <td>{{ item.c5 }}</td>
                    <td>{{ item.c6 }}</td>
                    <td>{{ item.c7 }}</td>
                    <td>{{ item.c8 }}</td>
                    <td>{{ item.c9 }}</td>
                    <td>{{ item.c10 }}</td>
                    <td>{{ item.c11 }}</td>
                    <td>{{ item.c12 }}</td>
                    <td>{{ item.c13 }}</td>
                    <td>{{ item.c14 }}</td>
                    <td>{{ item.c15 }}</td>
                    <td>{{ item.c16 }}</td>
                  </tr>
                </tbody>
              </v-table>
              <v-row>
                <v-card-text>
                  <v-sheet>※変状の除去が不完全で、緊急対応が必要な場合は対応方針欄に記入すること。</v-sheet>
                  <v-sheet>※1区間の覆工に複数の変状がある場合は、変状箇所毎に記入すること。</v-sheet>
                </v-card-text>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      child_extend: true,
      items: [
        {
          no: '1', c1: '3', c2: '1', c3: '17', c4: '路面', c5: 'その他', c6: '欠損', c7: '反射板破損1箇所', c8: '',
          c9: '', c10: '否', c11: '-', c12: '△', c13: '否', c14: '', c15: '', c16: '経過観察の継続'
        },
        { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },
          { no: null, c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null,
          c9: null, c10: null, c11: null, c12: null, c13: null, c14: null, c15: null, c16: null },                                                                                                    
      ],
    }
  },
  mounted: function () {
    console.log("mounted inspectionC12");
  },
  methods: {
  },
});
</script>

<style>
.vertical {
  writing-mode: vertical-rl;
}
</style>