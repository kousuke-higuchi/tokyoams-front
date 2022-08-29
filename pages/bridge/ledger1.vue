<template>
  <v-row>
    <v-col v-bind:md="child_extend?3:1" cols="12">
    <!-- <p> {{ child_extend }}</p> -->
      <bridge-side-card-details @isExtend='child_extend = $event' />
    </v-col>
    <v-col v-bind:md="child_extend?9:11" cols="12">
      <v-card elevation="3">
        <v-card-title>
          <v-row class="justify-start mt-1 ml-3">橋梁台帳 東京都
            <!-- <p  style =" position: absolute; right: 10px;">
              <v-btn v-on:click="clickDownloadLedger()" color="primary">
                橋梁台帳
              </v-btn>
            </p> -->
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col md="4" cols="8">
              <div>
                <v-table density="compact" class="ledger">
                  <thead>
                    <tr>
                      <th colspan="2">一般事項</th>
                    </tr>
                    <tr>
                      <th class="text-left">項目</th>
                      <th class="text-left">内容</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>橋名</th>
                      <td colspan="2">鎌倉橋</td>
                    </tr>
                    <tr>
                      <th>フリガナ</th>
                      <td>カマクラバシ</td>
                    </tr>
                    <tr>
                      <th rowspan="2">位置</th>
                      <td>自: 千代田区 内神田 1丁目 地内</td>
                    </tr>
                    <tr>
                      <td>至: 千代田区 大手町 1丁目 地内</td>
                    </tr>
                    <tr>
                      <th rowspan="3">路線名</th>
                      <td>特例都道町有楽町線402号</td>
                    </tr>
                    <tr>
                      <td>都市計画街路: 特例都道町有楽町線402号</td>
                    </tr>
                    <tr>
                      <td>通常名: ---</td>
                    </tr>
                    <tr>
                      <th rowspan="6">橋下種類</th>
                      <td>■ 河川 □ 道路 □ 鉄道 □ 公園 □ その他</td>
                    </tr>
                    <tr>
                      <td>河川： 日本橋川</td>
                    </tr>
                    <tr>
                      <td>道路：</td>
                    </tr>
                    <tr>
                      <td>鉄道：</td>
                    </tr>
                    <tr>
                      <td>公園：</td>
                    </tr>
                    <tr>
                      <td>その他：</td>
                    </tr>
                    <tr>
                      <th>橋格</th>
                      <td>1等橋</td>
                    </tr>
                    <tr>
                      <th>(示方書)</th>
                      <td>T15</td>
                    </tr>
                    <tr>
                      <th>設計震度</th>
                      <td>KH= 0 KV= 0</td>
                    </tr>
                    <tr>
                      <th>橋長</th>
                      <td>30.175 ｍ</td>
                    </tr>
                    <tr>
                      <th>総格員</th>
                      <td>22.98 ｍ</td>
                    </tr>
                    <tr>
                      <th>有効格員</th>
                      <td>車道: 16.6 ｍ 歩道: 282.70 ｍ 合計: 22 ｍ</td>
                    </tr>
                    <tr>
                      <th>橋面積</th>
                      <td>693.4 ㎡</td>
                    </tr>
                    <tr>
                      <th>地盤幅</th>
                      <td>2849.0 ㎝</td>
                    </tr>
                    <tr>
                      <th rowspan="2">平面線形</th>
                      <td>■ 直 □ 斜 □ 曲 □ 多角(多心曲)</td>
                    </tr>
                    <tr>
                      <td>斜角 α = 90° 曲事半径 R= ∞ ｍ</td>
                    </tr>
                    <tr>
                      <th>縦断勾配</th>
                      <td>橋梁部: 1.67 % 取付部: 3.33 %</td>
                    </tr>
                    <tr>
                      <th>横断勾配</th>
                      <td>車道: 2 % 歩道: 2 %</td>
                    </tr>
                    <tr>
                      <th rowspan="3">規定限界</th>
                      <td>規定ケタ下端高: 不明 ｍ</td>
                    </tr>
                    <tr>
                      <td>規定制限幅: 不明 ｍ</td>
                    </tr>
                    <tr>
                      <td>規定ケタ下端空間高: 不明 ｍ</td>
                    </tr>
                    <tr>
                      <th rowspan="5">橋高</th>
                      <td>中央ケタ下端高: AP 不明 ｍ</td>
                    </tr>
                    <tr>
                      <td>最低ケタ下端高: AP 不明 ｍ</td>
                    </tr>
                    <tr>
                      <td>最高水位: AP 不明 ｍ</td>
                    </tr>
                    <tr>
                      <td>最低河川床高: AP 不明 ｍ</td>
                    </tr>
                    <tr>
                      <td>橋下路面高: AP 不明 ｍ</td>
                    </tr>
                    <tr>
                      <th rowspan="2">橋台敷</th>
                      <td>右岸上流側: ㎡ 左岸上流側: ㎡</td>
                    </tr>
                    <tr>
                      <td>右岸下流側: ㎡ 左岸上流側: ㎡</td>
                    </tr>
                    <tr>
                      <th rowspan="2">施工年月</th>
                      <td>着工: 1928 年 1 月</td>
                    </tr>
                    <tr>
                      <td>しゅん工: 1929 年 3 月</td>
                    </tr>
                    <tr>
                      <th rowspan="3">記事</th>
                      <td>(マイクロ): ■ 有 □ 無 □ 不明 </td>
                    </tr>
                    <tr>
                      <td>(竣工図): □ 有 ■ 無 □ 不明 </td>
                    </tr>
                    <tr>
                      <td>(計算書): □ 有 □ 無 □ 不明 </td>
                    </tr>
                    <tr>
                      <th rowspan="2">管理区分</th>
                      <td>都管理橋梁</td>
                    </tr>
                    <tr>
                      <td></td>
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
                      <th colspan="4">上部構造</th>
                    </tr>
                    <tr>
                      <th></th>
                      <th>主径間</th>
                      <th>側径間</th>
                      <th>取付道路</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>延長</th>
                      <td>30.175 ｍ</td>
                      <td> ｍ</td>
                      <td>右岸取付: ｍ</td>
                    </tr>
                    <tr>
                      <th rowspan="7">径間材 (支間)</th>
                      <td>1径間</td>
                      <td> 径間</td>
                      <td>陸橋部: ｍ</td>
                    </tr>
                    <tr>
                      <td rowspan="6">30.175</td>
                      <td rowspan="6"></td>
                      <td>盛土部: ｍ</td>
                    </tr>
                    <tr>
                      <td>階段部: ｍ</td>
                    </tr>
                    <tr>
                      <td>左岸取付 ｍ</td>
                    </tr>
                    <tr>
                      <td>階段部 ｍ</td>
                    </tr>
                    <tr>
                      <td>盛土部 ｍ</td>
                    </tr>
                    <tr>
                      <td> 階段部 ｍ </td>
                    </tr>
                    <tr>
                      <th>路面位置</th>
                      <td>■ 上路 □ 中路 □ 下路</td>
                      <td>□ 上路 □ 中路 □ 下路</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th rowspan="2">タワミ</th>
                      <td>δd= δe=</td>
                      <td>δd= δe=</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>δe/1=</td>
                      <td>δe/1=</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th rowspan="6">構造形式</th>
                      <td>SRC固定アーチ橋</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <thead>
                    <tr>
                      <th rowspan="2"></th>
                      <th colspan="2">主径間</th>
                      <th colspan="2">側径間</th>
                      <th colspan="2">取付道路</th>
                    </tr>
                    <tr>
                      <th>構造</th>
                      <th>材種</th>
                      <th>構造</th>
                      <th>材種</th>
                      <th>構造</th>
                      <th>材種</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th rowspan="3">主桁(横)</th>
                      <td>主ケタ数: 37本</td>
                      <td>SRC</td>
                      <td>主ケタ数: 本</td>
                      <td></td>
                      <td>主ケタ数: 本</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>ケタ高: 1.372 ｍ</td>
                      <td></td>
                      <td>ケタ高: ｍ</td>
                      <td></td>
                      <td>ケタ高: ｍ</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>間隔: 0.61 ｍ</td>
                      <td></td>
                      <td>間隔: ｍ</td>
                      <td></td>
                      <td>間隔: ｍ</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th rowspan="2">床板横桁</th>
                      <td>ケタ高: 1.372 ｍ</td>
                      <td>SRC</td>
                      <td>ケタ高: ｍ</td>
                      <td></td>
                      <td>ケタ高: ｍ</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>間隔: 3.5 ｍ</td>
                      <td></td>
                      <td>間隔: ｍ</td>
                      <td></td>
                      <td>間隔: ｍ</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th rowspan="2">床板縦桁</th>
                      <td>ケタ高: ｍ</td>
                      <td>SRC</td>
                      <td>ケタ高: ｍ</td>
                      <td></td>
                      <td>ケタ高: ｍ</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>間隔: ｍ</td>
                      <td></td>
                      <td>間隔: ｍ</td>
                      <td></td>
                      <td>間隔: ｍ</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>床板車道</th>
                      <td>ts ｍｍ</td>
                      <td></td>
                      <td>ts ｍｍ</td>
                      <td></td>
                      <td>ts ｍｍ</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>床板歩道</th>
                      <td>ts ｍｍ</td>
                      <td></td>
                      <td>ts ｍｍ</td>
                      <td></td>
                      <td>ts ｍｍ</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>舗装車道</th>
                      <td>ts 50 ｍｍ</td>
                      <td>アスファルト</td>
                      <td>ts ｍｍ</td>
                      <td></td>
                      <td>ts ｍｍ</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>舗装歩道</th>
                      <td>ts 10 ｍｍ</td>
                      <td>コンクリート</td>
                      <td>ts ｍｍ</td>
                      <td></td>
                      <td>ts ｍｍ</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>仲縮固定</th>
                      <td>突合せ</td>
                      <td>ゴム</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>仲縮可動</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>支承固定</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>支承可動</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <thead>
                    <tr>
                      <th colspan="5">主要材料</th>
                    </tr>
                    <tr>
                      <th>材料</th>
                      <th>橋梁部</th>
                      <th>取付道路部</th>
                      <th>合計</th>
                      <th>摘用</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>主鋼材</th>
                      <td>不明 t</td>
                      <td>t</td>
                      <td>t</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>鉄筋</th>
                      <td>不明 t</td>
                      <td>t</td>
                      <td>t</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>PC鋼材</th>
                      <td>不明 t</td>
                      <td>t</td>
                      <td>t</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>高構材</th>
                      <td>不明 t</td>
                      <td>t</td>
                      <td>t</td>
                      <td>型式:石造</td>
                    </tr>
                    <tr>
                      <th>コンクリート</th>
                      <td>不明 ㎥</td>
                      <td>㎥</td>
                      <td>㎥</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>アスコン</th>
                      <td>不明 t</td>
                      <td>t</td>
                      <td>t</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>石材</th>
                      <td>不明 ㎥</td>
                      <td>㎥</td>
                      <td>㎥</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>木材</th>
                      <td>不明 ㎥</td>
                      <td>㎥</td>
                      <td>㎥</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>上部死荷重</th>
                      <td>不明 t ( 不明 t/㎥)</td>
                      <td>t ( 不明 t/㎥)</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>記事</th>
                      <td colspan="4">不明</td>
                    </tr>
                    <tr>
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
                      <th colspan="5">下部構造</th>
                    </tr>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>構造形式</th>
                      <th>材種</th>
                      <th>基礎到達層深さ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>橋台</th>
                      <th rowspan="2">筐体</th>
                      <td>形式: 重力式</td>
                      <td rowspan="2">RC</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>(A1)</th>
                      <td>形式寸法: 10973 × 23012 ×9297</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>(A2)</th>
                      <th rowspan="2">基礎</th>
                      <td>形式: 抗基礎(推定)</td>
                      <td rowspan="2">木</td>
                      <td>AP-</td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <td>形式寸法: Φ273 × 7270 × 9297</td>
                      <td>砂層</td>
                    </tr>
                    <tr>
                      <th></th>
                      <th rowspan="2">筐体</th>
                      <td>形式: </td>
                      <td rowspan="2"></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <td>形式寸法: </td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <th rowspan="2">基礎</th>
                      <td>形式: </td>
                      <td rowspan="2"></td>
                      <td>AP-</td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <td>形式寸法:</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th></th>
                      <th rowspan="2">筐体</th>
                      <td>形式: </td>
                      <td rowspan="2"></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <td>形式寸法: </td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <th rowspan="2">基礎</th>
                      <td>形式: </td>
                      <td rowspan="2"></td>
                      <td>AP-</td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <td>形式寸法:</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th></th>
                      <th rowspan="2">筐体</th>
                      <td>形式: </td>
                      <td rowspan="2"></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <td>形式寸法: </td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <th rowspan="2">基礎</th>
                      <td>形式: </td>
                      <td rowspan="2"></td>
                      <td>AP-</td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <td>形式寸法:</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th></th>
                      <th rowspan="2">筐体</th>
                      <td>形式: </td>
                      <td rowspan="2"></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <td>形式寸法: </td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <th rowspan="2">基礎</th>
                      <td>形式: </td>
                      <td rowspan="2"></td>
                      <td>AP-</td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <td>形式寸法:</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th></th>
                      <th rowspan="2">筐体</th>
                      <td>形式: </td>
                      <td rowspan="2"></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <td>形式寸法: </td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <th rowspan="2">基礎</th>
                      <td>形式: </td>
                      <td rowspan="2"></td>
                      <td>AP-</td>
                    </tr>
                    <tr>
                      <th>( )</th>
                      <td>形式寸法:</td>
                      <td></td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <thead>
                    <tr>
                      <th colspan="6">一基当り上部工反力</th>
                    </tr>
                    <tr>
                      <th rowspan="2">基礎番号</th>
                      <th colspan="2">常時</th>
                      <th colspan="2">地震時</th>
                      <th rowspan="2">摘要</th>
                    </tr>
                    <tr>
                      <th>鉛直</th>
                      <th>水平</th>
                      <th>鉛直</th>
                      <th>水平</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A1</td>
                      <td>t</td>
                      <td>t</td>
                      <td>t</td>
                      <td>t</td>
                      <td>不明</td>
                    </tr>
                    <tr>
                      <td>A2</td>
                      <td>t</td>
                      <td>t</td>
                      <td>t</td>
                      <td>t</td>
                      <td>不明</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>t</td>
                      <td>t</td>
                      <td>t</td>
                      <td>t</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>t</td>
                      <td>t</td>
                      <td>t</td>
                      <td>t</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>t</td>
                      <td>t</td>
                      <td>t</td>
                      <td>t</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>t</td>
                      <td>t</td>
                      <td>t</td>
                      <td>t</td>
                      <td></td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <thead>
                    <tr>
                      <th colspan="6">主要材料</th>
                    </tr>
                    <tr>
                      <th></th>
                      <th>橋梁部</th>
                      <th>取付道路部</th>
                      <th>合計</th>
                      <th>摘用</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>鋼抗</th>
                      <td>不明 t</td>
                      <td>t</td>
                      <td>t</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>RC抗</th>
                      <td>不明 本</td>
                      <td>本</td>
                      <td>本</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>PC抗</th>
                      <td>不明 本</td>
                      <td>本</td>
                      <td>本</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>鋼材</th>
                      <td>不明 t</td>
                      <td>t</td>
                      <td>t</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>鉄筋</th>
                      <td>不明 t</td>
                      <td>t</td>
                      <td>t</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>コンクリート</th>
                      <td>不明 ㎥</td>
                      <td>㎥</td>
                      <td>㎥</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>石材</th>
                      <td>不明 ㎥</td>
                      <td>㎥</td>
                      <td>㎥</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>木材</th>
                      <td>不明 ㎥</td>
                      <td>㎥</td>
                      <td>㎥</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>搬入れ長</th>
                      <td>不明 ｍ</td>
                      <td>ｍ</td>
                      <td>0 ｍ</td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>記事</th>
                      <td colspan="4">上方には首都高速都心環状線が横断方向に走っている</td>
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
</template>

<script lang="ts">
/* HACK: setup const tab = ref('note')で tabを'note'に初期化できなかった */
export default defineComponent({
  data() {
    return {
      child_extend:Boolean,
    }
  },
  mounted: function () {
    console.log("mounted ledger1");
  },
  methods: {
    clickDownloadLedger() {
      console.debug('downloadLedger');
    },
  },
});
</script>
