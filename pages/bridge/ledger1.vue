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
                        <td nowrap class="ledger-cell">橋名</td>
                        <td colspan="2" nowrap class="ledger-cell">鎌倉橋</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">フリガナ</td>
                        <td nowrap class="ledger-cell">カマクラバシ</td>
                      </tr>
                      <tr>
                        <td rowspan="2" nowrap class="ledger-cell">位置</td>
                        <td nowrap class="ledger-cell">自: 千代田区 内神田 1丁目 地内</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">至: 千代田区 大手町 1丁目 地内</td>
                      </tr>
                      <tr>
                        <td rowspan="3" nowrap class="ledger-cell">路線名</td>
                        <td nowrap class="ledger-cell">特例都道町有楽町線402号</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">都市計画街路: 特例都道町有楽町線402号</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">通常名: ---</td>
                      </tr>
                      <tr>
                        <td rowspan="6" nowrap class="ledger-cell">橋下種類</td>
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
                        <td nowrap class="ledger-cell">橋格</td>
                        <td class="text-center ledger-cell" nowrap>1等橋</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">(示方書)</td>
                        <td nowrap class="ledger-cell">T15</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">設計震度</td>
                        <td nowrap class="ledger-cell">KH= 0 KV= 0</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">橋長</td>
                        <td nowrap class="ledger-cell">30.175 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">総格員</td>
                        <td nowrap class="ledger-cell">22.98 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">有効格員</td>
                        <td nowrap class="ledger-cell">車道: 16.6 ｍ 歩道: 282.70 ｍ 合計: 22 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">橋面積</td>
                        <td nowrap class="ledger-cell">693.4 ㎡</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">地盤幅</td>
                        <td nowrap class="ledger-cell">2849.0 ㎝</td>
                      </tr>
                      <tr>
                        <td rowspan="2" nowrap class="ledger-cell">平面線形</td>
                        <td nowrap class="ledger-cell">■ 直 □ 斜 □ 曲 □ 多角(多心曲)</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">斜角 α = 90° 曲事半径 R= ∞ ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">縦断勾配</td>
                        <td nowrap class="ledger-cell">橋梁部: 1.67 % 取付部: 3.33 %</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">横断勾配</td>
                        <td nowrap class="ledger-cell">車道: 2 % 歩道: 2 %</td>
                      </tr>
                      <tr>
                        <td rowspan="3" nowrap class="ledger-cell">規定限界</td>
                        <td nowrap class="ledger-cell">規定ケタ下端高: 不明 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">規定制限幅: 不明 ｍ</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">規定ケタ下端空間高: 不明 ｍ</td>
                      </tr>
                      <tr>
                        <td rowspan="5" nowrap class="ledger-cell">橋高</td>
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
                        <td rowspan="2" nowrap class="ledger-cell">橋台敷</td>
                        <td nowrap class="ledger-cell">右岸上流側: ㎡ 左岸上流側: ㎡</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">右岸下流側: ㎡ 左岸上流側: ㎡</td>
                      </tr>
                      <tr>
                        <td rowspan="2" nowrap class="ledger-cell">施工年月</td>
                        <td nowrap class="ledger-cell">着工: 1928 年 1 月</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">しゅん工: 1929 年 3 月</td>
                      </tr>
                      <tr>
                        <td rowspan="3" nowrap class="ledger-cell">記事</td>
                        <td nowrap class="ledger-cell">(マイクロ): ■ 有 □ 無 □ 不明 </td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">(竣工図): □ 有 ■ 無 □ 不明 </td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">(計算書): □ 有 □ 無 □ 不明 </td>
                      </tr>
                      <tr>
                        <td rowspan="2" nowrap class="ledger-cell">管理区分</td>
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
                        <td nowrap class="ledger-cell">延長</td>
                        <td nowrap class="ledger-cell">30.175 ｍ</td>
                        <td nowrap class="ledger-cell"> ｍ</td>
                        <td nowrap class="ledger-cell">右岸取付: ｍ</td>
                      </tr>
                      <tr>
                        <td rowspan="7" nowrap class="ledger-cell">径間材 (支間)</td>
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
                        <td nowrap class="ledger-cell">路面位置</td>
                        <td nowrap class="ledger-cell">■ 上路 □ 中路 □ 下路</td>
                        <td nowrap class="ledger-cell">□ 上路 □ 中路 □ 下路</td>
                        <td nowrap class="ledger-cell"></td>
                      </tr>
                      <tr>
                        <td rowspan="2" nowrap class="ledger-cell">タワミ</td>
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
                        <td rowspan="6" nowrap class="ledger-cell">構造形式</td>
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
                        <td rowspan="3" class="text-center ledger-cell" nowrap>主桁(横)</td>
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
                        <td rowspan="2" class="ledger-cell" nowrap>床板横桁</td>
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
                        <td rowspan="2" class="ledger-cell" nowrap>床板縦桁</td>
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
                        <td class="ledger-cell" nowrap>床板車道</td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>床板歩道</td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>舗装車道</td>
                        <td class="ledger-cell" nowrap>ts 50 ｍｍ</td>
                        <td class="ledger-cell" nowrap>アスファルト</td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>舗装歩道</td>
                        <td class="ledger-cell" nowrap>ts 10 ｍｍ</td>
                        <td class="ledger-cell" nowrap>コンクリート</td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>ts ｍｍ</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>仲縮固定</td>
                        <td class="ledger-cell" nowrap>突合せ</td>
                        <td class="ledger-cell" nowrap>ゴム</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>仲縮可動</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>支承固定</td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="ledger-cell" nowrap>支承可動</td>
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
                      <tr v-for="item in upperStructMaterial" :key="item.item">
                        <td nowrap class="ledger-cell">{{ item.item }}</td>
                        <td nowrap class="ledger-cell">{{ item.bridge }}</td>
                        <td nowrap class="ledger-cell">{{ item.road }}</td>
                        <td nowrap class="ledger-cell">{{ item.sum }}</td>
                        <td nowrap class="ledger-cell">{{ item.note }}</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">記事</td>
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
                        <td class="text-center ledger-cell" nowrap>橋台</td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>筐体</td>
                        <td class="ledger-cell" nowrap>形式: 重力式</td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>RC</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>(A1)</td>
                        <td class="ledger-cell" nowrap>形式寸法: 10973 × 23012 ×9297</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>(A2)</td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>基礎</td>
                        <td class="ledger-cell" nowrap>形式: 抗基礎(推定)</td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>木</td>
                        <td class="ledger-cell" nowrap>AP-</td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td class="ledger-cell" nowrap>形式寸法: Φ273 × 7270 × 9297</td>
                        <td class="ledger-cell" nowrap>砂層</td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>筐体</td>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td class="ledger-cell" nowrap>形式寸法: </td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>基礎</td>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>AP-</td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td class="ledger-cell" nowrap>形式寸法:</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>筐体</td>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td class="ledger-cell" nowrap>形式寸法: </td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>基礎</td>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>AP-</td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td class="ledger-cell" nowrap>形式寸法:</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>筐体</td>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td class="ledger-cell" nowrap>形式寸法: </td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>基礎</td>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>AP-</td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td class="ledger-cell" nowrap>形式寸法:</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>筐体</td>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td class="ledger-cell" nowrap>形式寸法: </td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>基礎</td>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>AP-</td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td class="ledger-cell" nowrap>形式寸法:</td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>筐体</td>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td class="ledger-cell" nowrap>形式寸法: </td>
                        <td class="ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap>基礎</td>
                        <td class="ledger-cell" nowrap>形式: </td>
                        <td rowspan="2" class="text-center ledger-cell" nowrap></td>
                        <td class="ledger-cell" nowrap>AP-</td>
                      </tr>
                      <tr>
                        <td class="text-center ledger-cell" nowrap>( )</td>
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
                      <tr v-for="item in lowerStructMaterial" :key="item.item">
                        <td class="ledger-cell" nowrap>{{ item.item }}</td>
                        <td class="ledger-cell" nowrap>{{ item.bridge }}</td>
                        <td class="ledger-cell" nowrap>{{ item.road }}</td>
                        <td class="ledger-cell" nowrap>{{ item.sum }}</td>
                        <td class="ledger-cell" nowrap>{{ item.note }}</td>
                      </tr>
                      <tr>
                        <td nowrap class="ledger-cell">記事</td>
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
      upperStructDetail: [
        {
          item: '主桁(横)', mainStruct: '主ケタ数 37本', mainMaterial: 'SRC',
          subStruct: '主ケタ数   本', subMaterial: '', roadStruct: '主ケタ数   本', roadMaterial: '',
        },
        {
          item: '主桁(横)', mainStruct: 'ケタ高 1.372 ｍ', mainMaterial: '',
          subStruct: 'ケタ高   ｍ', subMaterial: '', roadStruct: 'ケタ高   ｍ', roadMaterial: '',
        },
        {
          item: '主桁(横)', mainStruct: '間隔   0.61 ｍ', mainMaterial: '',
          subStruct: '間隔       ｍ', subMaterial: '', roadStruct: '間隔       ｍ', roadMaterial: '',
        },

        {
          item: '床板横桁', mainStruct: 'ケタ高 1.372 ｍ', mainMaterial: 'SRC',
          subStruct: 'ケタ高   ｍ', subMaterial: '', roadStruct: 'ケタ高   ｍ', roadMaterial: '',
        },
        {
          item: '床板横桁', mainStruct: '間隔 3.5 ｍ', mainMaterial: '',
          subStruct: '間隔    ｍ', subMaterial: '', roadStruct: '間隔    ｍ', roadMaterial: '',
        },
        {
          item: '床板縦桁', mainStruct: 'ケタ高  ｍ', mainMaterial: 'SRC',
          subStruct: 'ケタ高   ｍ', subMaterial: '', roadStruct: 'ケタ高   ｍ', roadMaterial: '',
        },
        {
          item: '床板縦桁', mainStruct: '間隔  ｍ', mainMaterial: '',
          subStruct: '間隔    ｍ', subMaterial: '', roadStruct: '間隔    ｍ', roadMaterial: '',
        },
        {
          item: '床板車道', mainStruct: 'ts ｍｍ', mainMaterial: '',
          subStruct: 'ts ｍｍ', subMaterial: '', roadStruct: 'ts ｍｍ', roadMaterial: '',
        },
        {
          item: '床板歩道', mainStruct: 'ts ｍｍ', mainMaterial: '',
          subStruct: 'ts ｍｍ', subMaterial: '', roadStruct: 'ts ｍｍ', roadMaterial: '',
        },
        {
          item: '舗装車道', mainStruct: 'ts 50 ｍｍ', mainMaterial: 'アスファルト',
          subStruct: 'ts ｍｍ', subMaterial: '', roadStruct: 'ts ｍｍ', roadMaterial: '',
        },
        {
          item: '舗装歩道', mainStruct: 'ts 10 ｍｍ', mainMaterial: 'コンクリート',
          subStruct: 'ts ｍｍ', subMaterial: '', roadStruct: 'ts ｍｍ', roadMaterial: '',
        },
        {
          item: '仲縮車道', mainStruct: '突合せ', mainMaterial: 'ゴム',
          subStruct: '', subMaterial: '', roadStruct: '', roadMaterial: '',
        },
        {
          item: '仲縮歩道', mainStruct: '', mainMaterial: '',
          subStruct: '', subMaterial: '', roadStruct: '', roadMaterial: '',
        },
        {
          item: '支承車道', mainStruct: '', mainMaterial: '',
          subStruct: '', subMaterial: '', roadStruct: '', roadMaterial: '',
        },
        {
          item: '支承歩道', mainStruct: '', mainMaterial: '',
          subStruct: '', subMaterial: '', roadStruct: '', roadMaterial: '',
        },
      ],
      upperStructMaterial: [
        { item: '主鋼材', bridge: '不明 t', road: 't', sum: 't', note: '' },
        { item: '鉄筋', bridge: 't', road: 't', sum: 't', note: '' },
        { item: 'PC鋼材', bridge: '不明 t', road: 't', sum: 't', note: '' },
        { item: '高構材', bridge: '不明 t', road: 't', sum: 't', note: '型式:石造' },
        { item: 'コンクリート', bridge: '不明 ㎥', road: '㎥', sum: '㎥', note: '' },
        { item: 'アスコン', bridge: '不明 t', road: 't', sum: 't', note: '' },
        { item: '石材', bridge: '不明 ㎥', road: '㎥', sum: '㎥', note: '' },
        { item: '木材', bridge: '不明 ㎥', road: '㎥', sum: '㎥', note: '' },
        { item: '上部死荷重', bridge: '不明 t ( 不明 t/㎥)', road: 't ( 不明 t/㎥)', sum: 's㎥', note: '' },
      ],
      lowerStructMaterial: [
        { item: '鋼抗', bridge: '不明 t', road: 't', sum: 't', note: '' },
        { item: 'RC抗', bridge: '不明 本', road: '本', sum: '本', note: '' },
        { item: 'PC抗', bridge: '不明 本', road: '本', sum: '本', note: '' },
        { item: '鋼材', bridge: '不明 t', road: 't', sum: 't', note: '' },
        { item: '鉄筋', bridge: '不明 t', road: 't', sum: 't', note: '' },
        { item: 'コンクリート', bridge: '不明 ㎥', road: '㎥', sum: '㎥', note: '' },
        { item: '石材', bridge: '不明 ㎥', road: '㎥', sum: '㎥', note: '' },
        { item: '木材', bridge: '不明 ㎥', road: '㎥', sum: '㎥', note: '' },
        { item: '搬入れ長', bridge: '不明 ｍ', road: 'ｍ', sum: '0 ｍ', note: '' },
      ],
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