<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-card-text class="text-center text-h6">防災カルテ様式B</v-card-text>
          <v-sheet class="d-flex">
            <v-card-text class="border pa-1">管理施設番号</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.adminId }}</v-card-text>
            <v-card-text class="border pa-1">点検対象項目</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.facilityName }}</v-card-text>
            <v-card-text class="border pa-1">路線名</v-card-text>
            <v-card-text class="border pa-1">{{ facilityInfo.routeName }}</v-card-text>
          </v-sheet>
          <v-row no-gutters>
            <v-col md="6" cols="12" class="border">
              <div class="d-flex">
                <v-card-text class="border pa-1">変状No.{{ accidentNo }}</v-card-text>
                <v-card-text class="pa-1">(評価スケッチ)</v-card-text>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div class="border">
                <v-sheet>(写真貼付欄)</v-sheet>
                <v-container>
                  <v-img :src="accidentSketch" />
                </v-container>
              </div>
              <v-table density="compact">
                <thead>
                  <tr>
                    <th class="border text-center" nowrap>着目すべき点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border">{{ attention }}</th>
                  </tr>
                </tbody>
              </v-table>
              <v-table density="compact">
                <thead>
                  <tr>
                    <th class="border text-center" nowrap>チェック項目</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border">{{ cheackList }}</th>
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
  data() {
    return {
      //DBのテーブル、カラムが判明次第、それに合わせた形に改修する
      facilityInfo: {
        adminId: null,
        facilityName: null,
        routeName: null,
      },
      accidentNo: null,
      accidentSketch: null,
      photoFile: null,
      attention: null,
      cheackList: null,
    }
  }
})
</script>