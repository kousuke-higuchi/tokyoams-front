<template>
  <v-row>
    <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            ■点検調書 調査・措置の履歴 【様式C-2】
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
                    <th rowspan="25" class="text-center vertical" style="width:3em">調査・措置履歴</th>
                    <th rowspan="2" class="text-center">覆工<br>スバン番号</th>
                    <th rowspan="2" class="text-center">変状<br>番号</th>
                    <th colspan="5" class="text-center">調査履歴</th>
                    <th colspan="3" class="text-center">措置履歴</th>
                  </tr>
                  <tr>
                    <th class="text-center">調査年月日</th>
                    <th class="text-center">調査内容</th>
                    <th class="text-center">調査結果</th>
                    <th class="text-center">判定区分の<br>判定</th>
                    <th class="text-center">健全性<br>（調査後）</th>
                    <th class="text-center">措置年月日</th>
                    <th class="text-center">措置内容</th>
                    <th class="text-center">健全性<br>（措置後）</th>
                  </tr>
                  <tr v-for="item in items" :key="item.c1">
                    <td>{{ item.c1 }}</td>
                    <td>{{ item.c2 }}</td>
                    <td>{{ item.c3 }}</td>
                    <td style="white-space:pre-line">{{ item.c4 }}</td>
                    <td style="white-space:pre-line">{{ item.c5 }}</td>
                    <td>{{ item.c6 }}</td>
                    <td>{{ item.c7 }}</td>
                    <td>{{ item.c8 }}</td>
                    <td>{{ item.c9 }}</td>
                    <td>{{ item.c10 }}</td>
                  </tr>
                </tbody>
              </v-table>
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
        { c1: '', c2: '', c3: 'H12.03', c4: '点検', c5: '・記載なし', c6: '-', c7: '-', c8: '-', c9: '-', c10: '-' },
        { c1: '', c2: '', c3: 'H17.01', c4: '点検', c5: '・縦断方向にひび割れ\n・湧水・溶脱物（遊離石灰）\n・継ぎ目段差5～10mm', c6: 'Ⅰ', c7: 'Ⅰ', c8: '-', c9: '-', c10: '-' },
        { c1: '', c2: '', c3: 'H21.12', c4: '点検', c5: '・縦断方向のひび割れ\n・湧水・溶脱物（遊離石灰）\n・施工目地部の段差（施工当物初の可能性）', c6: '-', c7: '-', c8: '-', c9: '-', c10: '-' },
        { c1: '', c2: '', c3: 'H25.11', c4: '点検', c5: '・記載なし', c6: '-', c7: '-', c8: '-', c9: '-', c10: '-' },
        { c1: '', c2: '', c3: '', c4: '覆工背面調査', c5: 'なし', c6: '-', c7: '-', c8: '-', c9: '-', c10: '-' },
        { c1: '', c2: '', c3: '', c4: '圧縮強度試験（設計強度）\n 中性化深さ', c5: '・記載なし', c6: '-', c7: '-', c8: '-', c9: '-', c10: '-' },
        { c1: '', c2: '', c3: '', c4: '走行型画像解析 \n 走行型レーザー計画', c5: '・記載なし', c6: '-', c7: '-', c8: '-', c9: '-', c10: '-' },
        { c1: '全線', c2: '', c3: 'H30.10', c4: '定期点検（近接目視、打音点検）', c5: '変状展開図の作成\nコンター図の解析', c6: '-', c7: '-', c8: '-', c9: '-', c10: '-' },
        { c1: 'PS', c2: '', c3: 'H30.11', c4: '定期点検（近接目視、打音点検）', c5: '・記載なし', c6: 'Ⅱa', c7: 'Ⅱ', c8: '-', c9: '-', c10: '-' },
        { c1: 'P01', c2: '', c3: 'H30.11', c4: '定期点検（近接目視、打音点検）', c5: '・記載なし', c6: 'Ⅱa', c7: 'Ⅱ', c8: '-', c9: '-', c10: '-' },
        { c1: 'P02', c2: '', c3: 'H30.11', c4: '定期点検（近接目視、打音点検）', c5: '・記載なし', c6: 'Ⅱa', c7: 'Ⅱ', c8: '-', c9: '-', c10: '-' },
        { c1: 'P03', c2: '', c3: 'H30.11', c4: '定期点検（近接目視、打音点検）', c5: '・記載なし', c6: 'Ⅱa', c7: 'Ⅱ', c8: '-', c9: '-', c10: '-' },
      ]
    }
  },
  mounted: function () {
    console.log("mounted inspectionC2");
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
