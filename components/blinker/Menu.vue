<template>
  <v-card height="85vh" elevation="4">
    <v-list>
      <v-list-item v-for="item in listItems" color="primary" :to="`/blinker/${route.params.id}/${item.to}`">
          <v-list-item-title>{{item.title}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script lang="ts" setup>
  const route = useRoute()

  const listItems = ref([
    { title: "障害物表示灯台帳", to: "ledger"},
    { title: "補修履歴", to: "repair" },
  ]);

</script>
<style></style>
