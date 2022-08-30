<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col md="3">
        <blinker-menu />
      </v-col>

      <v-col md="9" cols="12">
        <!-- 障害物表示灯台帳 -->
        <v-card class="overflow-auto" elevation="4">
          <v-sheet class="d-flex">
            <v-sheet class="ma-2 px-2 mr-auto">障害物表示灯台帳</v-sheet>
            <v-sheet class="ma-2 px-2">###更新</v-sheet>
          </v-sheet>

          <v-card-text class="pt-0">
            <v-row>
              <v-col sm="6">
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th style="width: 14em">事務所名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th style="width: 14em">工区名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th style="width: 14em">管理番号</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>路線番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>路線名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>通称道路名</th>
                      <td colspan="2"></td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th style="width: 14em">地点標</th>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />Km
                      </td>
                      <th style="width: 8em">住所</th>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>設置位置</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>上下線別</th>
                      <td colspan="2"></td>
                    </tr>
                    <tr>
                      <th>緯度</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>経度</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>住宅地図番号</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>施設名</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>施設番号</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>設置形式</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>照明種別</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>契約方式</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>電源引込方式</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>電柱管理者</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>電柱番号</th>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>東電管理番号</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>電源方式</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>お客様契約番号</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>東電営業所</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>配電盤番号</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th style="width: 14em">
                        電気料金集約分<br />内訳表番号
                      </th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th rowspan="4" style="width: 14em">
                        ランプの<br />種類規格型式
                      </th>
                      <td style="width: 6em">　</td>
                      <th style="width: 12em">種　類</th>
                      <th>規　格</th>
                      <th style="width: 6em">灯　数</th>
                      <th style="width: 10em">灯具メーカー</th>
                      <th style="width: 10em">灯具の形式</th>
                    </tr>
                    <tr>
                      <th>①</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />Ｗ
                      </td>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />灯
                      </td>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>②</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />Ｗ
                      </td>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />灯
                      </td>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>③</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />Ｗ
                      </td>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />灯
                      </td>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th style="width: 14em">光源の高さ</th>
                      <th style="width: 6em">①</th>
                      <td style="width: 12em; text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />ｍ
                      </td>
                      <th style="width: 4em">②</th>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />ｍ
                      </td>
                      <th style="width: 4em">③</th>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />ｍ
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th rowspan="4" style="width: 14em">
                        バッテリーの<br />種類及び容量
                      </th>
                      <td style="width: 6em">　</td>
                      <th style="width: 12em">種類</th>
                      <th colspan="2">容量</th>
                      <th>個数</th>
                      <th>バッテリーメーカー</th>
                    </tr>
                    <tr>
                      <th>①</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />Ｖ
                      </td>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />Ｗ用
                      </td>
                      <td style="text-align: right">個</td>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>②</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />Ｖ
                      </td>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />Ｗ用
                      </td>
                      <td style="text-align: right">個</td>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>③</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />Ｖ
                      </td>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />Ｗ用
                      </td>
                      <td style="text-align: right">個</td>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>建柱基礎形状</th>
                      <td colspan="6">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="4">引込柱</th>
                      <th>有無</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>番号</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="2">柱</th>
                      <th>規格寸法</th>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>材質</th>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>基礎</th>
                      <th>形式</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>サイズ</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>特記事項</th>
                      <td colspan="8">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <td>　</td>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>施工業者</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>設置年月日</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>所轄警察署</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>引継ぎ元</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <td>　</td>
                      <td colspan="3">　</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <!--以下　右側-->
              <v-col sm="6">
                <v-table density="compact" class="ledger"
                  ><tbody>
                    <tr>
                      <th rowspan="2" style="width: 14em">旧管理番号</th>
                      <th style="width: 12em">路線名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>整理番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>備考</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr></tbody
                ></v-table>

                <h4 class="ma-2 mb-0">位置図</h4>
                <v-sheet class="mb-2" :border="1">
                  <v-row class="ledger-image-section">
                    <v-col
                      v-for="(image, i) in images"
                      :key="i"
                      class="d-flex child-flex"
                      cols="4"
                    >
                    </v-col>
                  </v-row>
                  <v-file-input
                    label="位置図"
                    class="pa-2 mx-2"
                    accept="image/png, image/jpeg, image/git"
                    filled
                    multiple
                    hide-details
                    prepend-icon="mdi-camera"
                    density="compact"
                  ></v-file-input>
                </v-sheet>

                <h4 class="ma-2 mb-0">写真</h4>
                <v-sheet class="mb-2 ledger-image-section" :border="1">
                  <v-row class="ledger-image-section">
                    <v-col
                      v-for="(image, i) in images"
                      :key="i"
                      class="d-flex child-flex"
                      cols="4"
                    >
                      <img src="" />
                    </v-col>
                  </v-row>
                  <v-file-input
                    label="写真"
                    class="pa-2 mx-2"
                    accept="image/png, image/jpeg, image/git"
                    filled
                    multiple
                    hide-details
                    prepend-icon="mdi-camera"
                    density="compact"
                  ></v-file-input>
                </v-sheet>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const images = ref(["/assets/img/cavity.jpg"]);
console.log(`mounted ${route.fullPath}`);
</script>

<style lang="scss">
.ledger-image-section {
  min-height: 22em;
}
</style>
