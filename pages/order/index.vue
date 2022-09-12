<template>
    <h2>委託データ　発行・納品システム</h2>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="card-header">
                        登録手順
                    </v-card-title>
                    <v-card-text>
                        以下の手順で、点検業者に発注データを作成します。<br>
                        <ol>
                            <li>
                                新規登録ボタンをクリックして、各種情報を入力します。（別画面が表示されます。）
                            </li>
                            <li>
                                以下の一覧表に追加され、業者に直接更新用データをダウンロードするためのURLがメールで配布されます。
                            </li>
                            <li>
                                業者から更新用のデータのアップロードが完了すると、納品データ確認中の状態となります。問題なければ、ここで承認をクリックします。(業務名をクリックすることでデータをダウンロードできます。)

                            </li>
                            <li>
                                承認後データの更新が開始されます。問題なければ、ここで承認をクリックします。

                            </li>
                        </ol>

                    </v-card-text>

                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-card-title class="card-header2">
                        状態の意味
                    </v-card-title>
                    <v-card-text>
                        <ul>
                            <li>
                                データ作成済み：サーバの方で更新用データが作成完了した状態です。
                            </li>
                            <li>
                                ダウンロード済み：業者の方で更新用データのダウンロードが完了した状態です。
                            </li>
                            <li>
                                納品データ確認中：業者の方で更新用データのダウンロードが完了した状態です。
                            </li>
                            <li>
                                更新済み：システムのデータベースに納品データの更新が完了した状態です。
                            </li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-col>
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
                            enabled: true,perPage: 1000,    rowsPerPageLabel: '1ページあたりの行数', nextLabel: '次へ', prevLabel: '前へ',    ofLabel: '/',
                        }">
                            <template #table-row="props">
                                <span v-if="props.column.field == 'state'">
                                    <span v-if="props.row.state == 'データ作成済み'"
                                        style="font-weight: bold; color: white; background-color: blue;">{{
                                        props.row.state
                                        }}
                                    </span>
                                    <span v-if="props.row.state == 'ダウンロード済み'"
                                        style="font-weight: bold; color: white; background-color: purple;">{{
                                        props.row.state
                                        }}
                                    </span>
                                    <span v-if="props.row.state == '納品データ確認中'"
                                        style="font-weight: bold; color: white; background-color: green;">{{
                                        props.row.state
                                        }}
                                    </span>
                                    <span v-if="props.row.state == '更新済み'"
                                        style="font-weight: bold; color: white; background-color: lightslategray;">{{
                                        props.row.state
                                        }}
                                    </span>
                                </span>
                                <span v-else-if="props.column.field == 'order_name'">
                                    <span v-if="props.row.state == '納品データ確認中'">
                                        <a href="">
                                            {{ props.row.order_name }}
                                        </a>
                                    </span>
                                    <span v-else>
                                        {{ props.row.order_name }}
                                    </span>
                                </span>
                                <span v-else-if="props.column.field == 'operate'">
                                    <span v-if="props.row.state == '納品データ確認中'">
                                        
                                            <v-btn  color="primary" size="small">承認</v-btn>
                                        
                                    </span>
                                    <span v-else>
                                        -
                                    </span>
                                </span>
                                <span v-else-if="props.column.field == 'edit'">
                                    <span v-if="props.row.state == '更新済み'">
                                        -                                        
                                    </span>
                                    <span v-else>
                                            <v-btn  color="primary" size="small">編集</v-btn>
                                    </span>
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
                    width: '10em',
                    sortable: false,
                    tooltip: 'データ作成済み：業者がダウンロードしていない状態\n発注済：業者が現在作成中の状態\n'
                },
                {
                    label: '操作',
                    field: 'operate',
                    width: '5em',
                    sortable: false,
                },
                {
                    label: '編集',
                    field: 'edit',
                    width: '5em',
                    sortable: false,
                },
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

.card-header {
    background: lightpink;
    border: 2px lightcoral;

}

.card-header2 {
    background: rgb(193, 235, 235);
    border: 2px lightseagreen;
}
</style>