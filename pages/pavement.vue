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
                :rows="pavements"
                :pagination-options="{
                  enabled: true
                }"
                >
                    <template #table-row="props">
                    <span v-if="props.column.field == 'OutLedgerBtn'">
                        <v-btn class="btn" color="primary" dark size="small" v-on:click="clickOutputLedger()">
                          Excel
                        </v-btn>
                    </span>
                    <span v-else-if="props.column.field == 'spotpoint'">
                      <nuxt-link to="/tobeImplement">{{props.formattedRow[props.column.field]}}</nuxt-link>
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
              <v-btn class="ml-2" v-on:click="clickShowTables()"
                color="primary"
              >
                施設一覧
              </v-btn>
            </v-row>
          </v-container>

          <!-- 地図 --> 
          <v-card style="height: 78vh; width: 94vw">
            <ams-map
              :zoom="zoom"
              :center="center"
              :markers="pavements"
              marker-title="spotpoint"
              @click-marker="clickMarker"
              />
            <!-- 検索画面 -->
            <v-dialog v-model="showFind" persistent max-width="400px">
              <v-card>
                <v-toolbar dark color="primary">
                  <v-toolbar-title>施設詳細検索</v-toolbar-title>
                </v-toolbar>
                 <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field label="施設名称" v-model="findFacilityName" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="5">
                        トンネル延長
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="から" v-model="findStartTunnel" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="まで" v-model="findEndTunnel" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="5">
                        竣工年度
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="から" v-model="findStartBoneYear" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="まで" v-model="findEndBoneYear" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="5">
                        点検年度
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="から" v-model="findStartCheckYear" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="まで" v-model="findEndCheckYear" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="5">
                        最新点検年度
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="から" v-model="findStartNewerCheckYear" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="まで" v-model="findEndNewerCheckYear" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-autocomplete
                          v-model="findFacilityType"
                          :items="['Facility001', 'Facility002', 'Facility003']"
                          outlined
                          dense
                          chips
                          small-chips
                          label="施設種別"
                          multiple="true"
                          hide-details="false" 
                          clearable
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="12">
                        <v-autocomplete
                          v-model="findHealt"
                          label="健全性 国様式 Ⅰ～Ⅲ"
                          :items="['Ⅰ','Ⅱ','Ⅲ']"
                          outlined
                          dense
                          chips
                          small-chips
                          multiple
                          hide-details="false" 
                          clearable
                        ></v-autocomplete>
                      </v-col>
                      <v-col cols="12">
                        <v-autocomplete
                          v-model="findCombinedUse"
                          label="併用状況"
                          :items="['都管理','事業中','廃止','移管','その他']"
                          outlined
                          dense
                          chips
                          small-chips
                          multiple
                          hide-details="false" 
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                   <v-row justify="start">
                    <v-btn 
                      color="blue darken-1"
                      text
                    >
                    条件クリア
                    </v-btn>
                  </v-row>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="showFind = false"
                  >
                    検索
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="showFind = false"
                  >
                    キャンセル
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-overlay v-model="showTable" contained width="400px" class="justify-end">
              <v-card>
                <vue-good-table
                :columns="columnsOverly"
                :rows="rows"
                >
                    <template #table-row="props">
                      {{props.formattedRow[props.column.field]}}
                    </template>
                </vue-good-table>
              </v-card>
            </v-overlay>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script type="ts">
import pavementsJson from "../assets/pavement.json"

export default defineComponent({
  data() {
    return {
      tab: 'map',
      zoom: 15,
      center: [35.79112, 139.27753],
      pavements: pavementsJson,
      officeDropdwonItem: ['第一建設事務所','第二建設事務所','第三建設事務所','第四建設事務所','西多摩建設事務所'],
      // 一覧の列情報
      columns: [
        {
          label: '路線種別',
          field: 'kindname',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '路線種別入力',
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
        {
          label: '調書出力',
          field: 'OutLedgerBtn',
          filterable: false,
          sortable: false,
        },
        {
          label: '国様式出力',
          field: 'OutLedgerBtn',
          filterable: false,
          sortable: false,
        },
      ],
      // 施設一覧の列情報
      columnsOverly: [
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
      ],
      // 一覧のレコード
      rows: [],
      showFind: false,
      showTable: false,
      findFacilityName: '',
      findStartTunnel: '',
      findEndTunnel: '',
      findStartBoneYear: '',
      findEndBoneYear: '',
      findStartCheckYear: '',
      findEndCheckYear: '',
      findStartNewerCheckYear: '',
      findEndNewerCheckYear: '',
      findFacilityType: [],
      findHealt: [],
      findCombinedUse: ['都管理'],
    };
  },
  mounted: function() {
    const map2OfficeDropDown = (c)=>{
      let modified = c;
      if(modified.field == 'office') {
        modified.filterOptions.filterDropdownItems = this.officeDropdwonItem
      }
      return modified
    };
    this.columns = this.columns.map(map2OfficeDropDown);
    this.columnsOverly = this.columnsOverly.map(map2OfficeDropDown);
    this.rows = pavementsJson;
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
    },
    clickFAdvancedSearch(){
      console.debug('clickFAdvancedSearch');
    },
    clickOutputCSV(){
      console.debug('clickOutputCSV'+this.rows);
    },
    clickOutputLedger(){
      console.debug('clickOutputLedger');
    }
  },
});
</script>
