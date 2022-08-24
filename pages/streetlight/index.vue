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
							:rows="streetlight"
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

					<!--地図-->
					<v-card style="height:78vh; width: 94vw">
						<ams-map
							:zoom="zoom"
							:center="center"
							:markers="streetlight"
							marker-title="id"
							@click-marker="clickMarker"
						/>
					</v-card>
				</v-window-item>
    	</v-window>
    </v-card-text>

		<streetlight-search-condition-dialog v-model:isOpen="showFind" />

  </v-card>
</template>

<script lang="ts">
import lightJson from "@/assets/streetlight.json"

export default defineComponent({
	data(){
		return{
			showMarkerList: false,
			tab: 'map',
			zoom:15,
			center: [35.79112,139.27753],
			streetlight:lightJson,
			//ドロップダウンリストの項目
			routenameDropdownItems:['（特４１６）古川橋二子玉川線','（一１３９）真光寺長津田線','（一１３７）上麻生連光寺線','（一１１１）大田神奈川線'],
			officeDropdownItems:['第一建設事務所','第二建設事務所','第三建設事務所','第四建設事務所','西多摩建設事務所'],
			areaDropdownItems:['奥多摩出張所','檜原工区','あきる野工区','福生工区','青梅工区'],
			municipalityItems:['檜原村','奥多摩町','日の出町','青梅市','福生市','あきる野市'],
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
          label:'区市町村名',
          field:'municipalityname',
          sortable:false,
          filterOptions:{
            enabled:true,
            placeholder:'-選択-',
            filterDropdownItems: [],
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
					label:'施設番号',
          field:'id',
          sortable: false,
          filterOptions: {
        	  enabled: true,
            placeholder: '施設番号入力',
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
				modified.filterOptions.filterDropdownItems = this.routenameDropdownItems
			}
			else if(modified.field == 'officename'){
				modified.filterOptions.filterDropdownItems = this.officeDropdownItems
			}
			else if(modified.field == 'areaname'){
				modified.filterOptions.filterDropdownItems = this.areaDropdownItems
			}
			else if(modified.field == 'municipalityname'){
				modified.filterOptions.filterDropdownItems = this.municipalityItems
			}
			return modified
		};
		this.columns = this.columns.map(map2DropDown);
		this.columnsOverlay = this.columnsOverlay.map(map2DropDown);
		this.rows = lightJson;
		this.rowsOverlay = lightJson;
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
     		navigateTo('/streetlight/ledger', m);
		},
		clickBatchFromatOutput(){
			console.debug('clickBatchFromatOutput');
		},
		clickBatchImport(){
			console.debug('clickBatchImport');
		},
		clickFAdvancedSearch(){
			console.debug('clickFAdvancedSearch');
			this.showFind = !this.showFind;
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
		clickMarkerListRow(e) {
      const streetlight = e.row;
      console.debug('clickMarkerList',streetlight);
    }
	}
});
</script>