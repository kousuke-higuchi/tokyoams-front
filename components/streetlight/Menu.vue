<template>
  <v-card height="85vh" elevation="4">
    <v-list>
      <v-list-item v-for="item in listItems" color="primary" :to="`/streetlight/${route.params.id}/${item.to}`">
          <v-list-item-title>{{item.title}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script lang="ts" setup>
  const route = useRoute()

  const listItems = ref([
    { title: "道路照明台帳", to: "ledger"},
    { title: "補修履歴", to: "repair" },
  ]);

</script>
<style></style>
