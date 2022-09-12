<template>
  <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            ■点検調書 診断結果（変状単位） 【様式E-1】
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
                    <th rowspan="31" class="text-center vertical" style="width:3em">
                      変状箇所数・変状単位の健全性の判定
                    </th>
                    <th colspan="2" class="text-center">覆工スバン番号</th>
                    <td class="text-center">外力</td>
                    <th class="text-center">材質劣化</th>
                    <td class="text-center">漏水</td>
                    <th colspan="2" class="text-center">覆工スバン番号</th>
                    <td class="text-center">外力</td>
                    <th class="text-center">材質劣化</th>
                    <td class="text-center">漏水</td>
                  </tr>
                  <tr>
                    <th rowspan="6" class="text-center vertical" style="width:3em">坑門工</th>
                    <td rowspan="4" class="text-center" style="width:3em">坑門</td>
                    <td>Ⅰ 0</td>
                    <td>Ⅰ 0</td>
                    <td>Ⅰ 0</td>
                    <th rowspan="30" class="text-center vertical" style="width:3em">本体工</th>
                    <td rowspan="4" class="text-center" style="width:3em">S004</td>
                    <td>Ⅰ 0</td>
                    <td>Ⅰ 13</td>
                    <td>Ⅰ 0</td>
                  </tr>
                  <tr>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ 1</td>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ 0</td>
                  </tr>
                  <tr>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                  </tr>
                  <tr>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                  </tr>
                  <tr>
                    <th>箇所数</th>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <th>箇所数</th>
                    <td>1</td>
                    <td>13</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th>健全性</th>
                    <td>Ⅰ</td>
                    <td>Ⅰ</td>
                    <td>Ⅰ</td>
                    <th>健全性</th>
                    <td>Ⅱ</td>
                    <td>Ⅰ</td>
                    <td>Ⅰ</td>
                  </tr>
                  <tr>
                    <th rowspan="24" class="text-center vertical" style="width:3em">本体工</th>
                    <td rowspan="4" class="text-center" style="width:3em">PS</td>
                    <td>Ⅰ 0</td>
                    <td>Ⅰ 0</td>
                    <td>Ⅰ 0</td>
                    <td rowspan="4" class="text-center" style="width:3em">S005</td>
                    <td>Ⅰ 0</td>
                    <td>Ⅰ 5</td>
                    <td>Ⅰ 0</td>
                  </tr>
                  <tr>
                    <td>Ⅱ 1</td>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ 1</td>
                    <td>Ⅱ 1</td>
                    <td>Ⅱ 0</td>
                  </tr>
                  <tr>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                  </tr>
                  <tr>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                  </tr>
                  <tr>
                    <th>箇所数</th>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <th>箇所数</th>
                    <td>1</td>
                    <td>6</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th>健全性</th>
                    <td>Ⅱ</td>
                    <td>Ⅰ</td>
                    <td>Ⅰ</td>
                    <th>健全性</th>
                    <td>Ⅱ</td>
                    <td>Ⅱ</td>
                    <td>Ⅰ</td>
                  </tr>
                  <tr>
                    <td rowspan="4">S001</td>
                    <td>Ⅰ 0</td>
                    <td>Ⅰ 4</td>
                    <td>Ⅰ 0</td>
                    <td rowspan="4">S006</td>
                    <td>Ⅰ 0</td>
                    <td>Ⅰ 4</td>
                    <td>Ⅰ 0</td>
                  </tr>
                  <tr>
                    <td>Ⅱ 1</td>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ 1</td>
                    <td>Ⅱ 1</td>
                    <td>Ⅱ 2</td>
                  </tr>
                  <tr>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                  </tr>
                  <tr>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                  </tr>
                  <tr>
                    <th>箇所数</th>
                    <td>1</td>
                    <td>4</td>
                    <td>0</td>
                    <th>箇所数</th>
                    <td>1</td>
                    <td>5</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th>健全性</th>
                    <td>Ⅱ</td>
                    <td>Ⅰ</td>
                    <td>Ⅰ</td>
                    <th>健全性</th>
                    <td>Ⅱ</td>
                    <td>Ⅱ</td>
                    <td>Ⅱ</td>
                  </tr>
                  <tr>
                    <td rowspan="4" class="text-center" style="width:3em">S002</td>
                    <td>Ⅰ 0</td>
                    <td>Ⅰ 6</td>
                    <td>Ⅰ 0</td>
                    <td rowspan="4" class="text-center" style="width:3em">PE</td>
                    <td>Ⅰ 0</td>
                    <td>Ⅰ 0</td>
                    <td>Ⅰ 0</td>
                  </tr>
                  <tr>
                    <td>Ⅱ 1</td>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ 1</td>
                  </tr>
                  <tr>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                  </tr>
                  <tr>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                  </tr>
                  <tr>
                    <th>箇所数</th>
                    <td>1</td>
                    <td>6</td>
                    <td>0</td>
                    <th>箇所数</th>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>健全性</th>
                    <td>Ⅱ</td>
                    <td>Ⅰ</td>
                    <td>Ⅰ</td>
                    <th>健全性</th>
                    <td>Ⅰ</td>
                    <td>Ⅰ</td>
                    <td>Ⅱ</td>
                  </tr>
                  <tr>
                    <td rowspan="4" class="text-center" style="width:3em">S003</td>
                    <td>Ⅰ 0</td>
                    <td>Ⅰ 5</td>
                    <td>Ⅰ 0</td>
                    <td rowspan="4" class="text-center" style="width:3em"></td>
                    <td>Ⅰ </td>
                    <td>Ⅰ </td>
                    <td>Ⅰ </td>
                  </tr>
                  <tr>
                    <td>Ⅱ 1</td>
                    <td>Ⅱ 1</td>
                    <td>Ⅱ 0</td>
                    <td>Ⅱ </td>
                    <td>Ⅱ </td>
                    <td>Ⅱ </td>
                  </tr>
                  <tr>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ 0</td>
                    <td>Ⅲ </td>
                    <td>Ⅲ </td>
                    <td>Ⅲ </td>
                  </tr>
                  <tr>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ 0</td>
                    <td>Ⅳ </td>
                    <td>Ⅳ </td>
                    <td>Ⅳ </td>
                  </tr>
                  <tr>
                    <th>箇所数</th>
                    <td>1</td>
                    <td>6</td>
                    <td>0</td>
                    <th>箇所数</th>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>健全性</th>
                    <td>Ⅱ</td>
                    <td>Ⅱ</td>
                    <td>Ⅰ</td>
                    <th>健全性</th>
                    <td></td>
                    <td></td>
                    <td></td>
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
    }
  },
  mounted: function () {
    console.log("mounted inspectionE1");
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