<template>
  <v-expansion-panels v-model="isExtend" :class="panelIsExtended ? 'panel_extend' : 'panel_nonextend'">
    <v-expansion-panel @click="onPanelClick">
      <v-expansion-panel-title>
        <v-card-text>路線名:{{route.params.name}}</v-card-text>
        <template v-slot:actions>
          <v-icon> {{ panelIsExtended ? 'mdi-arrow-left' : 'mdi-arrow-right' }}</v-icon>
        </template>
        <v-row justify="end" class="mr-2">
          <v-btn color="primary" size="small" variant="contained-flat" @click="onBackBtnClick">
            一覧に戻る
          </v-btn>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text class="pa-0">
        <v-card min-height="820px" elevation="3">
          <v-container fluid>
            <v-list :items="menuItems" color="primary"></v-list>
          </v-container>
        </v-card>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts" setup>
const route = useRoute();

const menuItems = [
  { title: '舗装台帳', props: { to: `/pavement/${route.params.id}/${route.params.name}/ledger` } },
  { title: '舗装履歴', props: { to: `/pavement/${route.params.id}/${route.params.name}/history` } },
  { title: '空洞調査', props: { to: `/pavement/${route.params.id}/${route.params.name}/cavity` } },
];

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

const onBackBtnClick = () => {
  navigateTo('/pavement');
}

onMounted(() => {
  console.log("mounted SideCardDetails ");
});
</script>

<style scoped>
.panel_extend {
  width: 100%;
}

.panel_nonextend {
  width: 300px;
}
</style>