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
            <div class="font-weight-bold">一般図</div>
          </v-card-title>
        </div>
        <v-card-text>
          <v-img src="../../assets/img/dmg/bridgeDetail2_6_1.jpg"></v-img>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
  const child_extend = ref(true);
</script>
