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
          <v-row class="justify-start mt-1 ml-3">道路反射鏡台帳</v-row>
          <v-row class="justify-end mt-1 mr-3">（設置・作成）</v-row>
        </v-card-title>

        <!-- 道路反射鏡台帳 -->
        <div>
          <v-card class="overflow-auto" elevation="4">
            <v-table density="compact" class="ledger">
              <tbody>
                <tr>
                  <th colspan="2">管理番号</th>
                  <td colspan="2">　</td>
                  <td>　</td>
                  <th>事務所名</th>
                  <td>　</td>
                  <th>管理工区</th>
                  <td>　</td>
                </tr>
                <tr>
                  <th colspan="2">路線名</th>
                  <td colspan="3">　</td>
                  <th>通称道路名</th>
                  <td>　</td>
                  <td>　</td>
                  <td>　</td>
                </tr>
              </tbody>
            </v-table>
            <v-table density="compact" class="ledger">
              <tbody>
                <tr>
                  <th rowspan="2">設置場所</th>
                  <th>住所</th>
                  <td colspan="3"></td>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <th>設置位置</th>
                  <td colspan="7">　</td>
                </tr>
                <tr>
                  <th>設置年月日</th>
                  <td colspan="3">　</td>
                  <th>施工業者名</th>
                  <td colspan="3">　</td>
                </tr>
                <tr>
                  <th>地点標</th>
                  <td colspan="3">　</td>
                  <th>上下種別</th>
                  <td>　</td>
                  <th>緯度</th>
                  <td>　</td>
                </tr>
                <tr>
                  <th>車道幅員</th>
                  <td colspan="3">　</td>
                  <th>歩道幅員</th>
                  <td>　</td>
                  <th>経度</th>
                  <td>　</td>
                </tr>
              </tbody>
            </v-table>
            <v-table density="compact" class="ledger">
              <tbody>
                <tr>
                  <th
                    rowspan="12"
                    style="writing-mode: vertical-rl; text-align: center"
                  >
                    構　　造　　規　　格
                  </th>
                  <th>設置方式</th>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <th rowspan="6">鏡面</th>
                  <th>縦柱２面</th>
                  <th colspan="2">鏡面1</th>
                  <th colspan="2">鏡面２</th>
                </tr>
                <tr>
                  <th>規格寸法:支柱</th>
                  <td colspan="2">　</td>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <th>材質</th>
                  <td colspan="2">　</td>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <td>　</td>
                  <td colspan="2">　</td>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <td>　</td>
                  <td colspan="2">　</td>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <td>　</td>
                  <td colspan="2">　</td>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <th rowspan="3">柱</th>
                  <th>規格寸法:支柱</th>
                  <td colspan="6">　</td>
                </tr>
                <tr>
                  <td colspan="7">　</td>
                </tr>
                <tr>
                  <th>材質</th>
                  <td colspan="2">　</td>
                  <th>注意板</th>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <th>基礎</th>
                  <th>形式</th>
                  <td colspan="2">　</td>
                  <th>サイズ</th>
                  <td colspan="4">　</td>
                </tr>
                <tr>
                  <th>添架</th>
                  <td colspan="5">　</td>
                </tr>
                <tr>
                  <td colspan="2">　</td>
                  <td colspan="5">　</td>
                </tr>
                <tr>
                  <th colspan="2">他の添架物</th>
                  <td colspan="5">　</td>
                </tr>
              </tbody>
            </v-table>
            <v-table density="compact" class="ledger">
              <tbody>
                <tr>
                  <th rowspan="3" nowrap="nowrap">
                    添付書類<br />（レイアウト図<br />構造図データ）
                  </th>
                  <td>　</td>
                </tr>
                <tr>
                  <td>　</td>
                </tr>
                <tr>
                  <td>　</td>
                </tr>
                <tr>
                  <th>備考</th>
                  <td>　</td>
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
        { title: "道路反射鏡台帳", props: { to: "ledger" } },
        { title: "補修履歴", props: { to: "repair" } },
      ],
    };
  },
  mounted: function () {
    console.log("mounted /mirror/ledger");
  },
  methods: {},
});
</script>
<style></style>