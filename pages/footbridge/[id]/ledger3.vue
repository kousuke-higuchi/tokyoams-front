<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <footbridge-side-card-details @isExtend='child_extend = $event' />
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card elevation="3">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">青葉歩道橋 No.01130010</v-row>
            <v-row class="justify-end mt-1 mr-3">様式-3</v-row>
          </v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <v-col md="12" cols="12">
                <div>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th colspan="13" class="text-center">設置状況調書</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- TODO: 採用されるかわからないのでリテラルで実装 -->
                      <tr>
                        <th class="text-center">横断歩道橋の形状パターン</th>
                        <th class="text-center">設置個所</th>
                        <th colspan="3" class="text-center">単路部</th>
                        <th rowspan="2" class="text-center">路線・項目</th>
                        <th rowspan="2" class="text-center">車道幅員<br>（中央分離帯を除く）</th>
                        <th rowspan="2" class="text-center">自動車交通量</th>
                        <th colspan="2" class="text-center">中央分離帯</th>
                        <th class="text-center">中央分離帯柵</th>
                        <th colspan="2" class="text-center">中央分離帯柵設置要因</th>
                      </tr>
                      <tr>
                        <td rowspan="5">
                          <img src="../../../assets/img/dmg/fbg3view1.jpg">
                        </td>
                        <th>近接横断歩道離れ</th>
                        <td>無し ｍ</td>
                        <th>信号機の<br>有無</th>
                        <td>無</td>
                        <th>有・無</th>
                        <th>幅</th>
                        <th>有・無</th>
                        <th>通学路</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>次の近接横断歩道離れ</th>
                        <td>無し ｍ</td>
                        <th>信号機の<br>有無</th>
                        <td>無</td>
                        <th>主線路</th>
                        <td>17.60ｍ</td>
                        <td>（12時間）<br>26,252台</td>
                        <td>有</td>
                        <td>0.6ｍ</td>
                        <td>無</td>
                        <th>対車の安全</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>歩道橋下の信号処理</th>
                        <td colspan="3" class="text-center">無</td>
                        <th>副線路</th>
                        <td> ｍ</td>
                        <td></td>
                        <td></td>
                        <td> ｍ</td>
                        <td></td>
                        <th>その他</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th>歩道の残幅員<br>（有効幅員）</th>
                        <td>最小 2.2ｍ</td>
                        <td>2番目 2.4ｍ</td>
                        <td>3番目 -ｍ</td>
                        <th>次路線</th>
                        <td> ｍ</td>
                        <td></td>
                        <td></td>
                        <td> ｍ</td>
                        <td></td>
                        <th>不明</th>
                        <td>○</td>
                      </tr>
                      <tr>
                        <th colspan="3">歩道橋下に歩道部に横断抑止柵が連続しているか</th>
                        <td>有</td>
                        <th colspan="2">横断歩道橋下に歩道切下げがあるか</th>
                        <td>無</td>
                        <th>設置事業名</th>
                        <td colspan="2"></td>
                        <th>陳情による<br>場合の相手</th>
                        <td colspan="2"></td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <tbody>
                      <tr>
                        <th>都市計画街路各幅予定</th>
                        <td>×</td>
                        <th>利用し易い昇降方式</th>
                        <td>○</td>
                        <th>横断する道路の視距が道路構造令以下</th>
                        <td>×</td>
                        <th>立体交差の取り付け部</th>
                        <td>×</td>
                        <th rowspan="2">所轄警察署名</th>
                        <td rowspan="2">麹町警察署</td>
                      </tr>
                      <tr>
                        <th>啓開道路・避難道路</th>
                        <td>○</td>
                        <th>利用し易い歩道橋線形</th>
                        <td>○</td>
                        <th>右左折車による横断者の事故多発</th>
                        <td>×</td>
                        <th>踏切から200ｍ以内</th>
                        <td>×</td>
                      </tr>
                      <tr>
                        <th>再開発地域（内・隣接）</th>
                        <td>隣接</td>
                        <th>走行車両の視距を妨げない（階段、橋脚）</th>
                        <td>○</td>
                        <th>美又路または複雑な交差点で危険</th>
                        <td>×</td>
                        <th>踏切内</th>
                        <td>×</td>
                        <th rowspan="2" class="text-center">歩道橋がないとした場合<br>事故多発の可能性<br>（所轄警察の判断）</th>
                        <td rowspan="2" class="text-center">有<br>（事故発生の可能性は否定できない）</td>
                      </tr>
                      <tr>
                        <th>風致地区（内・隣接）</th>
                        <td>隣接</td>
                        <th>シンボルロード</th>
                        <td>×</td>
                        <th>連続した高速走行が望ましい道路</th>
                        <td>○</td>
                        <th>特定経路に架かる歩道橋</th>
                        <td>○</td>
                      </tr>
                      <tr>
                        <th>沿道状況</th>
                        <td colspan="3">①人口集中地区（DID）</td>
                        <th>高速道路出入口</th>
                        <td>×</td>
                        <th colspan="2">交通バリアフリー基本構想（H15.3）</th>
                        <th rowspan="2" colspan="2"></th>
                      </tr>
                      <tr>
                        <th>用途地域</th>
                        <td colspan="3">②商業系地域</td>
                        <th>屋根付き歩道橋</th>
                        <td>×</td>
                        <th></th>
                        <td></td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th colspan="8" class="text-center">利用状況調書</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>利用状況 調査年度</th>
                        <td>2020</td>
                        <td colspan="3">
                          <table class="noborder">
                            <tr>
                              <td>利用 2020年 12月 9日</td>
                            </tr>
                            <tr>
                              <td>非利 年 月 日 調査会社 日本調査（株）</td>
                            </tr>
                            <tr>
                              <td>歩道 2020年 12月 9日</td>
                            </tr>
                          </table>
                        </td>
                        <th>通学路指定</th>
                        <td>有</td>
                        <th>通学路指定学校名</th>
                      </tr>
                      <tr>
                        <th>利用者数/１２時</th>
                        <td>457人</td>
                        <td rowspan="3">
                          <table class="noborder" style="width:100%">
                            <tr>
                              <th class="text-center">利用者数/１２時の内訳</th>
                            </tr>
                            <tr>
                              <td class="text-left">・大人</td>
                              <td class="text-right">431</td>
                            </tr>
                            <tr>
                              <td class="text-left">・高齢者</td>
                              <td class="text-right">26</td>
                            </tr>
                            <tr>
                              <td class="text-left">・学童</td>
                              <td class="text-right">0</td>
                            </tr>
                            <tr>
                              <td class="text-left">・身障者</td>
                              <td class="text-right">0</td>
                            </tr>
                            <tr>
                              <td class="text-left">・自転車</td>
                              <td class="text-right">0</td>
                            </tr>
                            <tr>
                              <td class="text-left">・乳母車</td>
                              <td class="text-right">0</td>
                            </tr>
                            <tr>
                              <td class="text-center">計</td>
                              <td class="text-right">457</td>
                            </tr>
                          </table>
                        </td>
                        <td rowspan="2" colspan="2">利用率</td>
                        <th>通学路廃止の予定</th>
                        <td>無</td>
                        <td rowspan="2">九段小学校</td>
                      </tr>
                      <tr>
                        <th>（ピーク時）</th>
                        <td>112人</td>
                        <th>学校の統配合<br>・学校の移転</th>
                        <td>無</td>
                      </tr>
                      <tr>
                        <th>非利用者数/１２時</th>
                        <td>- 人</td>
                        <td rowspan="2">
                          <table class="noborder" style="width:100%">
                            <tr>
                              <th class="text-center ">方向</th>
                            </tr>
                            <tr>
                              <td class="text-center">X1</td>
                            </tr>
                            <tr>
                              <td class="text-center"><br></td>
                            </tr>
                            <tr>
                              <td class="text-center">X2</td>
                            </tr>
                          </table>
                        </td>
                        <td rowspan="2">
                          <table class="noborder" style="width:100%">
                            <tr>
                              <th class="text-center">歩行者数</th>
                            </tr>
                            <tr>
                              <td class="text-center">1,898人</td>
                            </tr>
                            <tr>
                              <td class="text-center"><br></td>
                            </tr>
                            <tr>
                              <td class="text-center">1,490人</td>
                            </tr>
                          </table>
                        </td>
                        <td rowspan="2" colspan="4">
                          <table class="noborder">
                            <tr>
                              <td class="text-center" style="padding-right: 45px"></td>
                              <th class="text-center" style="padding-right: 45px">大人</th>
                              <th class="text-center" style="padding-right: 45px">高齢者</th>
                              <th class="text-center" style="padding-right: 45px">学童</th>
                              <th class="text-center" style="padding-right: 45px">身障者</th>
                              <th class="text-center" style="padding-right: 45px">自転車利用者</th>
                              <th class="text-center">乳母車</th>
                            </tr>
                            <tr>
                              <td class="text-left"></td>
                              <td class="text-left">1,621人</td>
                              <td class="text-left">78人</td>
                              <td class="text-left">9人</td>
                              <td class="text-left">0人</td>
                              <td class="text-left">187人</td>
                              <td class="text-left">3人</td>
                            </tr>
                            <tr>
                              <th class="text-left">内訳</th>
                            </tr>
                            <tr>
                              <td class="text-left"></td>
                              <td class="text-left">1,206人</td>
                              <td class="text-left">33人</td>
                              <td class="text-left">14人</td>
                              <td class="text-left">1人</td>
                              <td class="text-left">232人</td>
                              <td class="text-left">4人</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <thead>
                      <tr>
                        <th colspan="7" class="text-center">周辺環境調書</th>
                      </tr>
                      <tr>
                        <th colspan="2" class="text-center">近隣の主な施設</th>
                        <th colspan="2" class="text-center">土地利用形態</th>
                        <th colspan="3" class="text-center">そのほか施設現況</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>学校</th>
                        <td>二松学舎大学、二松學舍大学附属高等学校□</td>
                        <th>商店など</th>
                        <td>日本生命三番町ビル、東京海上日勤ビル</td>
                        <th>高欄高さ</th>
                        <td colspan="2">通路部： 1.18ｍ 階段部：1.3ｍ</td>
                      </tr>
                      <tr>
                        <th>福祉施設</th>
                        <td>九段坂病院</td>
                        <th>住宅</th>
                        <td>公務員三番町住宅</td>
                        <th>手すり</th>
                        <th>東京都福祉のまちづくり条例施設設備マニュアルに適合する設置の有無</th>
                        <td>無</td>
                      </tr>
                      <tr>
                        <th>歩行者の集散が多い施設</th>
                        <td>靖國神社<br>九段坂公園、千鳥ヶ淵戦没者墓苑</td>
                        <th>公共施設</th>
                        <td>無し</td>
                        <th>視覚障碍者誘導用ブロック</th>
                        <th>東京都福祉のまちづくり条例施設設備マニュアルに適合する設置の有無</th>
                        <td>無</td>
                      </tr>
                      <tr>
                        <th>その他</th>
                        <td>宮内庁分室、宮内庁長官公邸、ｲﾀﾘｱ文化会館</td>
                        <th>空地</th>
                        <td>無し</td>
                        <th>高力ボルト使用区分</th>
                        <td colspan="2">F9T</td>
                      </tr>
                      <tr>
                        <th>撤去要望</th>
                        <td>無</td>
                        <th>撤去要望年月日</th>
                        <td>-</td>
                        <th>要望者</th>
                        <td colspan="2">-</td>
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
const child_extend = ref(true);
const onDownloadLedgerClick = () => {
  console.debug('downloadLedger');
};
</script>