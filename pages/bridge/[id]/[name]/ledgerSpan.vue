<template>
  <v-row>
    <v-col v-bind:md="child_extend?3:0" cols="12">
    <!-- <p> {{ child_extend }}</p> -->
      <bridge-side-card-details @isExtend='child_extend = $event' />
    </v-col>
    <v-col v-bind:md="child_extend?9:12" cols="12">
      <v-card>
        <div class="d-flex">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">橋梁台帳（径間）</v-row>
          </v-card-title>
          <v-card-actions>
            <v-select label="径間番号" v-model="select" :items="histItems" item-title="select" variant="outlined"
              density="compact" hide-details="false"></v-select>
          </v-card-actions>
        </div>
        <div>
          <v-table density="compact" class="ledger">
            <thead>
              <tr>
                <th colspan="14" class="text-center ledger-th" style="border: 1px solid #dedede;">径間別諸元</th>
              </tr>
            </thead>
            <!-- TODO: DB調査していたが採用されるかわからないのでリテラルで実装。DB調査結果は別資料 -->
            <tbody>
              <tr>
                <th class="text-center">支間長</th>
                <td>30.175</td>
                <th class="text-center">径間割</th>
                <td></td>
                <th class="text-center">区分</th>
                <td class="text-center">本線</td>
                <th class="text-center">種別</th>
                <td class="text-center">主径間</td>
                <th class="text-center">箇所名</th>
                <td class="text-center"></td>
                <th class="text-center">桁下条件</th>
                <td class="text-center">■ 河川 □ 道路 □ 鉄道 □ 公園 ■ その他</td>
                <th class="text-center">水面からの距離</th>
                <td class="text-center">-3 ｍ</td>
              </tr>
            </tbody>
          </v-table>
          <v-table density="compact" class="ledger">
            <tbody>
              <tr>
                <th rowspan="2" class="text-center">構造形式</th>
                <th class="text-center">上部工➀</th>
                <td class="text-center">SRCアーチ橋</td>
                <th rowspan="2" class="text-center">幅員</th>
                <th class="text-center">車道部</th>
                <td class="text-center">16.6 ｍ</td>
                <th class="text-center"></th>
                <td class="text-center"></td>
                <th rowspan="2" class="text-center">たわみ</th>
                <th class="text-center">δ d</th>
                <td class="text-center">0</td>
                <th class="text-center">δ a/1</th>
                <td class="text-center"></td>
                <th rowspan="2" class="text-center">路面位置</th>
                <td class="text-center">上路</td>
                <th rowspan="2" class="text-center">主桁(横)</th>
                <th class="text-center">本数</th>
                <td class="text-center">37 本</td>
                <th class="text-center">間隔</th>
                <td class="text-center">0.61 ｍ</td>
                <th rowspan="2" class="text-center">横桁</th>
                <th class="text-center">本数</th>
                <td class="text-center"> 本</td>
                <th class="text-center">間隔</th>
                <td class="text-center">3.5 ｍ</td>
                <th rowspan="2" class="text-center">縦桁</th>
                <th class="text-center">本数</th>
                <td class="text-center"> 本</td>
                <th class="text-center">間隔</th>
                <td class="text-center">- ｍ</td>
              </tr>
              <tr>
                <th class="text-center">上部工➁</th>
                <td class="text-center"></td>
                <th class="text-center">歩道部</th>
                <td class="text-center">6.4 ｍ</td>
                <th class="text-center">計</th>
                <td class="text-center">22 ｍ</td>
                <th class="text-center">δ e</th>
                <td class="text-center">0</td>
                <th class="text-center"></th>
                <td class="text-center"></td>
                <td class="text-center"></td>
                <th class="text-center">桁高</th>
                <td class="text-center">1.372 ｍ</td>
                <th class="text-center">材種</th>
                <td class="text-center"></td>
                <th class="text-center">桁高</th>
                <td class="text-center">1.372 ｍ</td>
                <th class="text-center">材種</th>
                <td class="text-center"></td>
                <th class="text-center">桁高</th>
                <td class="text-center">-</td>
                <th class="text-center">材種</th>
                <td class="text-center"></td>
              </tr>
            </tbody>
          </v-table>
          <v-table density="compact" class="ledger">
            <tbody>
              <tr>
                <th rowspan="2" class="text-center">下部工</th>
                <th class="text-center">始端側</th>
                <th rowspan="2" class="text-center">橋番</th>
                <td class="text-center">A1</td>
                <th rowspan="2" class="text-center">躯体形式</th>
                <td class="text-center">重力式橋台</td>
                <th rowspan="2" class="text-center">基礎形式</th>
                <td class="text-center">木抗</td>
                <th rowspan="2" class="text-center">仲縮装置</th>
                <th class="text-center">固定形式</th>
                <td class="text-center"></td>
                <th class="text-center">材種</th>
                <td class="text-center"></td>
                <th rowspan="2" class="text-center">支援</th>
                <th class="text-center">固定形式</th>
                <td class="text-center"></td>
                <th class="text-center">材種</th>
                <td class="text-center"></td>
                <th rowspan="2" class="text-center">床振</th>
                <th class="text-center">車道部厚さ</th>
                <td class="text-center">- ｍｍ</td>
                <th class="text-center">材種</th>
                <td class="text-center">-</td>
                <th rowspan="2" class="text-center">舗装</th>
                <th class="text-center">車道部厚さ</th>
                <td class="text-center">50 ｍｍ</td>
                <th class="text-center">材種</th>
                <td class="text-center">AS</td>
              </tr>
              <tr>
                <th class="text-center">終端側</th>
                <td class="text-center">A2</td>
                <td class="text-center">重力式橋台</td>
                <td class="text-center">木抗</td>
                <th class="text-center">可動形式</th>
                <td class="text-center"></td>
                <th class="text-center">材種</th>
                <td class="text-center"></td>
                <th class="text-center">可動形式</th>
                <td class="text-center"></td>
                <th class="text-center">材種</th>
                <td class="text-center"></td>
                <th class="text-center">歩道部厚さ</th>
                <td class="text-center">- ｍｍ</td>
                <th class="text-center">材種</th>
                <td class="text-center">-</td>
                <th class="text-center">歩道部厚さ</th>
                <td class="text-center">10 ｍｍ</td>
                <th class="text-center">材種</th>
                <td class="text-center">コンクリート</td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
  const child_extend = ref(true);
  const select = ref('全て');
  const histItems = ref<String[]>([
        '全て', '1'
  ]);

</script>
