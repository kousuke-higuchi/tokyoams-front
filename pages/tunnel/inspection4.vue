<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
      </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card>
          <div class="d-flex">
            <v-sheet>
              <v-container>ブロック番号</v-container>
            </v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="getPageNumber(imgDetails)" item-title="page" variant="outlined"
                density="compact" hide-details></v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item value="全て">
              <v-card class="elevation-0 rounded-0" v-for="item in imgDetails" :key="item.blockId">
                <v-container>
                  <v-row no-gutters>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          開削トンネル本体(頂版)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.plateTopImg" style="height:400px" />
                        </v-container>
                      </v-card>
                    </v-col>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          開削トンネル本体(路面)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.roadSurfaceImg" style="height:400px" />
                        </v-container>
                      </v-card>
                    </v-col>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          開削トンネル本体(側壁)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.sideWallImg" style="height:400px" />
                        </v-container>
                      </v-card>
                    </v-col>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          開削トンネル本体(抗口)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.tunnelEnterImg" style="height:400px" />
                        </v-container>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-window-item>
            <v-window-item v-for="item in imgDetails" :key="item.blockId" :value="item.blockId">
              <v-card class="elevation-0 rounded-0">
                <v-container>
                  <v-row no-gutters>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          開削トンネル本体(頂版)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.plateTopImg" style="height:400px" />
                        </v-container>
                      </v-card>
                    </v-col>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          開削トンネル本体(路面)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.roadSurfaceImg" style="height:400px" />
                        </v-container>
                      </v-card>
                    </v-col>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          開削トンネル本体(側壁)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.sideWallImg" style="height:400px" />
                        </v-container>
                      </v-card>
                    </v-col>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          開削トンネル本体(抗口)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.tunnelEnterImg" style="height:400px" />
                        </v-container>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
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
      child_extend: true,
      page: '全て',
      imgDetails: [
        {
          blockId: '1', plateTopImg: '../../assets/img/dmg/tnli4view1.jpg',
          roadSurfaceImg: '../../assets/img/dmg/tnli4view2.jpg',
          sideWallImg: '../../assets/img/dmg/tnli4view3.jpg',
          tunnelEnterImg: '../../assets/img/dmg/tnli4view4.jpg'
        },
        {
          blockId: '2', plateTopImg: '../../assets/img/dmg/tnli4view1.jpg',
          roadSurfaceImg: '../../assets/img/dmg/tnli4view2.jpg',
          sideWallImg: '../../assets/img/dmg/tnli4view3.jpg',
          tunnelEnterImg: '../../assets/img/dmg/tnli4view4.jpg'
        },
        {
          blockId: '3', plateTopImg: '../../assets/img/dmg/tnli4view1.jpg',
          roadSurfaceImg: '../../assets/img/dmg/tnli4view2.jpg',
          sideWallImg: '../../assets/img/dmg/tnli4view3.jpg',
          tunnelEnterImg: '../../assets/img/dmg/tnli4view4.jpg'
        },
      ]
    }
  },
  methods: {
    //ドロップダウンリストの項目を取得する
    getPageNumber(facilities) {
      let nums = new Array<String>;
      nums.push('全て');
      facilities.forEach(element => {
        nums.push(element.blockId);
      });
      return nums;
    },
  }
})
</script>
  