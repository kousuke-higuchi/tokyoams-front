<template>
    <h2>業務支援機能</h2>
    <v-container fluid>
        <v-card class="mainCards">
            <p class="mainCardsTitle">業務支援機能</p>
            <v-container>
                <v-card class="feature" v-for="(featureCard, i) in featureCards" :key="i">
                    <!-- <ribbon-box :title="featureCard.title"></ribbon-box> -->
                    <v-container v-for="childfeatureCard in childfeatureCards[i]" :key="childfeatureCard.title">
                        <v-card class="childfeature titleCenter" :href="childfeatureCard.url">
                            <div>
                                <p style="padding:0px 10px">{{ childfeatureCard.title }}</p>
                            </div>
                        </v-card>
                        <p style="font-size: xx-small; color: darkred;">{{ childfeatureCard.explain }}</p>

                    </v-container>
                </v-card>
            </v-container>
        </v-card>


    </v-container>
</template>

    
<script>
export default {
    data: () => ({
        featureCards: [
            { title: '損傷マップ' },
            { title: '路面性状MNIマップ' },
            { title: '損傷写真一覧' },
            { title: '機能追加要望' },
        ],
        childfeatureCards: [
            [{ ownertitle: '損傷マップ’（国）', title: '損傷マップ（国）', url: '/function/inspMap', explain: '国様式のある施設種別の位置情報を健全度ごとに色分けし地図上に表示します。' },],
            [{ ownertitle: '路面性状MNIマップ', title: '路面性状MNIマップ', url: '/function/mniMap', explain: '路面性状のMNI情報を表示します。' },],
            [{ ownertitle: '損傷写真一覧', title: '損傷写真一覧', url: '/', explain: '橋梁・歩道橋・トンネルの損傷写真の一覧表を出力します。' },],
            [{ ownertitle: '機能追加要望', title: '機能追加要望', url: '/', explain: '機能追加の要望はこちらにご連絡ください。' },],
        ],
    }),
}
</script>


<style scoped>
.mainCards {
  border-radius: 0.77ex;
  margin: 10px 0px;
}
.feature {
  background: rgb(210, 232, 252);
  margin: 10px;
}

.childfeature {
  min-height: 80px;
}

.titleCenter {
  text-align: center;
  display: flex;
  align-items: center;
}

.recodeTableTitle {
  margin: 10px 0px;
  border-bottom: 1px solid #cccccc;
}


</style>