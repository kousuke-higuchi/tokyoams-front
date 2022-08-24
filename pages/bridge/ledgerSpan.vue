<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <side-card-details/>
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <div class="d-flex">
            <v-card-title>
              <div class="font-weight-bold">橋梁台帳（径間）-</div>
              <div class="ml-2"> 鎌倉橋</div>
            </v-card-title>
            <v-card-actions>
              <v-select
                label="径間番号"
                v-model="select"
                :items="histItems"
                item-title="select"
                variant="outlined"
                density="compact"
                hide-details="false"
              ></v-select>
            </v-card-actions>
          </div>
          <div>
            <v-table density="compact">
              <thead>
                <tr>
                  <th colspan="14" class="text-center" nowrap style="border: 1px solid #dedede;">径間別諸元</th>
                </tr>
              </thead>
              <!-- TODO: DB調査していたが採用されるかわからないのでリテラルで実装。DB調査結果は別資料 -->
              <tbody>
                <tr>
                  <th class="text-center ledger-cell" nowrap>支間長</th>
                  <td class="ledger-cell"  nowrap>30.175</td>
                  <th class="text-center ledger-cell" nowrap>径間割</th>
                  <td class="ledger-cell" nowrap></td>
                  <th class="text-center ledger-cell" nowrap>区分</th>
                  <td class="text-center ledger-cell" nowrap>本線</td>
                  <th class="text-center ledger-cell" nowrap>種別</th>
                  <td class="text-center ledger-cell" nowrap>主径間</td>
                  <th class="text-center ledger-cell" nowrap>箇所名</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th class="text-center ledger-cell" nowrap>桁下条件</th>
                  <td class="text-center ledger-cell" nowrap>■ 河川 □ 道路 □ 鉄道 □ 公園 ■ その他</td>
                  <th class="text-center ledger-cell" nowrap>水面からの距離</th>
                  <td class="text-center ledger-cell" nowrap>-3 ｍ</td>
                </tr>
              </tbody>
            </v-table>
            <v-table density="compact">
              <tbody>
                <tr>
                  <th rowspan="2" class="text-center ledger-cell"  nowrap>構造形式</th>
                  <th class="text-center ledger-cell" nowrap>上部工➀</th>
                  <td class="text-center ledger-cell" nowrap>SRCアーチ橋</td>
                  <th rowspan="2" class="text-center ledger-cell"  nowrap>幅員</th>
                  <th class="text-center ledger-cell" nowrap>車道部</th>
                  <td class="text-center ledger-cell" nowrap>16.6 ｍ</td>
                  <th class="text-center ledger-cell" nowrap></th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>たわみ</th>
                  <th class="text-center ledger-cell" nowrap>δ d</th>
                  <td class="text-center ledger-cell" nowrap>0</td>
                  <th class="text-center ledger-cell" nowrap>δ a/1</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>路面位置</th>
                  <td class="text-center ledger-cell" nowrap>上路</td>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>主桁(横)</th>
                  <th class="text-center ledger-cell" nowrap>本数</th>
                  <td class="text-center ledger-cell" nowrap>37 本</td>
                  <th class="text-center ledger-cell" nowrap>間隔</th>
                  <td class="text-center ledger-cell" nowrap>0.61 ｍ</td>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>横桁</th>
                  <th class="text-center ledger-cell" nowrap>本数</th>
                  <td class="text-center ledger-cell" nowrap> 本</td>
                  <th class="text-center ledger-cell" nowrap>間隔</th>
                  <td class="text-center ledger-cell" nowrap>3.5 ｍ</td>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>縦桁</th>
                  <th class="text-center ledger-cell" nowrap>本数</th>
                  <td class="text-center ledger-cell" nowrap> 本</td>
                  <th class="text-center ledger-cell" nowrap>間隔</th>
                  <td class="text-center ledger-cell" nowrap>- ｍ</td>
                </tr>
                <tr>
                  <th class="text-center ledger-cell" nowrap>上部工➁</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th class="text-center ledger-cell" nowrap>歩道部</th>
                  <td class="text-center ledger-cell" nowrap>6.4 ｍ</td>
                  <th class="text-center ledger-cell" nowrap>計</th>
                  <td class="text-center ledger-cell" nowrap>22 ｍ</td>
                  <th class="text-center ledger-cell" nowrap>δ e</th>
                  <td class="text-center ledger-cell" nowrap>0</td>
                  <th class="text-center ledger-cell" nowrap></th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th class="text-center ledger-cell" nowrap>桁高</th>
                  <td class="text-center ledger-cell" nowrap>1.372 ｍ</td>
                  <th class="text-center ledger-cell" nowrap>材種</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th class="text-center ledger-cell" nowrap>桁高</th>
                  <td class="text-center ledger-cell" nowrap>1.372 ｍ</td>
                  <th class="text-center ledger-cell" nowrap>材種</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th class="text-center ledger-cell" nowrap>桁高</th>
                  <td class="text-center ledger-cell" nowrap>-</td>
                  <th class="text-center ledger-cell" nowrap>材種</th>
                  <td class="text-center ledger-cell" nowrap></td>
                </tr>
              </tbody>
            </v-table>
            <v-table density="compact">
              <tbody>
                <tr>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>下部工</th>
                  <th class="text-center ledger-cell" nowrap>始端側</th>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>橋番</th>
                  <td class="text-center ledger-cell" nowrap>A1</td>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>躯体形式</th>
                  <td class="text-center ledger-cell" nowrap>重力式橋台</td>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>基礎形式</th>
                  <td class="text-center ledger-cell" nowrap>木抗</td>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>仲縮装置</th>
                  <th class="text-center ledger-cell" nowrap>固定形式</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th class="text-center ledger-cell" nowrap>材種</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>支援</th>
                  <th class="text-center ledger-cell" nowrap>固定形式</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th class="text-center ledger-cell" nowrap>材種</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>床振</th>
                  <th class="text-center ledger-cell" nowrap>車道部厚さ</th>
                  <td class="text-center ledger-cell" nowrap>- ｍｍ</td>
                  <th class="text-center ledger-cell" nowrap>材種</th>
                  <td class="text-center ledger-cell" nowrap>-</td>
                  <th rowspan="2" class="text-center ledger-cell" nowrap>舗装</th>
                  <th class="text-center ledger-cell" nowrap>車道部厚さ</th>
                  <td class="text-center ledger-cell" nowrap>50 ｍｍ</td>
                  <th class="text-center ledger-cell" nowrap>材種</th>
                  <td class="text-center ledger-cell" nowrap>AS</td>
                </tr>
                <tr>
                  <th class="text-center ledger-cell" nowrap>終端側</th>
                  <td class="text-center ledger-cell" nowrap>A2</td>
                  <td class="text-center ledger-cell" nowrap>重力式橋台</td>
                  <td class="text-center ledger-cell" nowrap>木抗</td>
                  <th class="text-center ledger-cell" nowrap>可動形式</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th class="text-center ledger-cell" nowrap>材種</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th class="text-center ledger-cell" nowrap>可動形式</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th class="text-center ledger-cell" nowrap>材種</th>
                  <td class="text-center ledger-cell" nowrap></td>
                  <th class="text-center ledger-cell" nowrap>歩道部厚さ</th>
                  <td class="text-center ledger-cell" nowrap>- ｍｍ</td>
                  <th class="text-center ledger-cell" nowrap>材種</th>
                  <td class="text-center ledger-cell" nowrap>-</td>
                  <th class="text-center ledger-cell" nowrap>歩道部厚さ</th>
                  <td class="text-center ledger-cell" nowrap>10 ｍｍ</td>
                  <th class="text-center ledger-cell" nowrap>材種</th>
                  <td class="text-center ledger-cell" nowrap>コンクリート</td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return{
      select: '1',
      histItems:['1'],
    }
  },
})
</script>
<style scoped>
.ledger-cell {
  font-size: xx-small !important;
  border: 1px solid #dedede;
}
</style>