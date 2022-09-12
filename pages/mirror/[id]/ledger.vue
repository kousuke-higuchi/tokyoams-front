<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col :md="child_extend?3:0">
        <mirror-menu @is-extend="child_extend=$event"/>
      </v-col>

      <v-col :md="child_extend?9:12">
        <!-- 道路反射鏡台帳 -->
        <v-card class="overflow-auto ledger atfTable" elevation="4">
          <v-sheet class="d-flex">
            <v-sheet class="ma-2 px-2 mr-auto">道路反射鏡台帳</v-sheet>
            <v-sheet class="ma-2 px-2">（設置・作成）{{ mirror.createdate }}</v-sheet>
          </v-sheet>

          <v-card-text class="pt-0">
            <v-row>
              <v-col>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th style="width: 12em">管理番号</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.adminnumber" />
                      </td>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="mirror.numberserial" />
                      </td>
                      <th style="width: 12em">事務所名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="mirror.officename" />
                      </td>
                      <th style="width: 12em">管理工区</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="mirror.areaname" />
                      </td>
                    </tr>
                    <tr>
                      <th>路線名</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.routename" />
                      </td>
                      <th>通称道路名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="mirror.routecommonly"/>
                      </td>
                      <td></td>
                      <td></td>
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
                      <th style="width: 12em;" rowspan="2">設置場所</th>
                      <th style="width: 16em;">住所</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.municipalityname" />
                      </td>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.address" />
                      </td>
                    </tr>
                    <tr>
                      <th>設置位置</th>
                      <td colspan="7">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.setposition" />
                      </td>
                    </tr>
                    <tr>
                      <th>設置年月日</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.setupdate" />
                      </td>
                      <th style="width: 18em;">施工業者名</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.contractor" />
                      </td>
                    </tr>
                    <tr>
                      <th>地点標</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.distance" />
                      </td>
                      <th>上下種別</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="mirror.updownkind" />
                      </td>
                      <th style="width: 8em;">緯度</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="mirror.latitude" />
                      </td>
                    </tr>
                    <tr>
                      <th>車道幅員</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.roadwaywidth" />
                      </td>
                      <th>歩道幅員</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="mirror.sidewalkwidth" />
                      </td>
                      <th>経度</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="mirror.longitude" />
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
                      <td colspan="5">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.setmethod" />
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="6">鏡面</th>
                      <th>縦柱２面</th>
                      <th style="width: 24em;">鏡面1</th>
                      <th colspan="3">鏡面２</th>
                    </tr>
                    <tr>
                      <th>規格寸法</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="mirror.mirrormaterial1" />
                      </td>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.mirrormaterial2" />
                      </td>
                    </tr>
                    <tr>
                      <th>材質</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="mirror.mirrorstandard1" />
                      </td>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.mirrorstandard2" />
                      </td>
                    </tr>
                    <tr>
                      <th></th>
                      <td>
                        <v-text-field variant="underlined" density="compact" readonly />
                      </td>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" readonly />
                      </td>
                    </tr>
                    <tr>
                      <th></th>
                      <td>
                        <v-text-field variant="underlined" density="compact" readonly />
                      </td>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" readonly />
                      </td>
                    </tr>
                    <tr>
                      <th></th>
                      <td>
                        <v-text-field variant="underlined" density="compact" readonly />
                      </td>
                      <td colspan="4">
                        <v-text-field variant="underlined" density="compact" readonly />
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="3">柱</th>
                      <th>規格寸法:支柱</th>
                      <td colspan="6">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.polestandardsize" />
                      </td>
                    </tr>
                    <tr>
                      <th></th>
                      <td colspan="6">
                        <v-text-field variant="underlined" density="compact" readonly />
                      </td>
                    </tr>
                    <tr>
                      <th>材質</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.poletype" />
                      </td>
                      <th style="width: 12em;">注意板</th>
                      <td style="width: 12em;">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.cautionplate" />
                      </td>
                    </tr>
                    <tr>
                      <th>基礎</th>
                      <th>形式</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.basetype" />
                      </td>
                      <th>サイズ</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="mirror.basesize" />
                      </td>
                    </tr>
                    <tr>
                      <th>添架</th>
                      <td colspan="5">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.adding" />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2"></th>
                      <td colspan="5">
                        <v-text-field variant="underlined" density="compact" readonly />
                      </td>
                    </tr>
                    <tr>
                      <th colspan="2">他の添架物</th>
                      <td colspan="5">
                        <v-text-field variant="underlined" density="compact" v-model="mirror.otheradding" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th rowspan="3" nowrap="nowrap" style="width: 12em;">
                        添付書類<br />（レイアウト図<br />構造図データ）
                      </th>
                      <td rowspan="3">
                        <v-textarea variant="underlined" density="compact" />
                      </td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr>
                      <th>備考</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="mirror.note" />
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
                    <!--TODO:DBカラムを特定する-->
                    <v-col v-for="(image, i) in maps" :key="i" class="d-flex child-flex" cols="4">
                      <v-container>
                        <img :src="image" />
                      </v-container>
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
import mirrorService from '~~/services/mirror-service';

const route = useRoute();

const child_extend = ref(true);

const maps = ref([])
const images = ref(["/assets/img/mirrorLedgerView1.jpg"]);
//TODO:BEで取得したデータを当てはめる　以下仮データ
const mirror = reactive({
  id: 664, //id
  adminnumber: '3-1311', //管理番号
  numberserial: 8010, //管理番号連番
  code: 133, //台帳コード
  officeid: 3, //事務所コード
  officename: '第三建設事務所', //事務所名 TODO:adminofficeとjoin
  areaid: 10, //工区コード
  areaname: '杉並工区', //工区名 TODO:adminareaとjoin
  routeid: 68, //路線コード
  routesub: null, //路線支線
  routename: '(主311)環状八号線', //路線名 TODO:routeとjoin
  routecommonly: '環八通り', //通称道路名
  municipalityid: 15, //行政区コード
  municipalityname: '杉並区', //行政区名称
  address: '高井戸東４－９', //住所
  address2: null, //住所2
  distance: 0, //地点標
  setposition: '歩道', //設置位置
  updownkind: '内回り', //上下線別
  latitude: '35°41’20.96”', //緯度
  longitude: '139°36’59.22”', //経度
  createdate: '40267', //台帳作成日
  setpatternid: 58, //設置パターンID
  maplinkcode: '103-S00000122', //リンクコード
  setupdate: null, //設置年月日
  contractor: null, //施工業者
  roadwaywidth: 0, //車道幅員
  sidewalkwidth: 0, //歩道幅員
  setmethod: '建柱', //設置方式
  mirrorstandard1: 'Φ600', //鏡面規格寸法1
  mirrormaterial1: 'ステンレス', //鏡面材質1
  mirrorstandard2: 'Φ600', //鏡面規格寸法2
  mirrormaterial2: 'ステンレス', //鏡面材質2
  polestandardsize: 'Φ76.3', //柱規格寸法支柱
  polematerial: '樹脂被膜鋼管', //柱材質
  polediameter: null, //柱径
  poletype: null, //柱形状
  cautionplate: '有', //注意板
  basetype: 'コンクリート', //基礎形式
  basesize: null, //基礎サイズ
  adding: null, //添架
  otheradding: null, //他の添架物
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
  updatedate: null, //更新年月日
  updateflag: 0, //更新フラグ
  registclass: 0, //登録区分
  reservenumber: null, //予約工事番号
  reservename: null, //予約工事名
  reservecontractor: null, //予約業者名
  updateuserid: 1, //更新ユーザ
  operationalstatusid: 1, //運用状況
});
const loadingState = useLoading();

console.log(`mounted ${route.fullPath}`);

/** 保存ボタン クリックイベントハンドラ */
const onSaveButtonClick = () => {
  loadingState.setLoading(true);
  console.info("保存ボタンをクリックしました");

  //TODO:更新処理を実装する
  // 更新処理
  // mirrorService.save(mirror, images, maps)
  //   .then(ret => {
  //     console.info('配電盤情報を更新しました。');
  //     useToast().showToast("配電盤情報を更新しました。");
  //   })
  //   .finally(() => {
  //     loadingState.setLoading(false);
  //   });
  loadingState.setLoading(false);
}
</script>

<style lang="scss">
.ledger-image-section {
  min-height: 22em;
}
</style>
