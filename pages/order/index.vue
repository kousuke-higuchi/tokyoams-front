<template>
    <h2>委託データ　発行・納品システム</h2>
    <v-container fluid>
        <v-row>
            <v-card>
                <v-card-title class="card-header">
                    登録手順
                </v-card-title>
                <v-card-text>
                    以下の手順で、点検業者に発注データを作成します。<br>
              

                    <ol>
                        <li>
                            新規登録ボタンをクリックして、各種情報を入力します。
                        </li>
                        <li>
                            以下の一覧表に追加されます。
                        </li>
                    </ol>

                </v-card-text>

            </v-card>
        </v-row>

        <v-row>
            <v-col>

            </v-col>
        </v-row>
        <v-row>
            <v-card>
                <v-card-text>
                    <v-btn v-on:click="clickRegNewOrder()" color="primary" size="small" href="/order/regNewOrder">
                        新規データ発行
                    </v-btn>
                    <div class="mt-2">
                        <vue-good-table :columns="columns" :rows="orderData" :pagination-options="{
                            enabled: true
                        }">
                            <template #table-row="props">
                                <span v-if="props.column.field == 'state'">
                                    <span v-if="props.row.state == '更新済'"
                                        style="font-weight: bold; color: white; background-color: blue;">{{
                                                props.row.state
                                        }}
                                    </span>
                                    <span v-if="props.row.state == '発注待'"
                                        style="font-weight: bold; color: white; background-color: purple;">{{
                                                props.row.state
                                        }}
                                    </span>
                                    <span v-if="props.row.state == '発注済'"
                                        style="font-weight: bold; color: white; background-color: red;">{{
                                                props.row.state
                                        }}
                                    </span>
                                    <span v-if="props.row.state == '確認中'"
                                        style="font-weight: bold; color: white; background-color: greenyellow;">{{
                                                props.row.state
                                        }}
                                    </span>
                                </span>
                                <span v-else-if="props.column.field == 'order_name'">
                                    <span v-if="props.row.state == '更新済'">{{
                                                    props.row.order_name
                                            }}
                                    </span>
                                    <span v-else><a href="">{{ props.row.order_name }}</a></span>
                                </span>
                                <span v-else>
                                    {{ props.formattedRow[props.column.field] }}
                                </span>
                            </template>
                        </vue-good-table>


                    </div>

                </v-card-text>
            </v-card>


        </v-row>

    </v-container>
</template>

<script lang="ts">
import orderJson from "@/assets/orderData.json"
import { builtinModules } from "module";
export default {
    data() {
        return {
            orderData: orderJson,
            // 一覧の列情報
            columns: [
                {
                    label: '施設種別',
                    field: 'facility_kind',
                    sortable: false,
                    width: '8em',
                    filterOptions: {
                        enabled: true,
                        placeholder: '施設種別選択',
                    }
                },
                {
                    label: '業務名',
                    field: 'order_name',
                    sortable: false,
                    filterOptions: {
                        enabled: true,
                        placeholder: '業務名で検索',
                    }
                },
                {
                    label: 'データ作成日',
                    field: 'order_date',
                    sortable: false,
                    width: '10em',
                    filterOptions: {
                        enabled: true,
                        placeholder: '発注作成日で検索',
                    }
                },
                {
                    label: '受注業者',
                    field: 'order_company',
                    sortable: false,
                    filterOptions: {
                        enabled: true,
                        placeholder: '受注業者で検索',
                    }
                },
                {
                    label: '受注担当者',
                    field: 'order_person',
                    sortable: false,
                    filterOptions: {
                        enabled: true,
                        placeholder: '受注担当者で検索',
                    }
                },
                {
                    label: '都担当者',
                    field: 'to_person',
                    sortable: false,
                    filterOptions: {
                        enabled: true,
                        placeholder: '都担当者で検索',
                    }
                },
                {
                    label: '工期',
                    field: 'order_period',
                    sortable: false,
                    width: '10em',
                    filterOptions: {
                        enabled: true,
                        placeholder: '工期で検索',
                    }
                },
                {
                    label: '状態',
                    field: 'state',
                    width: '5em',
                    sortable: false,
                    tooltip: '発注待：業者がダウンロードしていない状態\n発注済：業者が現在作成中の状態\n'
                }

            ]
        }
    },
    methods: {
        clickRegNewOrder() {
            console.debug('regNewOrder');
        },
        clickEditOrder() {
            console.debug('clickEditOrder');
        },
    }
}
</script>

<style>

ol {
  background: #f3fbff;
  border: 2px skyblue dashed;
}

.card-header
{
    background: lightpink;
    border: 2px lightcoral ;

}

</style>