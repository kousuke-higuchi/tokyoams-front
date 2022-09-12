<template>
  <v-expansion-panels v-model="isExtend" multiple v-bind:class=" panelIsExtended ? 'panel_extend':'panel_nonextend'">
    <v-expansion-panel @click="onPanelIsExtendedChanged">
      <v-expansion-panel-title   disable-icon-rotate>
        橋梁名 : {{ selectFacility }}

        <v-row justify="end" class="mr-2">
        <v-btn color="primary" variant="contained-flat" href="/bridge" @click="onReturnClick">
          一覧に戻る
          </v-btn>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-card height="820px" elevation="3">
          <v-card height="484px">
            <v-card-title>
            </v-card-title>
            <v-container fluid>
              <v-tabs v-model="tabSide" color="primary">
                <v-tab value="ledger">橋梁台帳</v-tab>
                <v-tab value="inspection">点検調書</v-tab>
                <v-tab value="country">国様式</v-tab>
              </v-tabs>
              <v-card-text>
                <v-window v-model="tabSide">
                  <v-window-item value="ledger">
                    <v-list :items="buttons01" color="primary"></v-list>
                  </v-window-item>
                  <v-window-item value="inspection">
                    <v-list :items="buttons02" color="primary"></v-list>
                  </v-window-item>
                  <v-window-item value="country">
                    <v-list :items="buttons03"></v-list>
                  </v-window-item>
                </v-window>
              </v-card-text>
            </v-container>
          </v-card>
          <v-card height="336px">
            <v-card-title>
              <v-row class="justify-start mt-1 ml-1" style="font-size:medium!important">台帳メモ一覧</v-row>
              <v-row class="justify-end mt-1 mr-1">
                <v-btn v-on:click="onNewClick()" color="primary" size="small">
                  新規登録
                </v-btn>
              </v-row>
            </v-card-title>
            <v-card-text>
              <div>
                <vue-good-table :columns="noteColumns" :rows="noteContents" style-class="vgt-table striped"
                  :pagination-options="{
                    enabled: true,
                    mode: 'records',
                    perPage: 10,
                    nextLabel: '次',
                    prevLabel: '前',
                    perPageDropdownEnabled: false,
                  }">
                  <template #table-row="props">
                    <span v-if="props.column.field == 'update'">
                      <v-btn class="btn" color="primary" dark size="x-small" v-on:click="onUpdateClick(props.row)">更新
                      </v-btn>
                    </span>
                    <span v-if="props.column.field == 'remove'">
                      <v-btn class="btn" color="error" dark size="x-small" v-on:click="onRemoveClick(props.row)">削除
                      </v-btn>
                    </span>
                    <span v-else>
                      {{props.formattedRow[props.column.field]}}
                    </span>
                  </template>
                </vue-good-table>
              </div>
            </v-card-text>
          </v-card>
        </v-card>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

  <!--台帳メモ登録画面-->
  <div>
    <v-dialog v-model="isOpen" persistent max-width="450px">
      <v-card>
        <v-toolbar dense>
          <v-toolbar-title>台帳メモの登録</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="isOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="3" class="mt-2">
              登録日
            </v-col>
            <v-col cols="12" sm="9">
              <Datepicker v-model="dialogDate" locale="jp" :enableTimePicker="false" :format="formatDate"
                :clearable="false" />
            </v-col>
            <v-col cols="12" sm="3" class="mt-2">
              メモ
            </v-col>
            <v-col cols="12" sm="9">
              <v-textarea label="メモを入力してください" rows="1" auto-grow density="compact" :hide-details="false"
                v-model="dialogMemo"></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <div class="d-flex">
          <v-btn variant="outlined" class="mr-auto ma-3" @click="onCloseClick()">閉じる</v-btn>
          <v-btn color="primary ma-3" class="ml-auto" @click="onSaveClick()">登録</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>

</template>

<script lang="ts" setup>
  import moment from 'moment';
  const route = useRoute();
  console.info("route", route);
  const baseUrl = `/bridge/${route.params.id}/${route.params.name}`
  const selectFacility = ref(route.params.name);

  const items = ref(1);
  const isOpen = ref(false);
  const buttons01 = [
        { title: '橋梁台帳(1)', props:{ to:`${baseUrl}/ledger1` } },
        { title: '橋梁台帳(2)', props:{ to:`${baseUrl}/ledger2` } },
        { title: '橋梁台帳(3)', props:{ to:`${baseUrl}/ledger3` } },
        { title: '橋梁台帳(径間)', props:{ to:`${baseUrl}/ledgerSpan` } },
        { title: '一般図', props:{ to:`${baseUrl}/general` } },
        { title: '径間別一般図', props:{ to:`${baseUrl}/generalSpan` } },
        { title: '写真台帳', props:{ to:`${baseUrl}/ledgerPicture` } },
        { title: '現地状況写真', props:{ to:`${baseUrl}/picture` } },
        { title: '高欄図', props:{ to:`${baseUrl}/handrail` } },
      ];

  const buttons02 = [
        { title: '様式3（点検総括）', props: { to: `${baseUrl}/inspection3` } },
        { title: '様式4-1（部材ごと評価）', props: { to: `${baseUrl}/inspection41` } },
        { title: '様式4-2（主桁評価）', props: { to: `${baseUrl}/inspection42` } },
        { title: '様式5（一般図）', props: { to: `${baseUrl}/inspection5` } },
        { title: '様式6（写真台帳）', props: { to: `${baseUrl}/inspection6` } },
        { title: '様式7（損傷写真）', props: { to: `${baseUrl}/inspection7` } },
        { title: '様式8（損傷図）', props: { to: `${baseUrl}/inspection8` } },
  ];

  const buttons03 = [
        { title: '道路橋様式1P001', props:{ to: `${baseUrl}/country1` } },
        { title: '道路橋様式2P001', props:{ to: `${baseUrl}/country2` } },
      ];
  
  const noteColumns = [
        {
          label: '登録日', field: 'date', width: '8em', sortable: false, 
        },
        {
          label: '内容', field: 'contents', sortable: false, 
        },
        {
          label: '', field: 'update', sortable: false, 
        },
        {
          label: '', field: 'remove', sortable: false, 
        },
  ];
  const noteContents = [
        { id: '1', date: '2022-07-05', contents: 'ボルトの交換を行った',   },
        { id: '2', date: '2022-07-06', contents: 'ナットの交換を行った',   },
        { id: '3', date: '2022-07-07', contents: 'バネワッシャーの交換を行った', },
  ];

  interface Props {
      selectTab?: string
  }
  const _props = withDefaults(defineProps<Props>(), {
      selectTab: 'ledger',
  })
  console.log("setup ideCardDetails : ", _props.selectTab);

  const tabSide = ref(_props.selectTab);
  const dialogDate = ref(moment().format("yyyy-MM-DD"));
  const dialogMemo = ref("");

  const onNewClick = () => {
    console.info("新規登録を押下しました");
    dialogDate.value = moment().format("yyyy-MM-DD");
    isOpen.value = true;
  };

  const onUpdateClick = (row) => {
    console.info("onUpdateClick ", row);
    dialogDate.value = row.date;
    dialogMemo.value = row.contents;
    isOpen.value = true;
  };

  const onRemoveClick = (row)=>{
      console.info("onRemoveClick", row);
  };
  const onCloseClick = () => {
    isOpen.value = false;
    console.info("onCloseClick");
  };
  const onSaveClick = ()=>{
    isOpen.value = false;
    console.info("onSaveClick");
  };
  const formatDate = (args) => {
    console.log(args);
    return moment(args).format("yyyy年M月d日");
  };
  const onReturnClick = ()=>{

  }

  const isExtend = ref([0]);
  const panelIsExtended = computed(()=>{
    let extend = isExtend.value;
    return (extend != null && extend.length == 1 && extend[0] == 0);
  });

  interface Emits {
    (e: 'isExtend', isExtend: boolean): void,
  }
  const emits = defineEmits<Emits>();

  const onPanelIsExtendedChanged = ()=>{
    console.info("onPanelIsExtendedChanged");
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