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
              <v-btn v-on:click="onExportForBatchClick()" color="secondary">
                一括登録用フォーマット出力
              </v-btn>
              <v-btn
                class="ml-2"
                v-on:click="onBatchImportClick()"
                color="secondary"
              >
                一括インポート
              </v-btn>
              <v-btn
                class="ml-2"
                v-on:click="onAdvancedSearchClick()"
                color="primary"
                size="small"
              >
                詳細検索
              </v-btn>
              <v-btn
                class="ml-2"
                v-on:click="onExportButtonClick()"
                color="primary"
                size="small"
              >
                一覧出力
              </v-btn>
            </v-row>
          </v-col>
          <div class="mt-2">
            <vue-good-table
              :columns="columns"
              :rows="streetlights"
              :pagination-options="{
                enabled: true,
              }"
            >
              <template #table-row="props">
                <span v-if="props.column.field == 'OutLedgerBtn'">
                  <v-btn
                    class="btn"
                    color="primary"
                    dark
                    size="small"
                    v-on:click="onOutputLedgerClick()"
                  >
                    Excel
                  </v-btn>
                </span>
                <span v-else-if="props.column.field == 'DeleteBtn'">
                  <v-btn
                    class="btn"
                    color="error"
                    dark
                    size="small"
                    v-on:click="onDeleteRowClick()"
                  >
                    削除
                  </v-btn>
                </span>

                <span v-else-if="props.column.field == 'formattedid'">
                  <nuxt-link :to="`/streetlight/${props.row.id}/ledger`">
                    {{ props.formattedRow[props.column.field] }}
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
              <v-btn
                v-on:click="onAdvancedSearchClick()"
                color="primary"
                size="small"
              >
                検索条件
              </v-btn>
              <v-menu
                v-model="showMarkerList"
                :close-on-content-click="false"
                location="bottom end"
                size="small"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ml-2"
                    color="primary"
                    v-bind="props"
                    size="small"
                  >
                    施設一覧
                  </v-btn>
                </template>

                <v-card>
                  <v-container>
                    <vue-good-table
                      :columns="columnsOverlay"
                      :rows="streetlights"
                      @row-click="onMarkerListRowClick"
                    >
                    </vue-good-table>
                  </v-container>
                </v-card>
              </v-menu>
            </v-row>
          </v-col>

          <!--地図-->
          <v-card style="height: 78vh; width: 94vw">
            <ams-map
              :zoom="zoom"
              :center="center"
              :markers="streetlights"
              marker-title="formattedid"
              @click-marker="onMarkerClick"
            />
          </v-card>
        </v-window-item>
      </v-window>
    </v-card-text>

    <streetlight-search-condition-dialog v-model:isOpen="showFind" />
  </v-card>
</template>

<script lang="ts" setup>
import streetlightervice from "@/services/streetlight-service";
import { AtfSummary } from "@/types";
//TODO:モック終了後jsonファイルは削除
import streetlightJson from "@/assets/streetlightSummary.json";

const showMarkerList = ref(false);
const tab = ref("list");
const zoom = ref(15);
const center = ref([35.79112, 139.27753]);

const routenameDropdownItems = ref([
  "（特４１６）古川橋二子玉川線",
  "（一１３９）真光寺長津田線",
  "（一１３７）上麻生連光寺線",
  "（一１１１）大田神奈川線",
]);
const officeDropdownItems = ref([
  "第一建設事務所",
  "第二建設事務所",
  "第三建設事務所",
  "第四建設事務所",
  "西多摩建設事務所",
]);
const areaDropdownItems = ref([
  "奥多摩出張所",
  "檜原工区",
  "あきる野工区",
  "福生工区",
  "青梅工区",
]);
const municipalityItems = ref([
  "檜原村",
  "奥多摩町",
  "日の出町",
  "青梅市",
  "福生市",
  "あきる野市",
]);

let columns = [
  {
    label: "施設番号",
    field: "formattedid",
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: "管理番号入力",
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
      placeholder: "-選択-",
      filterDropdownItems: [],
    },
  },
  {
    label: "区市町村名",
    field: "municipalityname",
    sortable: false,
    filterOptions: {
      enabled: true,
      placeholder: "-選択-",
      filterDropdownItems: [],
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

let columnsOverlay = [
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
      placeholder: "-選択-",
      filterOptions: [],
    },
  },
];

//施設一覧,詳細検索フラグ
const showFind = ref(false);

//let rows =reactive();
const authState = useAuthUser();

const map2OfficeDropDown = (c) => {
  let modified = c;
  if (modified.field == "office") {
    modified.filterOptions.filterDropdownItems = officeDropdownItems;
  } else if (modified.field == "route_name") {
    modified.filterOptions.filterDropdownItems = routenameDropdownItems;
  }
  return modified;
};

const streetlights = ref(new Array<AtfSummary>);

onMounted(() => {
  console.log("123");
  // if (authState.state.value.isLogin) {
  //   console.log("aaaa");
  //   streetlightervice
  //     .getList(authState.state.value.currentUser.officeid)
  //     .then((apiData) => {
  //       streetlights.value = apiData.data;
  //       console.log(streetlights);
  //     });
  // } else {
    streetlights.value = streetlightJson as Array<AtfSummary>;
  // }
});

columns = columns.map(map2OfficeDropDown);
columnsOverlay = columnsOverlay.map(map2OfficeDropDown);

const onAdvancedSearchClick = () => {
  console.info("onAdvancedSearchClick");
  showFind.value = !showFind;
};

const onMarkerClick = (m) => {
  console.info("onClickMarker", m);
  navigateTo(`/streetlight/${m.id}/ledger`, m);
};

const onExportForBatchClick = () => {
  console.debug("onExportForBatchClick");
};

const onBatchImportClick = () => {
  console.debug("clickBatchImport");
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

const onMarkerListRowClick = (e) => {
  const switchboard = e.row;
  console.debug("onMarkerListRowclick", switchboard);
};
</script>
