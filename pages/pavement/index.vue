<template>
  <v-card>
    <v-tabs v-model="tab" color="primary">
      <v-tab value="list">一覧</v-tab>
      <v-tab value="map">地図</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <!-- 一覧 tab -->
        <v-window-item value="list">
          <v-col>
            <v-row class="d-flex">
              <v-card-text>
                {{pavements.length}}件
              </v-card-text>
              <v-btn v-on:click="onFAdvancedSerchBtnClick()" color="primary" size="small">
                詳細検索
              </v-btn>
              <v-btn class="ml-2" v-on:click="onOutputCSVClick()" color="primary" size="small">
                一覧出力
              </v-btn>
            </v-row>
          </v-col>
          <div class="mt-2">
            <vue-good-table :columns="columns" :rows="pavements">
              <template #table-row="props">
                <span v-if="props.column.field == 'OutLedgerBtn'">
                  <v-btn class="btn" color="primary" dark size="small" v-on:click="onOutputLedgerClick()">
                    Excel
                  </v-btn>
                </span>
                <span v-else-if="props.column.field == 'spotpoint'">
                  <nuxt-link :to="`/pavement/${props.row.id}/${props.row.routename + props.row.spotpoint}/ledger`">{{ props.formattedRow[props.column.field] }}
                  </nuxt-link>
                </span>
                <span v-else>
                  {{ props.formattedRow[props.column.field] }}
                </span>
              </template>
            </vue-good-table>
          </div>
        </v-window-item>
        <!-- 地図 tab -->
        <v-window-item value="map">
          <v-col>
            <v-row justify="end" class="mr-2">
              <v-btn v-on:click="onFindBtnClick()" color="primary" size="small">
                検索条件
              </v-btn>
              <v-menu v-model="showMarkerList" :close-on-content-click="false" location="bottom end" size="small">
                <template v-slot:activator="{ props }">
                  <v-btn class="ml-2" color="primary" v-bind="props" size="small">
                    施設一覧
                  </v-btn>
                </template>

                <v-card>
                  <v-container>
                    <vue-good-table :columns="columnsOverlay" :rows="pavements" @row-click="clickMarkerListRow">
                    </vue-good-table>
                  </v-container>
                </v-card>
              </v-menu>
            </v-row>
          </v-col>


          <!-- 地図 -->
          <v-card style="height: 78vh; width: 94vw">
            <ams-map :zoom="zoom" :center="center" :markers="pavements" marker-title="spotpoint"
              @click-marker="clickMarker" />

          </v-card>
        </v-window-item>
      </v-window>
    </v-card-text>

    <pavement-search-condition-dialog v-model:isOpen="showFind" />

  </v-card>
</template>

<script lang="ts" setup>
import pavementService from "~~/services/pavement-service";
import { PavSummary } from "~~/types";


const showMarkerList = ref(false);
const tab = ref('map');
const zoom = ref(15);
const center = ref([35.79112, 139.27753]);
//TODO:ユーザーによって決める
const officeid = ref(10);

const pavements = ref<PavSummary[]>();

const loadingState = useLoading();
loadingState.setLoading(true);

onMounted(() => {
  pavementService.getList(officeid.value).then(s => {
    pavements.value = s.data;
  }).finally(()=>{
    loadingState.setLoading(false);
  })
});

console.log(pavements.value);

const officeDropdownItems = ref(['第一建設事務所', '第二建設事務所', '第三建設事務所', '第四建設事務所', '西多摩建設事務所']);
const routenameDropdownItems = ref(['国道４１１号', '青梅飯能線', '立川青梅線', '青梅あきる野線', '瑞穂富岡線']);

// 一覧の列情報
let _columns = [
  {
    label: '事務所',
    field: 'officename',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '--選択--',
      filterDropdownItems: ['西多摩建設事務所'],
    },
  },
  {
    label: '工区',
    field: 'areaname',
    width: '10em',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '工区入力',
    },
  },
  {
    label: '路線名',
    field: 'routename',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '路線名入力',
    },
  },
  {
    label: '距離標',
    field: 'spotpoint',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '距離標入力',
    },
  },
  {
    label: 'MNI',
    field: 'mni',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: 'MNI入力',
    },
  },
  {
    label: '台帳出力',
    field: 'OutLedgerBtn',
    filterable: false,
    sortable: false,
  },
];
// 施設一覧の列情報
let _columnsOverlay = [
  {
    label: '路線名',
    field: 'routename',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '--選択--',
      filterDropdownItems: [],
    },
  },
  {
    label: '距離標',
    field: 'spotpoint',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '施設番号入力',
    },
  },
];
const showFind = ref(false);

const map2OfficeDropDown = (c) => {
  let modified = c;
  if (modified.field == 'officename') {
    modified.filterOptions.filterDropdownItems = officeDropdownItems
  }
  else if (modified.field == 'routename') {
    modified.filterOptions.filterDropdownItems = routenameDropdownItems
  }
  return modified
};
const columns = ref(_columns.map(map2OfficeDropDown));
const columnsOverlay = ref(_columnsOverlay.map(map2OfficeDropDown));

const onFindBtnClick = () => {
  console.debug('clickFind');
  showFind.value = !showFind.value;
};
const clickMarker = (m) => {
  console.info('clickMaker', m);
  navigateTo(`/pavement/${m.id}/${m.routename + m.spotpoint}/ledger`);
};
const onFAdvancedSerchBtnClick = () => {
  console.debug('clickFAdvancedSearch');
  showFind.value = !showFind.value;
};
/**
 * excel出力します。
 */
const onOutputCSVClick = () => {
  console.debug('一覧出力ボタンが押下されました。 officeid:' + officeid.value);
  pavementService.downloadExcelList(officeid.value);
};
const onOutputLedgerClick = () => {
  console.debug('clickOutputLedger');
};
const clickMarkerListRow = (e) => {
  const pavement = e.row;
  console.debug('clickMarkerList', pavement,'id:',e.row.id);
};
</script>
