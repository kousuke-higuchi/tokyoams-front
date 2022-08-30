<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col md="3">
        <roadsign-menu />
      </v-col>

      <v-col md="9" cols="12">
        <!-- 道路標識台帳 -->
        <v-card class="overflow-auto" elevation="4">
          <v-sheet class="d-flex">
            <v-sheet class="ma-2 px-2 mr-auto">道路標識台帳</v-sheet>
            <v-sheet class="ma-2 px-2">(設置・作成) ####</v-sheet>
          </v-sheet>

          <v-card-text class="pt-0">
            <v-row>
              <v-col>
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th style="width: 12em;">整理番号</th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                      <th style="width: 10em;">事務所名</th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                      <th style="width: 10em;">管理工区</th>
                      <td colspan="3"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>路線名</th>
                      <td colspan="2"><v-text-field variant="underlined" density="compact" /></td>
                      <th>通称道路名</th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                      <th>支柱番号</th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                      <th style="width: 10em;">支柱管理者</th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                  </tbody>
                </v-table>
                </v-col>
              </v-row>
            <v-row>
              <v-col sm="6">
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th rowspan="2" style="width: 12em;">設置場所</th>
                      <th>住所</th>
                      <td colspan="5"></td>
                    </tr>
                    <tr>
                      <th style="width: 10em;">設置位置</th>
                      <td colspan="6"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>設置年月日</th>
                      <td colspan="2"><v-text-field variant="underlined" density="compact" /></td>
                      <th style="width: 10em;">施工業者名</th>
                      <td colspan="3"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>地点標</th>
                      <td colspan="2"><v-text-field variant="underlined" density="compact" /></td>
                      <th>上下種別</th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                      <th style="width: 6em;">緯度</th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>車道幅員</th>
                      <td colspan="2"><v-text-field variant="underlined" density="compact" /></td>
                      <th>歩道幅員</th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                      <th>経度</th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>標識種別</th>
                      <td colspan="2"><v-text-field variant="underlined" density="compact" /></td>
                      <th>標識番号</th>
                      <td colspan="3"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th 
                        rowspan="11"
                        style="writing-mode: vertical-rl; 
                        text-align: center; 
                        width: 2em;
                        padding:0em;"
                      >
                        構　　造　　規　　格
                      </th>
                      <th style="width: 10em;">設置方式</th>
                      <td colspan="6"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th rowspan="5">板</th>
                      <th style="width: 10em">規格寸法</th>
                      <td colspan="5"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>裏面塗装</th>
                      <td colspan="5"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>材質</th>
                      <td colspan="5"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>反射材料</th>
                      <td colspan="5"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>補助標識</th>
                      <td colspan="5"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th rowspan="3">柱</th>
                      <th rowspan="2">規格寸法</th>
                      <th style="width: 4em;">支柱</th>
                      <td colspan="5"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>梁</th>
                      <td colspan="5"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>基礎</th>
                      <th style="width: 6em;">形式</th>
                      <td colspan="2"><v-text-field variant="underlined" density="compact" /></td>
                      <th style="width: 6em;">サイズ</th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>照明</th>
                      <td colspan="2"><v-text-field variant="underlined" density="compact" /></td>
                      <th style="width: 6em;">電力量</th>
                      <td ><v-text-field variant="underlined" density="compact" /></td>
                      <th >ランプ</th>
                      <td style="text-align: right;">Ｗ</td>
                    </tr>
                    <tr>
                      <th>添架</th>
                      <td colspan="7"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th colspan="2">板下高</th>
                      <td colspan="2"><v-text-field variant="underlined" density="compact" /></td>
                      <th style="width: 10em;">裏面の有無</th>
                      <td colspan="3"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th colspan="2">他の添架物</th>
                      <td colspan="6"><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th rowspan="3" style="width: 12em;">
                        添付書類<br />（レイアウト図<br />構造図データ）
                      </th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>多言語表記</th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                    <tr>
                      <th>備考</th>
                      <td><v-text-field variant="underlined" density="compact" /></td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <!--以下　右側-->
              <v-col sm="6">
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
  