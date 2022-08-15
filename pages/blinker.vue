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
							<v-btn v-on:click="clickBatchFromatOutput()"
								color="secondary"
							>
								一括登録用フォーマット出力
							</v-btn>
							<v-btn class="ml-2" v-on:click="clickBatchImport()"
								color="secondary"
							>
								一括インポート
							</v-btn>
							<v-btn class="ml-2" v-on:click="clickFAdvancedSearch()"
								color="primary"
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
							:rows="blinkers"
							:pagination-options="{
                            	enabled: true
							}"
							>
							<template #table-row="props">
								<span v-if="props.column.field == 'outLedgerBtn'">
									<v-btn class="btn" color="primary" dark size="small" v-on:click="clickOutLedger()">
										Excel
									</v-btn>
								</span>
								<span v-else-if="props.column.field == 'deleteBtn'">
									<v-btn class="btn" color="error" dark size="small" v-on:click="clickDelete()">
										削除
									</v-btn>
								</span>
								<span v-else-if="props.column.field == 'id'">
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
					<v-card style="height:78vh; width: 94vw">
						<!--地図-->
						<ams-map
							:zoom="zoom"
							:center="center"
							:markers="blinkers"
							marker-title="id"
							@click-marker="clickMarker"/>
						<!--検索画面-->
						<v-dialog v-model="showFind" presistent max-width="400px">
							<v-card>
								<v-toolbar dark color="primary">
                  <v-toolbar-title>施設詳細検索</v-toolbar-title>
                </v-toolbar>
								<v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field label="施設名称" v-model="findFacilityName" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="5">
                        トンネル延長
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="から" v-model="findStartTunnel" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="まで" v-model="findEndTunnel" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="5">
                        竣工年度
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="から" v-model="findStartBoneYear" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="まで" v-model="findEndBoneYear" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="5">
                        点検年度
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="から" v-model="findStartCheckYear" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field label="まで" v-model="findEndCheckYear" density="compact" hide-details="false" variant="underlined"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="5">
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
						<!--施設一覧-->
						<v-overlay v-model="showTable" contained width="400px" class="justify-end">
							<v-card>
								<v-container>
								<vue-good-table
								:columns="columnsOverlay"
								:rows="rowsOverlay"
								max-height = "687.17px"
								:fixed-header = "true"
								>
									<template #table-row="props">
										{{props.formattedRow[props.column.field]}}
									</template>
								</vue-good-table>
								</v-container>
							</v-card>
						</v-overlay>
					</v-card>
				</v-window-item>
    	</v-window>
    </v-card-text>
  </v-card>
</template>

<script type="ts">
import blinkerJson from "../assets/blinker.json"
import AmsMap from "../components/AmsMap.vue";

export default defineComponent({
  components: { AmsMap },
	data(){
		return{
			tab: 'map',
			zoom:15,
			center: [35.79112,139.27753],
			blinkers:blinkerJson,
			//ドロップダウンリストの項目
			routenameDropdownItem:['国道14号','国道16号','国道114号','国道256号'],
			officeDropdownItem:['第一建設事務所','第二建設事務所','第三建設事務所','第四建設事務所','西多摩建設事務所'],
			areaDropdownItem:['奥多摩出張所','檜原工区','あきる野工区','福生工区','青梅工区'],
			//一覧のカラム
			columns:[
				{
		  label:'管理番号',
          field:'id',
          sortable: false,
          filterOptions: {
          enabled: true,
            placeholder: '管理番号入力',
          },
				},
				{
					label:'路線名',
					field:'routename',
					sortable:false,
					filterOptions:{
						enabled:true,
						placeholder:'-選択-',
						filterDropdownItems: [],
					}
				},
				{
					label:'事務所',
					field:'officename',
					sortable: false,
					filterOptions:{
						enabled:true,
						placeholder:'-選択-',
						filterDropdownItems:[],
					}
				},
				{
					label:'工区',
					field:'areaname',
					sortable: false,
					filterOptions:{
						enabled:true,
						placeholder:'-選択-',
						filterDropdownItems:[],
					}
				},
				{
					label:'台帳出力',
					field:'outLedgerBtn',
					filterble:false,
					sortable:false,
				},
				{
					label:'削除',
					field:'deleteBtn',
					filterble:false,
					sortable:false,
				},
			],
			//一覧のレコード
			rows:[],
			//施設一覧のカラム
			columnsOverlay:[
				{
		  label:'管理番号',
          field:'id',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '管理番号入力',
          },
				},
				{
					label:'路線名',
          field:'routename',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '-選択-',
						filterOptions:[],
          },
				},
			],
			rowsOverlay:[],
			//施設一覧,詳細検索フラグ
			showTable:false,
			showFind:false,
		}
	},
	mounted: function(){
		const map2DropDown = (c)=>{
			let modified = c;
			if(modified.field == 'routename'){
				modified.filterOptions.filterDropdownItems = this.routenameDropdownItem
			}
			else if(modified.field == 'officename'){
				modified.filterOptions.filterDropdownItems = this.officeDropdownItem
			}
			else if(modified.field == 'areaname'){
				modified.filterOptions.filterDropdownItems = this.areaDropdownItem
			}
			return modified
		};
		this.columns = this.columns.map(map2DropDown);
		this.columnsOverlay = this.columnsOverlay.map(map2DropDown);
		this.rows = blinkerJson;
		this.rowsOverlay = blinkerJson;
	},
	methods:{
		clickFind(){
			console.debug('clickFind' + this.showFind);
			this.showFind = !this.showFind;
		},
		clickShowTables(){
			console.debug('clickShowTables' + this.showTable);
			this.showTable = !this.showTable;
		},
		clickMarker(m){
			console.info('clickMarker',m);
		},
		clickBatchFromatOutput(){
			console.debug('clickBatchFromatOutput');
		},
		clickBatchImport(){
			console.debug('clickBatchImport');
		},
		clickFAdvancedSearch(){
			console.debug('clickFAdvancedSearch');
		},
		clickOutputCSV(){
			console.debug('clickOutputCSV');
		},
		clickOutLedger(){
			console.debug('clickOutLedger');
		},
		clickDelete(){
			console.debug('clickDelete');
		},
	}
});
</script>