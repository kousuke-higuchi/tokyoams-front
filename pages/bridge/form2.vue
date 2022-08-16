<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <side-card-details/>
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <div class="d-flex">
            <v-card-title class="font-weight-bold">点検履歴選択</v-card-title>
            <v-card-actions>
              <v-select
                v-model="select"
                :items="histItems"
                item-title="select"
                variant="outlined"
                density="compact"
                hide-details="false"
              ></v-select>
            </v-card-actions>
            <v-btn 
            class="ml-auto" 
            color= "primary ma-3"
            href="/inspectionHistory"
            >
              点検履歴一覧表示
            </v-btn>
          </div>
          <vue-good-table
          :columns="columns"
          :rows="rows"
          compactMode>
          </vue-good-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return{
      select: '9次:2019/12/11',
      histItems:['9次:2019/12/11', '8次:2017/12/15', '7次:2002/09/25', '6次:1997/11/04'],
      //TODO:カラム名が確定したら指定する
      columns: [
        {
          label: '音',
          field: 'sound',
          sortable: false,
          thClass:'text-center',
        },
        {
          label: '橋梁番号',
          field: 'bridge_id',
          sortable: false,
          thClass:'text-center',
        },
        {
          label: '橋梁名',
          field: 'bridge_name',
          sortable: false,
        },
        {
          label: '工区',
          field: 'area_id',
          sortable: false,
        },
        {
          label:'路線名',
          field: 'route_name',
          sortable: false,
        },
        {
          label: '竣工年次',
          field: 'conpletion_year',
          type: 'date',
          dateInputFormat:'yyyyMMdd',
          dateOutputFormat: 'yyyy',
          sortable: false,
        },
        {
          label: '摘用示方書',
          sortable: false,
        },
        {
          label: '上部構造形式',
          sortable: false,
        },
        {
          label: '橋長',
          sortable: false,
        },
        {
          label: '総合評価',
          sortable: false,
        },
        {
          label: '径間別評価',
          sortable: false,
        },
        {
          label: '径間番号',
          sortable: false,
        },
        {
          label: '主桁',
          sortable: false,
        },
        {
          label: '横桁',
          sortable: false,
        },
        {
          label: '縦桁',
          sortable: false,
        },
        {
          label: '対傾構',
          sortable: false,
        },
        {
          label: '機構',
          sortable: false,
        },
        {
          label: '床版',
          sortable: false,
        },
        {
          label: '駆体',
          sortable: false,
        },
        {
          label: '基礎',
          sortable: false,
        },
        {
          label: '駆体',
          sortable: false,
        },
        {
          label: '基礎',
          sortable: false,
        },
        {
          label: '支承',
          sortable: false,
        },
        {
          label: '高欄',
          sortable: false,
        },
        {
          label: '防護柵',
          sortable: false,
        },
        {
          label: '地覆',
          sortable: false,
        },
        {
          label: '舗装',
          sortable: false,
        },
        {
          label: '伸縮装置',
          sortable: false,
        },
        {
          label: '排水設備',
          sortable: false,
        },
        {
          label: '落橋防止',
          sortable: false,
        },
        {
          label: '点検設備',
          sortable: false,
        },
        {
          label: 'しゃ音設備',
          sortable: false,
        },
        {
          label: '照明設備',
          sortable: false,
        },
        {
          label: '標識柱',
          sortable: false,
        },
        {
          label: '添架物',
          sortable: false,
        },
        {
          label: '判定区分',
          sortable: false,
        }
      ],
      rows: [],
    }
  },
})
</script>