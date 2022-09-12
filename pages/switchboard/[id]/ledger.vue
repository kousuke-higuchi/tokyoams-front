<template>
  <div>
    <v-row>
      <!-- メニュー -->
      <v-col :md="child_extend?3:0">
        <switchboard-menu @is-extend="child_extend=$event"/>
      </v-col>

      <v-col :md="child_extend?9:12">
        <!-- TODO:配電盤台帳 -->
        <v-card class="overflow-auto" elevation="4">
          <v-sheet class="d-flex">
            <v-sheet class="ma-2 px-2 mr-auto">配電盤用台帳</v-sheet>
            <v-sheet class="ma-2 px-2">{{ switchboard.updatedate.getFullYear()
            }}年{{ switchboard.updatedate.getMonth() }}月{{ switchboard.updatedate.getDate() }}日 更新
            </v-sheet>
          </v-sheet>

          <v-card-text class="pt-0">
            <v-row>
              <v-col sm="12" md="6">
                <v-table density="compact" class="ledger atfTable">
                  <tbody>
                    <tr>
                      <th style="width:14em;">事務所名</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.officename" />
                      </td>
                      <th>工区名</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.areaname" />
                      </td>
                      <th>管理番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.adminnumber" />
                      </td>
                    </tr>
                    <tr>
                      <th>路線番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.routeid" />
                      </td>
                      <td style="">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.routesub" />
                      </td>
                      <th>路線名</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.routename" />
                      </td>
                      <th>通称道路名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.routesub" />
                      </td>
                    </tr>
                    <tr>
                      <th>地点標</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" suffix="km" inputmode="numeric"
                          pattern="\d*" v-model="switchboard.distance" />
                      </td>
                      <th>住所</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.municipalityname" />
                      </td>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.address" />
                      </td>
                    </tr>
                    <tr>
                      <th>緯度</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.latitude" />
                      </td>
                      <th>経度</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.longitude" />
                      </td>
                      <th>住宅地図番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.mapnumber" />
                      </td>
                    </tr>
                    <tr>
                      <th>施設名</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.facilityname" />
                      </td>
                      <th colspan="2">施設番号</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.facilitynumber" />
                      </td>
                    </tr>
                    <tr>
                      <th>設置形式</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.settypename" />
                      </td>
                      <th colspan="2">照明種別</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.lightkindname" />
                      </td>
                    </tr>
                    <tr>
                      <th>契約方式</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.contractmethodname" />
                      </td>
                      <th colspan="2">電源引込方式</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.leadinmethod" />
                      </td>
                    </tr>
                    <tr>
                      <th>東電管理番号</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.tepconumber" />
                      </td>
                      <th colspan="2">電源方式</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.powermethod" />
                      </td>
                    </tr>
                    <tr>
                      <th>お客様契約番号</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.contractnumber" />
                      </td>
                      <th colspan="2">東電営業所</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.tepcooffice" />
                      </td>
                    </tr>
                    <tr>
                      <th>配電盤メーカー</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.swichboardmaker" />
                      </td>
                      <th colspan="2">回路数</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.circuitnumber" />
                      </td>
                    </tr>
                    <tr>
                      <th>調光の有無</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.dimmer" />
                      </td>
                      <th colspan="2">電気料金集約分内訳表番号</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.chargeitem" />
                      </td>
                    </tr>
                    <tr>
                      <th rowspan="2">分電盤</th>
                      <th>自動点滅器</th>
                      <td colspan="3">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.flashername" />
                      </td>
                      <td colspan="4"></td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <v-row>
                          <v-col sm="6">
                            <v-text-field variant="underlined" single-line density="compact" suffix="V"
                              v-model="switchboard.flashervolt" />
                          </v-col>
                          <v-col sm="6">
                            <v-text-field variant="underlined" single-line density="compact" suffix="A"
                              v-model="switchboard.flasherwatt" />
                          </v-col>
                        </v-row>
                      </td>
                      <td colspan="4"></td>
                    </tr>
                    <tr>
                      <th rowspan="4">給電街灯番号</th>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplystart1" />
                          <v-sheet>~</v-sheet>
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplyend1" />
                        </div>
                      </td>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplystart2" />
                          <v-sheet>~</v-sheet>
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplyend2" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplystart3" />
                          <v-sheet>~</v-sheet>
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplyend3" />
                        </div>
                      </td>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplystart4" />
                          <v-sheet>~</v-sheet>
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplyend4" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplystart5" />
                          <v-sheet>~</v-sheet>
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplyend5" />
                        </div>
                      </td>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplystart6" />
                          <v-sheet>~</v-sheet>
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplyend6" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplystart7" />
                          <v-sheet>~</v-sheet>
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplyend7" />
                        </div>
                      </td>
                      <td colspan="4">
                        <div class="d-flex">
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplystart8" />
                          <v-sheet>~</v-sheet>
                          <v-text-field variant="underlined" density="compact" v-model="switchboard.supplyend8" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        建柱基礎形状
                      </th>
                      <td colspan="8">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.pillarbasetype" />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        引込柱
                      </th>
                      <td class="px-0" colspan="8">
                        <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th>有無</th>
                      <td>{{ switchboard.leadinpole }}</td>
                      <th>番号</th>
                      <td colspan="2">{{ switchboard.leadinnumber }}</td>
                    </tr>
                    <tr>
                      <th rowspan="2">柱</th>
                      <th>規格寸法</th>
                      <td colspan="3">{{ switchboard.leadinpolestandard }}</td>
                    </tr>
                    <tr>
                      <th>材質</th>
                      <td colspan="3">{{ switchboard.leadinpolematerial }}</td>
                    </tr>
                    <tr>
                      <th>基礎</th>
                      <th>形式</th>
                      <td>{{ switchboard.leadinbasetype }}</td>
                      <th>サイズ</th>
                      <td>{{ switchboard.leadinbasesize }}</td>
                    </tr>
                  </tbody>
                </v-table>
                </td>
                </tr>
                <tr>
                  <th>
                    特記事項
                  </th>
                  <td colspan="8">
                    <v-text-field variant="underlined" density="compact" v-model="switchboard.specialnotes" />
                  </td>
                </tr>

                <tr>
                  <th></th>
                  <td colspan="3"></td>
                  <th>施工業者</th>
                  <td colspan="4">
                    <v-text-field variant="underlined" density="compact" v-model="switchboard.contractor" />
                  </td>
                </tr>
                <tr>
                  <th>設置年月日</th>
                  <td colspan="3">
                    <v-text-field variant="underlined" density="compact" v-model="switchboard.setupdate" />
                  </td>
                  <th>所轄警察署</th>
                  <td colspan="4">
                    <v-text-field variant="underlined" density="compact" v-model="switchboard.districtpolice" />
                  </td>
                </tr>
                <tr>
                  <th>引継ぎ元</th>
                  <td colspan="3">
                    <v-text-field variant="underlined" density="compact" v-model="switchboard.takeoversource" />
                  </td>
                  <th></th>
                  <td colspan="4"></td>
                </tr>
                </tbody>
                </v-table>
              </v-col>
              <v-col sm="12" md="6">
                <v-table density="compact" class="ledger">
                  <tbody>
                    <tr>
                      <th rowspan="2" style="width:14em;">旧管理番号</th>
                      <th style="width:12em;">路線名</th>
                      <td>
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.oldadminroutename" />
                      </td>
                    </tr>
                    <tr>
                      <th>整理番号</th>
                      <td>
                        <v-text-field variant="underlined" density="compact"
                          v-model="switchboard.oldadminadminnumber" />
                      </td>
                    </tr>
                    <tr>
                      <th>備考</th>
                      <td colspan="2">
                        <v-text-field variant="underlined" density="compact" v-model="switchboard.note" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>

                <h4 class="ma-2 mb-0">位置図</h4>
                <v-sheet class="mb-2" :border="1">
                  <div class="ledger-image-section">
                    <v-container class="d-flex justify-center">
                      <img src="" />
                    </v-container>
                  </div>
                  <v-file-input label="位置図" v-model="newAttachments" class="pa-2 mx-2"
                    accept="image/png, image/jpeg, image/git" filled multiple hide-details prepend-icon="mdi-camera"
                    density="compact"></v-file-input>
                </v-sheet>

                <h4 class="ma-2 mb-0">写真添付欄</h4>
                <v-sheet class="mb-2 ledger-image-section" :border="1">
                  <div class="d-flex">
                    <v-sheet class="text-cecnter text-caption">
                      <v-container>撮影年月日:</v-container>
                    </v-sheet>
                    <v-text-field variant="underlined" density="compact" hide-details class="pa-1"
                      v-model="image.updatedate" />
                  </div>
                  <v-container class="d-flex justify-center">
                    <img :src="image.photopath" />
                  </v-container>
                  <v-file-input label="写真" class="pa-2 mx-2" v-model="newImages"
                    accept="image/png, image/jpeg, image/git" filled multiple hide-details prepend-icon="mdi-camera"
                    density="compact"></v-file-input>
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
import switchboardService from '~~/services/switchboard-service';
import { Switchboard } from '~~/types';
import { SwitchboardImage } from '~~/types';

const route = useRoute();

const child_extend =ref(true);

/**
 * 写真(基本写真)
 * atf_tb_swb_photo.switchboardidとatf_tb_switchboard.idでjoin
 * atf_tb_swb_photo.photolindidが1のデータが写真(基本写真)
 */
const image = ref<SwitchboardImage>();
/**
 * 位置図
 * atf_tb_swb_photo.switchboardidとatf_tb_switchboard.idでjoin
 * atf_tb_swb_photo.photolindidが2のデータが位置図
 */
const attachments = ref<any>();
const newImages = ref<[File]>();
const newAttachments = ref<[File]>();
const switchboard = ref<Switchboard>();
switchboard.value = {
  id: 1, //[NULL]
  adminnumber: '101-1008', //管理番号
  numberserial: '5002', //管理番号連番
  code: 1, //台帳コード
  officeid: 1, //事務所コード
  officename: '第一建設事務所', //事務所名
  areaid: 1, //工区コード
  areaname: '千代田工区', //工区名
  routeid: 17, //路線コード
  routename: '(主8)千代田高田馬場線', //路線名
  routesub: null, //路線支線
  routecommonly: null, //通称道路名
  municipalityid: 1, //行政区コード
  municipalityname: '千代田区', //行政区名称
  address: '飯田橋１－７', //住所
  address2: null, //住所2
  distance: 0.5, //地点標
  setposition: '歩道部', //設置位置
  updownkind: '0', //上下線別
  latitude: '35°41’56.56”', //緯度
  longitude: '139°44’56.64”', //経度
  createdate: new Date(2011, 9, 22), //台帳作成日
  setpatternid: 24, //設置パターンID
  maplinkcode: '101-S00000109', //リンクコード
  mapnumber: '千代田区７', //住宅地図番号
  mapnumber2: null, //住宅地図番号2
  facilityname: '飯田橋１丁目歩道橋', //施設名
  facilitynumber: '3', //施設番号
  settypeid: 1, //設置形式ID
  settypename: '独立', //設置形式
  lightkindid: 13, //照明種別ID
  lightkindname: '配電盤', //照明種別
  contractmethodid: 1, //契約方式ID
  contractmethodname: '従量', //契約方式
  contractcapacity: 0, //東電契約容量
  leadinmethod: '地中引込', //電源引込方式
  tepconumber: '麹低168', //東電管理番号
  powermethod: '単', //電源方式
  powermethodline: '2', //電源方式線
  powermethodvolt: '200', //電源方式V
  contractnumber: null, //お客様契約番号
  tepcooffice: null, //東電営業所
  swichboardmaker: null, //配電盤メーカー
  swichboardnumber: null, //配電盤番号
  swichboardtype: null, //配電盤形式
  swichboardmaterial: '鋼製', //配電盤材質
  stickerprevent: '無', //配電盤貼紙防止の有無
  circuitnumber: 0, //回路数
  dimmer: null, //調光の有無
  chargeitem: null, //電気料金集約分内訳表番号
  supplystart1Id: null, //給電街灯番号開始1ID
  supplyend1Id: null, //給電街灯番号終了1ID
  supplystart1: null, //給電街灯番号開始1
  supplyend1: null, //給電街灯番号終了1
  supplystart2Id: null, //給電街灯番号開始2ID
  supplyend2Id: null, //給電街灯番号終了2ID
  supplystart2: null, //給電街灯番号開始2
  supplyend2: null, //給電街灯番号終了2
  supplystart3Id: null, //給電街灯番号開始3ID
  supplyend3Id: null, //給電街灯番号終了3ID
  supplystart3: null, //給電街灯番号開始3
  supplyend3: null, //給電街灯番号終了3
  supplystart4Id: null, //給電街灯番号開始4ID
  supplyend4Id: null, //給電街灯番号終了4ID
  supplystart4: null, //給電街灯番号開始4
  supplyend4: null, //給電街灯番号終了4
  supplystart5Id: null, //給電街灯番号開始5ID
  supplyend5Id: null, //給電街灯番号終了5ID
  supplystart5: null, //給電街灯番号開始5
  supplyend5: null, //給電街灯番号終了5
  supplystart6Id: null, //給電街灯番号開始6ID
  supplyend6Id: null, //給電街灯番号終了6ID
  supplystart6: null, //給電街灯番号開始6
  supplyend6: null, //給電街灯番号終了6
  supplystart7Id: null, //給電街灯番号開始7ID
  supplyend7Id: null, //給電街灯番号終了7ID
  supplystart7: null, //給電街灯番号開始7
  supplyend7: null, //給電街灯番号終了7
  supplystart8Id: null, //給電街灯番号開始8ID
  supplyend8Id: null, //給電街灯番号終了8ID
  supplystart8: null, //給電街灯番号開始8
  supplyend8: null, //給電街灯番号終了8
  leadinpole: null, //引込柱有無
  leadinnumber: null, //引込柱番号
  leadinpolestandard: null, //引込柱柱規格寸法
  leadinpolematerial: null, //引込柱柱材質
  leadinbasetype: null, //引込柱基礎形式
  leadinbasesize: null, //引込柱基礎サイズ
  pillarbasetype: 'コンクリート', //建柱基礎形状
  specialnotes: null, //特記事項
  contractor: null, //施工業者
  setupdate: null, //設置年月日
  districtpolice: '麹町警察署', //所轄警察署
  takeoversource: null, //引継ぎ元
  oldadminroutename: null, //旧管理番号路線名
  oldadminadminnumber: null, //旧管理番号整理番号
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
  updatedate: new Date(null, null, null), //更新年月日
  updateflag: 0, //更新フラグ
  registclass: 0, //登録区分
  reservenumber: null, //予約工事番号
  reservename: null, //予約工事名
  reservecontractor: null, //予約業者名
  updateuserid: 1, //更新ユーザ
  operationalstatusid: 1, //運用状況
  flashername: null, //自動点滅器
  flashervolt: 0, //自動点滅器V
  flasherwatt: 0, //自動点滅器W
} as Switchboard;

image.value = {
  updatedate: '2016年3月14日',
  photopath: '../../assets/img/switchboardLedgerView1.jpg',
} as SwitchboardImage;

//switchboard.value = { id: Number(route.params.id) } as Switchboard;

const loadingState = useLoading();

/** 保存ボタン クリックイベントハンドラ */
const onSaveButtonClick = () => {
  loadingState.setLoading(true);
  console.info("保存ボタンをクリックしました");

  // 更新処理
  switchboardService.save(switchboard.value, newAttachments.value, newImages.value)
    .then(ret => {
      console.info('配電盤情報を更新しました。');
      useToast().showToast("配電盤情報を更新しました。");
    }).finally(() => {
      loadingState.setLoading(false);
    });
}
</script>

<style lang="scss">
.ledger-image-section {
  min-height: 22em;
}
</style>