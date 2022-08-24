<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-sheet class="d-flex">
            <v-sheet>【様式-1】</v-sheet>
          </v-sheet>
          <v-sheet class="d-flex">
            <v-card-text class="border pa-1">共同溝施設台帳</v-card-text>
            <v-card-text class="border pa-1">{{ headerItems.officeName }}</v-card-text>
            <v-card-text class="border pa-1">管理番号</v-card-text>
            <v-card-text class="border pa-1">{{ headerItems.adminNum }}</v-card-text>
            <v-card-text class="border pa-1">道路防災点検管理番号</v-card-text>
            <v-card-text class="border pa-1">{{ headerItems.facilityNum }}</v-card-text>
          </v-sheet>
          <v-row no-gutters>
            <v-col md="4" cols="12" class="border">
              <!--一般事項-->
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <thead>
                  <tr>
                    <th colspan="5" class="border text-center">一般事項</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border">施設名</th>
                    <td colspan="4" class="border">{{ generalItems.facilityName }}</td>
                  </tr>
                  <tr>
                    <th rowspan="2" class="border">位置</th>
                    <th class="border">自</th>
                    <td colspan="3" class="border">{{ generalItems.positionFrom }}</td>
                  </tr>
                  <tr>
                    <th class="border">至</th>
                    <td colspan="3" class="border">{{ generalItems.positionTo }}</td>
                  </tr>
                  <tr>
                    <th rowspan="2" class="border">路線名</th>
                    <td colspan="4" class="border">{{ generalItems.routeName }}</td>
                  </tr>
                  <tr>
                    <th class="border">通称道路名</th>
                    <td colspan="3" class="border">{{ generalItems.routeNuckName }}</td>
                  </tr>
                  <tr>
                    <th class="border">地点標</th>
                    <td colspan="4" class="border">{{ generalItems.waypointFrom }}km~{{ generalItems.waypointto }}km
                    </td>
                  </tr>
                  <tr>
                    <th rowspan="2" class="border">起点</th>
                    <th colspan="2" class="border">緯度</th>
                    <td colspan="2" class="border">{{ generalItems.startLat }}</td>
                  </tr>
                  <tr>
                    <th colspan="2" class="border">経度</th>
                    <td colspan="2" class="border">{{ generalItems.startLng }}</td>
                  </tr>
                  <tr>
                    <th rowspan="2" class="border">終点</th>
                    <th colspan="2" class="border">緯度</th>
                    <td colspan="2" class="border">{{ generalItems.endlat }}</td>
                  </tr>
                  <tr>
                    <th colspan="2" class="border">経度</th>
                    <td colspan="2" class="border">{{ generalItems.endLng }}</td>
                  </tr>
                  <tr>
                    <th class="border">適用基準</th>
                    <td colspan="4" class="border">{{ generalItems.criterion }}</td>
                  </tr>
                  <tr>
                    <th class="border">(耐震設計の有無)</th>
                    <td colspan="4" class="border">{{ generalItems.resistEQ }}</td>
                  </tr>
                  <tr>
                    <th class="border">設計深度</th>
                    <td colspan="4" class="border">KH={{ generalItems.designIntensityKH }}
                      kV={{ generalItems.designIntensityKV }}</td>
                  </tr>
                  <tr>
                    <th class="border">施設延長</th>
                    <td colspan="4" class="border">{{ generalItems.extension }}m</td>
                  </tr>
                  <tr>
                    <th class="border">道路幅員</th>
                    <td colspan="2" class="border">総幅員={{ generalItems.fullWidth }}m</td>
                    <td class="border">車道={{ generalItems.roadwayWidth }}m</td>
                    <td class="border">歩道={{ generalItems.sidewalkWidth }}m</td>
                  </tr>
                  <tr>
                    <th colspan="5" class="border">(略図)(ファイル名:{{ generalItems.roughSketchName }})</th>
                  </tr>
                  <tr>
                    <td colspan="5" class="border">
                      <v-img :src=generalItems.roughSketch></v-img>
                    </td>
                  </tr>
                  <tr>
                    <th class="border">平面線形</th>
                    <td colspan="4" class="border">{{ generalItems.track }}</td>
                  </tr>
                  <tr>
                    <th class="border"></th>
                    <td colspan="4" class="border">曲線半径R={{ generalItems.trackR }}</td>
                  </tr>
                  <tr>
                    <th class="border">縦断勾配</th>
                    <td colspan="4" class="border">{{ generalItems.cuttingGrad }}</td>
                  </tr>
                  <tr>
                    <th class="border">横断勾配</th>
                    <td colspan="4" class="border">{{ generalItems.transGrad }}</td>
                  </tr>
                  <tr>
                    <th class="border">選定位置</th>
                    <td colspan="4" class="border">{{ generalItems.selectPosition }}</td>
                  </tr>
                  <tr>
                    <th rowspan="9" class="border">道路環境</th>
                    <th rowspan="2" class="border">事前規制</th>
                    <td class="border">{{ generalItems.regulationTF }}</td>
                    <td class="border">{{ generalItems.regulationType }}</td>
                    <td class="border"></td>
                  </tr>
                  <tr>
                    <th class="border">規制基準</th>
                    <td colspan="2" class="border">{{ generalItems.regulationCritreion }}mm</td>
                  </tr>
                  <tr>
                    <th rowspan="2" class="border">交通量</th>
                    <th class="border">平日総量</th>
                    <td colspan="2" class="border">{{ generalItems.weekdayVolume }}台/12h</td>
                  </tr>
                  <tr>
                    <th class="border">休日総量</th>
                    <td colspan="2" class="border">{{ generalItems.holidayVolume }}台/12h</td>
                  </tr>
                  <tr>
                    <th rowspan="3" class="border">その他</th>
                    <th class="border">バス路線</th>
                    <td colspan="2" class="border">{{ generalItems.bus }}</td>
                  </tr>
                  <tr>
                    <th class="border">迂回路</th>
                    <td colspan="2" class="border">{{ generalItems.alternative }}</td>
                  </tr>
                  <tr>
                    <th class="border">通学路</th>
                    <td colspan="2" class="border">{{ generalItems.schoolRoute }}</td>
                  </tr>
                  <tr>
                    <th rowspan="2" class="border">付属施設</th>
                    <th class="border">排水設備</th>
                    <td colspan="2" class="border">{{ generalItems.drainage }}</td>
                  </tr>
                  <tr>
                    <th class="border">照明設備</th>
                    <td colspan="2" class="border">{{ generalItems.light }}</td>
                  </tr>
                  <tr>
                    <th rowspan="2" class="border">施工年月</th>
                    <th class="border">着工</th>
                    <td colspan="3" class="border">{{ generalItems.completionY }}年{{ generalItems.completionM }}月</td>
                  </tr>
                  <tr>
                    <th class="border">竣工</th>
                    <td colspan="3" class="border">{{ generalItems.constructionY }}年{{ generalItems.constructionM }}月
                    </td>
                  </tr>
                  <tr>
                    <th rowspan="5" class="border">図書記録</th>
                    <th class="border">竣工図</th>
                    <td colspan="3" class="border">{{ generalItems.completionSketch }}</td>
                  </tr>
                  <tr>
                    <th class="border">設計計算書</th>
                    <td colspan="3" class="border">{{ generalItems.specifications }}</td>
                  </tr>
                  <tr>
                    <th rowspan="3" class="border">記事</th>
                    <td colspan="3" class="border">{{ generalItems.note1 }}</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="border">{{ generalItems.note2 }}</td>
                  </tr>
                  <tr>
                    <td colspan="3" class="border">{{ generalItems.note3 }}</td>
                  </tr>
                </tbody>
              </v-table>
              <!--事業費等-->
              <v-table density="compact">
                <thead>
                  <tr>
                    <th colspan="3" class="border text-center">事業費等</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border">協定協議</th>
                    <td colspan="2" class="border">{{ cost }}</td>
                  </tr>
                  <tr>
                    <th rowspan="2" class="border">事業費</th>
                    <th class="border">事業費</th>
                    <td class="border">{{ cost }}</td>
                  </tr>
                  <tr>
                    <th class="border">用地費・その他</th>
                    <td class="border">{{ cost }}</td>
                  </tr>
                  <tr>
                    <th class="border">設計業者</th>
                    <td colspan="2" class="border">{{ cost }}</td>
                  </tr>
                  <tr>
                    <th rowspan="2" class="border">施工業者</th>
                    <td colspan="2" class="border">{{ cost }}</td>
                  </tr>
                  <tr>
                    <td colspan="2" class="border">{{ cost }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col md="4" cols="12" class="border">
              <!--構造物環境-->
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <thead>
                  <tr>
                    <th colspan="5" class="border text-center">構造物環境</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border">地域区分</th>
                    <td class="border" colspan="3">{{ enviromentItems.areaType }}</td>
                  </tr>
                  <tr>
                    <th class="border" rowspan="2">地形</th>
                    <td class="border" colspan="2">{{ enviromentItems.terrain1 }}</td>
                  </tr>
                  <tr>
                    <td class="border" colspan="2">{{ enviromentItems.terrain2 }}</td>
                  </tr>
                  <tr>
                    <th class="border">地質</th>
                    <td class="border">基礎地盤{{ enviromentItems.geologyPlate }}</td>
                    <td class="border">背面{{ enviromentItems.geologyBack }}</td>
                  </tr>
                  <tr>
                    <th class="border">背面状態</th>
                    <td class="border" colspan="2">{{ enviromentItems.backState }}</td>
                  </tr>
                  <tr>
                    <th class="border">前面状態</th>
                    <td class="border" colspan="2">{{ enviromentItems.frontState }}</td>
                  </tr>
                  <tr>
                    <th class="border">湧水</th>
                    <td class="border" colspan="2">{{ enviromentItems.springWater }}</td>
                  </tr>
                  <tr>
                    <th class="border">液状化</th>
                    <td class="border" colspan="2">{{ enviromentItems.liquefaction }}</td>
                  </tr>
                  <tr>
                    <th class="border">液状化対策</th>
                    <td class="border" colspan="2">{{ enviromentItems.liqCounter }}</td>
                  </tr>
                  <tr>
                    <th class="border">地質資料</th>
                    <td class="border" colspan="2">{{ enviromentItems.geologyDocuent }}</td>
                  </tr>
                  <tr>
                    <th class="border">地質試験</th>
                    <td class="border" colspan="2">{{ enviromentItems.geologyTest }}</td>
                  </tr>
                  <tr>
                    <th class="border" rowspan="2">土質柱状図</th>
                    <td class="border" colspan="2">(ファイル名:{{ enviromentItems.diagramName }})</td>
                  </tr>
                  <tr>
                    <td class="border" colspan="2">
                      <v-img :src=enviromentItems.diagram></v-img>
                    </td>
                  </tr>
                  <tr>
                    <th class="border">地下水位</th>
                    <td class="border">DLまたはGL</td>
                    <td class="border">{{ enviromentItems.waterLebel }}m</td>
                  </tr>
                  <tr>
                    <th class="border">土被り</th>
                    <td class="border" colspan="2">{{ enviromentItems.quilt }}</td>
                  </tr>
                  <tr>
                    <th class="border">舗装厚さ</th>
                    <td class="border" colspan="2">{{ enviromentItems.paveThick }}</td>
                  </tr>
                  <tr>
                    <th class="border" rowspan="9">斜面状況</th>
                    <th class="border">斜面長</th>
                    <td class="border">{{ enviromentItems.slopeLength }}</td>
                  </tr>
                  <tr>
                    <th class="border">斜面勾配</th>
                    <td class="border">{{ enviromentItems.slopeGradient }}</td>
                  </tr>
                  <tr>
                    <th class="border" rowspan="2">浮石の状況</th>
                    <td class="border">{{ enviromentItems.looseRock1 }}</td>
                  </tr>
                  <tr>
                    <td class="border">{{ enviromentItems.looseRock2 }}</td>
                  </tr>
                  <tr>
                    <th class="border" rowspan="3">地質・地盤の状況</th>
                    <td class="border">{{ enviromentItems.geology1 }}</td>
                  </tr>
                  <tr>
                    <td class="border">{{ enviromentItems.geology2 }}</td>
                  </tr>
                  <tr>
                    <td class="border">{{ enviromentItems.geology3 }}</td>
                  </tr>
                  <tr>
                    <th class="border" rowspan="2">方面対策工状況</th>
                    <td class="border">{{ enviromentItems.slopeStabilization1 }}</td>
                  </tr>
                  <tr>
                    <td class="border">{{ enviromentItems.slopeStabilization2 }}</td>
                  </tr>
                </tbody>
              </v-table>
              <!--定期点検及び道路防災総点検判定結果-->
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <thead>
                  <tr>
                    <th class="border text-center" colspan="5">定期点検及び道路防災総点検判定結果</th>
                  </tr>
                  <tr>
                    <th class="border" rowspan="2">調査年月</th>
                    <th class="border" rowspan="2">調査対象</th>
                    <th class="border" rowspan="2">定期点検</th>
                    <th class="border text-center" colspan="2">道路防災総点検</th>
                  </tr>
                  <tr>
                    <th class="border">地震</th>
                    <th class="border">豪雨・豪雪</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in inspectionItems" :key="i">
                    <td class="border">{{ item.date }}</td>
                    <td class="border">{{ item.subject }}</td>
                    <td class="border">{{ item.periodicIns }}</td>
                    <td class="border">{{ item.quakeIns }}</td>
                    <td class="border">{{ item.heavyRainIns }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col md="4" cols="12">
              <!--構造物形態-->
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }" class="border">
                <thead>
                  <tr>
                    <th class="border text-center" colspan="5">構造物形態</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border">構造種別</th>
                    <td class="border" colspan="4">{{ figureItems.type }}</td>
                  </tr>
                  <tr>
                    <th class="border" rowspan="5">構造形式</th>
                    <th class="border">上部工</th>
                    <td class="border">{{ figureItems.upperDiv }}</td>
                    <th class="border">材料</th>
                    <td class="border">{{ figureItems.upperDivMaterial }}</td>
                  </tr>
                  <tr>
                    <th class="border">下部工</th>
                    <td class="border">{{ figureItems.lowerDiv }}</td>
                    <th class="border">材料</th>
                    <td class="border">{{ figureItems.lowerDivMaterial }}</td>
                  </tr>
                  <tr>
                    <th class="border">擁壁</th>
                    <td class="border">{{ figureItems.retainingWall }}</td>
                    <th class="border">材料</th>
                    <td class="border">{{ figureItems.retainingWallMaterial }}</td>
                  </tr>
                  <tr>
                    <th class="border">ボックスカルバート</th>
                    <td class="border">{{ figureItems.boxCulvert }}</td>
                    <th class="border">材料</th>
                    <td class="border">{{ figureItems.boxCulvertMaterial }}</td>
                  </tr>
                  <tr>
                    <th class="border">トンネル</th>
                    <td class="border">{{ figureItems.tunnel }}</td>
                    <th class="border">材料</th>
                    <td class="border">{{ figureItems.tunnelMaterial }}</td>
                  </tr>
                  <tr>
                    <th class="border">基礎構造</th>
                    <td class="border" colspan="4">{{ figureItems.infrastructure }}</td>
                  </tr>
                  <tr>
                    <th class="border">水抜き</th>
                    <td class="border" colspan="4">{{ figureItems.draining }}</td>
                  </tr>
                  <tr>
                    <th class="border">緩衝材</th>
                    <td class="border">種類{{ figureItems.packegingType }}</td>
                    <td class="border">厚さ{{ figureItems.packegingThick }}</td>
                    <td class="border" colspan="2">面積{{ figureItems.packegingArea }}</td>
                  </tr>
                </tbody>
              </v-table>
              <!--主要材料-->
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <thead>
                  <tr>
                    <th class="border text-center" colspan="2">主要材料</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in materialItems" :key="i">
                    <th class="border">{{ item.title }}</th>
                    <td class="border">{{ item.item }}</td>
                  </tr>
                </tbody>
              </v-table>
              <!--附属物-->
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <thead>
                  <tr>
                    <th class="border text-center" colspan="4">附属物</th>
                  </tr>
                  <tr>
                    <th class="border">種別</th>
                    <th class="border">設置数</th>
                    <th class="border">損傷個所数</th>
                    <th class="border">損傷内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in atfItems" :key="i">
                    <td class="border">{{ item.type }}</td>
                    <td class="border">{{ item.installationsNum }}</td>
                    <td class="border">{{ item.damageNum }}</td>
                    <td class="border">{{ item.damageContent }}</td>
                  </tr>
                </tbody>
              </v-table>
              <!--占用物件調書-->
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <thead>
                  <tr>
                    <th class="border text-center" colspan="5">占用物件調書</th>
                  </tr>
                  <tr>
                    <th class="border">塗装面積</th>
                    <th class="border">占有者</th>
                    <th class="border">種類及び数量</th>
                    <th class="border">重量</th>
                    <th class="border">連絡先</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in occupationItems" :key="i">
                    <td class="border">{{ item.date }}</td>
                    <td class="border">{{ item.name }}</td>
                    <td class="border">{{ item.place }}</td>
                    <td class="border">{{ item.weight }}</td>
                    <td class="border">{{ item.address }}</td>
                  </tr>
                </tbody>
              </v-table>
              <!--塗装調書-->
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <thead>
                  <tr>
                    <th class="border" colspan="7">塗装調書</th>
                  </tr>
                  <tr>
                    <th class="border">塗装面積</th>
                    <th class="border">構成別</th>
                    <th class="border">上部</th>
                    <th class="border">下部</th>
                    <th class="border">高欄</th>
                    <th class="border">その他</th>
                    <th class="border">合計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in paintItems" :key=i>
                    <td class="border">{{ item.area }}</td>
                    <td class="border">{{ item.config }}</td>
                    <td class="border">{{ item.upper }}</td>
                    <td class="border">{{ item.lower }}</td>
                    <td class="border">{{ item.handrail }}</td>
                    <td class="border">{{ item.other }}</td>
                    <td class="border">{{ item.sum }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  //TODO:カラム名が判明次第それに合わせて改修する
  data() {
    return {
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
    }
  },
})
</script>
