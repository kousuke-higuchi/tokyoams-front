<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">橋梁台帳 東京都</v-row>
            <v-row class="justify-end mt-1 mr-3">鎌倉橋 No.01110010-0</v-row>
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
                      <tr>
                        <th class="text-left ledger-cell">項目</th>
                        <th class="text-left ledger-cell">内容</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <!-- TODO: 採用されるかわからないのでリテラルで実装 -->
                        <th nowrap class="ledger-cell">橋名</th>
                        <td colspan="2" nowrap class="ledger-cell">鎌倉橋</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">フリガナ</th>
                        <td nowrap class="ledger-cell">カマクラバシ</td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">位置</th>
                        <td nowrap class="ledger-cell">自: 千代田区 内神田 1丁目 地内</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">至: 千代田区 大手町 1丁目 地内</td>
                      </tr>
                      <tr>
                        <th rowspan="3" nowrap class="ledger-cell">路線名</th>
                        <td nowrap class="ledger-cell">特例都道町有楽町線402号</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">都市計画街路: 特例都道町有楽町線402号</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">通常名: ---</td>
                      </tr>
                      <tr>
                        <th rowspan="6" nowrap class="ledger-cell">橋下種類</th>
                        <td nowrap class="ledger-cell">■ 河川 □ 道路 □ 鉄道 □ 公園 □ その他</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">河川： 日本橋川</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">道路：</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">鉄道：</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">公園：</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">その他：</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">橋格</th>
                        <td class="text-center ledger-cell" nowrap>1等橋</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">(示方書)</th>
                        <td nowrap class="ledger-cell">T15</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">設計震度</th>
                        <td nowrap class="ledger-cell">KH= 0 KV= 0</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">橋長</th>
                        <td nowrap class="ledger-cell">30.175 ｍ</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">総格員</th>
                        <td nowrap class="ledger-cell">22.98 ｍ</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">有効格員</th>
                        <td nowrap class="ledger-cell">車道: 16.6 ｍ 歩道: 282.70 ｍ 合計: 22 ｍ</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">橋面積</th>
                        <td nowrap class="ledger-cell">693.4 ㎡</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">地盤幅</th>
                        <td nowrap class="ledger-cell">2849.0 ㎝</td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">平面線形</th>
                        <td nowrap class="ledger-cell">■ 直 □ 斜 □ 曲 □ 多角(多心曲)</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">斜角 α = 90° 曲事半径 R= ∞ ｍ</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">縦断勾配</th>
                        <td nowrap class="ledger-cell">橋梁部: 1.67 % 取付部: 3.33 %</td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">横断勾配</th>
                        <td nowrap class="ledger-cell">車道: 2 % 歩道: 2 %</td>
                      </tr>
                      <tr>
                        <th rowspan="3" nowrap class="ledger-cell">規定限界</th>
                        <td nowrap class="ledger-cell">規定ケタ下端高: 不明 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">規定制限幅: 不明 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">規定ケタ下端空間高: 不明 ｍ</td>
                      </tr>
                      <tr>
                        <th rowspan="5" nowrap class="ledger-cell">橋高</th>
                        <td nowrap class="ledger-cell">中央ケタ下端高: AP 不明 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">最低ケタ下端高: AP 不明 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">最高水位: AP 不明 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">最低河川床高: AP 不明 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">橋下路面高: AP 不明 ｍ</td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">橋台敷</th>
                        <td nowrap class="ledger-cell">右岸上流側: ㎡ 左岸上流側: ㎡</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">右岸下流側: ㎡ 左岸上流側: ㎡</td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">施工年月</th>
                        <td nowrap class="ledger-cell">着工: 1928 年 1 月</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">しゅん工: 1929 年 3 月</td>
                      </tr>
                      <tr>
                        <th rowspan="3" nowrap class="ledger-cell">記事</th>
                        <td nowrap class="ledger-cell">(マイクロ): ■ 有 □ 無 □ 不明 </td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">(竣工図): □ 有 ■ 無 □ 不明 </td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">(計算書): □ 有 □ 無 □ 不明 </td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">管理区分</th>
                        <td nowrap class="ledger-cell">都管理橋梁</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell"></td>
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
                        <th class="text-center ledger-cell" nowrap></th>
                        <th class="text-center ledger-cell" nowrap>主径間</th>
                        <th class="text-center ledger-cell" nowrap>側径間</th>
                        <th class="text-center ledger-cell" nowrap>取付道路</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th nowrap class="ledger-cell">延長</th>
                        <td nowrap class="ledger-cell">30.175 ｍ</td>
                        <td nowrap class="ledger-cell"> ｍ</td>
                        <td nowrap class="ledger-cell">右岸取付: ｍ</td>
                      </tr>
                      <tr>
                        <th rowspan="7" nowrap class="ledger-cell">径間材 (支間)</th>
                        <td nowrap class="ledger-cell">1径間</td>
                        <td nowrap class="ledger-cell"> 径間</td>
                        <td nowrap class="ledger-cell">陸橋部: ｍ</td>
                      </tr>
                      <tr>
                        <td rowspan="6" nowrap class="ledger-cell">30.175</td>
                        <td rowspan="6" nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell">盛土部: ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">階段部: ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">左岸取付 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">階段部 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">盛土部 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell"> 階段部 ｍ </td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">路面位置</th>
                        <td nowrap class="ledger-cell">■ 上路 □ 中路 □ 下路</td>
                        <td nowrap class="ledger-cell">□ 上路 □ 中路 □ 下路</td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <th rowspan="2" nowrap class="ledger-cell">タワミ</th>
                        <td nowrap class="ledger-cell">δd= δe=</td>
                        <td nowrap class="ledger-cell">δd= δe=</td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">δe/1=</td>
                        <td nowrap class="ledger-cell">δe/1=</td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <th rowspan="6" nowrap class="ledger-cell">構造形式</th>
                        <td nowrap class="ledger-cell">SRC固定アーチ橋</td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th rowspan="2" class="text-center ledger-cell" nowrap></th>
                        <th colspan="2" class="text-center ledger-cell" nowrap>主径間</th>
                        <th colspan="2" class="text-center ledger-cell" nowrap>側径間</th>
                        <th colspan="2" class="text-center ledger-cell" nowrap>取付道路</th>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>構造</th>
                        <th class="text-center ledger-cell" nowrap>材種</th>
                        <th class="text-center ledger-cell" nowrap>構造</th>
                        <th class="text-center ledger-cell" nowrap>材種</th>
                        <th class="text-center ledger-cell" nowrap>構造</th>
                        <th class="text-center ledger-cell" nowrap>材種</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th rowspan="3" class="text-center ledger-cell" nowrap>主桁(横)</th>
                        <td class="ledger-cell" nowrap>主ケタ数: 37本</td>
                        <td class="ledger-cell" nowrap>SRC</td>
                        <td class="ledger-cell" nowrap>主ケタ数: 本</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>主ケタ数: 本</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>ケタ高: 1.372 ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ケタ高: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ケタ高: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>間隔: 0.61 ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>間隔: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>間隔: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th rowspan="2" class="ledger-cell" nowrap>床板横桁</th>
                        <td class="ledger-cell" nowrap>ケタ高: 1.372 ｍ</td>
                        <td class="ledger-cell" nowrap>SRC</td>
                        <td class="ledger-cell" nowrap>ケタ高: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ケタ高: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>間隔: 3.5 ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>間隔: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>間隔: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th rowspan="2" class="ledger-cell" nowrap>床板縦桁</th>
                        <td class="ledger-cell" nowrap>ケタ高: ｍ</td>
                        <td class="ledger-cell" nowrap>SRC</td>
                        <td class="ledger-cell" nowrap>ケタ高: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ケタ高: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>間隔: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>間隔: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>間隔: ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>床板車道</th>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>床板歩道</th>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>舗装車道</th>
                        <td class="ledger-cell" nowrap>ts 50 ｍｍ</td>
                        <td class="ledger-cell" nowrap>アスファルト</td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>舗装歩道</th>
                        <td class="ledger-cell" nowrap>ts 10 ｍｍ</td>
                        <td class="ledger-cell" nowrap>コンクリート</td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>仲縮固定</th>
                        <td class="ledger-cell" nowrap>突合せ</td>
                        <td class="ledger-cell" nowrap>ゴム</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>仲縮可動</th>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>支承固定</th>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>支承可動</th>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="5" class="text-center ledger-cell" nowrap>主要材料</th>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>材料</th>
                        <th class="text-center ledger-cell" nowrap>橋梁部</th>
                        <th class="text-center ledger-cell" nowrap>取付道路部</th>
                        <th class="text-center ledger-cell" nowrap>合計</th>
                        <th class="text-center ledger-cell" nowrap>摘用</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="ledger-cell" nowrap>主鋼材</th>
                        <td class="ledger-cell" nowrap>不明 t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>鉄筋</th>
                        <td class="ledger-cell" nowrap>不明 t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>PC鋼材</th>
                        <td class="ledger-cell" nowrap>不明 t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>高構材</th>
                        <td class="ledger-cell" nowrap>不明 t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>型式:石造</td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>コンクリート</th>
                        <td class="ledger-cell" nowrap>不明 ㎥</td>
                        <td class="ledger-cell" nowrap>㎥</td>
                        <td class="ledger-cell" nowrap>㎥</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>アスコン</th>
                        <td class="ledger-cell" nowrap>不明 t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>石材</th>
                        <td class="ledger-cell" nowrap>不明 ㎥</td>
                        <td class="ledger-cell" nowrap>㎥</td>
                        <td class="ledger-cell" nowrap>㎥</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>木材</th>
                        <td class="ledger-cell" nowrap>不明 ㎥</td>
                        <td class="ledger-cell" nowrap>㎥</td>
                        <td class="ledger-cell" nowrap>㎥</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>上部死荷重</th>
                        <td class="ledger-cell" nowrap>不明 t ( 不明 t/㎥)</td>
                        <td class="ledger-cell" nowrap>t ( 不明 t/㎥)</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">記事</th>
                        <td colspan="4" nowrap class="ledger-cell">不明</td>
                      </tr>
                      <tr>
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
                        <th colspan="5" class="text-center" nowrap style="border: 1px solid #dedede;">下部構造</th>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap></th>
                        <th class="text-center ledger-cell" nowrap></th>
                        <th class="text-center ledger-cell" nowrap>構造形式</th>
                        <th class="text-center ledger-cell" nowrap>材種</th>
                        <th class="text-center ledger-cell" nowrap>基礎到達層深さ</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>橋台</th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>筐体</th>
                        <td class="ledger-cell" nowrap>形式: 重力式</td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>RC</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>(A1)</th>
                        <td class="ledger-cell" nowrap>形式寸法: 10973 × 23012 ×9297</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>(A2)</th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>基礎</th>
                        <td class="ledger-cell" nowrap>形式: 抗基礎(推定)</td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>木</td>
                        <td class="ledger-cell" nowrap>AP-</td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <td class="ledger-cell" nowrap>形式寸法: Φ273 × 7270 × 9297</td>
                        <td class="ledger-cell" nowrap>砂層</td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap></th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>筐体</th>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <td class="ledger-cell" nowrap>形式寸法: </td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>基礎</th>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>AP-</td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <td class="ledger-cell" nowrap>形式寸法:</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap></th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>筐体</th>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <td class="ledger-cell" nowrap>形式寸法: </td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>基礎</th>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>AP-</td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <td class="ledger-cell" nowrap>形式寸法:</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap></th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>筐体</th>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <td class="ledger-cell" nowrap>形式寸法: </td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>基礎</th>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>AP-</td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <td class="ledger-cell" nowrap>形式寸法:</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap></th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>筐体</th>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <td class="ledger-cell" nowrap>形式寸法: </td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>基礎</th>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>AP-</td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <td class="ledger-cell" nowrap>形式寸法:</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap></th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>筐体</th>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <td class="ledger-cell" nowrap>形式寸法: </td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>基礎</th>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>AP-</td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap>( )</th>
                        <td class="ledger-cell" nowrap>形式寸法:</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="6" class="text-center ledger-cell" nowrap>一基当り上部工反力</th>
                      </tr>
                      <tr>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>基礎番号</th>
                        <th colspan="2" class="text-center ledger-cell" nowrap>常時</th>
                        <th colspan="2" class="text-center ledger-cell" nowrap>地震時</th>
                        <th rowspan="2" class="text-center ledger-cell" nowrap>摘要</th>
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
                        <td class="ledger-cell" nowrap>A1</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>不明</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>A2</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>不明</td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact">
                    <thead>
                      <tr>
                        <th colspan="6" class="text-center ledger-cell" nowrap>主要材料</th>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell" nowrap></th>
                        <th class="text-center ledger-cell" nowrap>橋梁部</th>
                        <th class="text-center ledger-cell" nowrap>取付道路部</th>
                        <th class="text-center ledger-cell" nowrap>合計</th>
                        <th class="text-center ledger-cell" nowrap>摘用</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="ledger-cell" nowrap>鋼抗</th>
                        <td class="ledger-cell" nowrap>不明 t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>RC抗</th>
                        <td class="ledger-cell" nowrap>不明 本</td>
                        <td class="ledger-cell" nowrap>本</td>
                        <td class="ledger-cell" nowrap>本</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>PC抗</th>
                        <td class="ledger-cell" nowrap>不明 本</td>
                        <td class="ledger-cell" nowrap>本</td>
                        <td class="ledger-cell" nowrap>本</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>鋼材</th>
                        <td class="ledger-cell" nowrap>不明 t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>鉄筋</th>
                        <td class="ledger-cell" nowrap>不明 t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap>t</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>コンクリート</th>
                        <td class="ledger-cell" nowrap>不明 ㎥</td>
                        <td class="ledger-cell" nowrap>㎥</td>
                        <td class="ledger-cell" nowrap>㎥</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>石材</th>
                        <td class="ledger-cell" nowrap>不明 ㎥</td>
                        <td class="ledger-cell" nowrap>㎥</td>
                        <td class="ledger-cell" nowrap>㎥</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>木材</th>
                        <td class="ledger-cell" nowrap>不明 ㎥</td>
                        <td class="ledger-cell" nowrap>㎥</td>
                        <td class="ledger-cell" nowrap>㎥</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="ledger-cell" nowrap>搬入れ長</th>
                        <td class="ledger-cell" nowrap>不明 ｍ</td>
                        <td class="ledger-cell" nowrap>ｍ</td>
                        <td class="ledger-cell" nowrap>0 ｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th nowrap class="ledger-cell">記事</th>
                        <td colspan="4" nowrap class="ledger-cell">上方には首都高速都心環状線が横断方向に走っている</td>
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
/* HACK: setup const tab = ref('note')で tabを'note'に初期化できなかった */
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