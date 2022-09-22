<template>
  <v-row>
    <v-col v-bind:md="child_extend?3:0" cols="12">
    <!-- <p> {{ child_extend }}</p> -->
      <bridge-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
    </v-col>
    <v-col v-bind:md="child_extend?9:12" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="ml-1"></div>
          </v-card-title>
          <v-card-actions>
            <v-select label="分割番号" v-model="select" :items="histItems" item-title="select" variant="outlined"
              density="compact" hide-details="false"></v-select>
          </v-card-actions>
        </div>
        <v-card-text>
          <v-row no-gutters>
            <v-table density="compact" class="ledger">
              <tbody>
                <tr>
                  <th colspan="12"></th>
                  <th>径間区分</th>
                  <td>本線</td>
                  <th>径間番号</th>
                  <td colspan="2">1</td>
                </tr>
                <tr>
                  <th colspan="3">フリガナ</th>
                  <td>カマクラバシ</td>
                  <th>橋梁番号</th>
                  <td>01110010-0</td>
                  <th>橋長</th>
                  <td>22.98 ｍ</td>
                  <th>路線名</th>
                  <td colspan="2">特例都道町有楽町線402号</td>
                  <th>通称名</th>
                  <td>極楽道路</td>
                  <th rowspan="2">所在地</th>
                  <td>自: 千代田区 内神田 1丁目 地内</td>
                  <th>事務所名</th>
                  <td colspan="2">西多摩建設事務所</td>
                </tr>
                <tr>
                  <th colspan="3">橋梁名</th>
                  <td>鎌倉橋</td>
                  <th rowspan="2">分割番号</th>
                  <td rowspan="2">1</td>
                  <th rowspan="2">点検種類</th>
                  <td rowspan="2">定期点検</td>
                  <th rowspan="2">点検期間</th>
                  <td colspan="2">自: 2022-08-13</td>
                  <th rowspan="2">点検<br>請負業者</th>
                  <td>キチント建設</td>
                  <td>至: 千代田区 大手町 1丁目 地内</td>
                  <th rowspan="2">診査員点検員</th>
                  <td colspan="2">出木杉英才</td>
                </tr>
                <tr>
                  <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">交通条件</th>
                  <th colspan="2">調査年月日</th>
                  <td>2022-08-15</td>
                  <td colspan="2">至: 2022-08-15</td>
                  <td>ヤリマス設備</td>
                  <th colspan="3"> </th>
                  <td colspan="2">源静夫</td>
                </tr>
                <tr>
                  <th rowspan="2" colspan="2">交通量</th>
                  <td>21,013 台</td>
                  <th>上部工構造形式</th>
                  <td colspan="4">T桁橋(コン)</td>
                  <th rowspan="3" class="text-center" style="writing-mode: vertical-rl;">幅員</th>
                  <th>車道</th>
                  <td> 41.24 ｍ</td>
                  <th>路面位置</th>
                  <td>上路</td>
                  <th colspan="1">荷重制限</th>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td> 8 時間</td>
                  <th>下部工形式</th>
                  <td colspan="2">逆T式橋台</td>
                  <td colspan="2">RC抗</td>
                  <th>歩道</th>
                  <td> 7.75 ｍ</td>
                  <th>線形</th>
                  <td>2841.02</td>
                  <th colspan="3">総合評価</th>
                </tr>
                <tr>
                  <th colspan="2">大型車交通量</th>
                  <td>4,537 台 / 日</td>
                  <th>基礎形式</th>
                  <td colspan="2">壁式橋脚</td>
                  <td colspan="2">RC抗</td>
                  <th>合計</th>
                  <td> 48.99 ｍ</td>
                  <th>支間長</th>
                  <td>18.40 ｍ</td>
                  <th colspan="3">径間別評価</th>
                </tr>
                <tr>
                  <th colspan="3" class="text-center">部材</th>
                  <th class="text-center">有無</th>
                  <th class="text-center">材質</th>
                  <th class="text-center">形式・厚さ</th>
                  <th class="text-center">前々回<br>点検</th>
                  <th colspan="2" class="text-center">損傷内容</th>
                  <th class="text-center">前回<br>点検</th>
                  <th colspan="2" class="text-center">損傷内容</th>
                  <th class="text-center">今回<br>点検</th>
                  <th colspan="2" class="text-center">損傷内容</th>
                  <th colspan="2"  class="text-center">措置</th>
                </tr>
                <tr>
                  <th rowspan="23" class="text-center" style="writing-mode: vertical-rl;">主桁(構)</th>
                  <th class="text-center">桁橋</th>
                  <th class="text-center">主桁</th>
                  <td class="text-center">有</td>
                  <td>コンクリート</td>
                  <td></td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">E</td>
                  <td colspan="2">巨大陥没</td>
                  <td colspan="2">応急処置</td>
                </tr>
                <tr>
                  <th rowspan="8" class="text-center" style="writing-mode: vertical-rl;">アーチ・トラス</th>
                  <th class="text-center">補鋼桁</th>
                  <td class="text-center"></td>
                  <td></td>
                  <td></td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td colspan="2"></td>
                </tr>
                <tr v-for="item in archers" :key="item">
                  <th class="text-center">{{ item }}</th>
                  <td class="text-center"></td>
                  <td></td>
                  <td></td>
                  <td class="text-center"></td>
                  <td colspan="2"></td>
                  <td class="text-center"></td>
                  <td colspan="2"></td>
                  <td class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th rowspan="2" class="text-center" style="writing-mode: vertical-rl;">ラーメン</th>
                  <th class="text-center">主構(桁)</th>
                  <td class="text-center"></td>
                  <td></td>
                  <td></td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th class="text-center">主構(脚)</th>
                  <td class="text-center"></td>
                  <td></td>
                  <td></td>
                  <td class="text-center"></td>
                  <td colspan="2"></td>
                  <td class="text-center"></td>
                  <td colspan="2"></td>
                  <td class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th rowspan="8" class="text-center" style="writing-mode: vertical-rl;">斜張橋・吊り橋</th>
                  <th class="text-center">土桁(補鋼桁)</th>
                  <td class="text-center"></td>
                  <td></td>
                  <td></td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td colspan="2"></td>
                </tr>
                <tr v-for="item in hagers" :key="item">
                  <th class="text-center">{{ item }}</th>
                  <td class="text-center"></td>
                  <td></td>
                  <td></td>
                  <td class="text-center"></td>
                  <td colspan="2"></td>
                  <td class="text-center"></td>
                  <td colspan="2"></td>
                  <td class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th class="text-center">溝橋</th>
                  <th class="text-center">頂版</th>
                  <td class="text-center"></td>
                  <td></td>
                  <td></td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th colspan="2" class="text-center">ゲルバー部</th>
                  <td class="text-center"></td>
                  <td></td>
                  <td></td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th colspan="2" class="text-center">外ケーブル</th>
                  <td class="text-center"></td>
                  <td></td>
                  <td></td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th colspan="2" class="text-center">PC定着部</th>
                  <td class="text-center"></td>
                  <td></td>
                  <td></td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th rowspan="2" class="text-center" style="writing-mode: vertical-rl;">横桁</th>
                  <th colspan="2" class="text-center">横桁</th>
                  <td class="text-center">有</td>
                  <td>コンクリート</td>
                  <td></td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">E</td>
                  <td colspan="2">巨大陥没</td>
                  <td colspan="2">応急処置</td>
                </tr>
                <tr>
                  <th colspan="2" class="text-center">PC定着部</th>
                  <td class="text-center">有</td>
                  <td>コンクリート</td>
                  <td></td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">E</td>
                  <td colspan="2">巨大陥没</td>
                  <td colspan="2">応急処置</td>
                </tr>
                <tr>
                  <th rowspan="2" class="text-center" style="writing-mode: vertical-rl;">床板</th>
                  <th colspan="2" class="text-center">床板</th>
                  <td class="text-center">有</td>
                  <td>コンクリート</td>
                  <td></td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">E</td>
                  <td colspan="2">巨大陥没</td>
                  <td colspan="2">応急処置</td>
                </tr>
                <tr>
                  <th colspan="2" class="text-center">PC定着部</th>
                  <td class="text-center">有</td>
                  <td>コンクリート</td>
                  <td></td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">A</td>
                  <td colspan="2">問題なし</td>
                  <td class="text-center">E</td>
                  <td colspan="2">巨大陥没</td>
                  <td colspan="2">応急処置</td>
                </tr>
              </tbody>
            </v-table>
            <v-table density="compact" class="ledger">
              <thead>
              </thead>
            </v-table>
          </v-row>
        </v-card-text>
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
      archers: ['アーチリブ', '吊り材', '上弦材・下弦材', '垂直材・斜材', '橋門構', '支柱', '格点部'],
      hagers: ['ケーブル', 'ハンガー', '塔柱', '塔頂サドル', '塔部水平材', '塔部斜材', '定着部(桁・塔柱側)'],
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
