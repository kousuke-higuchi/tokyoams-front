<template>
  <v-row>
    <v-col v-bind:md="child_extend?3:0" cols="12">
      <!-- <p> {{ child_extend }}</p> -->
      <bridge-side-card-details @isExtend='child_extend = $event' />
    </v-col>
    <v-col v-bind:md="child_extend?9:12" cols="12">
      <v-card elevation="3">
        <v-card-title>
          <v-row class="justify-start mt-1 ml-3">橋梁台帳 東京都
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-table density="compact" class="ledger">
              <tbody>
                <tr>
                  <th colspan="4" class="text-center">一般事項</th>
                  <th colspan="8" class="text-center">上部構造</th>
                  <th colspan="7" class="text-center">下部構造</th>
                </tr>
                <tr>
                  <th>フリガナ</th>
                  <td colspan="3">カマクラバシ</td>
                  <th colspan="2"></th>
                  <th colspan="2">主径間</th>
                  <th colspan="2">側径間</th>
                  <th colspan="2">取付道路</th>
                  <th colspan="2"></th>
                  <th colspan="2">構造形式</th>
                  <th>材種</th>
                  <th colspan="2">基礎到達層深さ</th>
                </tr>
                <tr>
                  <th>橋名</th>
                  <td colspan="3">鎌倉橋</td>
                  <th colspan="2">延長</th>
                  <td colspan="2">30.175 ｍ</td>
                  <td colspan="2"> {{ null}} ｍ</td>
                  <td colspan="2">右岸取付: {{null}} ｍ</td>
                  <th>橋台</th>
                  <th rowspan="2">躯体</th>
                  <td colspan="2">形式: 重力式</td>
                  <td rowspan="2">RC</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th rowspan="2">位置</th>
                  <td colspan="3">自: 千代田区 内神田 1丁目 地内</td>
                  <th rowspan="7" colspan="2">径間割 <br> (支間)</th>
                  <td colspan="2">1径間</td>
                  <td colspan="2">{{null}} 径間</td>
                  <td colspan="2">陸橋部: ｍ</td>
                  <th>(A1)</th>
                  <td colspan="2">形式寸法: 10973 × 23012 ×9297</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="3">至: 千代田区 大手町 1丁目 地内</td>
                  <td rowspan="6" colspan="2">30.175</td>
                  <td rowspan="6" colspan="2"></td>
                  <td colspan="2">盛土部: ｍ</td>
                  <th>(A2)</th>
                  <th rowspan="2">基礎</th>
                  <td colspan="2">形式: 抗基礎(推定)</td>
                  <td rowspan="2">木</td>
                  <td colspan="2">AP-</td>
                </tr>
                <tr>
                  <th rowspan="3">路線名</th>
                  <td colspan="3">特例都道町有楽町線402号</td>
                  <td colspan="2">階段部: ｍ</td>
                  <th>( )</th>
                  <td colspan="2">形式寸法: Φ273 × 7270 × 9297</td>
                  <td colspan="2">砂層</td>
                </tr>
                <tr>
                  <td colspan="1">都市計画街路</td>
                  <td colspan="2">特例都道町有楽町線402号</td>
                  <td colspan="2">左岸取付: ｍ</td>
                  <th></th>
                  <th rowspan="2">躯体</th>
                  <td colspan="2">形式: </td>
                  <td rowspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="1">通常名</td>
                  <td colspan="2">---</td>
                  <td colspan="2">階段部: ｍ</td>
                  <th>( )</th>
                  <td colspan="2">形式寸法: </td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th rowspan="6">橋下種類</th>
                  <td colspan="3">■ 河川 □ 道路 □ 鉄道 □ 公園 □ その他</td>
                  <td colspan="2">盛土部: ｍ</td>
                  <th>( )</th>
                  <th rowspan="2">基礎</th>
                  <td colspan="2">形式: </td>
                  <td rowspan="2"></td>
                  <td colspan="2">AP-</td>
                </tr>
                <tr>
                  <td>河川</td>
                  <td colspan="2">日本橋川</td>
                  <td colspan="2"> 階段部 ｍ </td>
                  <th>( )</th>
                  <td colspan="2">形式寸法:</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td>道路</td>
                  <td colspan="2"></td>
                  <th colspan="2">路面位置</th>
                  <td colspan="2">■ 上路 □ 中路 □ 下路</td>
                  <td colspan="2">□ 上路 □ 中路 □ 下路</td>
                  <td colspan="2"></td>
                  <th></th>
                  <th rowspan="2">躯体</th>
                  <td colspan="2">形式: </td>
                  <td rowspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td>鉄道</td>
                  <td colspan="2"></td>
                  <th rowspan="2" colspan="2">タワミ</th>
                  <td rowspan="2" colspan="2">δd= δe= <br>δe/1=</td>
                  <td rowspan="2" colspan="2">δd= δe= <br>δe/1=</td>
                  <td colspan="2"></td>
                  <th>( )</th>
                  <td colspan="2">形式寸法: </td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td>公園</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th>( )</th>
                  <th rowspan="2">基礎</th>
                  <td colspan="2">形式: </td>
                  <td rowspan="2"></td>
                  <td colspan="2">AP-</td>
                </tr>
                <tr>
                  <td>その他</td>
                  <td colspan="2"></td>
                  <th rowspan="6" colspan="2">構造形式</th>
                  <td colspan="2">SRC固定アーチ橋</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th>( )</th>
                  <td colspan="2">形式寸法:</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>橋格</th>
                  <td colspan="3">1等橋</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th></th>
                  <th rowspan="2">躯体</th>
                  <td colspan="2">形式: </td>
                  <td rowspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>(示方書)</th>
                  <td colspan="3">T15</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th>( )</th>
                  <td colspan="2">形式寸法: </td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>設計震度</th>
                  <td colspan="3">KH= 0 KV= 0</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th>( )</th>
                  <th rowspan="2">基礎</th>
                  <td colspan="2">形式: </td>
                  <td rowspan="2"></td>
                  <td colspan="2">AP-</td>
                </tr>
                <tr>
                  <th>橋長</th>
                  <td>30.175 ｍ</td>
                  <th>総格員</th>
                  <td>22.98 ｍ</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th>( )</th>
                  <td colspan="2">形式寸法:</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>有効格員</th>
                  <td colspan="3">車道: 16.6 ｍ 歩道: 282.70 ｍ 合計: 22 ｍ</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th></th>
                  <th rowspan="2">躯体</th>
                  <td colspan="2">形式: </td>
                  <td rowspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>橋面積</th>
                  <td colspan="1">693.4 ㎡</td>
                  <th>地盤幅</th>
                  <td colspan="1">2849.0 ㎝</td>
                  <th colspan="2"></th>
                  <th>細部構造</th>
                  <th>材種</th>
                  <th>細部構造</th>
                  <th>材種</th>
                  <th>細部構造</th>
                  <th>材種</th>
                  <th>( )</th>
                  <td colspan="2">形式寸法: </td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th rowspan="2">平面線形</th>
                  <td rowspan="2" colspan="3">■ 直 □ 斜 □ 曲 □ 多角(多心曲) <br>斜角 α = 90° 曲事半径 R= ∞ ｍ</td>
                  <th rowspan="3" colspan="2">主桁(横)</th>
                  <td>主ケタ数: 37本</td>
                  <td>SRC</td>
                  <td>主ケタ数: 本</td>
                  <td></td>
                  <td>主ケタ数: 本</td>
                  <td></td>
                  <th>( )</th>
                  <th rowspan="2">基礎</th>
                  <td colspan="2">形式: </td>
                  <td rowspan="2"></td>
                  <td colspan="2">AP-</td>
                </tr>
                <tr>
                  <td>ケタ高: 1.372 ｍ</td>
                  <td></td>
                  <td>ケタ高: ｍ</td>
                  <td></td>
                  <td>ケタ高: ｍ</td>
                  <td></td>
                  <th>( )</th>
                  <td colspan="2">形式寸法:</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>縦断勾配</th>
                  <td colspan="3">橋梁部: 1.67 % 取付部: 3.33 %</td>
                  <td>間隔: 0.61 ｍ</td>
                  <td></td>
                  <td>間隔: ｍ</td>
                  <td></td>
                  <td>間隔: ｍ</td>
                  <td></td>
                  <th></th>
                  <th rowspan="2">躯体</th>
                  <td colspan="2">形式: </td>
                  <td rowspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>横断勾配</th>
                  <td colspan="3">車道: 2 % 歩道: 2 %</td>
                  <th rowspan="4" class="text-center vertical">床組</th>
                  <th rowspan="2">横桁</th>
                  <td>ケタ高: 1.372 ｍ</td>
                  <td>SRC</td>
                  <td>ケタ高: ｍ</td>
                  <td></td>
                  <td>ケタ高: ｍ</td>
                  <td></td>
                  <th>( )</th>
                  <td colspan="2">形式寸法: </td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th rowspan="3">規定限界</th>
                  <td colspan="2">規定ケタ下端高</td>
                  <td colspan="1">不明 ｍ</td>
                  <td>間隔: 3.5 ｍ</td>
                  <td></td>
                  <td>間隔: ｍ</td>
                  <td></td>
                  <td>間隔: ｍ</td>
                  <td></td>
                  <th>( )</th>
                  <th rowspan="2">基礎</th>
                  <td colspan="2">形式: </td>
                  <td rowspan="2"></td>
                  <td colspan="2">AP-</td>
                </tr>
                <tr>
                  <td colspan="2">規定制限幅</td>
                  <td colspan="1">不明 ｍ</td>
                  <th rowspan="2">縦桁</th>
                  <td>ケタ高: ｍ</td>
                  <td>SRC</td>
                  <td>ケタ高: ｍ</td>
                  <td></td>
                  <td>ケタ高: ｍ</td>
                  <td></td>
                  <th>( )</th>
                  <td colspan="2">形式寸法:</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="2">規定ケタ下空間高</td>
                  <td colspan="1">不明 ｍ</td>
                  <td>間隔: ｍ</td>
                  <td></td>
                  <td>間隔: ｍ</td>
                  <td></td>
                  <td>間隔: ｍ</td>
                  <td></td>
                  <th rowspan="8" class="text-center vertical">一基当り上部工反力</th>
                  <th rowspan="2" class="text-center">基礎番号</th>
                  <th colspan="2" class="text-center">常時</th>
                  <th colspan="2" class="text-center">地震時</th>
                  <th rowspan="2" class="text-center">摘要</th>
                </tr>
                <tr>
                  <th rowspan="5">標高</th>
                  <td colspan="2">中央ケタ下端高</td>
                  <td colspan="1">AP 不明 ｍ</td>
                  <th rowspan="2" class="text-center vertical">床板</th>
                  <th>車道</th>
                  <td>ts ｍｍ</td>
                  <td></td>
                  <td>ts ｍｍ</td>
                  <td></td>
                  <td>ts ｍｍ</td>
                  <td></td>
                  <th class="text-center">鉛直</th>
                  <th class="text-center">水平</th>
                  <th class="text-center">鉛直</th>
                  <th class="text-center">水平</th>
                </tr>
                <tr>
                  <td colspan="2">最低ケタ下端高</td>
                  <td colspan="1">AP 不明 ｍ</td>
                  <th>歩道</th>
                  <td>ts ｍｍ</td>
                  <td></td>
                  <td>ts ｍｍ</td>
                  <td></td>
                  <td>ts ｍｍ</td>
                  <td></td>
                  <td>A1</td>
                  <td>t</td>
                  <td>t</td>
                  <td>t</td>
                  <td>t</td>
                  <td>不明</td>
                </tr>
                <tr>
                  <td colspan="2">最高水位</td>
                  <td colspan="1">AP 不明 ｍ</td>
                  <th rowspan="2" class="text-center vertical">舗装</th>
                  <th>車道</th>
                  <td>ts 50 ｍｍ</td>
                  <td>アスファルト</td>
                  <td>ts ｍｍ</td>
                  <td></td>
                  <td>ts ｍｍ</td>
                  <td></td>
                  <td>A2</td>
                  <td>t</td>
                  <td>t</td>
                  <td>t</td>
                  <td>t</td>
                  <td>不明</td>
                </tr>
                <tr>
                  <td colspan="2">最低河川床高</td>
                  <td colspan="1">AP 不明 ｍ</td>
                  <th>歩道</th>
                  <td>ts 10 ｍｍ</td>
                  <td>コンクリート</td>
                  <td>ts ｍｍ</td>
                  <td></td>
                  <td>ts ｍｍ</td>
                  <td></td>
                  <td></td>
                  <td>t</td>
                  <td>t</td>
                  <td>t</td>
                  <td>t</td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="2">橋下路面高</td>
                  <td colspan="1">AP 不明 ｍ</td>
                  <th rowspan="2" class="text-center vertical">仲縮</th>
                  <th>固定</th>
                  <td>突合せ</td>
                  <td>ゴム</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>t</td>
                  <td>t</td>
                  <td>t</td>
                  <td>t</td>
                  <td></td>
                </tr>
                <tr>
                  <th rowspan="2">橋台敷</th>
                  <td colspan="3">右岸上流側: ㎡ 左岸上流側: ㎡</td>
                  <th>可動</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>t</td>
                  <td>t</td>
                  <td>t</td>
                  <td>t</td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="3">右岸下流側: ㎡ 左岸上流側: ㎡</td>
                  <th rowspan="3" class="text-center vertical">支承</th>
                  <th>固定</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>t</td>
                  <td>t</td>
                  <td>t</td>
                  <td>t</td>
                  <td></td>
                </tr>
                <tr>
                </tr>
                <tr>
                  <th rowspan="2">施工年月</th>
                  <td colspan="1">着工</td>
                  <td colspan="2">1928 年 1 月</td>
                  <th>可動</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="7"></td>
                </tr>
                <tr>
                  <td colspan="1">しゅん工</td>
                  <td colspan="2">1929 年 3 月</td>
                  <th colspan="8" class="text-center">主要材料</th>
                  <th colspan="7" class="text-center">主要材料</th>
                </tr>
                <tr>
                  <th rowspan="3">記事</th>
                  <td colspan="1">(マイクロ)</td>
                  <td colspan="2">■ 有 □ 無 □ 不明 </td>
                  <th colspan="2"></th>
                  <th colspan="1" class="text-center">橋梁部</th>
                  <th colspan="1" class="text-center">取付道路部</th>
                  <th colspan="1" class="text-center">合計</th>
                  <th colspan="3" class="text-center">摘用</th>
                  <th colspan="2"></th>
                  <th class="text-center">橋梁部</th>
                  <th class="text-center">取付道路部</th>
                  <th class="text-center">合計</th>
                  <th colspan="2"  class="text-center">摘用</th>
                </tr>
                <tr>
                  <td colspan="1">(竣工図)</td>
                  <td colspan="2">□ 有 ■ 無 □ 不明 </td>
                  <th colspan="2">主鋼材</th>
                  <td colspan="1">不明 t</td>
                  <td colspan="1">t</td>
                  <td colspan="1">t</td>
                  <td colspan="3"></td>
                  <th colspan="2">鋼抗</th>
                  <td>不明 t</td>
                  <td>t</td>
                  <td>t</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="1">(計算書)</td>
                  <td colspan="2">□ 有 □ 無 □ 不明 </td>
                  <th colspan="2">鉄筋</th>
                  <td colspan="1">不明 t</td>
                  <td colspan="1">t</td>
                  <td colspan="1">t</td>
                  <td colspan="3"></td>
                  <th colspan="2">RC抗</th>
                  <td>不明 本</td>
                  <td>本</td>
                  <td>本</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th rowspan="2">管理区分</th>
                  <td colspan="3">都管理橋梁</td>
                  <th colspan="2">PC鋼材</th>
                  <td colspan="1">不明 t</td>
                  <td colspan="1">t</td>
                  <td colspan="1">t</td>
                  <td colspan="3"></td>
                  <th colspan="2">PC抗</th>
                  <td>不明 本</td>
                  <td>本</td>
                  <td>本</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <th colspan="2">高欄材</th>
                  <td colspan="1">不明 t</td>
                  <td colspan="1">t</td>
                  <td colspan="1">t</td>
                  <td colspan="3">型式:石造</td>
                  <th colspan="2">鋼材</th>
                  <td>不明 t</td>
                  <td>t</td>
                  <td>t</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="4"></td>
                  <th colspan="2">コンクリート</th>
                  <td colspan="1">不明 ㎥</td>
                  <td colspan="1">㎥</td>
                  <td colspan="1">㎥</td>
                  <td colspan="3"></td>
                  <th colspan="2">鉄筋</th>
                  <td>不明 t</td>
                  <td>t</td>
                  <td>t</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="4"></td>
                  <th colspan="2">アスコン</th>
                  <td colspan="1">不明 t</td>
                  <td colspan="1">t</td>
                  <td colspan="1">t</td>
                  <td colspan="3"></td>
                  <th colspan="2">コンクリート</th>
                  <td>不明 ㎥</td>
                  <td>㎥</td>
                  <td>㎥</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="4"></td>
                  <th colspan="2">石材</th>
                  <td colspan="1">不明 ㎥</td>
                  <td colspan="1">㎥</td>
                  <td colspan="1">㎥</td>
                  <td colspan="3"></td>
                  <th colspan="2">石材</th>
                  <td>不明 ㎥</td>
                  <td>㎥</td>
                  <td>㎥</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="4"></td>
                  <th colspan="2">木材</th>
                  <td colspan="1">不明 ㎥</td>
                  <td colspan="1">㎥</td>
                  <td colspan="1">㎥</td>
                  <td colspan="3"></td>
                  <th colspan="2">木材</th>
                  <td>不明 ㎥</td>
                  <td>㎥</td>
                  <td>㎥</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td rowspan="1" colspan="4"></td>
                  <th colspan="2">上部<br>死荷重</th>
                  <td colspan="1">不明 t <br>( 不明 t/㎥)</td>
                  <td colspan="1">t <br>( 不明 t/㎥)</td>
                  <td colspan="1"></td>
                  <td colspan="3"></td>
                  <th colspan="2">根入れ長</th>
                  <td>不明 ｍ</td>
                  <td>ｍ</td>
                  <td>0 ｍ</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="4"></td>
                  <th colspan="2">記事</th>
                  <td colspan="6">不明</td>
                  <th colspan="2">記事</th>
                  <td colspan="5">上方には首都高速都心環状線が横断方向に走っている</td>
                </tr>
              </tbody>
            </v-table>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>

const child_extend = ref(true);
const onDownloadLedgerClick = () => {
  console.debug('downloadLedger');
};

</script>
