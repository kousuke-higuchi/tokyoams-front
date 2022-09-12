<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
          <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="inspection" />
      </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <tunnel-inspection7-inspection8></tunnel-inspection7-inspection8>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
  const child_extend = ref(true);
</script>
