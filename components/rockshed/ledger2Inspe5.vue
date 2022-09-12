<template>
  <v-card>
    <div class="d-flex">
      <v-sheet>
        <v-container>ブロック番号</v-container>
      </v-sheet>
      <v-sheet class="ma-1">
        <v-select v-model="page" :items="getPageNumber(blockImgs)" item-title="page" variant="outlined"
          density="compact" hide-details>
        </v-select>
      </v-sheet>
    </div>
    <v-window v-model="page">
     <v-window-item value="全て">
        <v-container v-for="(item, i) in blockImgs" :key="i">
          <v-card class="d-flex" elevation="0">
            <v-card-text class="border bg-grey-lighten-3 text-center text-caption" style="writing-mode: vertical-rl;">
              部材番号図
            </v-card-text>
            <v-container class="border">
              <v-img :src="item.imgfile" />
            </v-container>
          </v-card>
        </v-container>
      </v-window-item>
      <v-window-item v-for="(item, i) in blockImgs" :key="i" :value="item.blockId">
        <v-container>
          <v-card class="d-flex" elevation="0">
            <v-card-text class="border bg-grey-lighten-3 text-center text-caption" style="writing-mode: vertical-rl;">
              部材番号図
            </v-card-text>
            <v-container class="border">
              <v-img :src="item.imgfile" />
            </v-container>
          </v-card>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
import { RockshedBlockImg } from '~~/types';

export default defineComponent({
  props: {
    blockImgs: Array<RockshedBlockImg>
  },
  data() {
    return {
      page: '全て',
    }
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