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
            <v-row justify="end">
              <v-btn v-on:click="onExportForBatchClick()" color="secondary" size="small">
                一括登録用フォーマット出力
              </v-btn>
							<v-btn class="ml-2" v-on:click="onBatchImportClick()" color="secondary" size="small">
                一括インポート
              </v-btn>
							<v-btn class="ml-2" v-on:click="onAdvancedSearchClick()" color="primary" size="small">
                詳細検索
              </v-btn>
							<v-btn class="ml-2" v-on:click="onExportListClick()" color="primary" size="small">
                一覧出力
              </v-btn>
            </v-row>
            <v-row class="d-flex ml-1">
              {{ facilities.length }} 件
            </v-row>
          </v-col>
          <div class="mt-2">
            <vue-good-table :columns="columns" :rows="facilities">
              <template #table-row="props">
                <span v-if="props.column.field == 'outLedgerBtn'">
									<v-btn class="btn" color="primary" dark size="small" v-on:click="onOutLedgerClick()">
                    Excel
                  </v-btn>
                </span>
                <span v-else-if="props.column.field == 'deleteBtn'">
									<v-btn class="btn" color="error" dark size="small" v-on:click="onDeleteRowClick()">
                    削除
                  </v-btn>
                </span>
                <span v-else-if="props.column.field == 'formattedid'">
									<nuxt-link :to="`${baseUrl}/${props.row.id}/ledger`">
										{{props.formattedRow[props.column.field]}}
                  </nuxt-link>
                </span>
                <span v-else>
									{{props.formattedRow[props.column.field]}}
                </span>
              </template>
            </vue-good-table>
          </div>
        </v-window-item>
        <!-- 地図 tab -->
        <v-window-item value="map">
          <v-col>
            <v-row justify="end">
			  <v-btn v-on:click="onFindButtonClick()" color="primary" size="small">
                検索条件
              </v-btn>
			  <v-menu v-model="showMarkerList" :close-on-content-click="false" location="bottom end">
                <template v-slot:activator="{ props }">
					<v-btn class="ml-2" color="primary" v-bind="props" size="small">
                    施設一覧
                  </v-btn>
                </template>
                <v-card>
                  <v-container>
										<vue-good-table :columns="columnsOverlay" :rows="facilities" @row-click="onMarkerListRowclick">
                    </vue-good-table>
                  </v-container>
                </v-card>
              </v-menu>
            </v-row>
          </v-col>

          <!--地図-->
					<v-card style="height:78vh; width: 94vw">
						<ams-map :zoom="zoom" :center="center" :markers="facilities" marker-title="formattedid"
							@click-marker="onClickMarker" />
          </v-card>
        </v-window-item>
      </v-window>
    </v-card-text>

    <blinker-search-condition-dialog v-model:isOpen="showFind" />
  </v-card>
</template>

<script lang="ts" setup>
import blinkerervice from "~~/services/blinker-service";
import { AtfSummary } from "~~/types";

const baseUrl = `/blinker`;
const showMarkerList = ref(false);
const tab = ref("map");
const zoom = ref(15);
const center = ref([35.79112, 139.27753]);
const facilities = ref<[AtfSummary]>();
facilities.value = await blinkerervice.getList();

const officeDropdownItems = ref([
	"第一建設事務所", "第二建設事務所", "第三建設事務所", "第四建設事務所", "第五建設事務所",
	"第六建設事務所", "西多摩建設事務所", "南多摩東部建設事務所", "南多摩西部建設事務所",
	"北多摩南部建設事務所", "北多摩北部建設事務所", "大島支庁", "三宅支庁", "八丈支庁", "小笠原支庁"
]);
const areaDropdownItems = ref([
	"港工区", "中央工区", "千代田工区", "品川工区", "大田工区", "世田谷工区", "目黒工区",
	"中野工区", "新宿工区", "杉並工区", "豊島工区", "板橋工区", "練馬工区", "石神井工区",
	"江戸川南工区", "墨田工区", "江東工区", "葛飾東工区", "葛飾西工区", "江戸川北工区",
	"港湾局管理", "荒川工区", "足立東工区", "足立西工区", "台東工区", "文京工区",
	"北工区", "青梅工区", "福生工区", "あきる野工区", "檜原工区", "奥多摩工区",
	"町田西工区", "多摩工区", "町田東工区", "八王子東工区", "八王子西工区",
	"日野工区", "調布工区", "西東京工区", "小金井工区", "小平工区",
	"東村山工区", "立川工区", "大島支庁", "三宅支庁", "八丈支庁", "小笠原支庁"
]);
let _columns = [
  {
    label: "施設番号",
    field: "formattedid",
    sortable: false,
    filterOptions: {
      enabled: true,
     placeholder: '施設番号入力',
    },
  },
  {
    label: "事務所",
    field: "officename",
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: "-選択-",
      filterDropdownItems: [],
    },
  },
  {
    label: "工区",
    field: "areaname",
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: "-選択-",
      filterDropdownItems: [],
    },
  },
  {
    label: "路線名",
    field: "routename",
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '路線名入力',
    },
  },
  {
    label: "区市町村名",
    field: "municipalityname",
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '区市町村名入力',
    },
  },
  {
    label: "台帳出力",
    field: "OutLedgerBtn",
    filterble: false,
    sortable: false,
  },
  {
    label: "削除",
    field: "DeleteBtn",
    filterble: false,
    sortable: false,
  },
];

const _columnsOverlay = [
  {
    label: "施設番号",
    field: "formattedid",
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: "施設番号入力",
    },
  },
  {
    label: "路線名",
    field: "routename",
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: '路線名入力',            
    },
  },
];

//施設一覧,詳細検索フラグ
const showFind = ref(false);

let map2DropDown = (c) => {
  let modified = c;
	if (modified.field == 'officename') {
		modified.filterOptions.filterDropdownItems = officeDropdownItems
  }
	else if (modified.field == 'areaname') {
		modified.filterOptions.filterDropdownItems = areaDropdownItems
  }
	return modified
};
const columns = ref(_columns.map(map2DropDown));
const columnsOverlay = ref(_columnsOverlay.map(map2DropDown));

const onFindButtonClick = () => {
  console.info("onFindButtonClick");
  showFind.value = !showFind;
};

const onMarkerClick = (m) => {
  console.info("onClickMarker", m);
  navigateTo(`/${baseUrl}/${m.id}/ledger`, m);
};

const onExportForBatchClick = () => {
  console.debug("onExportForBatchClick");
};

const onBatchImportClick = () => {
  console.debug("clickBatchImport");
};

const onAdvancedSearchClick = () => {
  console.info("onAdvancedSearchClick");
  showFind.value = !showFind;
};

const onExportButtonClick = () => {
  console.debug("onExportListClick");
};

const onOutputLedgerClick = () => {
  console.debug("clickOutLedger");
};

const onDeleteRowClick = () => {
  console.debug("clickDelete");
};

const onMarkerListRowclick = (e) => {
	console.debug('onMarkerListRowclick', e.row);
};
</script>