<template>
    <h2>発行データ新規登録</h2>
    <v-container fluid>
        <v-row>
            <v-col cols="12" class="py-2">
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
        </v-row>
        <v-row>
            <v-col cols="12" class="py-2">
                <p>■委託先の情報を入力してください。</p>

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