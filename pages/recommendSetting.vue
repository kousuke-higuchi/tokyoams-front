<template>
    <h2>推奨閲覧設定(PC)</h2>
    <v-container fluid>

        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="card-header">
                        ブラウザの設定
                    </v-card-title>
                    <v-card-text>
                        文字サイズは、100%としてください。
                        <v-img :src = "imagePath1" max-width="300"></v-img>
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="card-header">
                        PCのディスプレイ設定
                    </v-card-title>
                    <v-card-text>
                        デスクトップから右クリックし、「ディスプレイ設定」を開き、テキスト、アプリ、その他の項目のサイズを変更するを100%としてください。
                        <v-img :src = "imagePath2" max-width="600"></v-img>
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </v-container>


</template>

<script lang="ts" setup>
    const imagePath1 = new URL("../../assets/help/chrome_fontsize.png", import.meta.url).href;
    const imagePath2 = new URL("../../assets/help/windows_display.png", import.meta.url).href;

</script>