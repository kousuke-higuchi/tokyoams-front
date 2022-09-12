<template>
  <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="ml-1">トンネル台帳</div>
          </v-card-title>
        </div>
        <v-card-text>
          <v-row no-gutters>
            <v-table density="compact" class="ledger">
              <tbody>
                <tr>
                  <th colspan="3">フリガナ</th>
                  <td>ゴンダ</td>
                  <th rowspan="2" colspan="3">路線名</th>
                  <td rowspan="2">主 八王子五日市線</td>
                  <th rowspan="2" colspan="3">管理事務所</th>
                  <td rowspan="2" colspan="3">西多摩建設事務所</td>
                  <th colspan="4">緊急輸送道路</th>
                  <td>なし</td>
                </tr>
                <tr>
                  <th colspan="3">名称</th>
                  <td>権田トンネル</td>
                  <th colspan="4">代替路の有無</th>
                  <td>あり</td>
                </tr>
                <tr>
                  <th rowspan="2" colspan="3">所在地</th>
                  <td>自:あきる野市権田</td>
                  <th rowspan="2" colspan="3">作成者</th>
                  <td rowspan="2">アジア航測 (株)青柳健二</td>
                  <th rowspan="2" colspan="3">作成年月</th>
                  <td rowspan="2" colspan="3">2019年 2月25日</td>
                  <th colspan="4">トンネル延長</th>
                  <td>L= 45 m</td>
                </tr>
                <tr>
                  <td>至:あきる野市五日市</td>
                  <th colspan="4">トンネルの分類</th>
                  <td>陸上トンネル(堀進工法)</td>
                </tr>
                <tr>
                  <th rowspan="2" colspan="2">起点</th>
                  <th>緯度</th>
                  <td>35° 43′  50.5″</td>
                  <th colspan="3">完成年月日</th>
                  <td>1990.07</td>
                  <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">舗装</th>
                  <th colspan="2">種別</th>
                  <td colspan="2">コンクリート系</td>
                  <th rowspan="20" class="text-center" style="writing-mode: vertical-rl;">トンネル非常用設備</th>
                  <th colspan="2">施設の内訳</th>
                  <th>個数</th>
                  <th>形式</th>
                  <th>更新年度</th>
                </tr>
                <tr>
                  <th>経度</th>
                  <td>139° 13′  3.5″</td>
                  <th colspan="3">併用年月日</th>
                  <td></td>
                  <th colspan="2">厚さ</th>
                  <td colspan="2">0.25 ｍ</td>
                  <th rowspan="3" class="text-center" style="writing-mode: vertical-rl;">通報装置</th>
                  <th>非常電話</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th rowspan="2" colspan="2">終点</th>
                  <th>緯度</th>
                  <td>35° 43′  51.4″</td>
                  <th colspan="3">トンネル等級</th>
                  <td>D</td>
                  <th colspan="2">面積</th>
                  <td colspan="2"> 293 ㎡</td>
                  <th>押しボタン式通報装置</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>経度</th>
                  <td>139° 13′  36.5″</td>
                  <th colspan="3">内装種類</th>
                  <td>タイル張り工法</td>
                  <th colspan="2">更新年次</th>
                  <td colspan="2">1990.07</td>
                  <th>火災報知器</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="3">一般有料区分</th>
                  <td>無料</td>
                  <th colspan="3">天井板種類</th>
                  <td>なし</td>
                  <th rowspan="2" class="text-center" style="writing-mode: vertical-rl;">排水</th>
                  <th colspan="2">種別</th>
                  <td colspan="2">L型+暗薬排水</td>
                  <th rowspan="3" class="text-center" style="writing-mode: vertical-rl;">非常警報装置</th>
                  <th>警報表示版</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="3">土かぶり</th>
                  <td>4 ｍ</td>
                  <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">坑門</th>
                  <th rowspan="2" class="text-center" style="writing-mode: vertical-rl;">起点</th>
                  <th>形式</th>
                  <td>面壁型</td>
                  <th colspan="2">更新年次</th>
                  <td colspan="2"></td>
                  <th>点滅灯</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="3">内空断面積</th>
                  <td>  ㎡</td>
                  <th>延長</th>
                  <td>0.65 ｍ</td>
                  <th colspan="2">施設</th>
                  <th>種別・方式</th>
                  <th>個数</th>
                  <th>更新年次</th>
                  <th>音信号発生器</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="3">交通量</th>
                  <td>  2,184 台/日</td>
                  <th rowspan="2" class="text-center" style="writing-mode: vertical-rl;">終点</th>
                  <th>形式</th>
                  <td>面壁型</td>
                  <th rowspan="9" class="text-center" style="writing-mode: vertical-rl;">道路附属物等</th>

                  <th>照明</th>
                  <td>ナトリウム灯</td>
                  <td>8</td>
                  <td></td>
                  <th rowspan="2" class="text-center" style="writing-mode: vertical-rl;">消火設備</th>
                  <th>消火器</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th rowspan="4">幅員</th>
                  <th colspan="2">道路幅</th>
                  <td>  7.5 ｍ</td>
                  <th>延長</th>
                  <td>  3.5 ｍ</td>
                  <th>換気</th>
                  <td>自然換気</td>
                  <td></td>
                  <td></td>
                  <th>消火栓</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th rowspan="2"  colspan="2">車道幅</th>
                  <td> 3.25+0.5 ｍ</td>
                  <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">竣工巻厚</th>
                  <th colspan="2">アーチ</th>
                  <td>  60 cm</td>
                  <th>標識</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">避難誘導設備</th>
                  <th>誘導表示板</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td> 3.25+0.5 ｍ</td>
                  <th rowspan="2" colspan="2">側壁</th>
                  <td>  60 cm</td>
                  <th>警報表示板</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th>排煙設備</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="2">歩道等幅</th>
                  <td> 1.75+1.75 ｍ</td>
                  <td></td>
                  <th>吸音板</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th rowspan="2">避難設備</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th rowspan="3">高さ</th>
                  <th colspan="2">建設限界高</th>
                  <td> 4.5 ｍ</td>
                  <th colspan="2">インバート</th>
                  <td>  20 ㎝</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="2">中央高</th>
                  <td> 7.2 ｍ</td>
                  <th rowspan="3" class="text-center" style="writing-mode: vertical-rl;">半径</th>
                  <th colspan="2">アーチ</th>
                  <td> 5.65㎝</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th rowspan="7" class="text-center" style="writing-mode: vertical-rl;">その他の設備</th>
                  <th>給水栓</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="2">有効高</th>
                  <td> 4.7 ｍ</td>
                  <th colspan="2">側壁</th>
                  <td> 1130 ㎝</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th>無線通信補助設備</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th rowspan="6">線形</th>
                  <th colspan="2">縦断勾配</th>
                  <td> 上り 1.8 %</td>
                  <th colspan="2">インバート</th>
                  <td>    ㎝</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <th>ラジオ放送設備</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="2">直線区間長</th>
                  <td>  ｍ</td>
                  <th rowspan="5" class="text-center" style="writing-mode: vertical-rl;">占用物件</th>
                  <th colspan="2" class="text-center">種類</th>
                  <th class="text-center">寸法</th>
                  <th colspan="3" class="text-center">管理者名</th>
                  <th colspan="2" class="text-center">更新年次</th>
                  <th>拡声放送設備</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">曲線区間</th>
                  <th>区間長</th>
                  <td></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td colspan="3"></td>
                  <td colspan="2"></td>
                  <th>水噴霧設備</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>起点側クロソイド</th>
                  <td></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td colspan="3"></td>
                  <td colspan="2"></td>
                  <th>監視装置(CCTV)</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>曲線半径</th>
                  <td></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td colspan="3"></td>
                  <td colspan="2"></td>
                  <th>非常用電源設備</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>終点クロソイド</th>
                  <td></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td colspan="3"></td>
                  <td colspan="2"></td>
                  <th rowspan="2"  colspan="2" class="text-center" style="writing-mode: vertical-rl;">その他</th>
                  <th>非常駐車帯</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th colspan="3">トンネル工法</th>
                  <td colspan="4">山岳トンネル工法(NATM)</td>
                  <td colspan="6"></td>
                  <th>方向転換所</th>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

              </tbody>
            </v-table>
            <v-table density="compact" class="ledger">
              <thead>
              </thead>
            </v-table>
          </v-row>
        </v-card-text>
        <v-row no-gutters>
          <div class="mt-1 ml-3" style="font-size: small">※緯度・経度については0.1″単位まで記入することとする。</div>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      child_extend: true,
      select: '全て',
      histItems: ['全て', '1', '2', '3'],
      uppers: ['横桁', '縦桁', '対傾構', '横構', '床版'],
      lowers: ['基礎', '躯体', '基礎'],
      items: ['支承', '高覧', '防護柵', '地覆', '舗装', '伸縮装置', '排水設備', '落下防止装置', '点検設備', 'しゃ音設備', '照明設備', '添架物', '耐久性(α)', '安全性(β)'],
    }
  },
  mounted: function () {
    console.log("mounted inspection3");
  },
  methods: {
  },
});
</script>
