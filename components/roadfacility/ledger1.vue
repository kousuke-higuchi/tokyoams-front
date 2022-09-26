<!--施設詳細_道路施設(共同溝など)_様式1のcomponent-->
<template>
  <v-card class="rfaTable">
    <v-sheet class="d-flex">
      <v-sheet>【様式-1】</v-sheet>
    </v-sheet>
    <v-container>
      <v-sheet class="tbTitle d-flex">
        <v-card-text class="title">{{ title }}</v-card-text>
        <v-card-text>{{ headerItems.officeName }}</v-card-text>
        <v-card-text class="title">管理番号</v-card-text>
        <v-card-text>{{ headerItems.adminNum }}</v-card-text>
        <v-card-text class="title">道路防災点検管理番号</v-card-text>
        <v-card-text>{{ headerItems.facilityNum }}</v-card-text>
      </v-sheet>
      <v-row no-gutters>
        <v-col md="4" cols="12">
          <!--一般事項-->
          <v-table density="compact">
            <thead>
              <tr>
                <th colspan="5" class="text-center">一般事項</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>施設名</th>
                <td colspan="4">{{ generalItems.facilityName }}</td>
              </tr>
              <tr>
                <th rowspan="2">位置</th>
                <th>自</th>
                <td colspan="3">{{ generalItems.positionFrom }}</td>
              </tr>
              <tr>
                <th>至</th>
                <td colspan="3">{{ generalItems.positionTo }}</td>
              </tr>
              <tr>
                <th rowspan="2">路線名</th>
                <td colspan="4">{{ generalItems.routeName }}</td>
              </tr>
              <tr>
                <th>通称道路名</th>
                <td colspan="3">{{ generalItems.routeNuckName }}</td>
              </tr>
              <tr>
                <th>地点標</th>
                <td colspan="4">{{ generalItems.waypointFrom }}km~{{ generalItems.waypointto }}km
                </td>
              </tr>
              <tr>
                <th rowspan="2">起点</th>
                <th colspan="2">緯度</th>
                <td colspan="2">{{ generalItems.startLat }}</td>
              </tr>
              <tr>
                <th colspan="2">経度</th>
                <td colspan="2">{{ generalItems.startLng }}</td>
              </tr>
              <tr>
                <th rowspan="2">終点</th>
                <th colspan="2">緯度</th>
                <td colspan="2">{{ generalItems.endlat }}</td>
              </tr>
              <tr>
                <th colspan="2">経度</th>
                <td colspan="2">{{ generalItems.endLng }}</td>
              </tr>
              <tr>
                <th>適用基準</th>
                <td colspan="4">{{ generalItems.criterion }}</td>
              </tr>
              <tr>
                <th>(耐震設計の有無)</th>
                <td colspan="4">{{ generalItems.resistEQ }}</td>
              </tr>
              <tr>
                <th>設計深度</th>
                <td colspan="4">KH={{ generalItems.designIntensityKH }}
                  kV={{ generalItems.designIntensityKV }}</td>
              </tr>
              <tr>
                <th>施設延長</th>
                <td colspan="4">{{ generalItems.extension }}m</td>
              </tr>
              <tr>
                <th>道路幅員</th>
                <td colspan="2">総幅員={{ generalItems.fullWidth }}m</td>
                <td>車道={{ generalItems.roadwayWidth }}m</td>
                <td>歩道={{ generalItems.sidewalkWidth }}m</td>
              </tr>
              <tr>
                <th colspan="5">(略図)(ファイル名:{{ generalItems.roughSketchName }})</th>
              </tr>
              <tr>
                <td colspan="5">
                  <v-img :src=generalItems.roughSketch></v-img>
                </td>
              </tr>
              <tr>
                <th>平面線形</th>
                <td colspan="4">{{ generalItems.track }}</td>
              </tr>
              <tr>
                <th></th>
                <td colspan="4">曲線半径R={{ generalItems.trackR }}</td>
              </tr>
              <tr>
                <th>縦断勾配</th>
                <td colspan="4">{{ generalItems.cuttingGrad }}</td>
              </tr>
              <tr>
                <th>横断勾配</th>
                <td colspan="4">{{ generalItems.transGrad }}</td>
              </tr>
              <tr>
                <th>選定位置</th>
                <td colspan="4">{{ generalItems.selectPosition }}</td>
              </tr>
              <tr>
                <th rowspan="9">道路環境</th>
                <th rowspan="2">事前規制</th>
                <td>{{ generalItems.regulationTF }}</td>
                <td>{{ generalItems.regulationType }}</td>
                <td></td>
              </tr>
              <tr>
                <th>規制基準</th>
                <td colspan="2">{{ generalItems.regulationCritreion }}mm</td>
              </tr>
              <tr>
                <th rowspan="2">交通量</th>
                <th>平日総量</th>
                <td colspan="2">{{ generalItems.weekdayVolume }}台/12h</td>
              </tr>
              <tr>
                <th>休日総量</th>
                <td colspan="2">{{ generalItems.holidayVolume }}台/12h</td>
              </tr>
              <tr>
                <th rowspan="3">その他</th>
                <th>バス路線</th>
                <td colspan="2">{{ generalItems.bus }}</td>
              </tr>
              <tr>
                <th>迂回路</th>
                <td colspan="2">{{ generalItems.alternative }}</td>
              </tr>
              <tr>
                <th>通学路</th>
                <td colspan="2">{{ generalItems.schoolRoute }}</td>
              </tr>
              <tr>
                <th rowspan="2">付属施設</th>
                <th>排水設備</th>
                <td colspan="2">{{ generalItems.drainage }}</td>
              </tr>
              <tr>
                <th>照明設備</th>
                <td colspan="2">{{ generalItems.light }}</td>
              </tr>
              <tr>
                <th rowspan="2">施工年月</th>
                <th>着工</th>
                <td colspan="3">{{ generalItems.completionY }}年{{ generalItems.completionM }}月</td>
              </tr>
              <tr>
                <th>竣工</th>
                <td colspan="3">{{ generalItems.constructionY }}年{{ generalItems.constructionM }}月
                </td>
              </tr>
              <tr>
                <th rowspan="5">図書記録</th>
                <th>竣工図</th>
                <td colspan="3">{{ generalItems.completionSketch }}</td>
              </tr>
              <tr>
                <th>設計計算書</th>
                <td colspan="3">{{ generalItems.specifications }}</td>
              </tr>
              <tr>
                <th rowspan="3">記事</th>
                <td colspan="3">{{ generalItems.note1 }}</td>
              </tr>
              <tr>
                <td colspan="3">{{ generalItems.note2 }}</td>
              </tr>
              <tr>
                <td colspan="3">{{ generalItems.note3 }}</td>
              </tr>
            </tbody>
          </v-table>
          <!--事業費等-->
          <v-table density="compact">
            <thead>
              <tr>
                <th colspan="3" class="text-center">事業費等</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>協定協議</th>
                <td colspan="2">{{ cost }}</td>
              </tr>
              <tr>
                <th rowspan="2">事業費</th>
                <th>事業費</th>
                <td>{{ cost }}</td>
              </tr>
              <tr>
                <th>用地費・その他</th>
                <td>{{ cost }}</td>
              </tr>
              <tr>
                <th>設計業者</th>
                <td colspan="2">{{ cost }}</td>
              </tr>
              <tr>
                <th rowspan="2">施工業者</th>
                <td colspan="2">{{ cost }}</td>
              </tr>
              <tr>
                <td colspan="2">{{ cost }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-col md="4" cols="12">
          <!--構造物環境-->
          <v-table density="compact">
            <thead>
              <tr>
                <th colspan="5" class="text-center">構造物環境</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>地域区分</th>
                <td colspan="3">{{ enviromentItems.areaType }}</td>
              </tr>
              <tr>
                <th rowspan="2">地形</th>
                <td colspan="2">{{ enviromentItems.terrain1 }}</td>
              </tr>
              <tr>
                <td colspan="2">{{ enviromentItems.terrain2 }}</td>
              </tr>
              <tr>
                <th>地質</th>
                <td>基礎地盤{{ enviromentItems.geologyPlate }}</td>
                <td>背面{{ enviromentItems.geologyBack }}</td>
              </tr>
              <tr>
                <th>背面状態</th>
                <td colspan="2">{{ enviromentItems.backState }}</td>
              </tr>
              <tr>
                <th>前面状態</th>
                <td colspan="2">{{ enviromentItems.frontState }}</td>
              </tr>
              <tr>
                <th>湧水</th>
                <td colspan="2">{{ enviromentItems.springWater }}</td>
              </tr>
              <tr>
                <th>液状化</th>
                <td colspan="2">{{ enviromentItems.liquefaction }}</td>
              </tr>
              <tr>
                <th>液状化対策</th>
                <td colspan="2">{{ enviromentItems.liqCounter }}</td>
              </tr>
              <tr>
                <th>地質資料</th>
                <td colspan="2">{{ enviromentItems.geologyDocuent }}</td>
              </tr>
              <tr>
                <th>地質試験</th>
                <td colspan="2">{{ enviromentItems.geologyTest }}</td>
              </tr>
              <tr>
                <th rowspan="2">土質柱状図</th>
                <td colspan="2">(ファイル名:{{ enviromentItems.diagramName }})</td>
              </tr>
              <tr>
                <td colspan="2">
                  <v-img :src=enviromentItems.diagram></v-img>
                </td>
              </tr>
              <tr>
                <th>地下水位</th>
                <td>DLまたはGL</td>
                <td>{{ enviromentItems.waterLebel }}m</td>
              </tr>
              <tr>
                <th>土被り</th>
                <td colspan="2">{{ enviromentItems.quilt }}</td>
              </tr>
              <tr>
                <th>舗装厚さ</th>
                <td colspan="2">{{ enviromentItems.paveThick }}</td>
              </tr>
              <tr>
                <th rowspan="9">斜面状況</th>
                <th>斜面長</th>
                <td>{{ enviromentItems.slopeLength }}</td>
              </tr>
              <tr>
                <th>斜面勾配</th>
                <td>{{ enviromentItems.slopeGradient }}</td>
              </tr>
              <tr>
                <th rowspan="2">浮石の状況</th>
                <td>{{ enviromentItems.looseRock1 }}</td>
              </tr>
              <tr>
                <td>{{ enviromentItems.looseRock2 }}</td>
              </tr>
              <tr>
                <th rowspan="3">地質・地盤の状況</th>
                <td>{{ enviromentItems.geology1 }}</td>
              </tr>
              <tr>
                <td>{{ enviromentItems.geology2 }}</td>
              </tr>
              <tr>
                <td>{{ enviromentItems.geology3 }}</td>
              </tr>
              <tr>
                <th rowspan="2">方面対策工状況</th>
                <td>{{ enviromentItems.slopeStabilization1 }}</td>
              </tr>
              <tr>
                <td>{{ enviromentItems.slopeStabilization2 }}</td>
              </tr>
            </tbody>
          </v-table>
          <!--定期点検及び道路防災総点検判定結果-->
          <v-table density="compact">
            <thead>
              <tr>
                <th colspan="5" class="text-center">定期点検及び道路防災総点検判定結果</th>
              </tr>
              <tr>
                <th rowspan="2">調査年月</th>
                <th rowspan="2">調査対象</th>
                <th rowspan="2">定期点検</th>
                <th colspan="2" class="text-center">道路防災総点検</th>
              </tr>
              <tr>
                <th>地震</th>
                <th>豪雨・豪雪</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in inspectionItems" :key="i">
                <td>{{ item.date }}</td>
                <td>{{ item.subject }}</td>
                <td>{{ item.periodicIns }}</td>
                <td>{{ item.quakeIns }}</td>
                <td>{{ item.heavyRainIns }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
        <v-col md="4" cols="12">
          <!--構造物形態-->
          <v-table density="compact">
            <thead>
              <tr>
                <th colspan="5" class="text-center">構造物形態</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>構造種別</th>
                <td colspan="4">{{ figureItems.type }}</td>
              </tr>
              <tr>
                <th rowspan="5">構造形式</th>
                <th>上部工</th>
                <td>{{ figureItems.upperDiv }}</td>
                <th>材料</th>
                <td>{{ figureItems.upperDivMaterial }}</td>
              </tr>
              <tr>
                <th>下部工</th>
                <td>{{ figureItems.lowerDiv }}</td>
                <th>材料</th>
                <td>{{ figureItems.lowerDivMaterial }}</td>
              </tr>
              <tr>
                <th>擁壁</th>
                <td>{{ figureItems.retainingWall }}</td>
                <th>材料</th>
                <td>{{ figureItems.retainingWallMaterial }}</td>
              </tr>
              <tr>
                <th>ボックスカルバート</th>
                <td>{{ figureItems.boxCulvert }}</td>
                <th>材料</th>
                <td>{{ figureItems.boxCulvertMaterial }}</td>
              </tr>
              <tr>
                <th>トンネル</th>
                <td>{{ figureItems.tunnel }}</td>
                <th>材料</th>
                <td>{{ figureItems.tunnelMaterial }}</td>
              </tr>
              <tr>
                <th>基礎構造</th>
                <td colspan="4">{{ figureItems.infrastructure }}</td>
              </tr>
              <tr>
                <th>水抜き</th>
                <td colspan="4">{{ figureItems.draining }}</td>
              </tr>
              <tr>
                <th>緩衝材</th>
                <td>種類{{ figureItems.packegingType }}</td>
                <td>厚さ{{ figureItems.packegingThick }}</td>
                <td colspan="2">面積{{ figureItems.packegingArea }}</td>
              </tr>
            </tbody>
          </v-table>
          <!--主要材料-->
          <v-table density="compact">
            <thead>
              <tr>
                <th colspan="2" class="text-center">主要材料</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in materialItems" :key="i">
                <th>{{ item.title }}</th>
                <td>{{ item.item }}</td>
              </tr>
            </tbody>
          </v-table>
          <!--附属物-->
          <v-table density="compact">
            <thead>
              <tr>
                <th colspan="4" class="text-center">附属物</th>
              </tr>
              <tr>
                <th>種別</th>
                <th>設置数</th>
                <th>損傷個所数</th>
                <th>損傷内容</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in atfItems" :key="i">
                <td>{{ item.type }}</td>
                <td>{{ item.installationsNum }}</td>
                <td>{{ item.damageNum }}</td>
                <td>{{ item.damageContent }}</td>
              </tr>
            </tbody>
          </v-table>
          <!--占用物件調書-->
          <v-table density="compact">
            <thead>
              <tr>
                <th colspan="5" class="text-center">占用物件調書</th>
              </tr>
              <tr>
                <th>許可年月日</th>
                <th>占有者</th>
                <th>種類及び数量</th>
                <th>重量</th>
                <th>連絡先</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in occupationItems" :key="i">
                <td>{{ item.date }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.place }}</td>
                <td>{{ item.weight }}</td>
                <td>{{ item.address }}</td>
              </tr>
            </tbody>
          </v-table>
          <!--塗装調書-->
          <v-table density="compact">
            <thead>
              <tr>
                <th colspan="7" class="text-center">塗装調書</th>
              </tr>
              <tr>
                <th>塗装面積</th>
                <th>構成別</th>
                <th>上部</th>
                <th>下部</th>
                <th>高欄</th>
                <th>その他</th>
                <th>合計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in paintItems" :key=i>
                <td>{{ item.area }}</td>
                <td>{{ item.config }}</td>
                <td>{{ item.upper }}</td>
                <td>{{ item.lower }}</td>
                <td>{{ item.handrail }}</td>
                <td>{{ item.other }}</td>
                <td>{{ item.sum }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-table>
            <thead>
              <tr>
                <th class="d-flex justify-space-between">
                  <div style="width:10ex;"></div>
                  <div class="align-self-center">補修調書</div>
                  <v-btn v-on:click="onRegistBtnClick()" color="primary" size="small" class="align-self-center" style="width:10ex;">
                    新規登録
                  </v-btn>
                </th>
              </tr>
              <tr>
                <td class="pa-0">
                  <vue-good-table :columns="columns" :rows="RepairList" :pagination-options="{
                    enabled: true
                  }">
                    <template #table-row="props">
                      <span v-if="props.column.field == 'change'">
                        <v-btn class="btn" color="primary" size="small" v-on:click="onUpdateBtnClick(props.row)">
                          変更
                        </v-btn>
                      </span>
                      <span v-if="props.column.field == 'delete'">
                        <v-btn class="btn" color="error" size="small" v-on:click="onDeleteBtnClick()">
                          削除
                        </v-btn>
                      </span>
                    </template>
                  </vue-good-table>
                </td>
              </tr>
            </thead>
          </v-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { RfaRepair } from "~~/types";

export default defineComponent({
  props: {
    title: String,
    rfaRepairList: Array<RfaRepair>
    //TODO:jsonファイルを受け取る
  },
  data() {
    return {
      //DBのテーブル・カラム等判明次第,以下は削除 ここから
      //見出し
      headerItems: {
        officeName: '西多摩建設事務所', adminNum: 'H033M0010-00', facilityNum: 'H033M010',
      },
      //一般事項テーブル
      generalItems: {
        facilityName: '共同溝',
        positionFrom: 'あきる野市戸倉841-1335-4',
        positionTo: 'あきる野市戸倉841-1332-4',
        routeName: '主要地方道33号',
        routeNuckName: '檜原街道',
        waypointFrom: 17.290,
        waypointto: 17.490,
        startLat: '35°43’41.4',
        startLng: '139°11’28.8',
        endlat: '35°43’44.2',
        endLng: '139°11’35.1',
        criterion: null,
        resistEQ: '有',
        designIntensityKH: null,
        designIntensityKV: 0.18,
        extension: 199.90,
        fullWidth: 14.0,
        roadwayWidth: 11.5,
        sidewalkWidth: 2.5,
        roughSketchName: null,
        roughSketch: "../../assets/img/roughSkectch.jpg",
        track: '曲',
        trackR: null,
        cuttingGrad: null,
        transGrad: null,
        selectPosition: '道路数',
        regulationTF: '有',
        regulationType: '通行',
        regulationCritreion: 140,
        weekdayVolume: 10885,
        holidayVolume: 10318,
        bus: '有',
        alternative: '無',
        schoolRoute: '無',
        drainage: '有',
        light: '有',
        completionY: null,
        completionM: null,
        constructionY: 'S60',
        constructionM: null,
        completionSketch: '有',
        specifications: '不明',
        note1: '道路改修工事のうち橋脚設置工事',
        note2: null,
        note3: null,
      },
      //TODO:事業費等テーブル　カラムが判明次第作成する
      cost: null,
      //構造物環境テーブル
      enviromentItems: {
        areaType: '山岳',
        terrain1: '山地',
        terrain2: '切土',
        geologyPlate: null,
        geologyBack: null,
        backState: '道路',
        frontState: '山地',
        springWater: '無',
        liquefaction: 'しない',
        liqCounter: '無',
        geologyDocuent: '無',
        geologyTest: '無',
        diagramName: null,
        diagram: null,
        waterLebel: null,
        quilt: null,
        paveThick: null,
        slopeLength: null,
        slopeGradient: null,
        looseRock1: null,
        looseRock2: null,
        geology1: null,
        geology2: null,
        geology3: null,
        slopeStabilization1: null,
        slopeStabilization2: null,
      },
      //定期点検及び道路防災総点検判定結果テーブル
      inspectionItems: [
        { date: 'H13.3', subject: '桟道', periodicIns: 1, quakeIns: null, heavyRainIns: null },
        { date: 'H17.2', subject: '桟道', periodicIns: 1, quakeIns: null, heavyRainIns: null },
        { date: 'H23.3', subject: '桟道', periodicIns: 2, quakeIns: null, heavyRainIns: null },
        { date: 'H26.11', subject: '桟道', periodicIns: 1, quakeIns: null, heavyRainIns: null },
        { date: 'H26.11', subject: '附属物', periodicIns: 2, quakeIns: null, heavyRainIns: null },
      ],
      //構造物形態
      figureItems: {
        type: null,
        upperDiv: 'プレテンション方式PC単純中空床板',
        upperDivMaterial: 'コンクリート、PC鋼材、鉄筋',
        lowerDiv: 'パインベント式橋台、橋脚',
        lowerDivMaterial: 'コンクリート',
        retainingWall: null,
        retainingWallMaterial: null,
        boxCulvert: null,
        boxCulvertMaterial: null,
        tunnel: null,
        tunnelMaterial: null,
        infrastructure: '不明',
        draining: null,
        packegingType: null,
        packegingThick: null,
        packegingArea: null,
      },
      //主要材料
      materialItems: [
        { title: '鋼杭', item: null },
        { title: 'PC杭', item: null },
        { title: 'RC杭', item: null },
        { title: '鋼材', item: null },
        { title: '鉄筋', item: null },
        { title: 'コンクリート', item: null },
        { title: '石材', item: null },
      ],
      atfItems: [
        { type: null, installationsNum: null, damageNum: null, damageContent: null },
        { type: null, installationsNum: null, damageNum: null, damageContent: null },
        { type: null, installationsNum: null, damageNum: null, damageContent: null },
        { type: null, installationsNum: null, damageNum: null, damageContent: null },
      ],
      //占有物件調書
      occupationItems: [
        { date: null, name: null, place: null, weight: null, address: null },
        { date: null, name: null, place: null, weight: null, address: null },
        { date: null, name: null, place: null, weight: null, address: null },
        { date: null, name: null, place: null, weight: null, address: null },
      ],
      //塗装調書
      paintItems: [
        { area: null, config: null, upper: null, lower: null, handrail: null, other: null, sum: null },
        { area: null, config: null, upper: null, lower: null, handrail: null, other: null, sum: null },
        { area: null, config: null, upper: null, lower: null, handrail: null, other: null, sum: null },
        { area: null, config: null, upper: null, lower: null, handrail: null, other: null, sum: null },
      ],
      //削除　ここまで

      //補修履歴テーブル
      showDialog: false,
      dialogTitle: null,
      dialogDate: null,
      dialogNote: null,
      columns: [
        {
          label: '年月',
          field: 'date',
          sortable: false,
        },
        {
          label: '記事',
          field: 'note',
          sortable: false,
        },
        {
          label: ' ',
          field: 'change',
          sortable: false,
        },
        {
          label: ' ',
          field: 'delete',
          sortable: false,
        },
      ],
      // TODO: 擁壁のみ(共同溝..はOK) 上位からjsonをパラメータで渡すとvue-good-tableでエラーになる。
      // mockなのでとりあえず前進
      RepairList: [
      { "repairid": 1, "parentid":1, "date": "2020/08", "note": "テスト" }
      ],
    }
  },
  methods: {
    onRegistBtnClick() {
      console.debug('clickRegist');
      this.dialogTitle = "新規登録"
      this.showDialog = !this.showDialog;
    },
    onUpdateBtnClick(rowItem) {
      console.debug('clickChange' + rowItem.date);
      this.dialogTitle = "変更"
      this.dialogDate = rowItem.date;
      this.dialogNote = rowItem.note;
      this.showDialog = !this.showDialog;
    },
    onDeleteBtnClick() {
      console.debug('clickDelete');
      //TODO:削除機能を実装する
    },
    onDlgRegistBtnClick() {
      console.debug('登録ボタンが押下されました');
      this.showDialog = !this.showDialog;
      //TODO:登録機能を実装する
      //TODO:更新機能を実装する
      this.dialogDate = null;
      this.dialogNote = null;
    },
    onDlgCancelBtnClick() {
      console.debug('キャンセルボタンが押下されました');
      this.showDialog = !this.showDialog;
      this.dialogDate = null;
      this.dialogNote = null;
    },
  }
})
</script>