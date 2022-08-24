<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <FbgSideCardDetails />
      </v-col>
      <v-col md="9" cols="12">
        <v-card elevation="3">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">横断歩道橋（人道橋）定期点検表</v-row>
            <v-row class="justify-end mt-1 mr-3">様式-2</v-row>
          </v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <v-col md="12" cols="12">
                <div>
                  <v-table density="compact">
                    <tbody>
                      <!-- TODO: 採用されるかわからないのでリテラルで実装 -->
                      <tr>
                        <th rowspan="5" style="writing-mode: tb-rl;" class="text-center ledger-cell ledger-th" nowrap>
                          上部工</th>
                        <th class="text-center ledger-cell ledger-th" nowrap>主桁</th>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>横桁</th>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>縦桁</th>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>対傾構・横構</th>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>床版等</th>
                        <td class="text-center ledger-cell" nowrap>d</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th rowspan="4" style="writing-mode: tb-rl;" class="text-center ledger-cell ledger-th" nowrap>
                          下部工</th>
                        <th class="text-center ledger-cell ledger-th" nowrap>橋脚躯体</th>
                        <td class="text-center ledger-cell" nowrap>a</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>同基礎</th>
                        <td class="text-center ledger-cell" nowrap>不明</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>橋脚躯体</th>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>同基礎</th>
                        <td class="text-center ledger-cell" nowrap>不明</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th rowspan="6" style="writing-mode: tb-rl;" class="text-center ledger-cell ledger-th" nowrap>
                          階段部</th>
                        <th class="text-center ledger-cell ledger-th" nowrap>主桁との結合部</th>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap>d</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>主桁</th>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>踏み板</th>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap>a</td>
                        <td class="text-center ledger-cell" nowrap>a</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>蹴上げ</th>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap>a</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>地覆</th>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>橋台</th>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th rowspan="12" style="writing-mode: tb-rl;" class="text-center ledger-cell ledger-th"
                          nowrap>その他</th>
                        <th class="text-center ledger-cell ledger-th" nowrap>支承</th>
                        <td class="text-center ledger-cell" nowrap>a</td>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>高欄</th>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap>a</td>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>落下物防止等</th>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>手摺</th>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap>a</td>
                        <td class="text-center ledger-cell" nowrap>a</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>目隠板等</th>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap>d</td>
                        <td class="text-center ledger-cell" nowrap>a</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>舗装</th>
                        <td class="text-center ledger-cell" nowrap>a</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>伸縮装置</th>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>排水設備</th>
                        <td class="text-center ledger-cell" nowrap>c</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>落橋防止装置</th>
                        <td class="text-center ledger-cell" nowrap>a</td>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap>b</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>照明設備</th>
                        <td class="text-center ledger-cell" nowrap>d</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap>添架物</th>
                        <td class="text-center ledger-cell" nowrap>a</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th class="text-center ledger-cell ledger-th" nowrap></th>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>
                      <tr>
                        <th colspan="2" class="text-center ledger-cell ledger-th" nowrap>耐久性（α）</th>
                        <td class="text-center ledger-cell" nowrap>C</td>
                        <td class="text-center ledger-cell" nowrap>A</td>
                        <td class="text-center ledger-cell" nowrap>A</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                      </tr>     
                      <tr>
                        <th colspan="2" class="text-center ledger-cell ledger-th" nowrap>径間別評価</th>
                        <td class="text-center ledger-cell" nowrap>C</td>
                        <td class="text-center ledger-cell" nowrap>A</td>
                        <td class="text-center ledger-cell" nowrap>A</td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
                        <td class="text-center ledger-cell" nowrap></td>
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