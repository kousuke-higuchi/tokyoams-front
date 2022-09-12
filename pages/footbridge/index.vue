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
          <v-container>
            <v-row justify="end">
              <v-btn v-on:click="onFAdvancedSearchClick()" color="primary">
                詳細検索
              </v-btn>
              <v-btn class="ml-2" v-on:click="onExportButtonClick()" color="primary">
                一覧出力
              </v-btn>
            </v-row>
          </v-container>
          <div>
            <vue-good-table :columns="columns" :rows="rows" :pagination-options="{
              enabled: true
            }">
              <template #table-row="props">
                <span v-if="props.column.field == 'OutLedgerBtn'">
                  <v-btn class="btn" color="primary" dark size="small" v-on:click="onOutputLedgerClick()">
                    Excel
                  </v-btn>
                </span>
                <span v-else-if="props.column.field == 'OutRecodeBtn'">
                  <v-btn class="btn" color="primary" dark size="small" v-on:click="onOutputRecodeClick()">
                    Excel
                  </v-btn>
                </span>
                <span v-else-if="props.column.field == 'OutNationalBtn'">
                  <v-btn class="btn" color="primary" dark size="small" v-on:click="onOutputNationalClick()">
                    Excel
                  </v-btn>
                </span>
                <span v-else-if="props.column.field == 'OutSeismicBtn'">
                  <v-btn class="btn" color="primary" dark size="small" v-on:click="onOutputSeismicClick()">
                    Excel
                  </v-btn>
                </span>
                <span v-else-if="props.column.field == 'name'">
                  <nuxt-link :to="`/footbridge/${props.row.id}/ledger1`">{{ props.formattedRow[props.column.field] }}
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
          <v-container>
            <v-row justify="end">
              <v-btn v-on:click="onFAdvancedSearchClick()" color="primary">
                検索条件
              </v-btn>
              <v-menu v-model="showMarkerList" :close-on-content-click="false" location="bottom end">
                <template v-slot:activator="{ props }">
                  <v-btn class="ml-2" color="primary" v-bind="props">
                    施設一覧
                  </v-btn>
                </template>

                <v-card>
                  <v-container>
                    <vue-good-table :columns="columnsOverly" :rows="footbridges" @row-click="onMarkerListRowClick">
                    </vue-good-table>
                  </v-container>
                </v-card>
              </v-menu>
            </v-row>
          </v-container>


          <!-- 地図 -->
          <v-card style="height: 78vh; width: 94vw">
            <ams-map :zoom="zoom" :center="center" :markers="footbridges" marker-title="name"
              @click-marker="onMarkerClick" />
          </v-card>
        </v-window-item>
      </v-window>
    </v-card-text>

    <footbridge-search-condition-dialog v-model:isOpen="showFind" />

  </v-card>
</template>

<script lang="ts" setup>
import footbridgesJson from "@/assets/footbridge.json";
import footbridgeService from "~~/services/footbridge-service";
import { Fbg2Summary } from "~~/types";

const showMarkerList = ref(false);
const tab = ref('list');
const zoom = ref(15);
const center = ref([35.79112, 139.27753]);
//TODO:仮データ表示の為一時的にletとする
//const footbridges = ref<Fbg2Summary[]>();
let footbridges = ref<Fbg2Summary[]>();
const officeDropdwonItem = ref(['第一建設事務所', '第二建設事務所', '第三建設事務所', '第四建設事務所', '西多摩建設事務所']);
const routeDropdownItem = ref(['一般都道十里木御岳停車場線201号', '主要地方道青梅おきる野線31号', '一般国道411号', '一般都道川野上川乗線206号', '主要地方道杉並あきる野線7号']);
//TODO:ユーザーによって決める
const officeid = 8;

// 一覧の列情報
let _columns = [
  {
    label: '施設名',
    field: 'name',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '施設名入力',
    },
  },
  {
    label: '事務所',
    field: 'office',
    width: '14em',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '-選択-',
      filterDropdownItems: [],
    },
  },
  {
    label: '工区',
    field: 'area',
    width: '10em',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '工区入力',
    },
  },
  {
    label: '路線名',
    field: 'routeName',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '-選択-',
    },
  },
  {
    label: '区市町村名',
    field: 'formattedAddress',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '区市町村名入力',
    },
  },
  {
    label: '種別',
    field: 'kind',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '-選択-',
      filterDropdownItems: ["人道橋","歩道橋"],
    },
  },
  {
    label: '台帳出力',
    field: 'OutLedgerBtn',
    filterable: false,
    sortable: false,
  },
  {
    label: '調書出力',
    field: 'OutRecodeBtn',
    filterable: false,
    sortable: false,
  },
  {
    label: '国様式出力',
    field: 'OutNationalBtn',
    filterable: false,
    sortable: false,
  },
  {
    label: '耐震台帳出力',
    field: 'OutSeismicBtn',
    filterable: false,
    sortable: false,
  },
];

// 施設一覧の列情報
let _columnsOverly = [
  {
    label: '施設番号',
    field: 'code',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '施設番号入力',
    },
  },
  {
    label: '路線名',
    field: 'routeName',
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '--選択--',
      filterDropdownItems: [],
    },
  },
];

const showFind = ref(false);

//一覧を取得
getSummary();

//検索ドロップダウンリストのアイテム取得
const map2OfficeDropDown = (c) => {
  let modified = c;
  if (modified.field == 'office') {
    modified.filterOptions.filterDropdownItems = officeDropdwonItem
  }
  else if (modified.field == 'routeName') {
    modified.filterOptions.filterDropdownItems = routeDropdownItem
  }
  return modified
};

const columns = ref(_columns.map(map2OfficeDropDown));
const columnsOverly = ref(_columnsOverly.map(map2OfficeDropDown));
const rows = footbridgesJson;

/**
 * 一覧を取得
 * ログインしていない場合モックデータをセットします。
 */
function getSummary() {
  const authState = useAuthUser();
  if (!authState.state.value.isLogin) {
    footbridges.value = footbridgesJson;
    return;
  }
  footbridgeService.getList(officeid).then(s => {
    footbridges.value = s.data;
    console.log(footbridges);
  })
};

const onMarkerClick = (m) => {
  console.info('onMarkerClick', m);
  navigateTo(`/footbridge/${m.id}/ledger1`, m);
};

const onFAdvancedSearchClick = () => {
  console.debug('onFAdvancedSearchClick');
  showFind.value = !showFind.value;
};

const onExportButtonClick = () => {
  console.info('CSV出力ボタンをクリックしました');
  footbridgeService.downloadExcelList();
};

const onOutputLedgerClick = () => {
  console.debug('onOutputLedgerClick');
};

const onOutputRecodeClick = () => {
  console.debug('onOutputRecodeClick');
};

const onOutputNationalClick = () => {
  console.debug('onOutputNationalClick');
};
const onOutputSeismicClick = () => {
  console.debug('onOutputSeismicClick');
};
const onMarkerListRowClick = (e) => {
  const footbridge = e.row;
  // this.center = [footbridge.latitude, footbridge.longitude];
  console.debug('onMarkerListRowClick', footbridge);
};
</script>
