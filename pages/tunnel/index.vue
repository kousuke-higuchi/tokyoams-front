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
              <v-btn v-on:click="clickFAdvancedSearch()"
                color= "primary"
              >
                詳細検索
              </v-btn>
              <v-btn class="ml-2" v-on:click="clickOutputCSV()"
                color="primary"
              >
                CSV出力
              </v-btn>
            </v-row>
          </v-container>
            <div>
                <vue-good-table
                :columns="columns"
                :rows="tunnels"
                :pagination-options="{
                  enabled: true
                }">
                    <template #table-row="props">
                    <span v-if="props.column.field == 'OutLedgerBtn'">
                        <v-btn class="btn" color="primary" dark size="small" v-on:click="clickOutputLedger()">
                          Excel
                        </v-btn>
                    </span>
                    <span v-else-if="props.column.field == 'OutRecodeBtn'">
                        <v-btn class="btn" color="primary" dark size="small" v-on:click="clickOutputRecode()">
                          Excel
                        </v-btn>
                    </span>
                    <span v-else-if="props.column.field == 'OutNationalBtn'">
                        <v-btn class="btn" color="primary" dark size="small" v-on:click="clickOutputNational()">
                          Excel
                        </v-btn>
                    </span>
                    <span v-else-if="props.column.field == 'bridge_name'">
                      <nuxt-link to="/bridge/ledger1">{{props.formattedRow[props.column.field]}}</nuxt-link>
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
          <v-container>
            <v-row justify="end">
              <v-btn v-on:click="clickFind()"
                color= "primary"
              >
                検索条件
              </v-btn>
              <v-menu
                v-model="showMarkerList"
                :close-on-content-click="false"
                location="bottom end"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    class="ml-2"
                    color="primary"
                    v-bind="props"
                  >
                    施設一覧
                  </v-btn>
                </template>

                <v-card>
                  <v-container>
                    <vue-good-table
                    :columns="columnsOverlay"
                    :rows="rows"
                    @row-click="clickMarkerListRow"
                    >
                    </vue-good-table>
                  </v-container>
                </v-card>
              </v-menu>
            </v-row>
          </v-container>


          <!-- 地図 --> 
          <v-card style="height: 78vh; width: 94vw">
            <ams-map
              :zoom="zoom"
              :center="center"
              :markers="tunnels"
              marker-title="name"
              @click-marker="clickMarker"
              />
          </v-card>
        </v-window-item>
      </v-window>
    </v-card-text>

    <tunnel-search-condition-dialog v-model:isOpen="showFind" />

  </v-card>
</template>

<script lang="ts">

export default defineComponent({
  data() {
    return {
      showMarkerList: false,
      tab: 'list',
      zoom: 15,
      center: [35.79112, 139.27753],
      tunnels: [],
      officeDropdwonItem: ['第一建設事務所','第二建設事務所','第三建設事務所','第四建設事務所','西多摩建設事務所'],
      routeDropdownItem:['一般都道十里木御岳停車場線201号','主要地方道青梅おきる野線31号','一般国道411号','一般都道川野上川乗線206号','主要地方道杉並あきる野線7号'],
      // 一覧の列情報
      columns: [
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
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '-選択-',
            filterDropdownItems: [],
         },
        },
        {
          label: '工区',
          field: '',
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
            placeholder: '-選択-',
            filterDropdownItems: [],
         },
        },
        {
          label: '区市町村名',
          field: '',
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
          label: '国様式出力',
          field: 'OutNationalBtn',
          filterable: false,
          sortable: false,
        },
      ],
      // 施設一覧の列情報
      columnsOverlay: [
        {
          label: '施設名',
          field: 'code',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '施設名入力',
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
      // 一覧のレコード
      rows: [],
      showFind: false,
      showTable: false,
    };
  },
  mounted: function() {
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
    clickFind() {
      console.debug('clickFind');
      this.showFind = !this.showFind;
    },
    clickShowTables() {
      console.debug('clickShowTables ' + this.showTable);
      this.showTable = !this.showTable;
    },
    clickMarker(m) {
      console.info('clickMaker', m);
      /* TODO: 詳細画面遷移のとき、橋IDを詳細画面に渡す必要あり */
      navigateTo('/bridge/ledger1');
    },
    clickFAdvancedSearch(){
      console.debug('clickFAdvancedSearch');
      this.showFind = !this.showFind;
    },
    clickOutputCSV(){
      console.debug('clickOutputCSV'+this.rows);
    },
    clickOutputLedger(){
      console.debug('clickOutputLedger');
    },
    clickOutputRecode(){
      console.debug('clickOutputRecode');
    },
    clickOutputNational(){
      console.debug('clickOutputNational');
    },
    clickMarkerListRow(e) {
      const item = e.row;
      console.debug('clickMarkerList', item);
    }
  },
});
</script>
