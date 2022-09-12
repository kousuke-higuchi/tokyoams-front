<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col :md="child_extend?3:0">
        <streetlight-menu @is-extend="child_extend=$event"/>
      </v-col>

      <v-col :md="child_extend?9:12">
        <!-- 道路照明台帳 -->
        <v-card class="overflow-auto ledger ratTable" elevation="4">
          <v-sheet class="d-flex">
            <v-sheet class="ma-2 px-2 mr-auto">道路照明台帳</v-sheet>
            <v-sheet class="ma-2 px-2">yyyy/mm/dd 更新</v-sheet>
          </v-sheet>

          <v-card-text class="pt-0">
            <v-row>
              <v-col>
                <!--事務所名-->
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th style="width: 12em">事務所名</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="officename"
                        />
                      </td>
                      <th style="width: 8em">工区名</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="areaname"
                        />
                      </td>
                      <th style="width: 10em">管理番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" 
                          v-model="formattedID"/>
                      </td>
                    </tr>
                    <tr>
                      <th>路線番号</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.routeid"
                        />
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.routesub"
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
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.routecommonly"
                        />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
            <v-row>
              <v-col sm="6">
                <!--地点標-->
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th style="width: 12em">地点標</th>
                      <td style="width: 12em" class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.distance"
                        ></v-text-field
                        >ｋｍ
                      </td>
                      <th style="width: 6em">住　所</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="address"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>設置位置</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.setposition"
                        ></v-text-field>
                      </td>
                      <th style="width: 10em">上下線別</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.updownkind"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>緯　度</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.latitude"
                        ></v-text-field>
                      </td>
                      <th style="width: 6em;">経　度</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.longitude"
                        ></v-text-field>
                      </td>
                      <th>住宅地図番号</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.mapnumber"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>施設名</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.facilityname"
                        ></v-text-field>
                      </td>
                      <th>施設番号</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.facilitynumber"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>設置形式</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="settypename"
                        ></v-text-field>
                      </td>
                      <th>照明種別</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="lightkindname"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>契約方式</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="contractmethodname"
                        ></v-text-field>
                      </td>
                      <th>電源引込方式</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.contractcapacity"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>電柱管理者</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.electricpoleadmin"
                        ></v-text-field>
                      </td>
                      <th>電柱番号</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.electricpolenumber"
                        ></v-text-field>
                      </td>
                      <th>給電方式</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.powersupply"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>東電管理番号</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.tepconumber"
                        ></v-text-field>
                      </td>
                      <th>電源方式</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.powermethod"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>お客様契約番号</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.contractnumber"
                        ></v-text-field>
                      </td>
                      <th>東電営業所</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.tepcooffice"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>配電盤番号</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.swichboardnumber"
                        ></v-text-field>
                      </td>
                      <th>電気料金集約分<br />内訳表番号</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.chargeitem"
                        ></v-text-field>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <!--調光の有無-->
                <!--TODO:ランプ及び安定器については①②③に出すのか要確認。streetlightidのid違いを出すのかもしれない。-->
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th style="width: 12em;">調光の有無</th>
                      <td colspan="3">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.dimmer"
                        ></v-text-field>
                      </td>
                      <th style="width: 6em">遮光板</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.douser"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="4" style="width: 12em;padding:2em;">ランプの種類<br />・規格・型式</th>
                      <th style="width: 4em">　</th>
                      <th >種　類</th>
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
                          v-model="streetlightLamp.l1categoryetc"
                        ></v-text-field>
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l1standard"
                        ></v-text-field
                        >Ｗ
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l1number"
                        ></v-text-field
                        >灯
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l1maker"
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l1type"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>②</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l2categoryetc"
                        ></v-text-field>
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l2standard"
                        ></v-text-field>
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l2number"
                        ></v-text-field
                        >灯
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l2maker"
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l2type"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>③</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l3categoryetc"
                        ></v-text-field>
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l3standard"
                        ></v-text-field
                        >Ｗ
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l3number"
                        ></v-text-field
                        >灯
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l3maker"
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlightLamp.l3type"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="4" style="padding:2em;">安定器の種類<br />及び容量</th>
                      <th>　</th>
                      <th>種　類</th>
                      <th colspan="2">容　　量</th>
                      <th>個　数</th>
                      <th>安定器メーカー</th>
                    </tr>
                    <tr>
                      <th>①</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b1kind"
                        ></v-text-field>
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b1capacityvolt"
                        ></v-text-field
                        >Ｖ
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b1capacitywatt"
                        ></v-text-field
                        >Ｗ用
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b1number"
                        ></v-text-field
                        >個
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b1maker"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>②</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b2kind"
                        ></v-text-field>
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b2capacityvolt"
                        ></v-text-field
                        >Ｖ
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b2capacitywatt"
                        ></v-text-field
                        >Ｗ用
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b2number"
                        ></v-text-field
                        >個
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b2maker"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>③</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b3kind"
                        ></v-text-field>
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b3capacityvolt"
                        ></v-text-field
                        >Ｖ
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b3capacitywatt"
                        ></v-text-field
                        >Ｗ用
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b3number"
                        ></v-text-field
                        >個
                      </td>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetballast.b3maker"
                        ></v-text-field>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <!--ポール等の形状-->
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th style="width: 12em" rowspan="6">ポール等の形状</th>
                      <th style="width: 12em">ポールメーカー</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.polemaker"
                        ></v-text-field>
                      </td>
                      <th style="width: 8em">種　　類</th>
                      <td colspan="4">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.polekind"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>材質</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.polemountangle"
                        ></v-text-field>
                      </td>
                      <th>基礎形式</th>
                      <td colspan="4">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.basetype"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <!-- TODO:streetlight.stickerprevent をだすのかも-->
                      <th>貼紙防止</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.stickerpreventcontent"
                        ></v-text-field>
                      </td>
                      <th>塗装色</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.polepaintcolor"
                        ></v-text-field>
                      </td>
                      <th style="width: 8em">下地装飾</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.polegroundpaint"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>取付角度</th>
                      <th style="width: 8em">①</th>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.pole1mountangle"
                        ></v-text-field
                        >度
                      </td>
                      <th>②</th>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.pole2mountangle"
                        ></v-text-field
                        >度
                      </td>
                      <th>③</th>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.pole2lightheight"
                        ></v-text-field
                        >度
                      </td>
                    </tr>
                    <tr>
                      <th>出幅</th>
                      <th>①</th>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.pole1wide"
                        ></v-text-field
                        >ｍ
                      </td>
                      <th>②</th>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.pole2wide"
                        ></v-text-field
                        >ｍ
                      </td>
                      <th>③</th>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.pole3wide"
                        ></v-text-field
                        >ｍ
                      </td>
                    </tr>
                    <tr>
                      <th>光源の高さ</th>
                      <th>①</th>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.pole1lightheight"
                        ></v-text-field
                        >ｍ
                      </td>
                      <th>②</th>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.pole2lightheight"
                        ></v-text-field
                        >ｍ
                      </td>
                      <th>③</th>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.pole3lightheight"
                        ></v-text-field
                        >ｍ
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <!--建柱基礎形状-->
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th style="width: 12em">建柱基礎形状</th>
                      <td colspan="4">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.pillarbasetype"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>自動点滅器</th>
                      <!--TODO:何を出しているか不明-->
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        ></v-text-field
                        >V
                      </td>
                      <td class="text-right">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                        ></v-text-field
                        >A
                      </td>
                      <th style="width: 14em">施工業者</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.contractor"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>設置年月日</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.setupdate"
                        ></v-text-field>
                      </td>
                      <th>所轄警察署</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.districtpolice"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>引継ぎ元</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.takeoversource"
                        ></v-text-field>
                      </td>
                      <th>FEP空管の有無</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.fep"
                        ></v-text-field>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <!--以下　右側-->
              <v-col sm="6">
                <v-table density="compact"
                  ><tbody>
                    <tr>
                      <th rowspan="2" style="width: 14em">旧管理番号</th>
                      <th style="width: 12em">路線名</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.oldadminroutename"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>整理番号</th>
                      <td>
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.oldadminadminnumber"
                        ></v-text-field>
                      </td>
                    </tr>
                    <tr>
                      <th>備考</th>
                      <td colspan="2">
                        <v-text-field
                          variant="underlined"
                          density="compact"
                          v-model="streetlight.note"
                        ></v-text-field>
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
import { Streetlight } from "~~/types";
import { StreetlightLamp } from "~~/types";
import { StreetlightBallast } from "~~/types";

const child_extend = ref(true);

const streetlight: Streetlight = reactive({
  id: 86637,
  lightnumber: "005", //管理番号
  numberserial: "0282", //管理番号連番
  code: 0, //台帳コード
  officeid: 8, //事務所コード
  areaid: 29, //工区コード
  routeid: 14, //路線コード
  routesub: "", //路線支線
  routecommonly: "青梅街道", //通称道路名
  municipalityid: 28, //行政区コード
  municipalityname: "", //行政区名称
  address: "千ヶ瀬町５丁目650", //住所
  address2: "", //住所2
  distance: 26.8, //地点標
  setposition: "植栽帯", //設置位置
  updownkind: "下", //上下線別
  latitude: 354711.07, //緯度
  longitude: 1391552.53, //経度
  createdate: null, //台帳作成日
  setpatternid: -1, //設置パターンID
  maplinkcode: "", //リンクコード
  mapnumber: "青梅市104", //住宅地図番号
  facilityname: "", //施設名
  facilitynumber: "", //施設番号
  settypeid: 2, //設置形式ID
  lightkindid: 1, //照明種別ID
  contractmethodid: 2, //契約方式ID
  contractcapacity: 0, //東電契約容量
  leadinmethod: "架空引込", //電源引込方式
  electricpoleadmin: "東電", //電柱管理者
  electricpolenumber: "西分248", //電柱番号
  powersupply: "", //給電方式
  tepconumber: "0050282", //東電管理番号
  powermethod: "単相2線式200V", //電源方式
  powermethodline: "", //電源方式線
  powermethodvolt: "", //電源方式V
  contractnumber: "25530-2-00440-00", //お客様契約番号
  tepcooffice: "立川支社", //東電営業所
  swichboardnumber: "", //配電盤番号
  chargeitem: "06000-0-02503-00", //電気料金集約分内訳表番号
  lampmaker: "岩崎電気（株）", //灯具メーカー
  douser: "無", //遮光板
  dousercontent: "", //遮光板の内容
  dimmer: "無", //調光の有無
  dimmercontent: "", //調光の内容
  lightheight: "", //光源の高さ
  basetype: "", //基礎形式
  polemaker: "丸一鋼管", //ポールメーカー
  polekind: "テーパーアーム", //ポール種類
  polemountangle: 0, //ポール取付角度
  polepaintcolor: "茶系", //ポール塗装色
  polegroundpaint: "溶融亜鉛メッキ", //ポール下地塗装
  polewide: 0, //ポール出幅
  polematerial: "鋼製", //ポール材質
  stickerprevent: "", //ポール貼紙防止の有無
  stickerpreventcontent: "なし", //ポール貼紙防止
  pole1mountangle: 5, //ポール取付角度1
  pole1wide: 1.8, //ポール出幅1
  pole1lightheight: 8.01, //光源の高さ1
  pole2mountangle: 0, //ポール取付角度2
  pole2wide: 0.0, //ポール出幅2
  pole2lightheight: 0.0, //光源の高さ2
  pole3mountangle: 0, //ポール取付角度3
  pole3wide: 0.0, //ポール出幅3
  pole3lightheight: 0.0, //光源の高さ3
  pillarbasetype: "", //建柱基礎形状
  contractor: "株式会社富田電気", //施工業者
  setupdate: 20220131, //設置年月日
  districtpolice: "青梅警察署", //所轄警察署
  takeoversource: "", //引継ぎ元
  fep: "", //FEP空管の有無
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
  updatedate: new Date("2022-01-14 00:00:00.000"), //更新年月日
  updateflag: 0, //更新フラグ
  registclass: 0, //登録区分
  reservenumber: "", //予約工事番号
  reservename: "", //予約工事名
  reservecontractor: "", //予約業者名
  updateuserid: 1, //更新ユーザ
  operationalstatusid: 1, //運用状況
});
const streetlightLamp: StreetlightLamp = reactive({
  streetlightid: 20505, //[NULL]
  id: 1, //ランプデータID
  constdate: null, //施工日
  l1categoryid: 10, //ランプ種類大区分ID1
  l1categoryetc: "水銀灯", //ランプ種類大区分その他1
  l1categorysub: "", //ランプ種類小区分1
  l1categorysubetc: "", //ランプ種類小区分その他1
  l1standard: 200, //ランプ規格1
  l1number: 1, //灯数1
  l1maker: "岩崎電気㈱", //灯具メーカー1
  l1type: "H6072", //灯具の形式1
  l1typeetc: "", //灯具の形式その他1
  l2categoryid: -3, //ランプ種類大区分ID2
  l2categoryetc: "", //ランプ種類大区分その他2
  l2categorysub: "", //ランプ種類小区分2
  l2categorysubetc: "", //ランプ種類小区分その他2
  l2standard: null, //ランプ規格2
  l2number: null, //灯数2
  l2maker: "", //灯具メーカー2
  l2type: "", //灯具の形式2
  l2typeetc: "", //灯具の形式その他2
  l3categoryid: null, //ランプ種類大区分ID3
  l3categoryetc: "", //ランプ種類大区分その他3
  l3categorysub: "", //ランプ種類小区分3
  l3categorysubetc: "", //ランプ種類小区分その他3
  l3standard: null, //ランプ規格3
  l3number: null, //灯数3
  l3maker: "", //灯具メーカー3
  l3type: "", //灯具の形式3
  l3typeetc: "", //灯具の形式その他3
  updatedate: new Date("2018-08-23 00:00:00.000"), //データ更新日
  updateuserid: 1, //更新ユーザ
  currentstate: 0, //現状フラグ
});

const streetballast: StreetlightBallast = reactive({
  streetlightid : 140749, 
id : 0,  //安定器データID
constdate : -1,  //施工日
b1kind : 'LED電源装置',  //安定器種類1
b1capacityvolt : 100,  //安定器容量V1
b1capacitywatt : 31,  //安定器容量W1
b1number : 1,  //安定器個数1
b1maker : '岩崎電気',  //安定器メーカー1
b2kind : '',  //安定器種類2
b2capacityvolt : 0,  //安定器容量V2
b2capacitywatt : 0,  //安定器容量W2
b2number : 0,  //安定器個数2
b2maker : '',  //安定器メーカー2
b3kind : '',  //安定器種類3
b3capacityvolt : 0,  //安定器容量V3
b3capacitywatt : 0,  //安定器容量W3
b3number : 0,  //安定器個数3
b3maker : '',  //安定器メーカー3
updatedate : new Date('2021-04-14 00:00:00.000'),  //データ更新日
updateuserid : null,  //更新ユーザ
currentstate : 1,  //現状フラグ

});

//TODO:加工して表示するもの、本来ドロップダウンで選択するものは変数で宣言
let formattedID= streetlight.lightnumber +"-" +streetlight.numberserial
let address= streetlight.address + streetlight.address2
let officename= "北多摩北部建設事務所"
let areaname = "小平工区"
let routename = "（主５）新宿青梅線"
let settypename = "独立"
let lightkindname = "街路灯"
let contractmethodname = "定額"

const officeDropdownItem = ref([
  "第一建設事務所",
  "第二建設事務所",
  "第三建設事務所",
  "第四建設事務所",
  "西多摩建設事務所",
]);
const areaDropdownItem = ref([
  "奥多摩出張所",
  "檜原工区",
  "あきる野工区",
  "福生工区",
  "青梅工区",
]);
const routeDropdownItem = ref([
  "一般都道十里木御岳停車場線201号",
  "主要地方道青梅おきる野線31号",
  "一般国道411号",
  "一般都道川野上川乗線206号",
  "主要地方道杉並あきる野線7号",
]);
const lampTypeDropdownItem = ref([
  "蛍光灯",
  "高圧蛍光水銀灯",
  "高圧ナトリウム",
  "低圧ナトリウム",
  "白熱灯",
  "セラミックメタルハライド",
  "高圧ツインナトリウム",
  "無電極ランプ",
  "ＬＥＤ",
  "水銀灯",
  "メタルハライドランプ",
  "高演色ナトリウムランプ",
  "高演色メタルハライドランプ",
  "ハロゲンランプ",
  "その他",
]);
const repairConstKindDropdownItem = ref([
  "ランプ取替工",
  "自動点滅器取替工",
  "安定器取替工",
  "照明器取替工",
  "ポール内臓ブレーカー取替工",
  "その他",
]);
const municipalityDropdownItem = ref([
  "千代田区",
  "中央区",
  "港区",
  "新宿区",
  "文京区",
  "台東区",
  "墨田区",
  "江東区",
  "品川区",
  "目黒区",
  "大田区",
  "世田谷区",
  "渋谷区",
  "中野区",
  "杉並区",
  "豊島区",
  "北区",
  "荒川区",
  "板橋区",
  "練馬区",
  "足立区",
  "葛飾区",
  "江戸川区",
  "八王子市",
  "立川市",
  "武蔵野市",
  "三鷹市",
  "青梅市",
  "府中市",
  "昭島市",
  "調布市",
  "町田市",
  "小金井市",
  "小平市",
  "日野市",
  "東村山市",
  "国分寺市",
  "国立市",
  "西東京市",
  "福生市",
  "狛江市",
  "東大和市",
  "清瀬市",
  "東久留米市",
  "武蔵村山市",
  "多摩市",
  "稲城市",
  "羽村市",
  "あきる野市",
  "瑞穂町",
  "日の出町",
  "檜原村",
  "奥多摩町",
  "大島町",
  "利島村",
  "新島村",
  "神津島村",
  "三宅村",
  "御蔵島村",
  "八丈町",
  "青ヶ島村",
  "小笠原村",
]);
const settypeDropdownItem = ref([
  "独立",
  "共架",
  "壁面添架",
  "桁下添架",
  "その他",
]);
const lightingkindDropdownItem = ref([
  "街路灯",
  "街路灯（歩道）",
  "標識",
  "視線誘導",
  "橋梁灯",
  "引込柱",
  "地下道",
  "トンネル",
  "地下歩道",
]);
const contractmethodDropdownItem = ref(["従量", "定額"]);

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
};
</script>

<style lang="scss">
.ledger-image-section {
  min-height: 22em;
}
</style>
