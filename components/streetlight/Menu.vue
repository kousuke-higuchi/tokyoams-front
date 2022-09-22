<template>
  <v-expansion-panels v-model="isExtend" multiple v-bind:class="panelIsExtended ? 'panel_extend' : 'panel_nonextend'">
    <v-expansion-panel @click="onPanelIsExtendedChanged">
      <v-expansion-panel-title>
        施設番号: {{ selectFacility }}
        <template v-slot:actions>
          <v-icon> {{ panelIsExtended ? 'mdi-arrow-left' : 'mdi-arrow-right' }}</v-icon>
        </template>
        <v-row justify="end" class="mr-2">
          <v-btn color="primary" size="small" variant="contained-flat" href="/streetlight">
            一覧に戻る
          </v-btn>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
          <v-tab v-model="tabSide" color="primary">
                <v-tab value="ledger">台帳</v-tab>
                <v-tab value="inspection">点検</v-tab>
          </v-tab>
              <v-card-text>
                <v-window v-model="tabSide">
                  <v-window-item value="ledger">
                    <v-list :items="listItems" color="primary"></v-list>
                  </v-window-item>
                  <v-window-item value="inspection">
                    <v-list :items="listItemInsps" color="primary"></v-list>
                  </v-window-item>
                </v-window>
              </v-card-text>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts" setup>
const parentUrl = `/streetlight`
const route = useRoute()
const baseUrl = `${parentUrl}/${route.params.id}`
const selectFacility = ref("205-411-5004");

const _props = withDefaults(defineProps<Props>(), {
  selectTab: 'ledger',
})
const tabSide=ref(_props.selectTab);
interface Props {
  selectTab?: string
}
const listItems = ref([
  { title: "道路照明台帳", props: { to: "ledger" }},
  { title: "補修履歴", props: { to: "repair" }},
]);
const listItemInsps = ref([
  { title: "徒歩調査", props: { to: "toho" }},
  { title: "詳細調査", props: { to: "detail" }},
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
