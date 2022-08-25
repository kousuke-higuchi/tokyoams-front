<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col md="3" cols="12">
        <v-card height="820px" elevation="3">
          <v-list-item-group color="primary">
            <v-list :items="subtitles" color="primary"></v-list>
          </v-list-item-group>
        </v-card>
      </v-col>

      <v-col md="9" cols="12">
        <v-card>
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">道路照明台帳</v-row>
          </v-card-title>

          <!-- 道路照明台帳 -->
          <div>
            <v-card class="overflow-auto" elevation="4">
              <!--事務所名-->
              <v-table density="compact" class="ledger">
                <tbody>
                  <tr>
                    <th>事務所名</th>
                    <td colspan="2">　</td>
                    <th>工区名</th>
                    <td>　</td>
                    <th>管理番号</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>路線番号</th>
                    <td>　</td>
                    <td>　</td>
                    <th>路線名</th>
                    <td>　</td>
                    <th>通称道路名</th>
                    <td>　</td>
                  </tr>
                </tbody>
              </v-table>
              <!--地点標-->
              <v-table density="compact" class="ledger">
                <tbody>
                  <tr>
                    <th>地点標</th>
                    <td colspan="3" style="text-align: right">ｋｍ</td>
                    <th>住　所</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>設置位置</th>
                    <td colspan="3"></td>
                    <th>上下線別</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>緯　度</th>
                    <td>　</td>
                    <th>経　度</th>
                    <td>　</td>
                    <th>住宅地図番号</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>施設名</th>
                    <td colspan="3"></td>
                    <th>施設番号</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>施設名</th>
                    <td colspan="3"></td>
                    <th>施設番号</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>設置形式</th>
                    <td colspan="3"></td>
                    <th>照明種別</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>契約方式</th>
                    <td colspan="3"></td>
                    <th>電源引込方式</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>電柱管理者</th>
                    <td></td>
                    <th>電柱番号</th>
                    <td>　</td>
                    <th>給電方式</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>東電管理番号</th>
                    <td colspan="3"></td>
                    <th>電源方式</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>お客様契約番号</th>
                    <td colspan="3"></td>
                    <th>東電営業所</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>配電盤番号</th>
                    <td colspan="3"></td>
                    <th>電気料金集約分内訳表番号</th>
                    <td>　</td>
                  </tr>
                </tbody>
              </v-table>
              <!--地点標-->
              <v-table density="compact" class="ledger">
                <tbody>
                <tr>
                  <th>調光の有無</th>
                  <td colspan="3"></td>
                  <th>遮光板</th>
                  <td colspan="2">　</td>
                </tr>
                <tr>
                  <th rowspan="4">ランプの種類<br />・規格・型式</th>
                  <td>　</td>
                  <th>種　類</th>
                  <th>規　格</th>
                  <th>灯　数</th>
                  <th>灯具メーカー</th>
                  <th>灯具の形式</th>
                </tr>
                <tr>
                  <td>①</td>
                  <td>　</td>
                  <td style="text-align: right">Ｗ</td>
                  <td style="text-align: right">灯</td>
                  <td>　</td>
                  <td>　</td>
                </tr>
                <tr>
                  <td>②</td>
                  <td>　</td>
                  <td style="text-align: right">Ｗ</td>
                  <td style="text-align: right">灯</td>
                  <td>　</td>
                  <td>　</td>
                </tr>
                <tr>
                  <td>③</td>
                  <td>　</td>
                  <td style="text-align: right">Ｗ</td>
                  <td style="text-align: right">灯</td>
                  <td>　</td>
                  <td>　</td>
                </tr>
                <tr>
                  <th rowspan="4">安定器の種類<br />及び容量</th>
                  <td>　</td>
                  <th>種　類</th>
                  <th colspan="2">容　　量</th>
                  <th>個　数</th>
                  <th>安定器メーカー</th>
                </tr>
                <tr>
                  <td>①</td>
                  <td>　</td>
                  <td style="text-align: right">Ｖ</td>
                  <td style="text-align: right">Ｗ用</td>
                  <td style="text-align: right">個</td>
                  <td>　</td>
                </tr>
                <tr>
                  <td>②</td>
                  <td>　</td>
                  <td style="text-align: right">Ｖ</td>
                  <td style="text-align: right">Ｗ用</td>
                  <td style="text-align: right">個</td>
                  <td>　</td>
                </tr>
                <tr>
                  <td>③</td>
                  <td>　</td>
                  <td style="text-align: right">Ｖ</td>
                  <td style="text-align: right">Ｗ用</td>
                  <td style="text-align: right">個</td>
                  <td>　</td>
                </tr>
                </tbody>
              </v-table>
              <!--ポール等の形状-->
              <v-table density="compact" class="ledger">
                <tbody>
                  <tr>
                    <th rowspan="6">ポール等の形状</th>
                    <th colspan="3">ポールメーカー</th>
                    <td>　</td>
                    <th>種　　類</th>
                    <td colspan="3">　</td>
                  </tr>
                  <tr>
                    <th>材質</th>
                    <td colspan="3">　</td>
                    <th>基礎形式</th>
                    <td colspan="3">　</td>
                  </tr>
                  <tr>
                    <th>貼紙防止</th>
                    <td colspan="3">　</td>
                    <th>塗装色</th>
                    <td colspan="3">　</td>
                  </tr>
                  <tr>
                    <th>取付角度</th>
                    <th>①</th>
                    <td style="text-align: right">度</td>
                    <th>②</th>
                    <td style="text-align: right">度</td>
                    <th>③</th>
                    <td style="text-align: right">度</td>
                  </tr>
                  <tr>
                    <th>出幅</th>
                    <th>①</th>
                    <td style="text-align: right">ｍ</td>
                    <th>②</th>
                    <td style="text-align: right">ｍ</td>
                    <th>③</th>
                    <td style="text-align: right">ｍ</td>
                  </tr>
                  <tr>
                    <th>光源の高さ</th>
                    <th>①</th>
                    <td style="text-align: right">ｍ</td>
                    <th>②</th>
                    <td style="text-align: right">ｍ</td>
                    <th>③</th>
                    <td style="text-align: right">ｍ</td>
                  </tr>
                </tbody>
              </v-table>
              <!--建柱基礎形状-->
              <v-table density="compact" class="ledger">
                <tbody>
                  <tr>
                    <th>建柱基礎形状</th>
                    <td colspan="4">　</td>
                  </tr>
                  <tr>
                    <th>自動点滅器</th>
                    <td style="text-align: right">V</td>
                    <td style="text-align: right">A</td>
                    <th>施工業者</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>設置年月日</th>
                    <td colspan="2"></td>
                    <th>所轄警察署</th>
                    <td>　</td>
                  </tr>
                  <tr>
                    <th>引継ぎ元</th>
                    <td colspan="2"></td>
                    <th>FEP空管の有無</th>
                    <td>　</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      subtitles: [
        { title: "道路照明台帳", props: { to: "ledger" } },
        { title: "補修履歴", props: { to: "repair" } },
      ],
    };
  },
  mounted: function () {
    console.log("mounted /streetlight/ledger");
  },
  methods: {},
});
</script>

<style></style>
