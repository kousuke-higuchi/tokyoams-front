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
        <v-card >
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">道路標識台帳</v-row>
          </v-card-title>
                <div>
                  <v-table density="compact" class="ledger">
                    <tbody>
                      <tr>
                        <th>整理番号</th>
                        <td>　</td>
                        <td>　</td>
                        <th>事務所名</th>
                        <td>　</td>
                        <th>管理工区</th>
                        <td colspan="3">　</td>
                      </tr>
                      <tr>
                        <th>路線名</th>
                        <td colspan="2">　</td>
                        <th>通称道路名</th>
                        <td>　</td>
                        <th>支柱番号</th>
                        <td>　</td>
                        <th>支柱管理者</th>
                        <td>　</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <tbody>
                      <tr>
                        <th owspan="2">設置場所</th>
                        <th>住所</th>
                        <td colspan="5"></td>
                      </tr>
                      <tr>
                        <th>設置位置</th>
                        <td colspan="6">　</td>
                      </tr>
                      <tr>
                        <th>設置年月日</th>
                        <td colspan="2">　</td>
                        <th>施工業者名</th>
                        <td colspan="3">　</td>
                      </tr>
                      <tr>
                        <th>地点標</th>
                        <td colspan="2">　</td>
                        <th>上下種別</th>
                        <td>　</td>
                        <th>緯度</th>
                        <td>　</td>
                      </tr>
                      <tr>
                        <th>車道幅員</th>
                        <td colspan="2">　</td>
                        <th>歩道幅員</th>
                        <td>　</td>
                        <th>経度</th>
                        <td>　</td>
                      </tr>
                      <tr>
                        <th>標識種別</th>
                        <td colspan="2">　</td>
                        <th>標識番号</th>
                        <td colspan="3">　</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <tbody>
                      <tr>
                        <th rowspan="11" style="writing-mode: vertical-rl;text-align: center;">
                          構　　造　　規　　格
                        </th>
                        <th>設置方式</th>
                        <td colspan="6">　</td>
                      </tr>
                      <tr>
                        <th rowspan="5">板</th>
                        <th>規格寸法</th>
                        <td colspan="5">　</td>
                      </tr>
                      <tr>
                        <th>裏面塗装</th>
                        <td colspan="5">　</td>
                      </tr>
                      <tr>
                        <th>材質</th>
                        <td colspan="5">　</td>
                      </tr>
                      <tr>
                        <th>反射材料</th>
                        <td colspan="5">　</td>
                      </tr>
                      <tr>
                        <th>補助標識</th>
                        <td colspan="5">　</td>
                      </tr>
                      <tr>
                        <th rowspan="3">柱</th>
                        <th rowspan="2">規格寸法</th>
                        <th>支柱</th>
                        <td colspan="5">　</td>
                      </tr>
                      <tr>
                        <th>梁</th>
                        <td colspan="5">　</td>
                      </tr>
                      <tr>
                        <th>基礎</th>
                        <th>形式</th>
                        <td colspan="2">　</td>
                        <th>サイズ</th>
                        <td>　</td>
                      </tr>
                      <tr>
                        <th>照明</th>
                        <td colspan="2">　</td>
                        <th>電力量</th>
                        <td>　</td>
                        <th>ランプ</th>
                        <td style="text-align: right">Ｗ</td>
                      </tr>
                      <tr>
                        <th>添架</th>
                        <td colspan="7">　</td>
                      </tr>
                      <tr>
                        <th colspan="2">板下高</th>
                        <td colspan="2">　</td>
                        <th>裏面の有無</th>
                        <td colspan="3">　</td>
                      </tr>
                      <tr>
                        <th colspan="2">他の添架物</th>
                        <td colspan="6">　</td>
                      </tr>
                    </tbody>
                  </v-table>
                  <v-table density="compact" class="ledger">
                    <tbody>
                      <tr>
                        <th rowspan="3">
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
                        <th>多言語表記</th>
                        <td>　</td>
                      </tr>
                      <tr>
                        <th>備考</th>
                        <td>　</td>
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
    return {
      subtitles: [
        { title: "道路標識台帳", props: { to: "ledger" } },
        { title: "補修履歴", props: { to: "repair" } },
      ],
    };
  },
  mounted: function () {
    console.log("mounted /roadsign/ledger");
  },
  methods: {},
});
</script>
<style></style>
