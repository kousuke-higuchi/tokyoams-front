<template>
  <v-expansion-panels v-model="isExtend" :class="panelIsExtended ? 'panel_extend' : 'panel_nonextend'">
    <v-expansion-panel @click="onPanelClick">
      <v-expansion-panel-title>
        <v-row class="justify-start mt-1 ml-3 font-weight-bold" style="font-size:medium">205-411-5004</v-row>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <v-list>
          <v-list-item v-for="item in listItems" color="primary" :to="`/streetlight/${route.params.id}/${item.to}`">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts" setup>
const route = useRoute()

const listItems = ref([
  { title: "道路照明台帳", to: "ledger" },
  { title: "補修履歴", to: "repair" },
]);
const isExtend = ref(0);
const panelIsExtended = computed(() => {
  let extend = isExtend.value;
  return (extend != null && extend == 0);
});

const emits = defineEmits<{
  (e: 'isExtend', isExtend: boolean): void
}>()

const onPanelClick = () => {
  emits("isExtend", panelIsExtended.value)
}

</script>

<style scoped>
.panel_extend {
  width: 100%;
}

.panel_nonextend {
  width: 300px;
}
</style>
