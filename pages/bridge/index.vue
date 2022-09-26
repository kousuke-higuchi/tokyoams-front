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
              <v-btn v-on:click="onAdvancedSearchClick()"
                color= "primary"
                size="small"
              >
                詳細検索
              </v-btn>
              <v-btn class="ml-2" v-on:click="onExportButtonClick()"
                color="primary"
                size="small"
              >
                一覧出力
              </v-btn>
            </v-row>
            <v-row class="d-flex ml-1">
              {{ bridges.length }} 件
            </v-row>
          </v-col>
            <div class="mt-2">
                <vue-good-table
                :columns="columns"
                :rows="bridges"
                >
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
                        <v-btn class="btn" color="primary" dark size="small" v-on:click="onOutputNationalClick()">
                          Excel
                        </v-btn>
                    </span>
                    <span v-else-if="props.column.field == 'Connect3dSystem'">
                        <v-btn class="btn" color="success" dark size="small" v-on:click="onOutputNationalClick()">
                          3Dシステム
                        </v-btn>
                    </span>
                    <span v-else-if="props.column.field == 'ConnectDocSystem'">
                        <v-btn class="btn" color="success" dark size="small" v-on:click="onOutputNationalClick()">
                          成果品
                        </v-btn>
                    </span>
                    <span v-else-if="props.column.field == 'bridge_name'">
                      <nuxt-link :to="`/bridge/${props.row.id}/${props.row.bridge_name} ${props.row.code}/ledger1`">{{props.formattedRow[props.column.field]}}</nuxt-link>
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
            <v-row justify="end" class="mr-2">
              <v-btn v-on:click="onAdvancedSearchClick()"
                color= "primary"
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
                    :rows="bridges"
                    @row-click="onMarkerListRowClick"
                    >
                    </vue-good-table>
                  </v-container>
                </v-card>
              </v-menu>
            </v-row>
          </v-col>


          <!-- 地図 --> 
          <v-card style="height: 78vh; width: 94vw">
            <ams-map
              :zoom="zoom"
              :center="center"
              :markers="bridges"
              marker-title="bridge_name"
              @click-marker="onMarkerClick"
              />
          </v-card>
        </v-window-item>
      </v-window>
    </v-card-text>

    <bridge-search-condition-dialog v-model:isOpen="showFind" />

  </v-card>
</template>

<script lang="ts">
import bridgeService from "@/services/bridge-service"
import { BridgeSummary, BridgeSearchForm } from "~~/types/bridge";
import SideCardDetails from "~~/components/utilitytunnel/SideCardDetails.vue";

export default defineComponent({
    setup() {
        const selectFacilityValue = ref("");
        provide("selectFacility", selectFacilityValue);
    },
    data() {
        return {
            showMarkerList: false,
            tab: "list",
            zoom: 15,
            center: [35.79112, 139.27753],
            bridges: [] as Array<BridgeSummary>,
            currentOfficeid: 0,
            tableFiltervalue: "",
            // FIXME: 配列名は複数形にしてください
            officeDropdwonItem: [
               "第一建設事務所", "第二建設事務所", "第三建設事務所", "第四建設事務所",
               "第五建設事務所", "第六建設事務所", "西多摩建設事務所", "南多摩東部建設事務所",
               "南多摩西部建設事務所", "北多摩南部建設事務所", "北多摩北部建設事務所",
               "大島支庁", "三宅支庁", "八丈支庁", "小笠原支庁"
           ],
            // FIXME: 配列名は複数形にしてください
            areaDropdownItem: [] as Array<String>,
            // 一覧の列情報
            columns: [
                {
                    label: "施設名",
                    field: "bridge_name",
                    sortable: false,
                    filterOptions: {
                        enabled: true,
                        placeholder: "施設名入力",
                    },
                },
                {
                    label: "事務所",
                    field: "office",
                    width: "14em",
                    sortable: false,
                    filterOptions: {
                        enabled: true,
                        placeholder: "-選択-",
                        filterValue: this.tableFiltervalue,
                        filterDropdownItems: [],
                    },
                },
                {
                    label: "工区",
                    field: "area",
                    width: "10em",
                    sortable: false,
                    filterOptions: {
                        enabled: true,
                        placeholder: "-選択-",
                    },
                },
                {
                    label: "路線名",
                    field: "route_name",
                    sortable: false,
                    filterOptions: {
                        enabled: true,
                        placeholder: "路線名入力",
                    },
                },
                {
                    label: "区市町村名",
                    field: "formattedAddress",
                    sortable: false,
                    filterOptions: {
                        enabled: true,
                        placeholder: "区市町村名入力",
                    },
                },
                {
                    label: "台帳出力",
                    field: "OutLedgerBtn",
                    filterable: false,
                    sortable: false,
                },
                {
                    label: "調書出力",
                    field: "OutRecodeBtn",
                    filterable: false,
                    sortable: false,
                },
                {
                    label: "国様式",
                    field: "OutNationalBtn",
                    filterable: false,
                    sortable: false,
                },
		        {
		          label: '耐震台帳',
		          field: 'OutSeismicBtn',
		          filterable: false,
		          sortable: false,
		        },
                {
                    label: "3Dシステム",
                    field: "Connect3dSystem",
                    filterable: false,
                    sortable: false,
                },
                {
                    label: "成果品",
                    field: "ConnectDocSystem",
                    filterable: false,
                    sortable: false,
                },
            ],
            // 施設一覧の列情報
            columnsOverlay: [
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
                field: 'route_name',
                sortable: false,
                filterOptions: {
                    enabled: true,
                    placeholder: "路線名入力",
                },
             },
            ],
            showFind: false,
            showTable: false,
        };
    },
    mounted: async function () {
      const map2OfficeDropDown = (c) => {
            let modified = c;
            if (modified.field == "office") {
                modified.filterOptions.filterDropdownItems = this.officeDropdwonItem;
                modified.filterOptions.filterValue = this.tableFiltervalue;
            }
             else if (modified.field == "area") {
                modified.filterOptions.filterDropdownItems = this.areaDropdownItem;
            }
            return modified;
        };
        //TODO:モック終了後、ログイン状態の判定は削除。    
        const authState = useAuthUser();
        if (authState.state.value.isLogin) {
            //TODO: git 9de41913af4d7669e43063cc43226890620fedbf の変更でoffice.userofficeid取得になったが、loginでセットされていないためとりあえず
            //NOTE: ishida でloginすると officeid = 1, これは、東京都全体とする。 issue #82
            let officeid = 0;
            if (authState.state.value.currentUser.office) {
              officeid = authState.state.value.currentUser.office.userofficeid;
            }
            console.debug("login officeid ", officeid, authState.state.value.currentUser.office);
            // 工区リスト取得
            bridgeService.getAreaList(officeid).then(ret => {
              this.areaDropdownItem = ret.data.map((r)=>r.name);
              
              // FIXME: この判定文は〇〇〇service.tsに移動してください。
              // FIXME: 17未満の数値は判定から除外してください。（特に指定が無ければ）
              if ((officeid < 2) || (17 < officeid)) {
                this.tableFiltervalue = ""; // 東京都全体  
              }
              else
              {
                this.tableFiltervalue = this.officeDropdwonItem[officeid - 2]                
              }
              console.debug("工区リスト取得");
              this.columns = this.columns.map(map2OfficeDropDown);
              this.columnsOverlay = this.columnsOverlay.map(map2OfficeDropDown);
            });

            let searchForm: BridgeSearchForm = {

            }
            bridgeService.search(searchForm).then(s => {
                this.bridges = s.data;
                console.info("橋梁リスト取得");
            });
        }
        else {
        
            this.bridges = bridgeService.getList4Mock();
            this.columns = this.columns.map(map2OfficeDropDown);
            this.columnsOverlay = this.columnsOverlay.map(map2OfficeDropDown);
        }
    },
    computed: {
        makeDateRangeText() {
            return this.makedates.join(" ~ ");
        },
    },
    methods: {
        onColumnFilter(params) {
          console.info("onColumnFilter", params);

        },
        onMarkerClick(m) {
            console.info("onMarkerClick", m);
            navigateTo(`/bridge/${m.id}/${m.bridge_name + " " + m.code}/ledger1`);
        },
        onAdvancedSearchClick() {
            console.debug("onAdvancedSearchClick");
            this.showFind = !this.showFind;
        },
        onExportButtonClick() {
            console.info("CSV出力ボタンをクリックしました");
            bridgeService.downloadExcelList();
        },
        onOutputLedgerClick() {
            console.debug("onOutputLedgerClick");
        },
        onOutputRecodeClick() {
            console.debug("onOutputRecodeClick");
        },
        onOutputNationalClick() {
            console.debug("onOutputNationalClick");
        },
        onMarkerListRowClick(e) {
            const bridge = e.row;
            console.debug("onMarkerListRowClick", bridge);
        },
    },
    components: { SideCardDetails }
});
</script>
