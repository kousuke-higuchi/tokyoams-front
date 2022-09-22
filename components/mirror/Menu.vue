<template>
  <v-expansion-panels v-model="isExtend" multiple v-bind:class="panelIsExtended ? 'panel_extend' : 'panel_nonextend'">
    <v-expansion-panel @click="onPanelIsExtendedChanged">
      <v-expansion-panel-title>
        施設番号: {{ selectFacility }}
        <template v-slot:actions>
          <v-icon> {{ panelIsExtended ? 'mdi-arrow-left' : 'mdi-arrow-right' }}</v-icon>
        </template>
        <v-row justify="end" class="mr-2">
          <v-btn color="primary" size="small" variant="contained-flat" href="/mirror">
            一覧に戻る
          </v-btn>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list>
          <v-list-item v-for="item in listItems" color="primary" :to="`${baseUrl}/${item.to}`">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts" setup>
const parentUrl = `/mirror`
const route = useRoute()
const baseUrl = `${parentUrl}/${route.params.id}`
const selectFacility = ref("205-411-5004");

const listItems = ref([
  { title: "道路反射鏡台帳", to: "ledger" },
  { title: "補修履歴", to: "repair" },
]);
const isExtend = ref([0]);
const panelIsExtended = computed(() => {
  let extend = isExtend.value;
  return (extend != null && extend.length == 1 && extend[0] == 0);
});

interface Emits {
  (e: 'isExtend', isExtend: boolean): void,
}
const emits = defineEmits<Emits>();

const onPanelIsExtendedChanged = () => {
  emits("isExtend", panelIsExtended.value)
}

</script>

<style scoped>
.panel_extend {
  width: 100%;
}

.panel_nonextend {
  width: 500px;
}
</style>
