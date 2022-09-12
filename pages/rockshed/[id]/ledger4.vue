<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rockshed-side-card-details select-tab="ledger" />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <div class="d-flex">
            <v-sheet>
              <v-container>ブロック番号</v-container>
            </v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="getPageNumber(sectionImg)" item-title="page" variant="outlined" density="compact"
                hide-details></v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item value="全て">
              <v-card class="elevation-0 rounded-0" v-for="item in sectionImg" :key="item.blockId">
                <v-container>
                  <v-row no-gutters>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          ロックシェッド本体(頂版)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.plateTopImg" />
                        </v-container>
                      </v-card>
                    </v-col>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          ロックシェッド本体(路面)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.roadSurfaceImg" />
                        </v-container>
                      </v-card>
                    </v-col>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          ロックシェッド本体(側壁)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.sideWallImg" />
                        </v-container>
                      </v-card>
                    </v-col>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          ロックシェッド本体(抗口)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.tunnelEnterImg" />
                        </v-container>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-window-item>
            <v-window-item v-for="item in sectionImg" :key="item.blockId" :value="item.blockId">
              <v-card class="elevation-0 rounded-0">
                <v-container>
                  <v-row no-gutters>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          ロックシェッド本体(頂版)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.plateTopImg" />
                        </v-container>
                      </v-card>
                    </v-col>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          ロックシェッド本体(路面)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.roadSurfaceImg" />
                        </v-container>
                      </v-card>
                    </v-col>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          ロックシェッド本体(側壁)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.sideWallImg" />
                        </v-container>
                      </v-card>
                    </v-col>
                    <v-col md="6" cols="12">
                      <v-card class="elevation-0 rounded-0">
                        <v-card-text class="border bg-grey-lighten-3 text-center text-caption pa-2">
                          ロックシェッド本体(抗口)
                        </v-card-text>
                        <v-container class="border">
                          <v-img :src="item.tunnelEnterImg" />
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
      page: '全て',
      //DBのカラムが判明次第、それに合わせた形に改修する
      sectionImg: [
        { blockId: '1', plateTopImg: null, roadSurfaceImg: null, sideWallImg: null, tunnelEnterImg: null },
        { blockId: '2', plateTopImg: null, roadSurfaceImg: null, sideWallImg: null, tunnelEnterImg: null },
        { blockId: '3', plateTopImg: null, roadSurfaceImg: null, sideWallImg: null, tunnelEnterImg: null },
      ],
    }
  },
  methods: {
    getPageNumber(facilitys) {
      let pageNumbers = new Array<String>;
      pageNumbers.push('全て');
      facilitys.forEach(element => {
        pageNumbers.push(element.blockId);
      });
      return pageNumbers;
    },
  }
})
</script>