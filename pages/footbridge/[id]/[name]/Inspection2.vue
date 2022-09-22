<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' selectTab="inspection"/>
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card elevation="3">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">横断歩道橋（人道橋）定期点検表</v-row>
            <v-row class="justify-end mt-1 mr-3">様式-2</v-row>
          </v-card-title>
          <v-row>
            <v-card-text>
              <v-btn color="primary" style="float:right">
                更新
              </v-btn>
            </v-card-text>
          </v-row>
          <v-card-text>
            <v-row no-gutters>
              <v-col md="12" cols="12">
                <div>
                  <v-table density="compact" class="ledger">
                    <tbody>
                      <!-- TODO: 採用されるかわからないのでリテラルで実装 -->
                      <tr>
                        <th class="text-center">
                          ﾌﾘｶﾞﾅ<br>
                          橋名
                        </th>
                        <td class="text-center">
                          ｱｵﾊﾞ<br>
                          青葉歩道橋
                        </td>
                        <th>橋梁<br>番号</th>
                        <td>01130010</td>
                        <th>所在地</th>
                        <td>
                          自）千代田区三番町6番14号<br>
                          至）千代田区九段南二丁目1番32号
                        </td>
                        <th class="text-center">※１）路線名<br>（通称名）</th>
                        <td class="text-center">
                          特例都道401号線<br>
                          麹町竹平<br>
                          内堀通り
                        </td>
                        <th class="text-center">事務所名</th>
                        <td class="text-center">第一建設事務所</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <tbody>
                      <!-- TODO: 採用されるかわからないのでリテラルで実装 -->
                      <tr>
                        <th rowspan="4" class="text-center" style="width:4em">交通条件</th>
                        <th>調査年月</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" :placeholder=trafficcensusDate />
                        </td>
                        <th rowspan="4" class="text-center" style="width:4em">利用状況</th>
                        <th>調査年月</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="2020年12月" />
                        </td>
                        <th>橋長</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="44.085ｍ" />
                        </td>
                        <th style="width:8em">上部形式</th>
                        <td style="width:20em">
                          <v-text-field variant="underlined" density="compact" placeholder="中路式純銅Ⅰ桁橋" />
                        </td>
                        <th style="width:10em">点検年月</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="2020年07月" />
                        </td>
                      </tr>
                      <tr>
                        <th rowspan="2">交通量</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="12,900台" />
                        </td>
                        <th rowspan="2">利用者数</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="457（人）" />
                        </td>
                        <th>有効幅員</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="1.5" />
                        </td>
                        <th>下部形式</th>
                        <td style="width:15em">
                          <v-text-field variant="underlined" density="compact" placeholder="円柱橋脚取付部躯体" />
                        </td>
                        <th>点検業者</th>
                        <td style="width:15em">
                          <v-text-field variant="underlined" density="compact" placeholder="日本調査（株）" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="12（h）" />
                        </td>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="12（h）" />
                        </td>
                        <th style="width:12em">※2)昇降方式</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="1.階段" />
                        </td>
                        <th>基礎形式</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="杭基礎直接基礎" />
                        </td>
                        <th rowspan="2">総合評価</th>
                        <td rowspan="2">
                          <v-text-field variant="underlined" density="compact" placeholder="C" />
                        </td>
                      </tr>
                      <tr>
                        <th style="width:10em">大型車混入率</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="9.5（%）" />
                        </td>
                        <th style="width:10em">通学路指定</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="有" />
                        </td>
                        <th>路面位置</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="中路" />
                        </td>
                        <th>舗装種類</th>
                        <td>
                          <v-text-field variant="underlined" density="compact" placeholder="カラーチップ" />
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <tbody>
                      <!-- TODO: 採用されるかわからないのでリテラルで実装 -->
                      <tr>
                        <th rowspan="3">部材</th>
                        <th>※３）径間番号</th>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th>※２）〔種別〕</th>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th></th>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th rowspan="5" class="text-center" style="writing-mode: tb-rl; width: 5em">
                          上部工</th>
                        <th class="text-center">主桁</th>
                        <td class="text-center">b</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">横桁</th>
                        <td class="text-center">b</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">縦桁</th>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">対傾構・横構</th>
                        <td class="text-center">b</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">床版等</th>
                        <td class="text-center">d</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th rowspan="4" class="text-center" style="writing-mode: tb-rl;">
                          下部工</th>
                        <th class="text-center">橋脚躯体</th>
                        <td class="text-center">a</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">同基礎</th>
                        <td class="text-center">不明</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">橋脚躯体</th>
                        <td class="text-center">b</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">同基礎</th>
                        <td class="text-center">不明</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th rowspan="6" class="text-center" style="writing-mode: tb-rl;">
                          階段部</th>
                        <th class="text-center">主桁との結合部</th>
                        <td class="text-center"></td>
                        <td class="text-center">b</td>
                        <td class="text-center">d</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">主桁</th>
                        <td class="text-center"></td>
                        <td class="text-center">b</td>
                        <td class="text-center">b</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">踏み板</th>
                        <td class="text-center"></td>
                        <td class="text-center">a</td>
                        <td class="text-center">a</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">蹴上げ</th>
                        <td class="text-center"></td>
                        <td class="text-center">b</td>
                        <td class="text-center">a</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">地覆</th>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">橋台</th>
                        <td class="text-center"></td>
                        <td class="text-center">b</td>
                        <td class="text-center">b</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th rowspan="12" class="text-center" style="writing-mode: tb-rl;">
                          その他</th>
                        <th class="text-center">支承</th>
                        <td class="text-center">a</td>
                        <td class="text-center">b</td>
                        <td class="text-center">b</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">高欄</th>
                        <td class="text-center">b</td>
                        <td class="text-center">a</td>
                        <td class="text-center">b</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">落下物防止等</th>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">手摺</th>
                        <td class="text-center"></td>
                        <td class="text-center">a</td>
                        <td class="text-center">a</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">目隠板等</th>
                        <td class="text-center"></td>
                        <td class="text-center">d</td>
                        <td class="text-center">a</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">舗装</th>
                        <td class="text-center">a</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">伸縮装置</th>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">排水設備</th>
                        <td class="text-center">c</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">落橋防止装置</th>
                        <td class="text-center">a</td>
                        <td class="text-center">b</td>
                        <td class="text-center">b</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">照明設備</th>
                        <td class="text-center">d</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center">添架物</th>
                        <td class="text-center">a</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th class="text-center"></th>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th colspan="2" class="text-center">耐久性（α）</th>
                        <td class="text-center">C</td>
                        <td class="text-center">A</td>
                        <td class="text-center">A</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                      </tr>
                      <tr>
                        <th colspan="2" class="text-center">径間別評価</th>
                        <td class="text-center">C</td>
                        <td class="text-center">A</td>
                        <td class="text-center">A</td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
                        <td class="text-center"></td>
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

<script lang="ts" setup>
const trafficcensusDate = ref('2015年11月');

const child_extend = ref(true);
const onDownloadLedgerClick = () => {
  console.debug('downloadLedger');
};
</script>