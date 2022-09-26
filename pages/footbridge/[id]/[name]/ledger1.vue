<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' />
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <!-- NOTE: 画面下部のスクロールバーを1つにしたかったが、概略図の調整ができなかった  -->
        <v-card elevation="3">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">横断歩道橋台帳 東京都</v-row>
            <v-row class="justify-end mt-1 mr-3">様式-1</v-row>
          </v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <v-col md="4" cols="8">
                <div>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th colspan="7" class="text-center">
                          一般事項
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th colspan="3">フリガナ</th>
                        <td colspan="4">アオバホドウキョウ</td>
                      </tr>
                      <tr>
                        <th colspan="3">橋名</th>
                        <td colspan="4">青葉歩道橋</td>
                      </tr>
                      <tr>
                        <th rowspan="2" colspan="3">位置</th>
                        <td colspan="4">自: 千代田区 三番町6番14号</td>
                      </tr>
                      <tr>
                        <td colspan="4">至: 千代田区 九段南二丁目1番32号</td>
                      </tr>
                      <tr>
                        <th rowspan="3" colspan="3">路線名</th>
                        <td colspan="4">特例都道 麹町竹平 401号</td>
                      </tr>
                      <tr>
                        <td colspan="4">都市計画街路: 現状1号線</td>
                      </tr>
                      <tr>
                        <td colspan="4">通常道路名: 内堀通り</td>
                      </tr>
                      <tr>
                        <th rowspan="2" colspan="3">地点標</th>
                        <td colspan="4">起点側： （0.90ｋｍ）</td>
                      </tr>
                      <tr>
                        <td colspan="4">終点側： （1.00ｋｍ）</td>
                      </tr>
                      <tr>
                        <th colspan="3">橋下種別<br />（名称）</th>
                        <td colspan="4">道路<br />（内堀通り）</td>
                      </tr>
                      <tr>
                        <th colspan="3">橋格〔人道橋〕<br />（基準・示方書）</th>
                        <td colspan="4">-等橋<br />（立体横断施設設置要領（案））</td>
                      </tr>
                      <tr>
                        <th colspan="3">設計震度</th>
                        <td colspan="4">KH= 0.20 KV= 0.10</td>
                      </tr>
                      <tr>
                        <th colspan="3" class="text-center">項目・種別</th>
                        <th class="text-center">通路部</th>
                        <th class="text-center">階段部</th>
                        <th class="text-center">スロープ</th>
                        <th class="text-center">計</th>
                      </tr>
                      <tr>
                        <th colspan="3">橋長</th>
                        <td>22.28 ｍ</td>
                        <td>21.80 ｍ</td>
                        <td> ｍ</td>
                        <td>44.08 ｍ</td>
                      </tr>
                      <tr>
                        <th colspan="3">総幅員</th>
                        <td>1.90 ｍ</td>
                        <td>1.80 ｍ</td>
                        <td> ｍ</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <th colspan="3">橋面積</th>
                        <td>42.30 ㎡</td>
                        <td>29.20 ㎡</td>
                        <td> ㎡</td>
                        <td>81.50 ㎡</td>
                      </tr>
                      <tr>
                        <th rowspan="8" style="writing-mode: tb-rl;" class="text-center">昇降方式</th>
                        <th colspan="2" class="text-center">方式・項目</th>
                        <th colspan="3" class="text-center">規格</th>
                        <th class="text-center">数量</th>
                      </tr>
                      <tr>
                        <th colspan="2">階段</th>
                        <td colspan="3"><img src="../../../../assets/img/dmg/fbg1type1.jpg"></td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <th colspan="2">押上式</th>
                        <td colspan="3"></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th colspan="2">スロープ<br>（勾玉12%以下）</th>
                        <td colspan="3"></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th colspan="2">エスカレーター</th>
                        <td colspan="3"></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th colspan="2">エレベーター</th>
                        <td colspan="3"></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th rowspan="2" style="writing-mode: tb-rl;" class="text-center">複合</th>
                        <th>スロープ付</th>
                        <td colspan="3"></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>エスカレーター付</th>
                        <td colspan="3"></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th rowspan="4" style="writing-mode: tb-rl;" class="text-center">桁下高（最小部）</th>
                        <th colspan="2">径間番号</th>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th colspan="2">右側車道端</th>
                        <td>5 ｍ</td>
                        <td>ｍ</td>
                        <td>ｍ</td>
                        <td>ｍ</td>
                      </tr>
                      <tr>
                        <th colspan="2">中央部</th>
                        <td>5 ｍ</td>
                        <td>ｍ</td>
                        <td>ｍ</td>
                        <td>ｍ</td>
                      </tr>
                      <tr>
                        <th colspan="2">左側車道端</th>
                        <td>5 ｍ</td>
                        <td>ｍ</td>
                        <td>ｍ</td>
                        <td>ｍ</td>
                      </tr>
                      <tr>
                        <th colspan="3">事業費</th>
                        <td colspan="4">7101000 円</td>
                      </tr>
                      <tr>
                        <th colspan="3">事業名</th>
                        <td colspan="4">横断歩道橋設置工事1-1</td>
                      </tr>
                      <tr>
                        <th rowspan="2" style="writing-mode: tb-rl;" class="text-center">施工年月</th>
                        <th colspan="2">着工</th>
                        <td colspan="4">昭和44年7月</td>
                      </tr>
                      <tr>
                        <th colspan="2">竣工</th>
                        <td colspan="4">昭和45年1月</td>
                      </tr>
                      <tr>
                        <th colspan="3">併用開始年月日</th>
                        <td colspan="4">不明年 月 日</td>
                      </tr>
                      <tr>
                        <th colspan="3">引継ぎ年月日</th>
                        <td colspan="4">昭和45年6月30日</td>
                      </tr>
                      <tr>
                        <th colspan="3">施工業者</th>
                        <td colspan="4">（株）桜田機械工業</td>
                      </tr>
                    </tbody>
                  </v-table>
                </div>
              </v-col>
              <v-col md="4" cols="14">
                <div>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th colspan="12" class="text-center">上部構造</th>
                      </tr>
                      <tr>
                        <th colspan="2" class="text-center">種別・項目</th>
                        <th colspan="3" class="text-center">通路部</th>
                        <th colspan="3" class="text-center">階段部</th>
                        <th colspan="4" class="text-center">スロープ部</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th colspan="2">延長</th>
                        <td colspan="3">22.285</td>
                        <td colspan="3"> 21.800</td>
                        <td colspan="4"></td>
                      </tr>
                      <tr>
                        <th colspan="2">径間割<br> (支間長)</th>
                        <td colspan="3">1径間<br />（20.485m）</td>
                        <td colspan="3">2径間<br />（10.9m, 10.9m）</td>
                        <td colspan="4">径間<br />（ ）</td>
                      </tr>
                      <tr>
                        <th colspan="2">有効幅員</th>
                        <td colspan="3">1,500m</td>
                        <td colspan="3">1,500m</td>
                        <td colspan="4">m</td>
                      </tr>
                      <tr>
                        <th colspan="2">路面位置</th>
                        <td colspan="3">中路</td>
                        <td colspan="3">中路</td>
                        <td colspan="4"></td>
                      </tr>
                      <tr>
                        <th colspan="2">タワミ</th>
                        <td colspan="3">δd= δe=<br />δe/1=</td>
                        <td colspan="3">δd= δe=<br />δe/1=</td>
                        <td colspan="4">δd= δe=<br />δe/1=</td>
                      </tr>
                      <tr>
                        <th colspan="2">構造形式</th>
                        <td colspan="3">中路式単純調Ⅰ桁橋</td>
                        <td colspan="3">中路式単純調Ⅰ桁橋</td>
                        <td colspan="4"></td>
                      </tr>
                      <tr>
                        <th colspan="2" class="text-center">種別・項目</th>
                        <th class="text-center">材種</th>
                        <th colspan="2" class="text-center">細部構造</th>
                        <th class="text-center">材種</th>
                        <th colspan="2" class="text-center">細部構造</th>
                        <th class="text-center">材種</th>
                        <th colspan="3" class="text-center">細部構造</th>
                      </tr>
                      <tr>
                        <th rowspan="3" colspan="2">主桁</th>
                        <td rowspan="3"></td>
                        <th>主桁数</th>
                        <td>2本</td>
                        <td rowspan="3"></td>
                        <th>主桁数</th>
                        <td>2本</td>
                        <td rowspan="3"></td>
                        <th>主桁数</th>
                        <td colspan="2"> 本</td>
                      </tr>
                      <tr>
                        <th>桁高</th>
                        <td>0.800m</td>
                        <th>桁高</th>
                        <td>0.783m</td>
                        <th>桁高</th>
                        <td colspan="2"> m</td>
                      </tr>
                      <tr>
                        <th>間隔</th>
                        <td>1.700m</td>
                        <th>間隔</th>
                        <td>1.650m</td>
                        <th>間隔</th>
                        <td colspan="2"> m</td>
                      </tr>
                      <tr>
                        <th rowspan="2" colspan="2">横桁</th>
                        <td rowspan="2"></td>
                        <th>桁高</th>
                        <td>0.250m</td>
                        <td rowspan="2"></td>
                        <th>桁高</th>
                        <td>0.150m</td>
                        <td rowspan="2"></td>
                        <th>桁高</th>
                        <td colspan="2"> m</td>
                      </tr>
                      <tr>
                        <th>間隔</th>
                        <td>2.000m</td>
                        <th>間隔</th>
                        <td>5.800m</td>
                        <th>間隔</th>
                        <td colspan="2"> m</td>
                      </tr>
                      <tr>
                        <th rowspan="2" colspan="2">縦桁</th>
                        <td rowspan="2"></td>
                        <th>桁高</th>
                        <td> m</td>
                        <td rowspan="2"></td>
                        <th>桁高</th>
                        <td> m</td>
                        <td rowspan="2"></td>
                        <th>桁高</th>
                        <td colspan="2"> m</td>
                      </tr>
                      <tr>
                        <th>間隔</th>
                        <td> m</td>
                        <th>間隔</th>
                        <td> m</td>
                        <th>間隔</th>
                        <td colspan="2"> m</td>
                      </tr>
                      <tr>
                        <th rowspan="2" colspan="2">*1)床版等</th>
                        <td rowspan="2"></td>
                        <th>厚さ</th>
                        <td>t= 3,200m</td>
                        <td rowspan="2"></td>
                        <th>厚さ</th>
                        <td>t= 3,200m</td>
                        <td rowspan="2"></td>
                        <th>厚さ</th>
                        <td colspan="2">t= m</td>
                      </tr>
                      <tr>
                        <th>形式</th>
                        <td>ﾃﾞｯｷﾌﾟﾚｰﾄ</td>
                        <th>形式</th>
                        <td>銅床版</td>
                        <th>形式</th>
                        <td colspan="2"></td>
                      </tr>
                      <tr>
                        <th rowspan="7" class="text-center vertical">その他</th>
                        <th rowspan="3">舗装</th>
                        <td rowspan="3">ｶﾗｰﾁｯﾌﾟ</td>
                        <th>厚さ</th>
                        <td>t= 10,000m</td>
                        <td rowspan="3">ｶﾗｰﾁｯﾌﾟ</td>
                        <th>厚さ</th>
                        <td>t= 10,000m</td>
                        <td rowspan="3"></td>
                        <th>厚さ</th>
                        <td colspan="2">t= m</td>
                      </tr>
                      <tr>
                        <th>面積</th>
                        <td>33.40㎡</td>
                        <th>面積</th>
                        <td>32.700㎡</td>
                        <th>面積</th>
                        <td colspan="2"> ㎡</td>
                      </tr>
                      <tr>
                        <th>防水工</th>
                        <td>無</td>
                        <th>防水工</th>
                        <td>無</td>
                        <th>防水工</th>
                        <td colspan="2"></td>
                      </tr>
                      <tr>
                        <th rowspan="2">排水股備<br />（桝）</th>
                        <td rowspan="2"></td>
                        <th>寸法</th>
                        <td>210</td>
                        <td rowspan="2"></td>
                        <th>寸法</th>
                        <td></td>
                        <td rowspan="2"></td>
                        <th>寸法</th>
                        <td colspan="2"></td>
                      </tr>
                      <tr>
                        <th>個数</th>
                        <td>4個</td>
                        <th>個数</th>
                        <td> 個</td>
                        <th>個数</th>
                        <td colspan="2"> 個</td>
                      </tr>
                      <tr>
                        <th>伸縮装置</th>
                        <td></td>
                        <th>形式</th>
                        <td> </td>
                        <td></td>
                        <th>形式</th>
                        <td> </td>
                        <td></td>
                        <th>形式</th>
                        <td colspan="2"> </td>
                      </tr>
                      <tr>
                        <th>支承</th>
                        <td></td>
                        <th>形式</th>
                        <td>平板支承</td>
                        <td></td>
                        <th>形式</th>
                        <td>ピン支承</td>
                        <td></td>
                        <th>形式</th>
                        <td colspan="2"> </td>
                      </tr>
                      <tr>
                        <th rowspan="3" style="writing-mode: tb-rl;" class="text-center">主要材料</th>
                        <th class="text-center">項目・材種</th>
                        <th class="text-center">主銅材</th>
                        <th class="text-center">鉄筋</th>
                        <th class="text-center">PC銅材</th>
                        <th class="text-center">ｺﾝｸﾘｰﾄ</th>
                        <th class="text-center">アスコン</th>
                        <th class="text-center">石材</th>
                        <th class="text-center">木材</th>
                        <th class="text-center">高欄材</th>
                        <th class="text-center">目隠板</th>
                        <th class="text-center">落下物防止</th>
                      </tr>
                      <tr>
                        <th>数量</th>
                        <td>16,700t</td>
                        <td>不明 t</td>
                        <td> t</td>
                        <td>1,900㎡</td>
                        <td>25,500t</td>
                        <td></td>
                        <td></td>
                        <td>2,100t</td>
                        <td>9,350㎡</td>
                        <td></td>
                      </tr>
                      <tr>
                        <th>摘要</th>
                        <td></td>
                        <td>不明</td>
                        <td></td>
                        <td>不明</td>
                        <td>不明</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>ﾌｧｲﾛﾝ</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th colspan="12" class="text-center">概略図</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <v-card>
                          <v-card-text>
                            <v-row>
                              <v-container>
                                <v-img src="../../../../assets/img/dmg/fbg1view1.jpg"></v-img>
                              </v-container>
                            </v-row>
                          </v-card-text>
                        </v-card>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <tbody>
                      <tr>
                        <th scope="row" class="text-center">記事</th>
                        <td>架設工法<br>不明</td>
                        <td>（マイクロフィルム）<br>竣工図<br>設計計算書、材料計算書<br>塗装面積計算書</td>
                        <td>（竣工図書）<br>竣工図<br>塗装面積計算書</td>
                      </tr>
                    </tbody>
                  </v-table>
                </div>
              </v-col>
              <v-col md="4" cols="14">
                <div>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th colspan="14" class="text-center">下部構造
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th colspan="2" class="text-center">部材・項目</th>
                        <th class="text-center">材種</th>
                        <th colspan="10" class="text-center">細部構造</th>
                      </tr>
                      <tr>
                        <th rowspan="4">
                          <div style="writing-mode: tb-rl;">橋脚</div>P1
                        </th>
                        <th rowspan="2" class="text-center">躯体</th>
                        <td rowspan="2" class="text-center"></td>
                        <th class="text-center">形式</th>
                        <td colspan="9">円柱橋脚</td>
                      </tr>
                      <tr>
                        <th class="text-center">寸法</th>
                        <td colspan="9">Φ609.6 × 4718m</td>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center">基礎</th>
                        <td rowspan="2" class="text-center">RC</td>
                        <th class="text-center">形式</th>
                        <td colspan="9">杭基礎</td>
                      </tr>
                      <tr>
                        <th class="text-center">寸法</th>
                        <td colspan="9">Φ300 × 12.0m × 4本</td>
                      </tr>
                      <tr>
                        <th rowspan="4">
                          <div class="text-center" style="writing-mode: tb-rl;">橋脚</div>P2
                        </th>
                        <th rowspan="2" class="text-center">躯体</th>
                        <td rowspan="2" class="text-center"></td>
                        <th class="text-center">形式</th>
                        <td colspan="9">円柱橋脚</td>
                      </tr>
                      <tr>
                        <th class="text-center">寸法</th>
                        <td colspan="9">Φ609.6 × 4718m</td>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center">基礎</th>
                        <td rowspan="2" class="text-center">RC</td>
                        <th class="text-center">形式</th>
                        <td colspan="9">杭基礎</td>
                      </tr>
                      <tr>
                        <th class="text-center">寸法</th>
                        <td colspan="9">Φ300 × 12.0m × 4本</td>
                      </tr>
                      <tr>
                        <th rowspan="2" colspan="2" class="text-center">階段取付部<br>基礎<br>P3</th>
                        <td rowspan="2" class="text-center">RC</td>
                        <th class="text-center">形式</th>
                        <td colspan="9">直接基礎</td>
                      </tr>
                      <tr>
                        <th class="text-center">寸法</th>
                        <td colspan="9">1.90 × 2.00 × 0.60</td>
                      </tr>
                      <tr>
                        <th rowspan="2" colspan="2" class="text-center">階段取付部<br>基礎<br>P4</th>
                        <td rowspan="2" class="text-center">RC</td>
                        <th class="text-center">形式</th>
                        <td colspan="9">直接基礎</td>
                      </tr>
                      <tr>
                        <th class="text-center">寸法</th>
                        <td colspan="9">1.90 × 2.00 × 0.60</td>
                      </tr>
                      <tr>
                        <th colspan="2" class="text-center">落橋防止装置</th>
                        <td class="text-center">銅</td>
                        <th class="text-center">形式</th>
                        <td colspan="9">桁連結</td>
                      </tr>
                      <tr>
                        <th rowspan="2" colspan="2" class="text-center">排水設備<br>（管）</th>
                        <td rowspan="2" class="text-center">VU</td>
                        <th class="text-center">寸法</th>
                        <td colspan="9">Φ75 Φ100</td>
                      </tr>
                      <tr>
                        <th class="text-center">延長</th>
                        <td colspan="9">1.000ｍ</td>
                      </tr>
                      <tr>
                        <th rowspan="6" class="text-center vertical">一基当り上部工反力</th>
                        <th rowspan="2" colspan="2" class="text-center">基礎番号</th>
                        <th colspan="4" class="text-center">常時</th>
                        <th colspan="4" class="text-center">地震時</th>
                      </tr>
                      <tr>
                        <th colspan="2" class="text-center">鉛直</th>
                        <th colspan="2" class="text-center">水平</th>
                        <th colspan="2" class="text-center">鉛直</th>
                        <th colspan="2" class="text-center">水平</th>
                      </tr>
                      <tr>
                        <th colspan="2">P1</th>
                        <td colspan="2">18.97t</td>
                        <td colspan="2">0.00t</td>
                        <td colspan="2">13.23t</td>
                        <td colspan="2">2.65t</td>
                      </tr>
                      <tr>
                        <th colspan="2">P2</th>
                        <td colspan="2">18.97t</td>
                        <td colspan="2">0.00t</td>
                        <td colspan="2">13.23t</td>
                        <td colspan="2">2.65t</td>
                      </tr>
                      <tr>
                        <th colspan="2">P3</th>
                        <td colspan="2">5.42t</td>
                        <td colspan="2">0.00t</td>
                        <td colspan="2">2.60t</td>
                        <td colspan="2">1.04t</td>
                      </tr>
                      <tr>
                        <th  colspan="2">P4</th>
                        <td colspan="2">5.42t</td>
                        <td colspan="2">0.00t</td>
                        <td colspan="2">2.60t</td>
                        <td colspan="2">1.04t</td>
                      </tr>
                      <tr>
                        <th colspan="4" class="text-center">地質</th>
                        <th colspan="8" class="text-center">主要材料</th>
                      </tr>
                      <tr>
                        <td  rowspan="9" colspan="4" class="text-center">
                          <v-container>
                          <img src="../../../../assets/img/dmg/fbg1view2.jpg">
                          </v-container>
                        </td>
                        <th colspan="4" class="text-center">材種・項目</th>
                        <th colspan="2" class="text-center">数量</th>
                        <th colspan="2" class="text-center">摘要</th>
                      </tr>
                      <tr>
                        <th rowspan="3">杭</th>
                        <th colspan="3">銅</th>
                        <td colspan="2">t</td>
                        <td colspan="2"></td>
                      </tr>
                      <tr>
                        <th colspan="3">RC</th>
                        <td colspan="2">8本</td>
                        <td colspan="2">P1, P2</td>
                      </tr>
                      <tr>
                        <th colspan="3">PC</th>
                        <td colspan="2"> 本</td>
                        <td colspan="2"></td>
                      </tr>
                      <tr>
                        <th colspan="4">銅材</th>
                        <td colspan="2">不明 t</td>
                        <td colspan="2">不明</td>
                      </tr>
                      <tr>
                        <th colspan="4">鉄筋</th>
                        <td colspan="2">0.70t</td>
                        <td colspan="2">不明</td>
                      </tr>
                      <tr>
                        <th colspan="4">ｺﾝｸﾘｰﾄ</th>
                        <td colspan="2">16.8㎡</td>
                        <td colspan="2">不明</td>
                      </tr>
                      <tr>
                        <th colspan="4">石材</th>
                        <td colspan="2">5.3㎡</td>
                        <td colspan="2">割栗</td>
                      </tr>
                      <tr>
                        <th colspan="4">木材</th>
                        <td colspan="2">㎡</td>
                        <td colspan="2"></td>
                      </tr>
                      <tr>
                        <th colspan="15" class="text-center">その他</th>
                      </tr>
                      <tr>
                        <th colspan="2" rowspan="3">照明施設</th>
                        <th rowspan="2">1970年</th>
                        <td colspan="10">形式（W） HF-300</td>
                      </tr>
                      <tr>
                        <td colspan="10">基数（灯数） 2基(2灯)</td>
                      </tr>
                      <tr>
                        <th>01月</th>
                        <td colspan="10">施設業者（灯具メーカー）<br>不明</td>
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

<script lang="ts" setup>
const child_extend = ref(true);
const onDownloadLedgerClick = () => {
  console.debug('downloadLedger');
};
</script>