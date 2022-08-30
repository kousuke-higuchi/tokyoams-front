<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <underground-walkway-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card class="rfaTable">
          <v-container>
            <v-card-text class="text-center text-h6">点検結果総括表</v-card-text>
            <v-sheet class="d-flex">
              <div>
                <v-sheet>【様式-T8】</v-sheet>
                <v-sheet>道路管理者:{{ facilityInfo.office }}</v-sheet>
              </div>
              <v-sheet class="ml-auto">
                <v-table density="compact">
                  <tbody>
                    <tr>
                      <th rowspan="2">点検年月</th>
                      <th>前回</th>
                      <td>{{ facilityInfo.oldInspectionDate }}</td>
                    </tr>
                    <tr>
                      <th>今回</th>
                      <td>{{ facilityInfo.newInspectionDate }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-sheet>
            </v-sheet>
            <div class="d-flex tbTitle">
              <v-card-text class="title">管理番号</v-card-text>
              <v-card-text>{{ facilityInfo.adminId }}</v-card-text>
              <v-card-text class="title">路線番号</v-card-text>
              <v-card-text>{{ facilityInfo.route }}</v-card-text>
              <v-card-text class="title">施設名</v-card-text>
              <v-card-text>{{ facilityInfo.facilityName }}</v-card-text>
              <v-card-text class="title">所在地</v-card-text>
              <v-card-text>{{ facilityInfo.location }}</v-card-text>
              <v-card-text class="title">延長</v-card-text>
              <v-card-text>{{ facilityInfo.length }}m</v-card-text>
            </div>
            <v-table density="compact">
              <thead>
                <tr>
                  <th>スパン番号</th>
                  <th>前回転換結果概要</th>
                  <th>健全度ランク</th>
                  <th>今回点検結果概要</th>
                  <th>健全度ランク</th>
                  <th>総合判定</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in inspectionDeteils" :key="item.blockNo">
                  <td>{{ item.blockNo }}</td>
                  <td>{{ item.oldIns }}</td>
                  <td>{{ item.oldRank }}</td>
                  <td>{{ item.newIns }}</td>
                  <td>{{ item.newRank }}</td>
                  <td>{{ item.judge }}</td>
                </tr>
              </tbody>
            </v-table>
            <v-card class="border elevation-0 rounded-0">
              <v-sheet class="d-flex">
                <v-sheet>(位置図)</v-sheet>
                <v-sheet>(ファイル名:{{ locationMap.imgName }})</v-sheet>
                <v-sheet class="ml-auto">
                  <v-table density="compact">
                    <tbody>
                      <tr>
                        <th>詳細点検</th>
                        <td>{{ locationMap.inspection }}</td>
                      </tr>
                      <tr>
                        <th>路線特性評価</th>
                        <td>{{ locationMap.routeJudge }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-sheet>
              </v-sheet>
              <v-container>
                <v-img :src="locationMap.img" />
              </v-container>
            </v-card>
            <v-card-text class="pa-1 text-caption">※健全度ランク1,2のスパンについて記載</v-card-text>
          </v-container>
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
