<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rockshed-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <div class="d-flex">
            <v-sheet>
              <v-container>ブロック番号</v-container>
            </v-sheet>
            <v-sheet class="ma-1">
              <v-select
              v-model="page"
              :items="numbers"
              item-title="page"
              variant="outlined"
              density="compact"
              hide-details
              ></v-select>
            </v-sheet>
          </div>
          <v-container>
            <v-window v-model="page">
              <v-window-item v-for="item in sectionImg" :key="item.blockId" :value="item.blockId">
                <v-card class="d-flex">
                  <v-card-text
                  class="border bg-grey-lighten-3 text-center" 
                  style="writing-mode: vertical-rl;"
                  >部材番号図</v-card-text>
                  <v-container class="border">
                    <v-img :src="item.imgfile" />
                  </v-container>
                </v-card>
              </v-window-item>
            </v-window>
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
      page: 1,
      numbers: [1, 2, 3],
      sectionImg: [
        { blockId: 1, imgfile: null },
        { blockId: 2, imgfile: null },
        { blockId: 3, imgfile: null },
      ],
    }
  }
})
</script>