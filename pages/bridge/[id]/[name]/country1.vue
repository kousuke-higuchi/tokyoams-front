<template>
  <v-row>
    <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
      <!-- <p> {{ child_extend }}</p> -->
      <bridge-side-card-details @isExtend='child_extend = $event' selectTab="country" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3">
        <v-card-text>
          <div style="font-size: small">橋梁名・所在地・管理者名等</div>
          <v-table density="compact" class="ledger">
            <tbody>
              <tr>
                <th rowspan="2">橋梁名</th>
                <th rowspan="2">路線名</th>
                <th rowspan="2">所在地</th>
                <th rowspan="2">起点側</th>
                <th>緯度</th>
                <td>35" 41' 57.05"</td>
                <th>橋梁ID</th>
              </tr>
              <tr>
                <th>経度</th>
                <td>139" 44' 56.74"</td>
                <td>01110010-0</td>
              </tr>
              <tr>
                <td>
                  鎌倉橋<br>（フリガナ）カマクラバシ</td>
                <td>特例都道錦町有楽町線第402号</td>
                <td colspan="5">（自）内神田 1 （至）大手町 1</td>
              </tr>
              <tr>
                <th>管理者名</th>
                <th>定期点検実施年月日</th>
                <th>路下条件</th>
                <th>代替路の有無</th>
                <th>自専道or一般道</th>
                <th>緊急輸送道路</th>
                <th>占用物件(名称)</th>
              </tr>
              <tr>
                <td>東京都第一建設事務所</td>
                <td>2020年8月15日</td>
                <td>河川： 日本橋川</td>
                <td>有</td>
                <td>一般道</td>
                <td>二次</td>
                <td class="text-center">-</td>
              </tr>
            </tbody>
          </v-table>
          <v-table class="mt-3 ledger" density="compact">
            <thead>
              <tr>
                <th colspan="3">部材単位の診断（部材毎に最も厳しい健全性の診断結果を記入）</th>
                <td colspan="5"></td>
                <th>定期点検者</th>
                <td>出木杉英才</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colspan="4">定期点検時に記録</th>
                <th colspan="6">応急措置後に記録</th>
              </tr>
              <tr>
                <th>部材名</th>
                <th>判定区分（Ⅰ～Ⅳ）</th>
                <th>変状の種類<br>（Ⅱ以上の場合に記載）</th>
                <th>備考（写真番号、位置等が分かるように記載）</th>
                <th>応急措置後の特定区分</th>
                <th colspan="4">応急措置内容</th>
                <th>応急措置及び判定実施年月日</th>
              </tr>
              <tr>
                <th rowspan="3">上部構造</th>
                <th>主桁</th>
                <td class="text-center">Ⅰ</td>
                <td></td>
                <td></td>
                <td colspan="4"></td>
                <td></td>
              </tr>
              <tr>
                <th>横桁</th>
                <td class="text-center">Ⅰ</td>
                <td></td>
                <td></td>
                <td colspan="4"></td>
                <td></td>
              </tr>
              <tr>
                <th>床版等</th>
                <td class="text-center">Ⅰ</td>
                <td></td>
                <td></td>
                <td colspan="4"></td>
                <td></td>
              </tr>
              <tr>
                <th colspan="2">下部構造</th>
                <td class="text-center">Ⅱ</td>
                <td>ひびわれ</td>
                <td>写真1</td>
                <td colspan="4"></td>
                <td></td>
              </tr>
              <tr>
                <th colspan="2">階段部</th>
                <td class="text-center">Ⅱ</td>
                <td>腐食、うき</td>
                <td>写真2～4</td>
                <td colspan="4"></td>
                <td></td>
              </tr>
              <tr>
                <th colspan="2">その他</th>
                <td class="text-center">Ⅱ</td>
                <td>亀裂、欠損、落書き</td>
                <td>写真5～7</td>
                <td colspan="4"></td>
                <td></td>
              </tr>
            </tbody>
          </v-table>
          <v-table class="mt-3 ledger" density="compact">
            <thead>
              <tr>
                <th colspan="2">橋毎の健全性の診断（対策区分Ⅰ～Ⅳ）</th>
              </tr>
              <tr>
                <th colspan="2">定期点検時に記録</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>（判定区分）<br>Ⅱ</td>
                <td>
                  （所見等）<br>
                  下部工のひびわれ、階段部の腐食、排水設備の亀裂は予防保全の観点から措置を講ずることが望ましい。<br>
                  排水設備の欠損、目隠し板の落書きは、維持工事等で対応する必要がある。
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-table class="mt-3 ledger" density="compact">
            <thead>
              <tr>
                <th colspan="4">全景写真（起点側、終点側を記載すること）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>架設年次※1</th>
                <th>橋長（ｍ）</th>
                <th>通路幅員（ｍ）</th>
                <td rowspan="4" width="70%">
                  <v-img :src="imagePath"></v-img>
<!--                   <img class="mt-2" src="../../assets/img/dmg/bridgeDetail2_3_2.jpg" height="120">
 -->                </td>
              </tr>
              <tr>
                <!-- TODO: 採用されるかわからないのでリテラルで実装 -->
                <td>1970年</td>
                <td>51.98ｍ</td>
                <td>1.5ｍ</td>
              </tr>
              <tr>
                <th colspan="3">橋梁形式</th>
              </tr>
              <tr>
                <td colspan="3">中路式単純銅Ⅰ桁橋</td>
              </tr>
            </tbody>
          </v-table>
          <v-row no-gutters>
            <div class="mt-2" style="font-size: small">※1:架設年次が不明の場合は「不明」と記入とする。</div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
const child_extend = ref(true);
const imagePath = new URL('../../../../assets/img/dmg/bridgeDetail2_3_2.jpg',import.meta.url).href;
</script>
