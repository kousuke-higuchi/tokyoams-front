<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <utilitytunnel-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <v-sheet class="d-flex">
            <v-sheet class="text-h5 pa-1">道路施設詳細</v-sheet>
            <v-sheet class="text-h6 pa-1">施設名:</v-sheet>
            <v-sheet class="text-h6 pa-1">{{ facilityInfo.facilityName }}</v-sheet>
            <v-sheet class="text-h6 pa-1">管理事務所:</v-sheet>
            <v-sheet class="text-h6 pa-1">{{ facilityInfo.office }}</v-sheet>
            <v-sheet class="text-h6 pa-1">管理工区:</v-sheet>
            <v-sheet class="text-h6 pa-1">{{ facilityInfo.area }}</v-sheet>
          </v-sheet>
          <div class="d-flex">
            <v-sheet class="pa-1 ma-1">ブロック番号</v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="numbers" item-title="page" variant="outlined" density="compact"
                hide-details></v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item v-for="item in facilityItems" :key="item.blockId" :value="item.blockId">
              <v-card class="pa-1">
                <v-row no-gutters>
                  <v-col md="12" cols="12" class="border">
                    <v-sheet>(損傷図)</v-sheet>
                    <v-container>
                      <v-img :src="item.damageMap" />
                    </v-container>
                  </v-col>
                  <v-col md="9" cols="12" class="border">
                    <v-sheet>(損傷状況図及び損傷写真)</v-sheet>
                    <v-row>
                      <v-col md="4" cols="12" v-for="img in item.damageImgs" :key="img">
                        <v-container>
                          <v-img :src="img" />
                        </v-container>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col md="3" cols="12" class="border">
                    <v-sheet>(凡例)</v-sheet>
                    <v-container>
                      <v-img :src="item.legend" />
                    </v-container>
                  </v-col>
                </v-row>
              </v-card>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      page: 1,
      numbers: [1, 2, 3],
      //TODO:DBのテーブル、カラムが判明次第、それに合わせて改修する
      facilityInfo: {
        facilityName: '共同溝',
        office: '西多摩建設事務所',
        area: '青梅工区'
      },
      facilityItems: [
        {
          blockId: 1,
          damageMap: '../../assets/img/utilitytunnel/s9-damageMap1.jpg',
          damageImgs: [
            '../../assets/img/utilitytunnel/s9-damageImg1-1.jpg',
            '../../assets/img/utilitytunnel/s9-damageImg1-2.jpg',
            '../../assets/img/utilitytunnel/s9-damageImg1-3.jpg'],
          legend: '../../assets/img/utilitytunnel/s9-legend1.jpg',
        },
        {
          blockId: 2,
          damageMap: '../../assets/img/utilitytunnel/s9-damageMap2.jpg',
          damageImgs: [
            '../../assets/img/utilitytunnel/s9-damageImg2-1.jpg',
            '../../assets/img/utilitytunnel/s9-damageImg2-2.jpg',
            '../../assets/img/utilitytunnel/s9-damageImg2-3.jpg'],
          legend: '../../assets/img/utilitytunnel/s9-legend2.jpg',
        },
        {
          blockId: 3,
          damageMap: null,
          damageImgs: [null, null, null],
          legend: null,
        },
      ],
    }
  },
})
</script>