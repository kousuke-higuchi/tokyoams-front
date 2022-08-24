<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <underground-walkway-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-card-text class="text-center text-h6">点検結果総括表</v-card-text>
          <v-sheet class="d-flex">
            <div>
              <v-sheet>【様式-T8】</v-sheet>
              <v-sheet>道路管理者:{{ facilityInfo.office }}</v-sheet>
            </div>
            <v-sheet class="ml-auto">
              <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                <tbody>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center" rowspan="2">点検年月</th>
                    <th class="border bg-grey-lighten-3 text-center">前回</th>
                    <td class="border text-center">{{ facilityInfo.oldInspectionDate }}</td>
                  </tr>
                  <tr>
                    <th class="border bg-grey-lighten-3 text-center">今回</th>
                    <td class="border text-center">{{ facilityInfo.newInspectionDate }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-sheet>
          </v-sheet>
          <div class="d-flex">
            <v-card-text class="border pa-1 bg-grey-lighten-3">管理番号</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.adminId }}</v-card-text>
            <v-card-text class="border pa-1 bg-grey-lighten-3">路線番号</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.route }}</v-card-text>
            <v-card-text class="border pa-1 bg-grey-lighten-3">施設名</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.facilityName }}</v-card-text>
            <v-card-text class="border pa-1 bg-grey-lighten-3">所在地</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.location }}</v-card-text>
            <v-card-text class="border pa-1 bg-grey-lighten-3">延長</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.length }}m</v-card-text>
          </div>
          <v-table density="compact">
            <thead :style="{ whiteSpace: 'nowrap' }">
              <tr>
                <th class="border bg-grey-lighten-3 text-center">スパン番号</th>
                <th class="border bg-grey-lighten-3 text-center">前回転換結果概要</th>
                <th class="border bg-grey-lighten-3 text-center">健全度ランク</th>
                <th class="border bg-grey-lighten-3 text-center">今回点検結果概要</th>
                <th class="border bg-grey-lighten-3 text-center">健全度ランク</th>
                <th class="border bg-grey-lighten-3 text-center">総合判定</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in inspectionDeteils" :key="item.blockNo">
                <td class="border text-center">{{ item.blockNo }}</td>
                <td class="border">{{ item.oldIns }}</td>
                <td class="border text-center">{{ item.oldRank }}</td>
                <td class="border">{{ item.newIns }}</td>
                <td class="border text-center">{{ item.newRank }}</td>
                <td class="border">{{ item.judge }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-card class="border elevation-0 rounded-0">
            <v-sheet class="d-flex">
              <v-sheet>(位置図)</v-sheet>
              <v-sheet>(ファイル名:{{ locationMap.imgName }})</v-sheet>
              <v-sheet class="ml-auto">
                <v-table density="compact" :style="{ whiteSpace: 'nowrap' }">
                  <tbody>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">詳細点検</th>
                      <td class="border text-center">{{ locationMap.inspection }}</td>
                    </tr>
                    <tr>
                      <th class="border bg-grey-lighten-3 text-center">路線特性評価</th>
                      <td class="border text-center">{{ locationMap.routeJudge }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-sheet>
            </v-sheet>
            <v-container>
              <v-img :src="locationMap.img" />
            </v-container>
          </v-card>
          <v-card-text>※健全度ランク1,2のスパンについて記載</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      //TODO:DBのテーブル、カラムが判明次第、それに合わせて改修する
      facilityInfo: {
        office: null,
        oldInspectionDate: null,
        newInspectionDate: null,
        adminId: '0',
        route: '0',
        facilityName: '0',
        location: null,
        length: null,
      },
      inspectionDeteils: [
        {
          blockNo: null,
          oldIns: null,
          oldRank: null,
          newIns: null,
          newRank: null,
          judge: null,
        }
      ],
      locationMap: {
        inspection: '要・不要',
        routeJudge: null,
        imgName: null,
        img: null
      }
    }
  }
})
</script>
