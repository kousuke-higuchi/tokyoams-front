<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col :md="child_extend?3:0">
        <roadsign-menu @is-extend="child_extend=$event"/>
      </v-col>

      <v-col :md="child_extend?9:12">
        <!-- 道路標識台帳 -->
        <v-card class="overflow-auto ledger atfTable" elevation="4">
          <v-sheet class="d-flex">
            <v-sheet class="ma-2 px-2 mr-auto">道路標識台帳</v-sheet>
            <v-sheet class="ma-2 px-2">(設置・作成) {{ signs.createdate }}</v-sheet>
          </v-sheet>

          <v-card-text class="pt-0">
            <v-row>
              <v-col>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th style="width: 12em;">整理番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.adminnumber" />
                      </td>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.numberserial" />
                      </td>
                      <th style="width: 10em;">事務所名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.officename" />
                      </td>
                      <th style="width: 10em;">管理工区</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="signs.areaname" />
                      </td>
                    </tr>
                    <tr>
                      <th>路線名</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="signs.routename" />
                      </td>
                      <th>通称道路名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.routecommonly" />
                      </td>
                      <th>支柱番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.polenumberid" />
                      </td>
                      <th style="width: 10em;">支柱管理者</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.poleadmin" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
            <v-row>
              <v-col sm="6">
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th rowspan="2" style="width: 12em;">設置場所</th>
                      <th>住所</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="signs.municipalityname" />
                      </td>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="signs.address" />
                      </td>
                    </tr>
                    <tr>
                      <th style="width: 10em;">設置位置</th>
                      <td colspan="5">
                        <v-text-field variant="underlined" density="compact" v-model="signs.setposition" />
                      </td>
                    </tr>
                    <tr>
                      <th>設置年月日</th>
                      <td colspan="2" style="width: 12em;">
                        <v-text-field variant="underlined" density="compact" v-model="signs.setupdate" />
                      </td>
                      <th style="width: 10em;">施工業者名</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="signs.contractor" />
                      </td>
                    </tr>
                    <tr>
                      <th>地点標</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="signs.distance" />
                      </td>
                      <th>上下種別</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.updownkind" />
                      </td>
                      <th style="width: 6em;">緯度</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.latitude" />
                      </td>
                    </tr>
                    <tr>
                      <th>車道幅員</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="signs.roadwaywidth" />
                      </td>
                      <th>歩道幅員</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.sidewalkwidth" />
                      </td>
                      <th>経度</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.longitude" />
                      </td>
                    </tr>
                    <tr>
                      <th>標識種別</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="signs.signkindname" />
                      </td>
                      <th>標識番号</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="signs.signnumber" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th rowspan="12" style="writing-mode: vertical-rl; 
                        text-align: center; 
                        width: 2em;
                        padding:0em;">
                        構　　造　　規　　格
                      </th>
                      <th style="width: 10em;">設置方式</th>
                      <td colspan="7">
                        <v-text-field variant="underlined" density="compact" v-model="signs.setmethodname" />
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="5">板</th>
                      <th style="width: 10em">規格寸法</th>
                      <td colspan="6">
                        <v-text-field variant="underlined" density="compact" v-model="signs.boardstandardsize" />
                      </td>
                    </tr>
                    <tr>
                      <th>裏面塗装</th>
                      <td colspan="6">
                        <v-text-field variant="underlined" density="compact" v-model="signs.boardbackpaint" />
                      </td>
                    </tr>
                    <tr>
                      <th>材質</th>
                      <td colspan="6">
                        <v-text-field variant="underlined" density="compact" v-model="signs.boardmaterial" />
                      </td>
                    </tr>
                    <tr>
                      <th>反射材料</th>
                      <td colspan="6">
                        <v-text-field variant="underlined" density="compact" v-model="signs.boardreflectmaterial" />
                      </td>
                    </tr>
                    <tr>
                      <th>補助標識</th>
                      <td colspan="6">
                        <v-text-field variant="underlined" density="compact" v-model="signs.auxiliarysign" />
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="3">柱</th>
                      <th rowspan="2">規格寸法</th>
                      <th style="width: 4em;">支柱</th>
                      <td colspan="5">
                        <v-text-field variant="underlined" density="compact" v-model="signs.polestandardsizecol" />
                      </td>
                    </tr>
                    <tr>
                      <th>梁</th>
                      <td colspan="5">
                        <v-text-field variant="underlined" density="compact" v-model="signs.polestandardsizebeam" />
                      </td>
                    </tr>
                    <tr>
                      <th>材質</th>
                      <td colspan="6">
                        <v-text-field variant="underlined" density="compact" v-model="signs.polematerial" />
                      </td>
                    </tr>
                    <tr>
                      <th>基礎</th>
                      <th>形式</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="signs.basetype" />
                      </td>
                      <th style="width: 6em;">サイズ</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="signs.basesize" />
                      </td>
                    </tr>
                    <tr>
                      <th>照明</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.lightname" />
                      </td>
                      <th style="width: 6em;">電力量</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.electricenergy" />
                      </td>
                      <th>ランプ</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.lampkind" />
                      </td>
                      <th>W</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.lampwatt" />
                      </td>
                    </tr>
                    <tr>
                      <th>添架</th>
                      <td colspan="7">
                        <v-text-field variant="underlined" density="compact" v-model="signs.adding" />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2">板下高</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="signs.boardheight" />
                      </td>
                      <th style="width: 10em;">裏面の有無</th>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" v-model="signs.backboard" />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2">他の添架物</th>
                      <td colspan="7">
                        <v-text-field variant="underlined" density="compact" v-model="signs.otheradding" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th style="width: 12em;">
                        添付書類<br />（レイアウト図<br />構造図データ）
                      </th>
                      <td>
                        <!--TODO:該当のDBカラムを特定する-->
                        <v-textarea variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr>
                      <th>備考</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.note" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <!--以下　右側-->
              <v-col sm="6">
                <h4 class="ma-2 mb-0">位置図</h4>
                <v-sheet class="mb-2" :border="1">
                  <v-row class="ledger-image-section">
                    <v-col v-for="(image, i) in images" :key="i" class="d-flex child-flex" cols="4">
                    </v-col>
                  </v-row>
                  <v-file-input label="位置図" class="pa-2 mx-2" accept="image/png, image/jpeg, image/git" filled multiple
                    hide-details prepend-icon="mdi-camera" density="compact"></v-file-input>
                </v-sheet>

                <h4 class="ma-2 mb-0">写真</h4>
                <v-sheet class="mb-2 ledger-image-section" :border="1">
                  <v-row class="ledger-image-section">
                    <v-col v-for="(image, i) in images" :key="i" class="d-flex child-flex" cols="4">
                      <v-container>
                        <img :src="image" />
                      </v-container>
                    </v-col>
                  </v-row>
                  <v-file-input label="写真" class="pa-2 mx-2" accept="image/png, image/jpeg, image/git" filled multiple
                    hide-details prepend-icon="mdi-camera" density="compact"></v-file-input>
                </v-sheet>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th>多言語表記</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="signs.englishexname" />
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
          </v-card-text>

          <div class="float-bottom">
            <v-btn color="primary" elevation="6" @click="onSaveButtonClick">
              <v-icon color="white">mdi-check</v-icon>保存
            </v-btn>
          </div>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const child_extend =ref(true);

const images = ref(['../../../assets/img/roadsignLedgerview1.jpg']);
//TODO:仮データ　不要なデータの削除や必要なデータの追加を行う
const signs = reactive({
  id: 4727, //[NULL]
  adminnumber: '3-1014', //管理番号
  numberserial: '7203', //管理番号連番
  code: 287, //台帳コード
  officeid: 3, //事務所コード
  officename: '第二建設事務所', //事務所名　TODO:_adminofficeとofficeidでjoin
  areaid: 10, //工区コード
  areaname: '目黒工区', //管理工区　TODO:_adminareaとareaidでjoin
  routeid: 22, //路線コード
  routename: '(主317)環状六号線', //路線名 TODO:_routeとroteidでjoin
  routesub: null, //路線支線
  routecommonly: '方南通り', //通称道路名
  polenumberid: null, //支柱番号ID
  poleadmin: null, //支柱管理者
  municipalityid: 15, //行政区コード
  municipalityname: '杉並区', //行政区名称
  address: '方南2-12-14', //住所
  address2: null, //住所2
  distance: 2.4, //地点標
  setposition: '歩道', //設置位置
  updownkind: '下り', //上下線別
  latitude: '35°40’59.87”', //緯度
  longitude: '139°39’25.06”', //経度
  createdate: '2011年09月06日', //台帳作成日
  setpatternid: 40, //設置パターンID
  maplinkcode: '102-S00000282', //リンクコード
  setupdate: '2019年03月06日', //設置年月日
  contractor: '梶原建設（株）', //施工業者
  roadwaywidth: 0, //車道幅員
  sidewalkwidth: 0, //歩道幅員
  signkindid: 1, //標識種別ID
  signkindname: '案内', //標識種別 TODO:_signkindとsignkindidでjoin
  signnumber: '119-B', //標識番号
  setmethodid: 1, //設置方式ID
  setmethodname: '路側・単柱式', //設置方式 TODO:_signsetmethodとsetmethodidでjoin
  boardsetmethod: null, //板取付方式
  boardstandardsize: '0.39*1.50*2', //板規格寸法
  boardbackpaint: '無', //板裏面塗装
  boardmaterial: 'アルミ', //板材質
  boardreflectmaterial: '広角プリズム', //板反射材料
  auxiliarysign: '無', //補助標識
  polestandardsizecol: 'φ89.1*4280*3.2', //柱規格寸法支柱
  polestandardsizebeam: null, //柱規格寸法梁
  polematerial: '鋼管に塗装', //柱材質
  poletype: null, //柱形式
  polesurface: null, //柱表面処理
  poleoverhang: null, //柱出幅
  basetype: 'コンクリート', //基礎形式
  basesize: 'φ600*1000', //基礎サイズ
  lightname: null, //照明
  electricenergy: null, //電力量
  lampkind: null, //ランプ種類
  lampwatt: 0, //ランプW数
  addingfactid: -3, //添架施設種別ID
  adding: null, //添架
  boardheight: 2500, //板下高
  backboard: '有', //裏面の有無
  pile: null, //杭の有無
  otheradding: null, //他の添架物
  target1: '環七通り', //目標地
  targetleftup1: null, //左上目標地
  targetrightup1: null, //右上目標地
  targetleftdown1: null, //左下目標地
  targetrightdown1: null, //右下目標地
  boardmagnify1: null, //板拡大率
  charsizekanji1: null, //文字の大きさ漢字
  charsizeromaji1: null, //文字の大きさローマ字
  reflectlighttype1: null, //反射照明方式
  preguidedistance1: null, //予告距離
  boardnumber1: '2', //枚数
  setmethod1: null, //取付方式
  target2: '方南通り', //目標地2
  targetleftup2: null, //左上目標地2
  targetrightup2: null, //右上目標地2
  targetleftdown2: null, //左下目標地2
  targetrightdown2: null, //右下目標地2
  boardstandardsize2: '0.34*1.34*2', //板規格寸法2
  boardmagnify2: null, //板拡大率2
  charsizekanji2: null, //文字の大きさ漢字2
  charsizeromaji2: null, //文字の大きさローマ字2
  boardbackpaint2: null, //板裏面塗装2
  boardmaterial2: 'アルミ', //板材質2
  reflectlighttype2: null, //反射照明方式2
  boardreflectmaterial2: 'カプセルレンズ', //板反射材料2
  setmethod2: null, //取付方式2
  auxiliarysign2: '無', //補助標識2
  preguidedistance2: null, //予告距離2
  boardnumber2: '2', //枚数2
  target3: null, //目標地3
  targetleftup3: null, //左上目標地3
  targetrightup3: null, //右上目標地3
  targetleftdown3: null, //左下目標地3
  targetrightdown3: null, //右下目標地3
  boardstandardsize3: null, //板規格寸法3
  boardmagnify3: null, //板拡大率3
  charsizekanji3: null, //文字の大きさ漢字3
  charsizeromaji3: null, //文字の大きさローマ字3
  boardbackpaint3: null, //板裏面塗装3
  boardmaterial3: null, //板材質3
  reflectlighttype3: null, //反射照明方式3
  boardreflectmaterial3: null, //板反射材料3
  setmethod3: null, //取付方式3
  auxiliarysign3: null, //補助標識3
  preguidedistance3: null, //予告距離3
  boardnumber3: null, //枚数3
  note: null, //備考
  removalflag: 0, //撤去フラグ
  deleteflag: 0, //削除フラグ
  class1: 0, //区分1
  class2: 0, //区分2
  class3: 0, //区分3
  class4: 0, //区分4
  class5: 0, //区分5
  spare1: null, //予備1
  spare2: null, //予備2
  spare3: null, //予備3
  spare4: null, //予備4
  spare5: null, //予備5
  numeric1: 0, //数値1
  numeric2: 0, //数値2
  numeric3: 0, //数値3
  numeric4: 0, //数値4
  numeric5: 0, //数値5
  updatedate: '44693.6561574074', //更新年月日
  updateflag: 0, //更新フラグ
  registclass: 0, //登録区分
  reservenumber: null, //予約工事番号
  reservename: null, //予約工事名
  reservecontractor: null, //予約業者名
  updateuserid: 6, //更新ユーザ
  englishexid: -3, //英語表記
  englishexname: null, //英語行基説明 TODO:_existenceとenglishexidでjoin
  operationalstatusid: 1, //運用状況
})

const loadingState = useLoading();

/** 保存ボタン クリックイベントハンドラ */
const onSaveButtonClick = () => {
  loadingState.setLoading(true);
  console.info("保存ボタンをクリックしました");

  //TODO:更新処理を実装する
  loadingState.setLoading(false);
}

console.log(`mounted ${route.fullPath}`);
</script>
  
  <style lang="scss">
  .ledger-image-section {
    min-height: 22em;
  }
  </style>
  