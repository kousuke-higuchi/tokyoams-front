<template>
    <h2>施設情報　新規登録情報　入力フォーム</h2>
    <v-container fluid>
        <v-row>
            <v-col cols="12" class="py-2">
                <p>新設する施設種別を選択してください。</p>

                <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
                    <v-btn value="1">
                        <span class="hidden-sm-and-down">橋梁</span>                    
                    </v-btn>

                    <v-btn value="2">
                        歩道橋
                    </v-btn>

                    <v-btn value="3">
                        トンネル
                    </v-btn>

                    <v-btn value="4">
                        共同溝
                    </v-btn>
                    <v-btn value="5">
                        擁壁
                    </v-btn>
                    <v-btn value="6">
                        掘割道路
                    </v-btn>
                    <v-btn value="7">
                        組立歩道
                    </v-btn>
                    <v-btn value="8">
                        桟道
                    </v-btn>
                    <v-btn value="9">
                        地下歩行者道
                    </v-btn>
                    <v-btn value="10">
                        ロックシェッド
                    </v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4" class="py-2">
            <div>担当者名<v-text-field></v-text-field>
            </div>
            <div>メールアドレス<v-text-field></v-text-field>
            </div>
            <div>施設番号<v-text-field></v-text-field>
            </div>
            <div>施設名<v-text-field></v-text-field>
            </div>
            <div>事務所<v-text-field></v-text-field>
            </div>
            <div>工区<v-text-field></v-text-field>
            </div>
            <div>路線名<v-text-field></v-text-field>
            </div>
            </v-col>
        </v-row>        
        <v-row>
            <v-btn v-on:click="clickFAdvancedSearch()"
            color= "primary"
            size="small"
            >
            登録申請
            </v-btn>
            <v-btn class="ml-2" v-on:click="onExportButtonClick()"
            color="primary"
            size="small"
            >
            戻る
            </v-btn>
        </v-row>
    </v-container>
</template>
<script lang="ts">
export default {
    data() {
        return {
            column: null,
            row: null,
        }
    },
}
</script>