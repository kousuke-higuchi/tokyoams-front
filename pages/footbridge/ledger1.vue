<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <FbgSideCardDetails />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">横断歩道橋（人道橋）台帳 東京都</v-row>
            <v-row class="justify-end mt-1 mr-3">様式-1 青葉歩道橋 No.01130010</v-row>
          </v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <v-col md="4" cols="8">
                <div>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="2" class="text-center" nowrap style="border: 1px solid #dedede;">一般事項</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <!-- TODO: 採用されるかわからないのでリテラルで実装 -->
                        <th nowrap class="ledger-cell">橋名</th>
                        <td colspan="4" nowrap class="ledger-cell">青葉歩道橋</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">フリガナ</th>
                        <td nowrap class="ledger-cell">アオバホドウキョウ</td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">位置</th>
                        <td nowrap class="ledger-cell">自: 千代田区 三番町6番14号</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">至: 千代田区 九段南二丁目1番32号</td>
                      </tr>
                      <tr>
                        <th rowspan="3" nowrap class="ledger-cell">路線名</th>
                        <td nowrap class="ledger-cell">特例都道 麹町竹平 401号</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">都市計画街路: 現状1号線</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">通常道路名: 内堀通り</td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">地点標</th>
                        <td nowrap class="ledger-cell">起点側 終点側</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">（0.90km） (1.00km)</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">橋下種類</th>
                        <td nowrap class="ledger-cell">道路</td>
                      </tr>
                      <tr>
                        <th owrap class="ledger-cell">(名称)</th>
                        <td nowrap class="ledger-cell">（内堀通り）</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">橋格〔人道橋〕</th>
                        <td class="text-center ledger-cell" nowrap>-等橋</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">(基準・示方書)</th>
                        <td nowrap class="ledger-cell">（立体横断施設設置要領（案））</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">設計震度</th>
                        <td nowrap class="ledger-cell">KH= 0.20 KV= 0.10</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>項目・種別</th>
                        <th class="text-center ledger-cell" nowrap>通路部</th>
                        <th class="text-center ledger-cell" nowrap>階段部</th>
                        <th class="text-center ledger-cell" nowrap>スロープ</th>
                        <th class="text-center ledger-cell" nowrap>計</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th nowrap class="ledger-cell">橋長</th>
                        <td nowrap class="ledger-cell">22.28 ｍ</td>
                        <td nowrap class="ledger-cell">21.80 ｍ</td>
                        <td nowrap class="ledger-cell"> ｍ</td>
                        <td nowrap class="ledger-cell">44.08 ｍ</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">総格員</th>
                        <td nowrap class="ledger-cell">1.90 ｍ</td>
                        <td nowrap class="ledger-cell">1.80 ｍ</td>
                        <td nowrap class="ledger-cell"> ｍ</td>
                        <td nowrap class="ledger-cell">-</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">橋面積</th>
                        <td nowrap class="ledger-cell">42.30 ㎡</td>
                        <td nowrap class="ledger-cell">29.20 ㎡</td>
                        <td nowrap class="ledger-cell"> ㎡</td>
                        <td nowrap class="ledger-cell">81.50 ㎡</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="3" class="text-center ledger-cell" nowrap>昇降方式</th>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>方式・項目</th>
                        <th class="text-center ledger-cell" nowrap>規格</th>
                        <th class="text-center ledger-cell" nowrap>数量</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th nowrap class="ledger-cell">階段</th>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">2</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">押上式</th>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">スロープ<br>（勾玉12%以下）</th>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">エスカレーター</th>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">エレベーター</th>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">複合スロープ付</th>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">複合エスカレーター付</th>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="5" class="text-center ledger-cell" nowrap>（最小部）桁下高</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th nowrap class="ledger-cell">径間番号</th>
                        <td nowrap class="ledger-cell">1</td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">右側車道端</th>
                        <td nowrap class="ledger-cell">5 ｍ</td>
                        <td nowrap class="ledger-cell">ｍ</td>
                        <td nowrap class="ledger-cell">ｍ</td>
                        <td nowrap class="ledger-cell">ｍ</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">中央部</th>
                        <td nowrap class="ledger-cell">5 ｍ</td>
                        <td nowrap class="ledger-cell">ｍ</td>
                        <td nowrap class="ledger-cell">ｍ</td>
                        <td nowrap class="ledger-cell">ｍ</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">左側車道端</th>
                        <td nowrap class="ledger-cell">5 ｍ</td>
                        <td nowrap class="ledger-cell">ｍ</td>
                        <td nowrap class="ledger-cell">ｍ</td>
                        <td nowrap class="ledger-cell">ｍ</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <tbody>
                      <tr>
                        <th nowrap class="ledger-cell">事業費</th>
                        <td nowrap class="ledger-cell">7101000 円</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">事業名</th>
                        <td nowrap class="ledger-cell">横断歩道橋設置工事1-1</td>
                      </tr>
                      <tr>
                        <th colspan="5" class="text-center ledger-cell" nowrap>施工年月</th>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">着工</th>
                        <td nowrap class="ledger-cell">昭和44年7月</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">竣工</th>
                        <td nowrap class="ledger-cell">昭和45年1月</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">併用開始年月日</th>
                        <td nowrap class="ledger-cell">不明年 月 日</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">引継ぎ年月日</th>
                        <td nowrap class="ledger-cell">昭和45年6月30日</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">施工業者</th>
                        <td nowrap class="ledger-cell">（株）桜田機械工業</td>
                      </tr>
                    </tbody>
                  </v-table>
                </div>
              </v-col>
              <v-col md="4" cols="14">
                <div>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="4" class="text-center" nowrap style="border: 1px solid #dedede;">上部構造</th>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>種別・項目</th>
                        <th class="text-center ledger-cell" nowrap>通路部</th>
                        <th class="text-center ledger-cell" nowrap>階段部</th>
                        <th class="text-center ledger-cell" nowrap>スロープ部</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th nowrap class="ledger-cell">延長</th>
                        <td nowrap class="ledger-cell">22.285</td>
                        <td nowrap class="ledger-cell"> 21.800</td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">径間割<br> (支間長)</th>
                        <td nowrap class="ledger-cell">1径間</td>
                        <td nowrap class="ledger-cell">2径間</td>
                        <td nowrap class="ledger-cell">径間</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">（20.485m）</td>
                        <td nowrap class="ledger-cell">（10.9m, 10.9m）</td>
                        <td nowrap class="ledger-cell">（）</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">有効幅員</th>
                        <td nowrap class="ledger-cell">1,500m</td>
                        <td nowrap class="ledger-cell">1,500m</td>
                        <td nowrap class="ledger-cell">m</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">路面位置</th>
                        <td nowrap class="ledger-cell">中路</td>
                        <td nowrap class="ledger-cell">中路</td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">タワミ</th>
                        <td nowrap class="ledger-cell">δd= δe=</td>
                        <td nowrap class="ledger-cell">δd= δe=</td>
                        <td nowrap class="ledger-cell">δd= δe=</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">δe/1=</td>
                        <td nowrap class="ledger-cell">δe/1=</td>
                        <td nowrap class="ledger-cell">δe/1=</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">構造形式</th>
                        <td nowrap class="ledger-cell">中路式単純調Ⅰ桁橋</td>
                        <td nowrap class="ledger-cell">中路式単純調Ⅰ桁橋</td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th class="text-center ledger-cell" nowrap></th>
                        <th colspan="2" class="text-center ledger-cell" nowrap>通路部</th>
                        <th colspan="2" class="text-center ledger-cell" nowrap>階段部</th>
                        <th colspan="2" class="text-center ledger-cell" nowrap>スロープ部</th>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>種別・項目</th>
                        <th class="text-center ledger-cell" nowrap>材種</th>
                        <th class="text-center ledger-cell" nowrap>細部構造</th>
                        <th class="text-center ledger-cell" nowrap>材種</th>
                        <th class="text-center ledger-cell" nowrap>細部構造</th>
                        <th class="text-center ledger-cell" nowrap>材種</th>
                        <th class="text-center ledger-cell" nowrap>細部構造</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th rowspan="3" nowrap class="ledger-cell">主桁</th>
                        <td rowspan="3" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">主桁数 2本</td>
                        <td rowspan="3" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">主桁数 2本</td>
                        <td rowspan="3" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">主桁数 本</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">桁高 0.800m</td>
                        <td nowrap class="ledger-cell">桁高 0.783m</td>
                        <td nowrap class="ledger-cell">桁高 m</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">間隔 1.700m</td>
                        <td nowrap class="ledger-cell">間隔 1.650m</td>
                        <td nowrap class="ledger-cell">間隔 m</td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">横桁</th>
                        <td rowspan="2" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">桁高 0.250m</td>
                        <td rowspan="2" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">桁高 0.150m</td>
                        <td rowspan="2" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">桁高 m</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">間隔 2.000m</td>
                        <td nowrap class="ledger-cell">間隔 5.800m</td>
                        <td nowrap class="ledger-cell">間隔 m</td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">縦桁</th>
                        <td rowspan="2" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">桁高 m</td>
                        <td rowspan="2" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">桁高 m</td>
                        <td rowspan="2" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">桁高 m</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">間隔 m</td>
                        <td nowrap class="ledger-cell">間隔 m</td>
                        <td nowrap class="ledger-cell">間隔 m</td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">*1)床版等</th>
                        <td rowspan="2" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">厚さ t= 3,200m</td>
                        <td rowspan="2" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">厚さ t= 3,200m</td>
                        <td rowspan="2" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">厚さ t= m</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">形式 ﾃﾞｯｷﾌﾟﾚｰﾄ</td>
                        <td nowrap class="ledger-cell">形式 銅床版</td>
                        <td nowrap class="ledger-cell">形式 </td>
                      </tr>
                      <tr>
                        <th rowspan="3" nowrap class="ledger-cell">舗装</th>
                        <td rowspan="3" nowrap class="ledger-cell">ｶﾗｰﾁｯﾌﾟ</td>
                        <td nowrap class="ledger-cell">厚さ t= 10,000m</td>
                        <td rowspan="3" nowrap class="ledger-cell">ｶﾗｰﾁｯﾌﾟ</td>
                        <td nowrap class="ledger-cell">厚さ t= 10,000m</td>
                        <td rowspan="3" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">厚さ t= m</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">面積 33.40㎡</td>
                        <td nowrap class="ledger-cell">面積 32.700㎡</td>
                        <td nowrap class="ledger-cell">面積 ㎡</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">防水工 無</td>
                        <td nowrap class="ledger-cell">防水工 無</td>
                        <td nowrap class="ledger-cell">防水工 </td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">排水股備（桝）</th>
                        <td rowspan="2" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">寸法 210</td>
                        <td rowspan="2" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">寸法</td>
                        <td rowspan="2" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">寸法</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">個数 4個</td>
                        <td nowrap class="ledger-cell">個数 個</td>
                        <td nowrap class="ledger-cell">個数 個</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">伸縮装置</th>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">形式 </td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">形式 </td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">形式 </td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">支承</th>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">形式 平板支承</td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">形式 ピン支承</td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">形式 </td>
                      </tr>
                    </tbody>
                  </v-table>

                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="11" class="text-center ledger-cell" nowrap>主要材料</th>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>項目・材種</th>
                        <th class="text-center ledger-cell" nowrap>主銅材</th>
                        <th class="text-center ledger-cell" nowrap>鉄筋</th>
                        <th class="text-center ledger-cell" nowrap>PC銅材</th>
                        <th class="text-center ledger-cell" nowrap>ｺﾝｸﾘｰﾄ</th>
                        <th class="text-center ledger-cell" nowrap>アスコン</th>
                        <th class="text-center ledger-cell" nowrap>石材</th>
                        <th class="text-center ledger-cell" nowrap>木材</th>
                        <th class="text-center ledger-cell" nowrap>高欄材</th>
                        <th class="text-center ledger-cell" nowrap>目隠板</th>
                        <th class="text-center ledger-cell" nowrap>落下物防止</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th nowrap class="ledger-cell">数量</th>
                        <td nowrap class="ledger-cell">16,700t</td>
                        <td nowrap class="ledger-cell">不明 t</td>
                        <td nowrap class="ledger-cell"> t</td>
                        <td nowrap class="ledger-cell">1,900㎡</td>
                        <td nowrap class="ledger-cell">25,500t</td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">2,100t</td>
                        <td nowrap class="ledger-cell">9,350㎡</td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">摘要</th>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">不明</td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">不明</td>
                        <td nowrap class="ledger-cell">不明</td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">ﾌｧｲﾛﾝ</td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="11" class="text-center ledger-cell" nowrap>概略図</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <v-card>
                          <v-card-text class="ledger-cell">
                            <v-row>
                              <v-img src="../../assets/img/dmg/fbg1view1.jpg"></v-img>
                            </v-row>
                          </v-card-text>
                        </v-card>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <tbody>
                      <tr>
                        <th scope="row" class="text-center ledger-cell" nowrap>記事</th>
                        <td class="ledger-cell" nowrap>架設工法<br>不明</td>
                        <td class="ledger-cell" nowrap>（マイクロフィルム）<br>竣工図<br>設計計算書、材料計算書<br>塗装面積計算書</td>
                        <td class="ledger-cell" nowrap>（竣工図書）<br>竣工図<br>塗装面積計算書</td>
                      </tr>
                    </tbody>
                  </v-table>
                </div>
              </v-col>
              <v-col md="4" cols="14">
                <div>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="3" class="text-center" nowrap style="border: 1px solid #dedede;">下部構造</th>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>部材・項目</th>
                        <th class="text-center ledger-cell" nowrap>材種</th>
                        <th class="text-center ledger-cell" nowrap>細部構造</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>橋脚P1 躯体</th>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>形式: 円柱橋脚</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>寸法: Φ609.6 × 4718m</td>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>橋脚P1 基礎</th>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>RC</td>
                        <td class="ledger-cell" nowrap>形式: 杭基礎</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>寸法: Φ300 × 12.0m × 4本</td>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>橋脚P2 躯体</th>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>形式: 円柱橋脚</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>寸法: Φ609.6 × 4718m</td>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>橋脚P2 基礎</th>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>RC</td>
                        <td class="ledger-cell" nowrap>形式: 杭基礎</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>寸法: Φ300 × 12.0m × 4本</td>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>階段取付部<br>基礎<br>P3</th>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>RC</td>
                        <td class="ledger-cell" nowrap>形式: 直接基礎</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>寸法: 1.90 × 2.00 × 0.60</td>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>階段取付部<br>基礎<br>P4</th>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>RC</td>
                        <td class="ledger-cell" nowrap>形式: 直接基礎</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>寸法: 1.90 × 2.00 × 0.60</td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>落橋防止装置</th>
                        <td class="text-center ledger-cell" nowrap>銅</td>
                        <td class="ledger-cell" nowrap>形式: 桁連結</td>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>排水設備<br>（管）</th>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>VU</td>
                        <td class="ledger-cell" nowrap>寸法: Φ75 Φ100</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>延長: 1.000ｍ</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="5" class="text-center ledger-cell" nowrap>一基当り上部工反力</th>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>基礎番号</th>
                        <th colspan="2" class="text-center ledger-cell" nowrap>常時</th>
                        <th colspan="2" class="text-center ledger-cell" nowrap>地震時</th>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>鉛直</th>
                        <th class="text-center ledger-cell" nowrap>水平</th>
                        <th class="text-center ledger-cell" nowrap>鉛直</th>
                        <th class="text-center ledger-cell" nowrap>水平</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="ledger-cell" nowrap>P1</td>
                        <td class="ledger-cell" nowrap>18.97t</td>
                        <td class="ledger-cell" nowrap>0.00t</td>
                        <td class="ledger-cell" nowrap>13.23t</td>
                        <td class="ledger-cell" nowrap>2.65t</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>P2</td>
                        <td class="ledger-cell" nowrap>18.97t</td>
                        <td class="ledger-cell" nowrap>0.00t</td>
                        <td class="ledger-cell" nowrap>13.23t</td>
                        <td class="ledger-cell" nowrap>2.65t</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>P3</td>
                        <td class="ledger-cell" nowrap>5.42t</td>
                        <td class="ledger-cell" nowrap>0.00t</td>
                        <td class="ledger-cell" nowrap>2.60t</td>
                        <td class="ledger-cell" nowrap>1.04t</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>P4</td>
                        <td class="ledger-cell" nowrap>5.42t</td>
                        <td class="ledger-cell" nowrap>0.00t</td>
                        <td class="ledger-cell" nowrap>2.60t</td>
                        <td class="ledger-cell" nowrap>1.04t</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>地質</th>
                        <th colspan="3" class="text-center ledger-cell" nowrap>主要材料</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowspan="9" class="text-center ledger-cell">
                          <img src="../../assets/img/dmg/fbg1view2.jpg">
                        </td>
                        <th class="text-center ledger-cell" nowrap>材種・項目</th>
                        <th class="text-center ledger-cell" nowrap>数量</th>
                        <th class="text-center ledger-cell" nowrap>摘要</th>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>杭 銅</th>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>杭 RC</th>
                        <td class="ledger-cell" nowrap>8本</td>
                        <td class="ledger-cell" nowrap>P1, P2</td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>杭 PC</th>
                        <td class="ledger-cell" nowrap> 本</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>銅材</th>
                        <td class="ledger-cell" nowrap>不明 t</td>
                        <td class="ledger-cell" nowrap>不明</td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>鉄筋</th>
                        <td class="ledger-cell" nowrap>0.70t</td>
                        <td class="ledger-cell" nowrap>不明</td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>ｺﾝｸﾘｰﾄ</th>
                        <td class="ledger-cell" nowrap>16.8㎡</td>
                        <td class="ledger-cell" nowrap>不明</td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>石材</th>
                        <td class="ledger-cell" nowrap>5.3㎡</td>
                        <td class="ledger-cell" nowrap>割栗</td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>木材</th>
                        <td class="ledger-cell" nowrap>㎡</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="5" class="text-center ledger-cell" nowrap>その他</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th rowspan="3" class="ledger-cell" nowrap>照明施設</th>
                        <th rowspan="2" class="ledger-cell" nowrap>1970年</th>
                        <td class="ledger-cell" nowrap>形式（W） HF-300</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>基数（灯数） 2基(2灯)</td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>01月</th>
                        <td class="ledger-cell" nowrap>施設業者（灯具メーカー）<br>不明</td>
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

<script lang="ts">
export default defineComponent({
  data() {
    return {
    }
  },
  mounted: function () {
    console.log("mounted ledger1");
  },
  methods: {
  },
});
</script>

<style scoped>
.ledger-cell {
  font-size: xx-small !important;
  border: 1px solid #dedede;
}
</style>