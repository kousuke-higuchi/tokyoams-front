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
        <v-card-title>
          <v-row class="justify-start mt-1 ml-3">障害物表示灯台帳</v-row>
          <v-row class="justify-end mt-1 mr-3">###更新</v-row>
        </v-card-title>

        <!-- 障害物表示灯台帳 -->
        <div>
          <v-card class="overflow-auto" elevation="4">
            <v-table density="compact" class="ledger">
              <tbody>
                <tr>
                  <th>事務所名</th>
                  <td>　</td>
                  <th>工区名</th>
                  <td>　</td>
                  <th>管理番号</th>
                  <td colspan="2">　</td>
                </tr>
                <tr>
                  <th>路線番号</th>
                  <td>　</td>
                  <th>路線名</th>
                  <td>　</td>
                  <th>通称道路名</th>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>地点標</th>
                  <td style="text-align: right">　Km</td>
                  <th>住所</th>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <th>設置位置</th>
                  <td colspan="3">　</td>
                  <th>上下線別</th>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>緯度</th>
                  <td>　</td>
                  <th>経度</th>
                  <td>　</td>
                  <th>住宅地図番号</th>
                  <td colspan="2">　</td>
                </tr>
                <tr>
                  <th>施設名</th>
                  <td colspan="2"></td>
                  <th>施設番号</th>
                  <td colspan="3">　</td>
                </tr>
                <tr>
                  <th>設置形式</th>
                  <td colspan="2">　</td>
                  <th>照明種別</th>
                  <td colspan="3">　</td>
                </tr>
                <tr>
                  <th>契約方式</th>
                  <td colspan="2">　</td>
                  <th>電源引込方式</th>
                  <td colspan="3">　</td>
                </tr>
                <tr>
                  <th>電柱管理者</th>
                  <td>　</td>
                  <th>電柱番号</th>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <th>東電管理番号</th>
                  <td colspan="2">　</td>
                  <th>電源方式</th>
                  <td colspan="3">　</td>
                </tr>
                <tr>
                  <th>お客様契約番号</th>
                  <td colspan="2">　</td>
                  <th>東電営業所</th>
                  <td colspan="3">　</td>
                </tr>
                <tr>
                  <th>配電盤番号</th>
                  <td colspan="2">　</td>
                  <th>電気料金集約分内訳表番号</th>
                  <td colspan="3">　</td>
                </tr>
                <tr>
                  <th rowspan="4">ランプの<br />種類規格型式</th>
                  <td>　</td>
                  <th>種　類</th>
                  <th>規　格</th>
                  <th>灯　数</th>
                  <th>灯具<br />メーカー</th>
                  <th>灯具の形式</th>
                </tr>
                <tr>
                  <th>①</th>
                  <td>　</td>
                  <td>　</td>
                  <td style="text-align: right">　Ｗ</td>
                  <td style="text-align: right">　灯</td>
                  <td>　</td>
                </tr>
                <tr>
                  <th>②</th>
                  <td>　</td>
                  <td>　</td>
                  <td style="text-align: right">　Ｗ</td>
                  <td style="text-align: right">　灯</td>
                  <td>　</td>
                </tr>
                <tr>
                  <th>③</th>
                  <td>　</td>
                  <td>　</td>
                  <td style="text-align: right">　Ｗ</td>
                  <td style="text-align: right">　灯</td>
                  <td>　</td>
                </tr>
              </tbody>
            </v-table>
            <v-table density="compact" class="ledger">
              <tbody>
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
            <v-table density="compact" class="ledger">
              <tbody>
                <tr>
                  <th rowspan="4">
                    バッテリーの<br />
                    種類及び容量
                  </th>
                  <td>　</td>
                  <th>種類</th>
                  <th colspan="2">容量</th>
                  <th>個数</th>
                  <th>バッテリーメーカー</th>
                </tr>
                <tr>
                  <th>①</th>
                  <td style="text-align: right">　Ｖ</td>
                  <td style="text-align: right">　Ｗ用</td>
                  <td style="text-align: right">個</td>
                  <td>　</td>
                  <td>　</td>
                </tr>
                <tr>
                  <th>②</th>
                  <td style="text-align: right">　Ｖ</td>
                  <td style="text-align: right">　Ｗ用</td>
                  <td style="text-align: right">個</td>
                  <td>　</td>
                  <td>　</td>
                </tr>
                <tr>
                  <th>③</th>
                  <td style="text-align: right">　Ｖ</td>
                  <td style="text-align: right">　Ｗ用</td>
                  <td style="text-align: right">個</td>
                  <td>　</td>
                  <td>　</td>
                </tr>
                <tr>
                  <th>建柱基礎形状</th>
                  <td colspan="6">　</td>
                </tr>
                <tr>
                  <th rowspan="4">引込柱</th>
                  <th>有無</th>
                  <td>　</td>
                  <th>番号</th>
                  <td colspan="3">　</td>
                </tr>
                <tr>
                  <th rowspan="2">柱</th>
                  <th>規格寸法</th>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <th>材質</th>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <th>基礎</th>
                  <th>形式</th>
                  <td colspan="2">　</td>
                  <th>サイズ</th>
                  <td colspan="2">　</td>
                </tr>
                <tr>
                  <th>特記事項</th>
                  <td colspan="8">　</td>
                </tr>
                <tr>
                  <td>　</td>
                  <td colspan="2">　</td>
                  <th>施工業者</th>
                  <td colspan="3">　</td>
                </tr>
                <tr>
                  <th>設置年月日</th>
                  <td colspan="2">　</td>
                  <th>所轄警察署</th>
                  <td colspan="3">　</td>
                </tr>
                <tr>
                  <th>引継ぎ元</th>
                  <td colspan="2">　</td>
                  <td>　</td>
                  <td colspan="3">　</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      subtitles: [
        { title: "障害物表示灯台帳", props: { to: "ledger" } },
        { title: "補修履歴", props: { to: "repair" } },
      ],
    };
  },
  mounted: function () {
    console.log("mounted /blinker/ledger");
  },
  methods: {},
});
</script>
<style></style>
