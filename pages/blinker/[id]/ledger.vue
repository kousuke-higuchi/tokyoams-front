<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col :md="child_extend?3:0">
        <blinker-menu @is-extend="child_extend=$event"/>
      </v-col>

      <v-col :md="child_extend?9:12">
        <!-- 障害物表示灯台帳 -->
        <v-card class="overflow-auto ledger ratTable" elevation="4">
          <v-sheet class="d-flex">
            <v-sheet class="ma-2 px-2 mr-auto">障害物表示灯台帳</v-sheet>
            <v-sheet class="ma-2 px-2">###更新</v-sheet>
          </v-sheet>

          <v-card-text class="pt-0">
            <v-row>
              <v-col>
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th style="width: 12em">事務所名</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="officename"
                        />
                      </td>
                      <th style="width: 12em">工区名</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="areaname"
                        />
                      </td>
                      <th style="width: 12em">管理番号</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="formattedID"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>路線番号</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.routeid"
                        />
                      </td>
                      <th>路線名</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="routename"
                        />
                      </td>
                      <th>通称道路名</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.routecommonly"
                        />
                      </td>
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
                      <th style="width: 12em">地点標</th>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        />Km
                      </td>
                      <th style="width: 8em">住所</th>
                      <td colspan="4">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.address"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>設置位置</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.setposition"
                        />
                      </td>
                      <th>上下線別</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.updownkind"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>緯度</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.latitude"
                        />
                      </td>
                      <th>経度</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.longitude"
                        />
                      </td>
                      <th>住宅地図番号</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.mapnumber"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>施設名</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.facilityname"
                        />
                      </td>
                      <th>施設番号</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.facilitynumber"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>設置形式</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="settypename"
                        />
                      </td>
                      <th>照明種別</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="lightkindname"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>契約方式</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="contractmethodname"
                        />
                      </td>
                      <th>電源引込方式</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.leadinmethod"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>電柱管理者</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.electricpoleadmin"
                        />
                      </td>
                      <th>電柱番号</th>
                      <td colspan="4">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.electricpolenumber"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>東電管理番号</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.tepconumber"
                        />
                      </td>
                      <th>電源方式</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.powermethod"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>お客様契約番号</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.contractnumber"
                        />
                      </td>
                      <th>東電営業所</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.tepcooffice"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>配電盤番号</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.swichboardnumber"
                        />
                      </td>
                      <th style="width: 14em">
                        電気料金集約分<br />内訳表番号
                      </th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.chargeitem"
                        />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th rowspan="4" style="width: 12em; padding: 2em">
                        ランプの種類<br />・規格・型式
                      </th>
                      <th style="width: 4em">　</th>
                      <th>種　類</th>
                      <th style="width: 8em">規　格</th>
                      <th style="width: 6em">灯　数</th>
                      <th style="width: 10em">灯具メーカー</th>
                      <th style="width: 10em">灯具の形式</th>
                    </tr>
                    <tr>
                      <th>①</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l1categoryetc"
                        />
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l1standard"
                        />Ｗ
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l1number"
                        />灯
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l1maker"
                        />
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l1type"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>②</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l2categoryetc"
                        />
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l2standard"
                        />Ｗ
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l2number"
                        />灯
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l2maker"
                        />
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l2type"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>③</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l3categoryetc"
                        />
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l3standard"
                        />Ｗ
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l3number"
                        />灯
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l3maker"
                        />
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinkerLamp.l3type"
                        />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th style="width: 12em;padding: 2em">光源の高さ</th>
                      <th style="width: 4em">①</th>
                      <td style="width: 12em; text-align: right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.lighthight1"
                        />ｍ
                      </td>
                      <th style="width: 4em">②</th>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.lighthight2"
                        />ｍ
                      </td>
                      <th style="width: 4em">③</th>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.lighthight3"
                        />ｍ
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th rowspan="4" style="width: 12em; padding: 2em">
                        バッテリーの<br />種類及び容量
                      </th>
                      <th style="width: 4em">　</th>
                      <th style="width: 10em">種類</th>
                      <th colspan="2">容量</th>
                      <th>個数</th>
                      <th>バッテリーメーカー</th>
                    </tr>
                    <tr>
                      <th>①</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b1kind"
                        />
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b2capacityvolt"
                        />Ｖ
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b2capacitywatt"
                        />Ｗ用
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b1number"
                        />個
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b1maker"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>②</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b2kind"
                        />
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b2capacityvolt"
                        />Ｖ
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b2capacitywatt"
                        />Ｗ用
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b2number"
                        />個
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b2maker"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>③</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b3kind"
                        />
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b3capacityvolt"
                        />Ｖ
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b3capacitywatt"
                        />Ｗ用
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b3number"
                        />個
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.b3maker"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>建柱基礎形状</th>
                      <td colspan="6">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.pillarbasetype"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="4">引込柱</th>
                      <th style="padding:0 4px;">有無</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.leadinpole"
                        />
                      </td>
                      <th>番号</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.leadinnumber"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="2">柱</th>
                      <th>規格寸法</th>
                      <td colspan="4">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.leadinpolestandard"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>材質</th>
                      <td colspan="4">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.leadinpolematerial"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th style="padding:0 4px;">基礎</th>
                      <th>形式</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.leadinbasetype"
                        />
                      </td>
                      <th>サイズ</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.leadinbasesize"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>特記事項</th>
                      <td colspan="8">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.specialnotes"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>　</td>
                      <td colspan="2">　<!--元々データなしセル--></td>
                      <th>施工業者</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.contractor"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>設置年月日</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="setupdateNone"
                        />
                      </td>
                      <th>所轄警察署</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.districtpolice"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>引継ぎ元</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.takeoversource"
                        />
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
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.oldadminroutename"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>整理番号</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.oldadminadminnumber"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>備考</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="blinker.note"
                        />
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
                    v-model="newAttachments"
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
                    v-model="newImages"
                    accept="image/png, image/jpeg, image/git"
                    filled
                    multiple
                    hide-details
                    prepend-icon="mdi-camera"
                    density="compact"
                  ></v-file-input>
                </v-sheet>
              </v-col>

              <div class="float-bottom">
                <v-btn color="primary" elevation="6" @click="onSaveButtonClick">
                  <v-icon color="white">mdi-check</v-icon>保存
                </v-btn>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { Blinker } from "~~/types";
import { BlinkerLamp } from "~~/types";

const child_extend = ref(true);

const blinker: Blinker = reactive({
  id: 3340, //[NULL]
  adminnumber: "308-411", //管理番号
  numberserial: "6019", //管理番号連番
  code: 44, //台帳コード
  officeid: 8, //事務所コード
  areaid: 28, //工区コード
  routeid: 9, //路線コード
  routesub: "", //路線支線
  routecommonly: "", //通称道路名
  municipalityid: 53, //行政区コード
  municipalityname: "奥多摩町", //行政区名称
  address: "境517", //住所
  address2: "", //住所2
  distance: 42.0, //地点標
  setposition: "", //設置位置
  updownkind: "0", //上下線別
  latitude: 354736.73, //緯度
  longitude: 1390420.97, //経度
  createdate: 20110919, //台帳作成日
  setpatternid: 23, //設置パターンID
  maplinkcode: "101-S00001258", //リンクコード
  mapnumber: "奥多摩町7-14", //住宅地図番号
  facilityname: "", //施設名
  facilitynumber: "000", //施設番号
  settypeid: 1, //設置形式ID
  lightkindid: 12, //照明種別ID
  contractmethodid: 2, //契約方式ID
  contractcapacity: 0, //東電契約容量
  leadinmethod: "架空引込", //電源引込方式
  electricpoleadmin: "東電", //電柱管理者
  electricpolenumber: "境169", //電柱番号
  powermethod: "単相", //電源方式
  powermethodline: " 2", //電源方式線
  powermethodvolt: "線 10", //電源方式V
  tepconumber: "12445", //東電管理番号
  tepcooffice: "青梅営業センター", //東電営業所
  contractnumber: "90420-2-03420-00", //お客様契約番号
  chargeitem: "", //電気料金集約分内訳表番号
  swichboardnumber: "", //配電盤番号
  lampmaker: "", //灯具メーカー
  batterymaker: "", //バッテリーメーカー
  lightkind: "障害物表示灯２", //種別
  lighthight1: 0.0, //光源の高さ1
  lighthight2: 0.0, //光源の高さ2
  lighthight3: 0.0, //光源の高さ3
  b1kind: "", //バッテリー種類1
  b1capacityvolt: 0, //バッテリー容量V1
  b1capacitywatt: 0, //バッテリー容量W1
  b1number: 0, //バッテリー個数1
  b1maker: "", //バッテリーメーカー1
  b2kind: "", //バッテリー種類2
  b2capacityvolt: 0, //バッテリー容量V2
  b2capacitywatt: 0, //バッテリー容量W2
  b2number: 0, //バッテリー個数2
  b2maker: "", //バッテリーメーカー2
  b3kind: "", //バッテリー種類3
  b3capacityvolt: 0, //バッテリー容量V3
  b3capacitywatt: 0, //バッテリー容量W3
  b3number: 0, //バッテリー個数3
  b3maker: "", //バッテリーメーカー3
  leadinpole: "", //引込柱有無
  leadinnumber: "", //引込柱番号
  leadinpolestandard: "", //引込柱柱規格寸法
  leadinpolematerial: "", //引込柱柱材質
  leadinbasetype: "", //引込柱基礎形式
  leadinbasesize: "", //引込柱基礎サイズ
  pillarbasetype: "", //建柱基礎形状
  specialnotes: "", //特記事項
  contractor: "", //施工業者
  setupdate: -1, //設置年月日
  districtpolice: "青梅警察署", //所轄警察署
  takeoversource: "", //引継ぎ元
  oldadminroutename: "", //旧管理番号路線名
  oldadminadminnumber: "", //旧管理番号整理番号
  note: "", //備考
  removalflag: 0, //撤去フラグ
  deleteflag: 0, //削除フラグ
  class1: 0, //区分1
  class2: 0, //区分2
  class3: 0, //区分3
  class4: 0, //区分4
  class5: 0, //区分5
  spare1: "", //予備1
  spare2: "", //予備2
  spare3: "", //予備3
  spare4: "", //予備4
  spare5: "", //予備5
  numeric1: 0, //数値1
  numeric2: 0, //数値2
  numeric3: 0, //数値3
  numeric4: 0, //数値4
  numeric5: 0, //数値5
  updatedate: new Date("2011-10-12 00:00:00.000"), //更新年月日
  updateflag: 0, //更新フラグ
  registclass: 0, //登録区分
  reservenumber: "", //予約工事番号
  reservename: "", //予約工事名
  reservecontractor: "", //予約業者名
  updateuserid: 1, //更新ユーザ
  operationalstatusid: 1, //運用状況
});

const blinkerLamp: BlinkerLamp = reactive({
  blinkerid: 3341, //[NULL]
  id: 1, //ランプデータID
  constdate: -1, //施工日
  l1categoryid: 5, //ランプ種類大区分ID1
  l1categoryetc: "", //ランプ種類大区分その他1
  l1categorysub: "", //ランプ種類小区分1
  l1categorysubetc: "", //ランプ種類小区分その他1
  l1standard: 100, //ランプ規格1
  l1number: 2, //灯数1
  l1maker: "金門電気（株）", //灯具メーカー1
  l1type: "KBL-2", //灯具の形式1
  l1typeetc: "", //灯具の形式その他1
  l2categoryid: -3, //ランプ種類大区分ID2
  l2categoryetc: "", //ランプ種類大区分その他2
  l2categorysub: "", //ランプ種類小区分2
  l2categorysubetc: "", //ランプ種類小区分その他2
  l2standard: 0, //ランプ規格2
  l2number: 0, //灯数2
  l2maker: "", //灯具メーカー2
  l2type: "", //灯具の形式2
  l2typeetc: "", //灯具の形式その他2
  l3categoryid: -3, //ランプ種類大区分ID3
  l3categoryetc: "", //ランプ種類大区分その他3
  l3categorysub: "", //ランプ種類小区分3
  l3categorysubetc: "", //ランプ種類小区分その他3
  l3standard: 0, //ランプ規格3
  l3number: 0, //灯数3
  l3maker: "", //灯具メーカー3
  l3type: "", //灯具の形式3
  l3typeetc: "", //灯具の形式その他3
  updatedate: new Date(""), //データ更新日
  updateuserid: 1, //更新ユーザ
  currentstate: 0, //現状フラグ
});

//TODO:加工して表示するもの、本来ドロップダウンで選択するものは変数で宣言
let formattedID = blinker.adminnumber + "-" + blinker.numberserial;
let address = blinker.address + blinker.address2;
let officename = "西多摩建設事務所";
let areaname = "奥多摩工区";
let routename = "（国４１１）国道４１１号";
let settypename = "独立";
let lightkindname = "ﾌﾞﾘﾝｶｰﾗｲﾄ";
let contractmethodname = "定額";
let setupdateNone = "不明"; //TODO:確認…設置年月日が-1としてDBに登録されており、不明と出すパターンがあったので表記は不明と推測
const images = ref(["/assets/img/cavity.jpg"]);

const route = useRoute();
//const images = ref<Array<any>>();
const attachments = ref<Array<any>>();
const newImages = ref<[File]>();
const newAttachments = ref<[File]>();
// const switchboard = ref<Switchboard>();

// switchboard.value = {id: Number(route.params.id) } as Switchboard;

const loadingState = useLoading();

/** 保存ボタン クリックイベントハンドラ */
const onSaveButtonClick = () => {
  loadingState.setLoading(true);
  console.info("保存ボタンをクリックしました");

  // 更新処理
  //TODO:未実装
  loadingState.setLoading(false);
};
</script>

<style lang="scss">
.ledger-image-section {
  min-height: 22em;
}
</style>
