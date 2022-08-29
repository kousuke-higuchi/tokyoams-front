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
                            <v-btn v-on:click="onExportForBatchClick()"
                                color="secondary"
                            >
                                一括登録用フォーマット出力
                            </v-btn>
                            <v-btn class="ml-2" v-on:click="onBatchImportClick()"
                                color="secondary"
                            >
                                一括インポート
                            </v-btn>
                            <v-btn class="ml-2" v-on:click="onAdvancedSearchClick()"
                                color="primary"
                            >
                                詳細検索
                            </v-btn>
                            <v-btn class="ml-2" v-on:click="onExportListClick()"
                                color="primary"
                            >
                                CSV出力
                            </v-btn>
                        </v-row>
                    </v-container>
                        <div>
                            <vue-good-table
                            :columns="columns"
                            :rows="switchboards"
                            :pagination-options="{
                                enabled: true
                            }"
                            >
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
                                <span v-else-if="props.column.field == 'formattedId'">
                                    <nuxt-link :to="`/switchboard/${props.row.id}/ledger`">
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
                    <v-container>
                        <v-row justify="end">
                            <v-btn v-on:click="onFindButtonClick()" color= "primary">
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
                        v-bind="props">
                        施設一覧
                    </v-btn>
                </template>

                <v-card>
                    <v-container>
                        <vue-good-table
                        :columns="columnsOverlay"
                        :rows="switchboards"
                        @row-click="onMarkerListRowclick"
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
            :markers="switchboards"
            marker-title="formattedId"
            @click-marker="onClickMarker"
            />
    </v-card>
</v-window-item>
        </v-window>
    </v-card-text>

        <switchboard-search-condition-dialog v-model:isOpen="showFind"/>

  </v-card>
</template>

<script lang="ts" setup>
  import switchboardService from '~~/services/switchboard-service';
  import { SwitchboardSummary } from '~~/types';

  const showMarkerList = ref(false);
  const tab = ref('map');
  const zoom = ref(15);
  const center = ref([35.79112,139.27753]);
  const switchboards = ref<[SwitchboardSummary]>();
  switchboards.value = await switchboardService.getList();

  const routenameDropdownItems = ref(['（特４１６）古川橋二子玉川線','（一１３９）真光寺長津田線','（一１３７）上麻生連光寺線','（一１１１）大田神奈川線']);
  const officeDropdownItems = ref(['第一建設事務所','第二建設事務所','第三建設事務所','第四建設事務所','西多摩建設事務所']);
  const areaDropdownItems = ref(['奥多摩出張所','檜原工区','あきる野工区','福生工区','青梅工区']);
  const municipalityItems = ref(['檜原村','奥多摩町','日の出町','青梅市','福生市','あきる野市']);

  let _columns = [
		{
			label:'管理番号',
			field:'formattedId',
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
	];

    const _columnsOverlay = [
                {
                    label:'施設番号',
					field:'formattedId',
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
            ];
	
	//施設一覧,詳細検索フラグ
	const showFind = ref(false);

	let map2DropDown = (c)=>{
		let modified = c;
		if(modified.field == 'routename'){
			modified.filterOptions.filterDropdownItems = routenameDropdownItems
		}
		else if(modified.field == 'officename'){
			modified.filterOptions.filterDropdownItems = officeDropdownItems
		}
		else if(modified.field == 'areaname'){
			modified.filterOptions.filterDropdownItems = areaDropdownItems
		}
		else if(modified.field == 'municipalityname'){
			modified.filterOptions.filterDropdownItems = municipalityItems
		}
		return modified
	};
	const columns = ref(_columns.map(map2DropDown));
	const columnsOverlay = ref(_columnsOverlay.map(map2DropDown));
	
	const onFindButtonClick = ()=>{
		console.info('onFindButtonClick');
		showFind.value = !showFind;
	};
    
	const onClickMarker = (m) => {
		console.info('onClickMarker',m);
		navigateTo(`/switchboard/${m.id}/ledger`, m);
	};

	const onExportForBatchClick = () => {
            console.debug('onExportForBatchClick');
	};

	const onBatchImportClick = () => {
		console.debug('clickBatchImport');
	};

	const onAdvancedSearchClick = () => {
		console.debug('clickFAdvancedSearch');
		showFind.value = !showFind;
	};
    
	const onExportListClick = () => {
		console.debug('onExportListClick');
	};

	const onOutLedgerClick = () => {
		console.debug('clickOutLedger');
	};

	const onDeleteRowClick = () => {
		console.debug('clickDelete');
	};

	const onMarkerListRowclick = (e) => {
		const switchboard = e.row;
		console.debug('onMarkerListRowclick', switchboard);
	};
</script>