<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col md="3">
        <streetlight-menu />
      </v-col>

      <v-col md="9">
        <!-- 道路照明台帳 -->
        <v-card class="overflow-auto" elevation="4">
          <v-sheet class="d-flex">
            <v-sheet class="ma-2 px-2 mr-auto">道路照明台帳</v-sheet>
            <v-sheet class="ma-2 px-2">yyyy/mm/dd 更新</v-sheet>
          </v-sheet>

          <v-card-text class="pt-0">
            <v-row>
              <v-col sm="6">
                <!--事務所名-->
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th style="width: 14em;">事務所名</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th style="width: 8em;">工区名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th style="width: 10em;">管理番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>路線番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>路線名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>通称道路名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <!--地点標-->
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th style="width: 14em;">地点標</th>
                      <td colspan="3" style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />ｋｍ
                      </td>
                      <th style="width: 14em;">住　所</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>設置位置</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>上下線別</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>緯　度</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th style="width: 8em;">経　度</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>住宅地図番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>施設名</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>施設番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>設置形式</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>照明種別</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>契約方式</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>電源引込方式</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>電柱管理者</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>電柱番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>給電方式</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>東電管理番号</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>電源方式</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>お客様契約番号</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>東電営業所</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>配電盤番号</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>電気料金集約分<br/>内訳表番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <!--地点標-->
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th style="width: 14em;">調光の有無</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th style="width: 6em;">遮光板</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="4">ランプの種類<br />・規格・型式</th>
                      <td style="width: 4em;">
                        　
                      </td>
                      <th style="width: 18em;">種　類</th>
                      <th style="width: 8em;">規　格</th>
                      <th style="width: 6em;">灯　数</th>
                      <th style="width: 10em;">灯具メーカー</th>
                      <th style="width: 10em;">灯具の形式</th>
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
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="4">安定器の種類<br />及び容量</th>
                      <td>
                        　
                      </td>
                      <th>種　類</th>
                      <th colspan="2">容　　量</th>
                      <th>個　数</th>
                      <th>安定器メーカー</th>
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
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />個
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
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />個
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
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />個
                      </td>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <!--ポール等の形状-->
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th style="width: 14em;" rowspan="6">ポール等の形状</th>
                      <th style="width: 12em;">ポールメーカー</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th style="width: 8em;">種　　類</th>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>材質</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>基礎形式</th>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>貼紙防止</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>塗装色</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th  style="width: 8em;">下地装飾</th>
                      <td >
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>取付角度</th>
                      <th style="width: 8em;">①</th>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />度
                      </td>
                      <th >②</th>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />度
                      </td>
                      <th >③</th>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />度
                      </td>
                    </tr>
                    <tr>
                      <th>出幅</th>
                      <th>①</th>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />ｍ
                      </td>
                      <th>②</th>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />ｍ
                      </td>
                      <th>③</th>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />ｍ
                      </td>
                    </tr>
                    <tr>
                      <th>光源の高さ</th>
                      <th>①</th>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />ｍ
                      </td>
                      <th>②</th>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />ｍ
                      </td>
                      <th>③</th>
                      <td style="text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />ｍ
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <!--建柱基礎形状-->
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th style="width: 14em">建柱基礎形状</th>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>自動点滅器</th>
                      <td style="text-align: right">
                        <v-text-field variant="underlined" density="compact" />V
                      </td>
                      <td style="text-align: right">
                        <v-text-field variant="underlined" density="compact" />A
                      </td>
                      <th style="width: 14em">施工業者</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>設置年月日</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>所轄警察署</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>引継ぎ元</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" />
                      </td>
                      <th>FEP空管の有無</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" />
                      </td>
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
