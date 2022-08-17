<template>
  <div>
    <v-row>
      <v-col md="8" cols="12">
    <v-card class="mainCards">
      <p class="mainCardsTitle">対象の施設種別を選択します</p>
      <v-container fluid>
      <v-row>
        <!-- 単独アイコンの項目 -->
        <v-col
          v-for="facilitycard in facilityCards"
          :key="facilitycard.title"
          sm="3"
          cols="12"
        >
          <v-card 
            class="facility" 
            :href='facilitycard.url'
            color=#17a2b8>
            <ribbon-box :title="facilitycard.title" />
            <v-container>
              <v-img class="cardimg" :src="facilitycard.src"></v-img>
            </v-container>
          </v-card>
        </v-col>
        <!-- グループ化された項目 -->
        <v-col
          v-for="(group,i) in groupedFacirityCards"
          :key="i"
          md="6"
          cols="12"
        >
          <v-card class="facility">

            <ribbon-box :title="group.title"/>

            <v-container>
              <v-row dense>
                <template v-for="(item, i) in group.items" :key="i">
                  <v-col md="6" sm="6" cols="12">
                    <home-titled-card
                      :href="item.url"
                      :title="item.title"
                      :img-src="item.src"
                    />
                  </v-col>
                  <v-col  v-if="i==0"></v-col>
                </template>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      </v-container>
    </v-card>
    </v-col>

    <v-col md="4" cols="12">
    <v-card class="mainCards">
      <p class="mainCardsTitle">各種機能</p>
      <v-container>
            <v-card
              class="feature"
              v-for="(featureCard,i) in featureCards"
              :key="i">
              <ribbon-box :title="featureCard.title"></ribbon-box>
              <v-container
              v-for="childfeatureCard in childfeatureCards[i]"
              :key="childfeatureCard.title">
              <v-card 
              class="childfeature titleCenter"
              :href="childfeatureCard.url">
                <p style="padding:0px 10px">{{childfeatureCard.title}}</p>
              </v-card>
              </v-container>
            </v-card>
      </v-container>
    </v-card>
    </v-col>
    </v-row>

    <p class='recodeTableTitle'>履歴一覧</p>  
    <vue-good-table 
      :columns="columns" 
      :rows="rows"
      >
        <template #table-row="props">
          <span v-if="props.column.field=='details'">
            <nuxt-link to="/">
              {{props.row.details}}
            </nuxt-link>
          </span>
          <span v-else>
            {{props.formattedRow[props.column.field]}}
          </span>
        </template>
    </vue-good-table>
  </div>
</template>

<script>
  export default {
    data: () => ({
      facilityCards: [
        { title: '橋梁', src: 'assets/img/facility_bridge.jpg', url: '/bridge'},
        { title: '歩道橋', src: 'assets/img/facility_pedest.jpg', url: '/footbridge'},
        { title: 'トンネル', src: 'assets/img/facility_tunnel.jpg', url: '/tunnel'},
        { title: '舗装', src: 'assets/img/facility_pave.jpg', url: '/pavement'},
        ],
      groupedFacirityCards:[{
          title: "道路施設",
          items:
          [
            {title: '共同溝', src:'assets/img/facility_facility1.jpg',url: '/'},
            {title: '擁壁',src:'assets/img/facility_facility2.jpg',url: '/'},
            {title: '掘割道路',src:'assets/img/facility_facility3.jpg',url: '/'},
            {title: '組立歩道',src:'assets/img/facility_facility4.jpg',url: '/'},
            {title: '桟道',src:'assets/img/facility_facility5.jpg',url: '/'},
            {title: '地下歩行者道',src:'assets/img/facility_facility6.jpg',url: '/'},
            {title: 'ロックシェッド', src:'assets/img/facility_facility7.jpg',url: '/'},
          ],
        },
        {
          title: "道路附属物",
          items: [
            {title: '道路照明', src:'assets/img/facility_accessory1.jpg',url: '/streetlight'},
            {title: '配電盤', src:'assets/img/facility_accessory2.jpg',url: '/switchboard'},
            {title: '障害物', src:'assets/img/facility_accessory3.jpg',url: '/blinker'},
            {title: '道路標識', src:'assets/img/facility_accessory4.jpg',url: '/sign'},
            {title: '道路反射鏡', src:'assets/img/facility_accessory5.jpg',url: '/'},
          ],
        }
      ],
      featureCards:[
        {title: '施設新規登録'},
        {title: '発注情報登録'},
        {title: '更新依頼処理'},
      ], 
       childfeatureCards:[
        [{ownertitle: '施設新規登録',title: '道路資産管理システム', url: '/'},
         {ownertitle: '施設新規登録',title: '新規施設を登録する場合', url: '/'},],
        [{ownertitle: '発注情報登録',title: '発注登録サイト', url: '/'},],
        [{ownertitle: '更新依頼処理',title: '更新依頼の処理', url: '/'},],
       ],
      columns: [
      {
        label: '日時',
        field: 'createdAt',
        type:'date',
        dateInputFormat: 'yyyy-MM-dd',
        dateOutputFormat: 'yyyy/MM/dd',
      },
      {
        label: '施設種別',
        field: 'facilityType',
      },
      {
        label: '処理種別',
        field: 'processingType',
      },
      {
        label: '内容',
        field: 'details',
      },
      {
        label: '担当事務所',
        field: 'office',
      },
      ],
      rows: [
      { createdAt: "2022-06-21", facilityType: '橋梁', processingType:'補修履歴登録', details: '〇〇施設の補修履歴が登録されました。',office:'第三建設事務所' },
      { createdAt: "2022-06-22", facilityType: '歩道橋', processingType:'補修履歴登録', details: '〇〇委託の更新依頼が登録されています。処理を行ってください。',office:'第三建設事務所' },
      ]
    }),
  }
</script>

<style scoped>
.mainCards{
  border-radius: 0.77ex;
  margin: 10px 0px;
}
.mainCardsTitle{
  color:white;
  background-color:#007bff;
  padding:10px;
  border-top-right-radius:0.77ex;
  border-top-left-radius:0.77ex;
}
.facility{
  background: #17a2b8;
}
/* .cardimg{
  max-height: 150px;
} */
.feature{
  background: rgb(210, 232, 252);
  margin: 10px;
}
.childfeature{
  min-height: 80px;
}
.titleCenter{
  text-align: center;
  display: flex;
  align-items: center;
}
.recodeTableTitle{
  margin:10px 0px;
  border-bottom:1px solid #cccccc;
}
</style>