<template>
  <v-row>
    <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
      <!-- <p> {{ child_extend }}</p> -->
      <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="country" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3" class="ledger">
        <div class="d-flex">
          <v-sheet class="pa-1 ma-1">スパン番号</v-sheet>
          <v-sheet class="ma-1">
            <v-select v-model="page" :items="numbers" item-title="page" variant="outlined" density="compact"
              hide-details></v-select>
          </v-sheet>
        </div>
        <v-card-title>
          ■点検調書　異常写真台帳（トンネル内附属物）　【様式D-1-2】
        </v-card-title>
        <v-window v-model="page">
          <v-window-item value="全て">
            <tunnel-d12-sheet v-for="i in pages" :key="i"></tunnel-d12-sheet>
          </v-window-item>
          <v-window-item v-for="i in pages" :key="i" :value="i">
            <tunnel-d12-sheet></tunnel-d12-sheet>
          </v-window-item>
        </v-window>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
  const child_extend = ref(true);
  const page = ref('全て');
  const numbers = ref<String[]>([
        '全て', '1', '2', '3'
  ]);
  const pages = ref<String[]>([
        '1', '2', '3'
  ]);

</script>
