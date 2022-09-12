<template>
    <h2>発行データ新規登録</h2>
    <v-container fluid>
        <v-row>
            <v-col cols="12" class="py-2" md="10">
                <p>■対象の施設種別を選択してください。</p>

                <v-btn-toggle v-model="text" tile color="deep-purple accent-3">
                    <v-btn value="1">
                        <span class="hidden-sm-and-down">橋梁</span>
                    </v-btn>
                    <v-btn value="2">
                        歩道橋
                    </v-btn>
                    <v-btn value="3">
                        トンネル
                    </v-btn>
                    <v-btn value="5">
                        道路施設
                    </v-btn>
                    <v-btn value="12">
                        道路照明
                    </v-btn>
                    <v-btn value="13">
                        障害物表示灯
                    </v-btn>
                    <v-btn value="14">
                        配電盤
                    </v-btn>
                    <v-btn value="15">
                        道路標識
                    </v-btn>
                    <v-btn value="16">
                        反射鏡
                    </v-btn>
                </v-btn-toggle>
            </v-col>
            <v-col cols="12" class="py-2" md="2">
                <v-btn color="primary" size="small" href="/order/regNewOrder">
                    新規データ発行
                </v-btn>

            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="py-2">
                <p>■業務名、発注日、工期を入力してください。</p>

            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4" class="py-2">
                <div>業務名<v-text-field></v-text-field>
                </div>
            </v-col>
            <v-col cols="4" class="py-2">
                <div>発注日<v-text-field></v-text-field>
                </div>
            </v-col>
            <v-col cols="4" class="py-2">
                <div>工期<v-text-field></v-text-field>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" class="py-2">
                <p>■委託先の情報を入力してください。</p>

            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4" class="py-2">
                <div>受注業者<v-text-field></v-text-field>
                </div>
            </v-col>
            <v-col cols="4" class="py-2">
                <div>担当者名<v-text-field></v-text-field>
                </div>
            </v-col>
            <v-col cols="4" class="py-2">
                <div>担当者メールアドレス<v-text-field></v-text-field>
                </div>
            </v-col>
        </v-row>


        <v-row>
            <v-col cols="12" class="py-2">
                <p>■対象施設を選択してください。</p>

            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" class="py-2">
            <vue-good-table :columns="columns" :rows="orderData" :select-options="{ enabled: true }" :pagination-options="{
                            enabled: true,perPage: 1000,    rowsPerPageLabel: '1ページあたりの行数', nextLabel: '次へ', prevLabel: '前へ',    ofLabel: '/',
                            
                        }">

                        </vue-good-table>

                    </v-col>
                        

        </v-row>

    </v-container>
</template>
<script lang="ts">
import orderJson from "@/assets/bridge.json"
export default {
    data() {
        return {
            column: null,
            row: null,
            orderData: orderJson,
            // 一覧の列情報
            columns: [
                {
                    label: '施設名',
                    field: 'bridge_name',
                    sortable: false,
                    width: '15em',
                    filterOptions: {
                        enabled: true,
                        placeholder: '施設名',
                    }
                },
                {
                    label: '工区',
                    field: 'area',
                    sortable: false,
                    width: '15em',
                    filterOptions: {
                        enabled: true,
                        placeholder: '工区',
                    }
                },
                {
                    label: '路線名',
                    field: 'route_name',
                    sortable: false,
                    width: '15em',
                    filterOptions: {
                        enabled: true,
                        placeholder: '路線名',
                    }
                },
            ]
        }
    },
}
</script>