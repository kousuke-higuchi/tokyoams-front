<template>
  <v-row>
    <v-col md="3" cols="12">
      <bridge-side-card-details selectTab="inspection" />
    </v-col>
    <v-col md="5" cols="12">
      <v-card elevation="3">
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">点検調書損傷図</div>
          </v-card-title>
          <v-card-actions>
            <v-select label="径間番号" v-model="select" :items="histItems" item-title="select" variant="outlined"
              density="compact" hide-details="false"></v-select>
          </v-card-actions>
        </div>
        <v-card-text>
          <v-img :src="getImageUrl(-1)"></v-img>
        </v-card-text>
      </v-card>
    </v-col>
      <v-col md = "4" cols="12">
      <v-card elevation="4" >
        <div class="d-flex">
          <v-card-title>
            <div class="font-weight-bold">関連損傷写真表示</div>
          </v-card-title>
          <v-card-actions>
            <v-select label="径間番号" v-model="select" :items="histItems" item-title="select" variant="outlined"
              density="compact" hide-details="false"></v-select>
            <v-select label="損傷ランク" v-model="select" :items="histItems" item-title="select" variant="outlined"
              density="compact" hide-details="false"></v-select>
          </v-card-actions>
        </div>
        <v-card-text>
          
          <v-col v-for="(picture, index) in pictures" :key="picture.img" md="10" cols="12">
              <v-card class="rounded-0">
                <v-img :src= getImageUrl(index)></v-img>
              </v-card>
            </v-col>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      select: '全て',
      histItems: ['全て', '1', '2', '3'],
      rankItem: ['全て', 'a', 'b', 'c', 'd', 'e'],
      memo: ['許容できる範囲のひび割れ',  '許容できるサビ', '水漏れシミ有(許容)', '塗装中', '多少のひび割れ', '多少のひび割れ' ],
      pictures: [
        {
          img: '../../assets/img/dmg/bridgeDetail2_7_1.jpg',
          no: 1,
          material: '石',
          createDate: '2017年10月25日',
          memo: '許容できる範囲のひび割れ',
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_7_2.jpg',
          no: 2,
          material: '鉄鋼',
          createDate: '2017年10月25日',
          memo: '許容できるサビ',
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_7_3.jpg',
          no: 3,
          material: '石',
          createDate: '2017年10月25日',
          memo: '水漏れシミ有(許容)',
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_7_4.jpg',
          no: 4,
          material: '鉄鋼',
          createDate: '2017年10月25日',
          memo: '塗装中',
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_3_2.jpg',
          no: 5,
          material: '石',
          createDate: '2017年10月25日',
          memo: '多少のひび割れ',
        },
        {
          img: '../../assets/img/dmg/bridgeDetail2_3_2.jpg',
          no: 6,
          material: '石',
          createDate: '2017年10月25日',
          memo: '多少のひび割れ',
        },
      ]
    }
  },
  methods:{
    
    getImageUrl(index){
      switch(index){
        case -1: return new URL(`../../assets/img/dmg/damageFig.jpg`, import.meta.url).href; break;
      
         case 0: return new URL(`../../assets/img/dmg/bridgeDetail2_7_1.jpg`, import.meta.url).href; break;
         case 1: return new URL(`../../assets/img/dmg/bridgeDetail2_7_2.jpg`, import.meta.url).href; break;
         case 2: return new URL(`../../assets/img/dmg/bridgeDetail2_7_3.jpg`, import.meta.url).href; break;
         case 3: return new URL(`../../assets/img/dmg/bridgeDetail2_7_4.jpg`, import.meta.url).href; break;
         case 4: return new URL(`../../assets/img/dmg/bridgeDetail2_3_2.jpg`, import.meta.url).href; break;
         case 5: return new URL(`../../assets/img/dmg/bridgeDetail2_3_2.jpg`, import.meta.url).href; break;
      }
    },
  }
})
</script>
