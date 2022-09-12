<template>
    <h2>施設情報　新規登録情報　入力フォーム</h2>
    <v-container fluid>

        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="card-header">
                        施設新規登録について
                    </v-card-title>
                    <v-card-text>
                        施設の新規登録は、以下の入力情報を元に、本システムの保守業者が実施します。<br>
                        登録申請ボタンをクリック後、すぐに登録される訳ではなく、以下の項目以外に必要な情報があれば、保守業者より直接メール連絡が発生します。
                        
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>


        <v-row>
            <v-col cols="12" class="py-2">
                <h3>
                    <p>■システムに新規登録する施設種別を選択してください。</p>
                </h3>

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
            <v-col cols="12" class="py-2">
                <h3>
                <p>■申請者の情報を入力してください。</p>
            </h3>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="4" class="py-2">
                <div>担当者名<v-text-field></v-text-field>
                </div>
            </v-col>

            <v-col cols="4" class="py-2">
                <div>メールアドレス<v-text-field></v-text-field>
                </div>
            </v-col>
        </v-row>


        <v-row>
            <v-col cols="12" class="py-2">
                <h3><p>■施設の基本情報を入力してください。</p></h3>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="4" class="py-2">
                <div>施設番号<v-text-field></v-text-field>
                </div>
            </v-col>
            <v-col cols="4" class="py-2">
                <div>施設名<v-text-field></v-text-field>
                </div>
            </v-col>
            <v-col cols="4" class="py-2">
                <div>事務所<v-text-field></v-text-field>
                </div>
            </v-col>
            <v-col cols="4" class="py-2">
                <div>工区<v-text-field></v-text-field>
                </div>
            </v-col>
            <v-col cols="4" class="py-2">
                <div>路線名<v-text-field></v-text-field>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-btn v-on:click="clickFAdvancedSearch()" color="primary" size="small">
                登録申請
            </v-btn>
            <v-btn class="ml-2" v-on:click="onExportButtonClick()" color="primary" size="small">
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