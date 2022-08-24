<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <FbgSideCardDetails />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <v-card-text class="mt-1 ml-3">別紙2 様式1様式2 <span class="alignRight">様式1</span><br>
          </v-card-text>
          <v-card-text>
            <v-row no-gutters>
              <v-col md="12" cols="12">
                <div>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="8">横断歩道橋名・所在地・管理者名簿</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <!-- TODO: 採用されるかわからないのでリテラルで実装 -->
                        <th rowspan="2" colspan="2" class="text-center ledger-cell" nowrap>横断歩道橋名</th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>路線名</th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>所在地</th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>設置位置</th>
                        <th class="text-center ledger-cell" nowrap>緯度</th>
                        <td class="text-center ledger-cell" nowrap>35" 41' 57.05"</td>
                        <th class="text-center ledger-cell" nowrap>歩道橋ID</th>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>経度</th>
                        <td class="text-center ledger-cell" nowrap>139" 44' 56.74"</td>
                        <td class="text-center ledger-cell" nowrap>35,69919,139,7491</td>
                      </tr>
                      <tr>
                        <td colspan="2" class="ledger-cell" nowrap>
                          飯田橋第二歩道橋<br>（フリガナ）イイダバシダイニ</td>
                        <td class="ledger-cell" nowrap>千代田練馬田無線</td>
                        <td colspan="5" class="ledger-cell" nowrap>千代田区飯田橋一丁目7番</td>
                      </tr>
                      <tr>
                        <th colspan="2" class="ledger-cell" nowrap>管理者名</th>
                        <th rowspan="2" class="ledger-cell" nowrap>定期点検実施年月日</th>
                        <td rowspan="2" class="ledger-cell" nowrap>2020年7月5日</td>
                        <th rowspan="2" class="ledger-cell" nowrap>定期点検者</th>
                        <td rowspan="2" colspan="3" class="ledger-cell" nowrap>山田 和則</td>
                      </tr>
                      <tr>
                        <td colspan="2" class="ledger-cell" nowrap>東京都第一建設事務所</td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>代替路の有無</th>
                        <th class="ledger-cell" nowrap>緊急輸送道路</th>
                        <th colspan="6" class="ledger-cell" nowrap>占用物件（名称）</th>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>有</td>
                        <td class="ledger-cell" nowrap>二次</td>
                        <td colspan="6" class="ledger-cell" nowrap>-</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table class="mt-3" density="compact">
                    <thead>
                      <tr>
                        <th colspan="8">部材単位の診断（部材毎に最も厳しい健全性の診断結果を記入）</th>
                      </tr>
                      <tr>
                        <th colspan="5" class="text-center ledger-cell" nowrap>定期点検時に記録</th>
                        <th colspan="3" class="ml-1 text-center ledger-cell" nowrap>応急措置後に記録</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th colspan="2" class="text-center ledger-cell" nowrap>部材名</th>
                        <th class="text-center ledger-cell" nowrap>判定区分（Ⅰ～Ⅳ）</th>
                        <th class="text-center ledger-cell" nowrap>変状の種類<br>（Ⅱ以上の場合に記載）</th>
                        <th class="text-center ledger-cell" nowrap>備考（写真番号、位置等が分かるように記載）</th>
                        <th class="text-center ledger-cell" nowrap>応急措置後の特定区分</th>
                        <th class="text-center ledger-cell" nowrap>応急措置内容</th>
                        <th class="text-center ledger-cell" nowrap>応急措置及び判定実施年月日</th>
                      </tr>
                      <tr>
                        <!-- TODO: 採用されるかわからないのでリテラルで実装 -->
                        <th rowspan="3" class="ledger-cell" nowrap>上部構造</th>
                        <th class="ledger-cell" nowrap>主桁</th>
                        <td class="text-center ledger-cell" nowrap>Ⅰ</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>横桁</th>
                        <td class="text-center ledger-cell" nowrap>Ⅰ</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>床版等</th>
                        <td class="text-center ledger-cell" nowrap>Ⅰ</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th colspan="2" class="ledger-cell" nowrap>下部構造</th>
                        <td class="text-center ledger-cell" nowrap>Ⅱ</td>
                        <td class="text-center ledger-cell" nowrap>ひびわれ</td>
                        <td class="text-center ledger-cell" nowrap>写真1</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th colspan="2" class="ledger-cell" nowrap>階段部</th>
                        <td class="text-center ledger-cell" nowrap>Ⅱ</td>
                        <td class="text-center ledger-cell" nowrap>腐食、うき</td>
                        <td class="text-center ledger-cell" nowrap>写真2～4</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th colspan="2" class="ledger-cell" nowrap>その他</th>
                        <td class="text-center ledger-cell" nowrap>Ⅱ</td>
                        <td class="text-center ledger-cell" nowrap>亀裂、欠損、落書き</td>
                        <td class="text-center ledger-cell" nowrap>写真5～7</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table class="mt-3" density="compact">
                    <thead>
                      <tr>
                        <th colspan="2">横断歩道毎の健全性の診断（対策区分Ⅰ～Ⅳ）</th>
                      </tr>
                      <tr>
                        <th colspan="2" class="text-center ledger-cell" nowrap>定期点検時に記録</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <!-- TODO: 採用されるかわからないのでリテラルで実装 -->
                        <td class="ledger-cell" nowrap>（判定区分）<br>Ⅱ</td>
                        <td class="ledger-cell" nowrap>
                          （所見等）<br>
                          下部工のひびわれ、階段部の腐食、排水設備の亀裂は予防保全の観点から措置を講ずることが望ましい。<br>
                          排水設備の欠損、目隠し板の落書きは、維持工事等で対応する必要がある。
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table class="mt-3" density="compact">
                    <thead>
                      <tr>
                        <th colspan="4">全景写真（起点側、終点側を記載すること）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>架設年次※1</th>
                        <th class="text-center ledger-cell" nowrap>橋長（ｍ）</th>
                        <th class="text-center ledger-cell" nowrap>通路幅員（ｍ）</th>
                        <td rowspan="4" width="70%" class="text-center ledger-cell" nowrap>
                          <img class="mt-2" src="../../assets/img/dmg/fbg1P001view1.jpg">
                        </td>
                      </tr>
                      <tr>
                        <!-- TODO: 採用されるかわからないのでリテラルで実装 -->
                        <td class="ledger-cell" nowrap>1970年</td>
                        <td class="ledger-cell" nowrap>51.98ｍ</td>
                        <td class="ledger-cell" nowrap>1.5ｍ</td>
                      </tr>
                      <tr>
                        <th colspan="3" class="ledger-cell" nowrap>横断歩道形式</th>
                      </tr>
                      <tr>
                        <td colspan="3" class="ledger-cell" nowrap>中路式単純銅Ⅰ桁橋</td>
                      </tr>
                    </tbody>
                  </v-table>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.ledger-cell {
  font-size: xx-small !important;
  border: 1px solid #dedede;
}

.detailCard {
  padding: 0;
  border: 1px solid black;
}

.cell {
  border: 0.5px solid black;
}

.alignRight {
  float: right;
}
</style>