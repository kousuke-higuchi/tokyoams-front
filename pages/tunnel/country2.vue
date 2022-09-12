<template>
  <v-row>
    <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
      <!-- <p> {{ child_extend }}</p> -->
      <tunnel-side-card-details @isExtend='child_extend = $event' selectTab="country" />
    </v-col>
    <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
      <v-card elevation="3" class="ledger">
        <v-card-text class="d-flex">
          <v-sheet>状況写真(損傷状況)</v-sheet>
          <v-sheet class="ml-auto">様式(その2)</v-sheet>
        </v-card-text>
        <v-container>
          <v-sheet class="text-caption">〇部材単位の判定区分がⅡ、Ⅲ又はⅣの場合には、直接関連する不具合の写真を掲載のこと。</v-sheet>
          <v-sheet class="text-caption">〇写真は、不具合の程度が分かるように添付すること。</v-sheet>
          <v-row no-gutters>
            <V-col cols="6" v-for="(item, i) in tableItems" :key="i">
              <v-table density="compact">
                <thead>
                  <tr>
                    <th class="text-center">{{ item.title }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <v-container>
                        <v-img :src="item.img"></v-img>
                      </v-container>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </V-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      child_extend: true,
      //仮データ
      tableItems: [
        { title: 'カルバート本体(頂版)【判定区分:Ⅲ】', img: '../../assets/img/dmg/tnlCountry2view1.jpg' },
        { title: '継手(頂版)【判定区分:Ⅲ】', img: '../../assets/img/dmg/tnlCountry2view2.jpg' },
        { title: 'ウイング(頂版)【判定区分:Ⅱ】', img: '../../assets/img/dmg/tnlCountry2view3.jpg' },
        { title: 'その他(頂版)【判定区分:Ⅱ】', img: '../../assets/img/dmg/tnlCountry2view4.jpg' },
      ]
    }
  }
})
</script>