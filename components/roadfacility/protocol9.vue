<template>
  <v-card>
    <!--DBのテーブル,カラムが判明次第BEで取得した値を表示する-->
    <div class="d-flex">
      <v-sheet>
        <v-container>ブロック番号</v-container>
      </v-sheet>
      <v-sheet class="ma-1">
        <v-select v-model="page" :items="numbers" item-title="page" variant="outlined" density="compact" hide-details>
        </v-select>
      </v-sheet>
    </div>
    <v-window v-model="page">
      <v-window-item value="全て">
        <v-container v-for="item in facilityItems" :key="item.blockId">
          <v-card class="elevation-0">
            <v-row no-gutters>
              <v-col md="12" cols="12" class="border">
                <v-sheet>(損傷図)</v-sheet>
                <v-container>
                  <v-img :src="null" />
                </v-container>
              </v-col>
              <v-col md="9" cols="12" class="border">
                <v-sheet>(損傷状況図及び損傷写真)</v-sheet>
                <v-row>
                  <v-col md="4" cols="12" v-for="img in item.damageImgs" :key="img">
                    <v-container>
                      <v-img :src="null" />
                    </v-container>
                  </v-col>
                </v-row>
              </v-col>
              <v-col md="3" cols="12" class="border">
                <v-sheet>(凡例)</v-sheet>
                <v-container>
                  <v-img src="../../assets/img/rfa_pro9_legend.jpg" />
                </v-container>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-window-item>
      <v-window-item v-for="item in facilityItems" :key="item.blockId" :value="item.blockId">
        <v-container>
          <v-card class="elevation-0">
            <v-row no-gutters>
              <v-col md="12" cols="12" class="border">
                <v-sheet>(損傷図)</v-sheet>
                <v-container>
                  <v-img :src="null" />
                </v-container>
              </v-col>
              <v-col md="9" cols="12" class="border">
                <v-sheet>(損傷状況図及び損傷写真)</v-sheet>
                <v-row>
                  <v-col md="4" cols="12" v-for="img in item.damageImgs" :key="img">
                    <v-container>
                      <v-img :src="null" />
                    </v-container>
                  </v-col>
                </v-row>
              </v-col>
              <v-col md="3" cols="12" class="border">
                <v-sheet>(凡例)</v-sheet>
                <v-container>
                  <v-img src="../../assets/img/rfa_pro9_legend.jpg" />
                </v-container>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  // props:{
  //   TODO:DBのテーブル,カラムが判明次第データを受け取る
  // },
  data() {
    return {
      page: '全て',
      numbers: [],
      //仮の値
      facilityItems: [
        {
          blockId: '1',
          damageMap: '../../assets/img/utilitytunnel/s9-damageMap1.jpg',
          damageImgs: [
            '../../assets/img/utilitytunnel/s9-damageImg1-1.jpg',
            '../../assets/img/utilitytunnel/s9-damageImg1-2.jpg',
            '../../assets/img/utilitytunnel/s9-damageImg1-3.jpg'],
        },
        {
          blockId: '2',
          damageMap: '../../assets/img/utilitytunnel/s9-damageMap2.jpg',
          damageImgs: [
            '../../assets/img/utilitytunnel/s9-damageImg2-1.jpg',
            '../../assets/img/utilitytunnel/s9-damageImg2-2.jpg',
            '../../assets/img/utilitytunnel/s9-damageImg2-3.jpg'],
        },
        {
          blockId: '3',
          damageMap: null,
          damageImgs: [null, null, null],
        },
      ],
    }
  },
  mounted: function () {
    this.numbers = this.getPageNumber(this.facilityItems);
  },
  methods: {
    //ドロップダウンリストの項目を取得する
    getPageNumber(facilities) {
      let nums = new Array<String>;
      nums.push('全て')
      facilities.forEach(element => {
        nums.push(element.blockId);
      });
      return nums;
    },
  }
})
</script>