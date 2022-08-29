<template>
  <v-row>
    <v-col md="3" cols="12">
      <bridge-side-card-details selectTab="inspection" />
    </v-col>
    <v-col md="9" cols="12">
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
                  <td>カマクラバシ</td>
                  <th>橋梁番号</th>
                  <td>01110010-0</td>
                  <th>橋長</th>
                  <td>22.98 ｍ</td>
                  <th>路線名</th>
                  <td>特例都道町有楽町線402号</td>
                  <th>通称名</th>
                  <td>極楽道路</td>
                  <th rowspan="2">所在地</th>
                  <td>自: 千代田区 内神田 1丁目 地内</td>
                  <th>事務所名</th>
                  <td>西多摩建設事務所</td>
                </tr>
                <tr>
                  <th colspan="2">橋梁名</th>
                  <td>鎌倉橋</td>
                  <th rowspan="2">分割番号</th>
                  <td rowspan="2">1</td>
                  <th rowspan="2">点検種類</th>
                  <td rowspan="2">定期点検</td>
                  <th rowspan="2">点検期間</th>
                  <td>自2022-08-13</td>
                  <th rowspan="2">点検請負業者</th>
                  <td>キチント建設</td>
                  <td>至: 千代田区 大手町 1丁目 地内</td>
                  <th rowspan="2">診査員点検員</th>
                  <td>出木杉英才</td>
                </tr>
                <tr>
                  <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">交通条件</th>
                  <th>調査年月日</th>
                  <td>2022-08-15</td>
                  <td>至2022-08-15</td>
                  <td>ヤリマス設備</td>
                  <th colspan="3"> </th>
                  <td>源静夫</td>
                </tr>
                <tr>
                  <th rowspan="2">交通量</th>
                  <td>21,013 台</td>
                  <th>上部工構造形式</th>
                  <td colspan="2">T桁橋(コン)</td>
                  <th rowspan="3">幅員</th>
                  <th>車道</th>
                  <td> 41.24 ｍ</td>
                  <th colspan="2">路面位置</th>
                  <td colspan="2">上路</td>
                  <th>荷重制限</th>
                  <td></td>
                </tr>
                <tr>
                  <td> 8 時間</td>
                  <th>下部工形式</th>
                  <td>逆T式橋台</td>
                  <td>RC抗</td>
                  <th>歩道</th>
                  <td> 7.75 ｍ</td>
                  <th>線形</th>
                  <td>2841.02</td>
                  <th>適用示方書</th>
                  <td>S31</td>
                  <th>竣工年月</th>
                  <td>1960-05</td>
                </tr>
                <tr>
                  <th>大型交通量</th>
                  <td>4,537 台 / 日</td>
                  <th>基礎形式</th>
                  <td>壁式橋脚</td>
                  <td>RC抗</td>
                  <th>合計</th>
                  <td> 48.99 ｍ</td>
                  <th colspan="2">支間長</th>
                  <td colspan="2">18.40 ｍ</td>
                  <th>総合評価</th>
                  <td>A</td>
                </tr>
              </tbody>
            </v-table>
            <v-table density="compact" class="ledger">
              <thead>
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
                  <th>d,eランク抽出</th>
                </tr>
                <tr>
                  <th rowspan="6" class="text-center" style="writing-mode: vertical-rl;">上部工</th>
                  <th>主桁(構)</th>
                  <td v-for="n of 31" :key="n"></td>
                </tr>
                <tr>
                  <th>横桁</th>
                  <td v-for="n of 31" :key="n"></td>
                </tr>
                <tr>
                  <th>縦桁</th>
                  <td v-for="n of 31" :key="n"></td>
                </tr>
                <tr>
                  <th>対傾構</th>
                  <td v-for="n of 31" :key="n"></td>
                </tr>
                <tr>
                  <th>横構</th>
                  <td v-for="n of 31" :key="n"></td>
                </tr>
                <tr>
                  <th>床版</th>
                  <td v-for="n of 31" :key="n"></td>
                </tr>
                <tr>
                  <th rowspan="4" class="text-center" style="writing-mode: vertical-rl;">下部工</th>
                  <th>躯体</th>
                  <td v-for="n of 31" :key="n"></td>
                </tr>
                <tr>
                  <th>基礎</th>
                  <td v-for="n of 31" :key="n"></td>
                </tr>
                <tr>
                  <th>躯体</th>
                  <td v-for="n of 31" :key="n"></td>
                </tr>
                <tr>
                  <th>基礎</th>
                  <td v-for="n of 31" :key="n"></td>
                </tr>
                <tr v-for="item in items" :key="item">
                  <th colspan="2">{{ item }}</th>
                  <td v-for="n of 31" :key="n"></td>
                </tr>
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
      select: '全て',
      histItems: ['全て', '1', '2', '3'],
      items: ['支承', '高覧', '防護柵', '地覆', '舗装', '伸縮装置', '排水設備', '落下防止装置', '点検設備', 'しゃ音設備', '照明設備', '添架物', '耐久性(α)', '安全性(β)', '径間別評価'],
    }
  },
  mounted: function () {
    console.log("mounted inspection3");
  },
  methods: {
  },
});
</script>
