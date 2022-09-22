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
                  <th colspan="2">フリガナ</th>
                  <td colspan="3">カマクラバシ</td>
                  <th colspan="4">橋梁番号</th>
                  <td colspan="3">01110010-0</td>
                  <th>橋長</th>
                  <td colspan="2">22.98 ｍ</td>
                  <th colspan="2">路線名</th>
                  <td colspan="4">特例都道町有楽町線402号</td>
                  <th colspan="2">通称名</th>
                  <td colspan="2">極楽道路</td>
                  <th rowspan="2" colspan="2" class="text-center">所在地</th>
                  <td colspan="4">自: 千代田区 内神田 1丁目 地内</td>
                  <th>事務所名</th>
                  <td colspan="2" >西多摩建設事務所</td>
                </tr>
                <tr>
                  <th colspan="2">橋梁名</th>
                  <td colspan="3">鎌倉橋</td>
                  <th rowspan="2" colspan="4">分割番号</th>
                  <td rowspan="2" colspan="2">1</td>
                  <th rowspan="2" colspan="2">点検種類</th>
                  <td rowspan="2" colspan="2">定期点検</td>
                  <th rowspan="2" colspan="2">点検期間</th>
                  <td colspan="4">自: 2022-08-13</td>
                  <th rowspan="2" colspan="2">点検請負業者</th>
                  <td colspan="2">キチント建設</td>
                  <td colspan="4">至: 千代田区 大手町 1丁目 地内</td>
                  <th rowspan="2">診査員点検員</th>
                  <td colspan="2" >出木杉英才</td>
                </tr>
                <tr>
                  <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">交通条件</th>
                  <th>調査年月日</th>
                  <td colspan="3">2022-08-15</td>
                  <td colspan="4">至: 2022-08-15</td>
                  <td colspan="2">ヤリマス設備</td>
                  <th colspan="6"> </th>
                  <td colspan="2" >源静夫</td>
                </tr>
                <tr>
                  <th rowspan="2">交通量</th>
                  <td colspan="3">21,013 台</td>
                  <th colspan="4">上部工構造形式</th>
                  <td colspan="4">T桁橋(コン)</td>
                  <th rowspan="3" colspan="2">幅員</th>
                  <th colspan="2">車道</th>
                  <td colspan="4"> 41.24 ｍ</td>
                  <th colspan="4">路面位置</th>
                  <td colspan="5">上路</td>
                  <th colspan="3">荷重制限</th>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="3"> 8 時間</td>
                  <th colspan="4">下部工形式</th>
                  <td colspan="2">逆T式橋台</td>
                  <td colspan="2">RC抗</td>
                  <th colspan="2">歩道</th>
                  <td colspan="4"> 7.75 ｍ</td>
                  <th colspan="3">線形</th>
                  <td colspan="2">2841.02</td>
                  <th colspan="2">適用示方書</th>
                  <td colspan="2">S31</td>
                  <th colspan="2">竣工年月</th>
                  <td colspan="2">1960-05</td>
                </tr>
                <tr>
                  <th>大型車<br>交通量</th>
                  <td colspan="3">4,537 台 / 日</td>
                  <th colspan="4">基礎形式</th>
                  <td colspan="2">壁式橋脚</td>
                  <td colspan="2">RC抗</td>
                  <th colspan="2">合計</th>
                  <td colspan="4"> 48.99 ｍ</td>
                  <th colspan="4">支間長</th>
                  <td colspan="5">18.40 ｍ</td>
                  <th colspan="2">総合評価</th>
                  <td colspan="2">A</td>
                </tr>
                <tr>
                  <th colspan="2" class="text-right">径間番号</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                  <th>11</th>
                  <th>12</th>
                  <th>13</th>
                  <th>14</th>
                  <th>15</th>
                  <th>16</th>
                  <th>17</th>
                  <th>18</th>
                  <th>19</th>
                  <th>20</th>
                  <th>21</th>
                  <th>22</th>
                  <th>23</th>
                  <th>24</th>
                  <th>25</th>
                  <th>26</th>
                  <th>27</th>
                  <th>28</th>
                  <th>29</th>
                  <th>30</th>
                  <th colspan="2">d,eランク抽出</th>
                </tr>
                <tr>
                  <th rowspan="6" class="text-center" style="writing-mode: vertical-rl;">上部工</th>
                  <th>主桁(構)</th>
                  <td v-for="n of 30" :key="n"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>横桁</th>
                  <td v-for="n of 30" :key="n"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>縦桁</th>
                  <td v-for="n of 30" :key="n"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>対傾構</th>
                  <td v-for="n of 30" :key="n"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>横構</th>
                  <td v-for="n of 30" :key="n"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>床版</th>
                  <td v-for="n of 30" :key="n"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">下部工</th>
                  <th>躯体</th>
                  <td v-for="n of 30" :key="n"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>基礎</th>
                  <td v-for="n of 30" :key="n"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>躯体</th>
                  <td v-for="n of 30" :key="n"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>基礎</th>
                  <td v-for="n of 30" :key="n"></td>
                  <td colspan="2"></td>
                </tr>
                <tr v-for="item in items" :key="item">
                  <th colspan="2">{{ item }}</th>
                  <td v-for="n of 30" :key="n"></td>
                  <td colspan="2"></td>
                </tr>
              </tbody>
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
      items: ['支承', '高欄', '防護柵', '地覆', '舗装', '伸縮装置', '排水設備', '落橋防止装置', '点検設備', 'しゃ音設備', '照明設備', '添架物', '耐久性(α)', '安全性(β)', '径間別評価'],
    }
  },
  mounted: function () {
    console.log("mounted inspection3");
  },
  methods: {
  },
});
</script>
