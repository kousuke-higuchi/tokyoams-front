<template>
  <v-row>
    <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
      <!-- <p> {{ child_extend }}</p> -->
      <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="country" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3" class="ledger">
        <div class="d-flex">
          <v-card-title>
            ■点検調書　トンネル変状・異常個所写真位置図　【様式B】
          </v-card-title>
        </div>
        <v-card-text>
          <v-table density="compact">
            <tbody>
              <tr>
                <th rowspan="2" colspan="2">フリガナ<br />名称</th>
                <td rowspan="2" colspan="4">{{  'ゴンダトンネル'  }}<br />{{  '権田トンネル'  }}</td>
                <th rowspan="2">路線名</th>
                <td rowspan="2" colspan="4">{{  '主32 八王子五日市線'  }}</td>
                <th rowspan="2" colspan="2">管理事務所</th>
                <td rowspan="2" colspan="2">{{  '西多摩建設事務所'  }}</td>
                <th>緊急輸送道路</th>
                <td colspan="2">{{  'なし'  }}</td>
              </tr>
              <tr>
                <th>代替路の有無</th>
                <td colspan="2">{{  'あり'  }}</td>
              </tr>
              <tr>
                <th rowspan="2" colspan="2">所在地</th>
                <td width="10">自</td>
                <td colspan="3">{{  'あきる野市権田'  }}</td>
                <th>点検業者・点検者名</th>
                <td colspan="4">{{  'アジア航測(株)青柳健二'  }}</td>
                <th colspan="2">点検年月日</th>
                <td colspan="2">{{  '2018年11月9日'  }}</td>
                <th>トンネル延長</th>
                <td colspan="2">L={{  '45.0'  }}m</td>
              </tr>
              <tr>
                <td>至</td>
                <td colspan="3">{{  'あきる野市五日市'  }}</td>
                <th>調査業者・調査技術者名</th>
                <td colspan="4">{{  '-'  }}</td>
                <th colspan="2">調査年月日</th>
                <td colspan="2">{{  '-'  }}</td>
                <th>トンネルの分類</th>
                <td colspan="2">{{  '陸上トンネル(堀進工法)'  }}</td>
              </tr>
              <tr>
                <th rowspan="2" style="writing-mode: vertical-rl;" class="text-center">起点</th>
                <th>緯度</th>
                <td colspan="3">{{  '35°43’50.5”'  }}</td>
                <th rowspan="4">変状・異常<br />個所数合計</th>
                <th rowspan="4" class="text-center">トンネル<br />本体工</th>
                <th>材質劣化</th>
                <th>Ⅱ</th>
                <td>3箇所</td>
                <th>Ⅲ</th>
                <td>0箇所</td>
                <th>Ⅳ</th>
                <td>0箇所</td>
                <th rowspan="4">トンネル毎<br />の健全性</th>
                <td rowspan="4" class="text-center" style="font-size:large!important">{{  'Ⅱ'  }}</td>
                <th rowspan="4">附属物の<br />取付状態</th>
                <td rowspan="2">{{  '×'  }}</td>
              </tr>
              <tr>
                <th>経度</th>
                <td colspan="3">{{  '139°13’38.5”'  }}</td>
                <th>漏水</th>
                <th>Ⅱ</th>
                <td>3箇所</td>
                <th>Ⅲ</th>
                <td>0箇所</td>
                <th>Ⅳ</th>
                <td>0箇所</td>
              </tr>
              <tr>
                <th rowspan="2" style="writing-mode: vertical-rl;" class="text-center">終点</th>
                <th>緯度</th>
                <td colspan="3">{{  '35°43’51.4”'  }}</td>
                <th>外力</th>
                <th>Ⅱ</th>
                <td>7スパン</td>
                <th>Ⅲ</th>
                <td>0スパン</td>
                <th>Ⅳ</th>
                <td>0スパン</td>
                <td rowspan="2">{{  '0箇所'  }}</td>
              </tr>
              <tr>
                <th>経度</th>
                <td colspan="3">{{  '139°13’36.5”'  }}</td>
                <td colspan="7"></td>
              </tr>
            </tbody>
          </v-table>
          <v-table>
            <tr>
              <th style="writing-mode: vertical-rl; width: 3em;" class="text-center">
                トンネル変状・異常個所写真位置図
              </th>
              <td>
                <v-container>
                  <v-img src="../../assets/img/dmg/tnlD2view1.jpg"></v-img>
                </v-container>
              </td>
            </tr>
          </v-table>
          <v-sheet>
            ※1　トンネル本体工の変状数は，材質劣化，漏水に起因するものは変状単位で，外力に起因するものはスパン単位で計上すること. 
          </v-sheet>
          <v-sheet>
            ※2　本体工の変状に対しては，判定区分Ⅱ～Ⅳ（対策実施後のⅠを含む）について記載すること．
          </v-sheet>
          <v-sheet>
            ※3　附属物の以上に対しては，判定区分×（対策実施後の〇を含む）について記載すること．
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
  const child_extend = ref(true);
</script>
