<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rockshed-side-card-details select-tab="protocol" />
      </v-col>
      <v-col md="9" cols="12">
        <v-card class="rfaTable">
          <div class="d-flex">
            <v-sheet>
              <v-container>ブロック番号</v-container>
            </v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="numbers" item-title="page" variant="outlined" density="compact"
                hide-details></v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item value="全て">
              <rockshed-inspection11-sheet v-for="item in pages" :key="item"/>
            </v-window-item>
            <v-window-item v-for="item in pages" :key="item" :value="item">
              <rockshed-inspection11-sheet />
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
      pages: ['1', '2', '3'],
      numbers: ['全て', '1', '2', '3'],
    }
  }
})
</script>