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
              <v-select v-model="page" :items="numbers" item-title="page" variant="outlined" density="compact"
                hide-details></v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item value="全て">
              <tunnel-inspection9-sheet v-for="item in pageNums" :key="item" />
            </v-window-item>
            <v-window-item v-for="item in pageNums" :key="item" :value="item">
              <tunnel-inspection9-sheet />
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
  const child_extend = ref(true);
  const page = ref('全て');
  const pageNums = ref<String[]>([
    '1', '2', '3'
  ]);
  const numbers = ref<String[]>([
    '全て', '1', '2', '3'
  ]);

</script>