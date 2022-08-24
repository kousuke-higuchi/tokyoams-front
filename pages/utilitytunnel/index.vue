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
              <v-btn v-on:click="clickAdvanceSerch()" color="primary">
                詳細検索
              </v-btn>
              <v-btn class="ml-2" v-on:click="clickOutputCSV()" color="primary">
                CSV出力
              </v-btn>
            </v-row>
          </v-container>
          <div>
            <vue-good-table :columns="columns" :rows="utilitytunnels" :pagination-options="{
              enabled: true
            }">
              <template #table-row="props">
                <span v-if="props.column.field == 'facillityname'">
                  <nuxt-link to="/utilitytunnel/ledger1">{{ props.formattedRow[props.column.field] }}</nuxt-link>
                </span>
                <span v-else-if="props.column.field == 'outLedgerBtn'">
                  <v-btn class="btn" color="primary" dark size="small" v-on:click="clickOutLedger()">
                    Excel
                  </v-btn>
                </span>
                <span v-else-if="props.column.field == 'outRecodeBtn'">
                  <v-btn class="btn" color="primary" dark size="small" v-on:click="clickOutRecode()">
                    Excel
                  </v-btn>
                </span>
              </template>
            </vue-good-table>
          </div>
        </v-window-item>

        <!-- 地図 tab -->
        <v-window-item value="map">
          <v-container>
            <v-row justify="end">
              <v-btn v-on:click="clickFind()" color="primary">
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
                    <vue-good-table :columns="columnsOverlay" :rows="rowsOverlay" @row-click="clickMarkerListRow">
                    </vue-good-table>
                  </v-container>
                </v-card>
              </v-menu>
            </v-row>
          </v-container>
          <!--地図-->
          <v-card style="height:78vh; width: 94vw">
            <ams-map :zoom="zoom" :center="center" :markers="utilitytunnels" marker-title="facillityname"
              @click-marker="clickMarker" />
          </v-card>
        </v-window-item>
      </v-window>
    </v-card-text>

    <utilitytunnel-search-condition-dialog v-model:isOpen="showFind" />

  </v-card>
</template>

<script lang="ts">
import utilitytunnelJson from "../../assets/utilitytunnel.json";

export default defineComponent({
  data() {
    return {
      tab: 'map',
      showFind: false,
      showMarkerList: false,
      utilitytunnels: utilitytunnelJson,
      zoom: 15,
      center: [35.79112, 139.27753],
      officeDropdownItem: ['第一建設事務所', '第二建設事務所', '第三建設事務所', '第四建設事務所', '西多摩建設事務所'],
      areaDropdownItem: ['奥多摩出張所', '檜原工区', 'あきる野工区', '福生工区', '青梅工区'],
      routeDropdownItem: ['一般都道十里木御岳停車場線201号', '主要地方道青梅おきる野線31号', '一般国道411号', '一般都道川野上川乗線206号', '主要地方道杉並あきる野線7号'],
      columns: [
        {
          label: '施設名',
          field: 'facillityname',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '施設名入力',
          },
        },
        {
          label: '事務所',
          field: 'officename',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '-選択-',
            filterDropdownItems: [],
          },
        },
        {
          label: '工区',
          field: 'areaname',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '-選択-',
            filterDropdownItems: [],
          },
        },
        {
          label: '路線名',
          field: 'routename',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '-選択-',
            filterDropdownItems: [],
          },
        },
        {
          label: '区市町村名',
          field: 'municipalityname',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '区市町村名入力',
          },
        },
        {
          label: '台帳出力',
          field: 'outLedgerBtn',
          filterable: false,
          sortable: false,
        },
        {
          label: '調書出力',
          field: 'outRecodeBtn',
          filterable: false,
          sortable: false,
        },
      ],
      columnsOverlay: [
        {
          label: '施設名',
          field: 'facillityname',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '施設番号入力',
          },
        },
        {
          label: '路線名',
          field: 'routename',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '-選択-',
            filterOptions: [],
          },
        },
      ],
      rowsOverlay: [],
    }
  },
  mounted: function () {
    const map2DropDown = (c) => {
      let modified = c;
      if (modified.field == 'officename') {
        modified.filterOptions.filterDropdownItems = this.officeDropdownItem
      }
      else if (modified.field == 'areaname') {
        modified.filterOptions.filterDropdownItems = this.areaDropdownItem
      }
      else if (modified.field == 'routename') {
        modified.filterOptions.filterDropdownItems = this.routeDropdownItem
      }
      return modified
    };
    this.columns = this.columns.map(map2DropDown);
    this.columnsOverlay = this.columnsOverlay.map(map2DropDown);
    this.rowsOverlay = utilitytunnelJson;
  },
  methods: {
    clickAdvanceSerch() {
      console.debug('clickAdvanceSerch');
      this.showFind = !this.showFind;
    },
    clickOutputCSV() {
      console.debug('clickOutputCSV');
    },
    clickFind() {
      console.debug('clickFind');
      this.showFind = !this.showFind;
    },
    clickOutLedger() {
      console.debug('clickOutLedger');
    },
    clickOutRecode() {
      console.debug('clickOutRecode');
    },
    clickMarkerListRow(e) {
      const utilitytunne = e.row;
      console.debug('clickMarkerList', utilitytunne);
    },
    clickMarker(m) {
      console.info('clickMarker', m);
      navigateTo('/utilitytunnel/ledger1')
    }
  }
})
</script>