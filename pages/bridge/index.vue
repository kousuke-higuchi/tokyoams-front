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
          </v-col>
            <div class="mt-2">
                <vue-good-table
                :columns="columns"
                :rows="bridges"
                :pagination-options="{
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
import { BridgeSummary } from "~~/types/bridge";

export default defineComponent({
  setup() {
    const selectFacilityValue = ref('');
    provide('selectFacility', selectFacilityValue);
  },
  data() {
    return {
      showMarkerList: false,
      tab: 'list',
      zoom: 15,
      center: [35.79112, 139.27753],
      bridges: [] as Array<BridgeSummary>,
      officeDropdwonItem: ['第一建設事務所','第二建設事務所','第三建設事務所','第四建設事務所','西多摩建設事務所'],
      routeDropdownItem:['一般都道十里木御岳停車場線201号','主要地方道青梅おきる野線31号','一般国道411号','一般都道川野上川乗線206号','主要地方道杉並あきる野線7号'],
      // 一覧の列情報
      columns: [
        {
          label: '施設名',
          field: 'bridge_name',
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
          field: 'route_name',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '路線名入力',
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
          label: '国様式',
          field: 'OutNationalBtn',
          filterable: false,
          sortable: false,
        },
        {
          label: '3Dシステム',
          field: 'Connect3dSystem',
          filterable: false,
          sortable: false,
        },
        {
          label: '成果品',
          field: 'ConnectDocSystem',
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
            placeholder: '--選択--',
            filterDropdownItems: [],
         },
        },
      ],
      showFind: false,
      showTable: false,
    };
  },
  mounted: async function() {

    //TODO:モック終了後、ログイン状態の判定は削除。    
    //TODO: 現在は、地図の中心を設定していない。officeid=10のuserでloginする
    const authState = useAuthUser();
    if (authState.state.value.isLogin) {
      bridgeService.getList(authState.state.value.currentUser.officeid).then(s => {
        this.bridges = s.data;
        console.log(this.pavements);
      })
    }
    else {
      this.bridges = bridgeService.getList4Mock();
    }

    const map2OfficeDropDown = (c)=>{
      let modified = c;
      if(modified.field == 'office') {
        modified.filterOptions.filterDropdownItems = this.officeDropdwonItem
      }
      else if(modified.field == 'route_name'){
        modified.filterOptions.filterDropdownItems = this.routeDropdownItem
      }
      return modified
    };
    this.columns = this.columns.map(map2OfficeDropDown);
    this.columnsOverlay = this.columnsOverlay.map(map2OfficeDropDown);
  },
  computed: {
      makeDateRangeText () {
        return this.makedates.join(' ~ ')
      },    
  },
  methods: {
    onMarkerClick(m) {
      console.info('onMarkerClick', m);
      navigateTo(`/bridge/${m.id}/${m.bridge_name + " " + m.code}/ledger1`);
    },
    onAdvancedSearchClick(){
      console.debug('onAdvancedSearchClick');
      this.showFind = !this.showFind;
    },
    onExportButtonClick(){
      console.info('CSV出力ボタンをクリックしました');
      bridgeService.downloadExcelList();
    },
    onOutputLedgerClick(){
      console.debug('onOutputLedgerClick');
    },
    onOutputRecodeClick(){
      console.debug('onOutputRecodeClick');
    },
    onOutputNationalClick(){
      console.debug('onOutputNationalClick');
    },
    onMarkerListRowClick(e) {
      const bridge = e.row;
      console.debug('onMarkerListRowClick',bridge);
      this.moveLedger(bridge.id, bridge.bridge_name, bridge.code);
    },
  },
});
</script>
