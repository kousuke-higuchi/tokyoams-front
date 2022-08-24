<template>
    <h2>委託データ　発行・納品システム</h2>
    <v-container fluid>
        <v-row>
            <v-col >
              <v-btn v-on:click="clickRegNewOrder()"
                color= "primary"
                size="small"
              >
                新規データ発行
              </v-btn>

            </v-col>
        </v-row>
        <v-row>
            <div class="mt-2">
                <vue-good-table
                :columns="columns"
                :rows="orderData"
                :pagination-options="{
                  enabled: true
                }">

                </vue-good-table>


            </div>

        </v-row>

    </v-container>
</template>

<script lang="ts">
import orderJson from "@/assets/orderData.json"
export default{
    data() {
        return {
            orderData: orderJson,
            // 一覧の列情報
            columns:[
                {
                    label:'施設種別',
                    field:'facility_kind',
                    sortable:false,
                    filterOptions:{
                        enabled:true,
                        placeholder:'施設種別選択',
                    }
                },
                {
                    label:'業務名',
                    field:'order_name',
                    sortable:false,
                    filterOptions:{
                        enabled:true,
                        placeholder:'業務名で検索',
                    }
                },
                {
                    label:'データ作成日',
                    field:'order_date',
                    sortable:false,
                    filterOptions:{
                        enabled:true,
                        placeholder:'発注作成日で検索',
                    }
                },
                {
                    label:'受注業者',
                    field:'order_company',
                    sortable:false,
                    filterOptions:{
                        enabled:true,
                        placeholder:'受注業者で検索',
                    }
                },
                {
                    label:'受注担当者',
                    field:'order_person',
                    sortable:false,
                    filterOptions:{
                        enabled:true,
                        placeholder:'受注担当者で検索',
                    }
                },
                {
                    label:'都担当者',
                    field:'to_person',
                    sortable:false,
                    filterOptions:{
                        enabled:true,
                        placeholder:'都担当者で検索',
                    }
                },
                {
                    label:'工期',
                    field:'order_period',
                    sortable:false,
                    filterOptions:{
                        enabled:true,
                        placeholder:'工期で検索',
                    }
                },
                {
                    label:'状態',
                    field:'order_stated',
                    sortable:false
                }

            ]
       }
    },
    methods:{
        clickRegNewOrder() {
            console.debug('regNewOrder');
        },
        clickEditOrder() {
            console.debug('clickEditOrder');
        },
    }
}
</script>