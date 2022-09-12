<template>
  <v-row>
    <v-col v-bind:md="child_extend?3:0" cols="12">
    <!-- <p> {{ child_extend }}</p> -->
      <bridge-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
    </v-col>
    <v-col v-bind:md="child_extend?9:12" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">点検調書損傷図</div>
          </v-card-title>
          <v-card-actions>
            <v-select label="径間番号" v-model="select" :items="histItems" item-title="select" variant="outlined"
              density="compact" hide-details="false"></v-select>
          </v-card-actions>
        </div>
        <v-card-text>
          <v-img :src="imagePath"></v-img>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <viewer :images="imagePath">
      <img v-for="src in imagePath" :src="src" :key="src" />
  </viewer>
</template>

<script lang="ts" setup>
  import Viewer from "v-viewer";
  const child_extend = ref(true);
  const select = ref('全て');
  const histItems = ref<String[]>([
        '全て', '1'
  ]);
  const imagePath =new URL('../../../../assets/img/dmg/damageFig.jpg',import.meta.url).href;

</script>
