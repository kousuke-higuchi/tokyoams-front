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
              <v-btn v-on:click="clickFAdvancedSearch()" color="primary" size="small">
                詳細検索
              </v-btn>
              <v-btn class="ml-2" v-on:click="clickOutputCSV()" color="primary" size="small">
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
                <span v-if="props.column.field == 'facillityname'">
                  <nuxt-link :to="`/rtnwall/${props.row.id}/ledger1`">{{  props.formattedRow[props.column.field]  }}
                  </nuxt-link>
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
          <v-col>
            <v-row justify="end" class="mr-2">
              <v-btn v-on:click="clickFind()" color="primary" size="small">
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
                    <vue-good-table :columns="columnsOverlay" :rows="facilities" @row-click="clickMarkerListRow">
                    </vue-good-table>
                  </v-container>
                </v-card>
              </v-menu>
            </v-row>
          </v-col>
          <!-- 地図 -->
          <v-card style="height: 78vh; width: 94vw">
            <ams-map :zoom="zoom" :center="center" :markers="facilities" marker-title="name" @click-marker="clickMarker" />
          </v-card>
        </v-window-item>
      </v-window>
    </v-card-text>

    <roadfacility-search-condition-dialog v-model:isOpen="showFind" />

  </v-card>
</template>

<script lang="ts">
import rtnwallJson from "@/assets/roadfacility.json";

export default defineComponent({
  data() {
    return {
      showFind: false,
      showMarkerList: false,
      tab: 'map',
      zoom: 15,
      center: [35.79112, 139.27753],
      facilities: rtnwallJson,
      officeDropdwonItem: [
        "第一建設事務所", "第二建設事務所", "第三建設事務所", "第四建設事務所",
        "第五建設事務所", "第六建設事務所", "西多摩建設事務所", "南多摩東部建設事務所",
        "南多摩西部建設事務所", "北多摩南部建設事務所", "北多摩北部建設事務所",
        "大島支庁", "三宅支庁", "八丈支庁", "小笠原支庁"
      ],
      areaDropdownItem: [
        "港工区", "中央工区", "千代田工区", "品川工区", "大田工区",
        "世田谷工区", "目黒工区", "中野工区", "新宿工区", "杉並工区",
        "豊島工区", "板橋工区", "練馬工区", "石神井工区", "江戸川南工区",
        "墨田工区", "江東工区", "葛飾東工区", "葛飾西工区", "江戸川北工区",
        "港湾局管理", "荒川工区", "足立東工区", "足立西工区", "台東工区",
        "文京工区", "北工区", "青梅工区", "福生工区", "あきる野工区",
        "檜原工区", "奥多摩工区", "町田西工区", "多摩工区", "町田東工区",
        "八王子東工区", "八王子西工区", "日野工区", "調布工区", "西東京工区",
        "小金井工区", "小平工区", "東村山工区", "立川工区", "大島支庁",
        "三宅支庁", "八丈支庁", "小笠原支庁"
      ],
      // 一覧の列情報
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
            filterValue: "",
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
            placeholder: '路線名入力',
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
            placeholder: '路線名入力',            
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
        modified.filterOptions.filterValue = "西多摩建設事務所";
      }
      else if (modified.field == 'areaname') {
        modified.filterOptions.filterDropdownItems = this.areaDropdownItem
        modified.filterOptions.filterValue = "奥多摩工区";
      }
      return modified
    };
    this.columns = this.columns.map(map2DropDown);
    this.columnsOverlay = this.columnsOverlay.map(map2DropDown);
    this.rowsOverlay = rtnwallJson;
  },
  methods: {
    clickFAdvancedSearch() {
      console.debug('clickFAdvancedSearch');
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
      navigateTo(`/rtnwall/${m.id}/ledger1`, m)
    }
  }
})
</script>