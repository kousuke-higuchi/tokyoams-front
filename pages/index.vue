<template>
  <div>
    <v-row>
      <v-col md="8" cols="12">
        <v-card class="mainCards">
          <p class="mainCardsTitle">対象の施設種別を選択</p>
          <v-container fluid>
            <v-row>
              <!-- 単独アイコンの項目 -->
              <v-col v-for="facilitycard in facilityCards" :key="facilitycard.title" sm="3" cols="12">
                <v-card class="facility">
                  
                  <v-card :title='facilitycard.title' class="facility-header"></v-card>
                  <v-card class="text-subtitle-1 btn btn--red btn--radius btn--cubic btn--font" :href='facilitycard.url'
                    :title='facilitycard.title' append-icon="mdi-chevron-right"  >
                  </v-card>
                  <!-- <a href="" class="btn btn--red btn--radius btn--cubic">'facilitycard.title'<i class="fas fa-angle-right fa-position-right"></i></a> -->
                  <!-- <ribbon-box :title="facilitycard.title" /> -->
                  <!-- <v-container>
              <v-img class="cardimg" :src="facilitycard.src"></v-img>
            </v-container>-->
                </v-card>
              </v-col>
              <!-- グループ化された項目 -->
              <v-col v-for="(group, i) in groupedFacirityCards" :key="i" md="6" cols="12">
                <v-card class="facility">

                  <!-- <ribbon-box :title="group.title" /> -->
                  <v-card :title="group.title" class="facility-header"></v-card>
                  <v-container>
                    <v-row dense>
                      <template v-for="(item, i) in group.items" :key="i">
                        <v-col md="6" sm="6" cols="12">
                          <v-card class="btn btn--red btn--radius btn--cubic" :href='item.url' :title='item.title'
                            append-icon="mdi-chevron-right">
                          </v-card>
                          <!-- <home-titled-card
                      :href="item.url"
                      :title="item.title"
                      :img-src="item.src"
                      :explain="item.explain"
                    /> -->
                        </v-col>
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
      </v-col>
    </v-row>

    <p class='recodeTableTitle'>履歴一覧</p>
    <vue-good-table :columns="columns" :rows="rows">
      <template #table-row="props">
        <span v-if="props.column.field == 'details'">
          <nuxt-link to="/">
            {{ props.row.details }}
          </nuxt-link>
        </span>
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    facilityCards: [
      { title: '橋梁', src: '', url: '/bridge' },
      { title: '歩道橋', src: '', url: '/footbridge' },
      { title: 'トンネル', src: '', url: '/tunnel' },
      { title: '舗装', src: '', url: '/pavement' },
    ],
    groupedFacirityCards: [{
      title: "道路施設",
      items:
        [
          { title: '共同溝', src: '', url: '/utilitytunnel' },
          { title: '擁壁', src: '', url: '/' },
          { title: '掘割道路', src: '', url: '/' },
          { title: '組立歩道', src: '', url: '/' },
          { title: '桟道', src: '', url: '/' },
          { title: '地下歩行者道', src: '', url: '/undergroundWalkway' },
          { title: 'ロックシェッド', src: '', url: '/' },
        ],
    },
    {
      title: "道路附属物",
      items: [
        { title: '道路照明', src: '', url: '/streetlight' },
        { title: '配電盤', src: '', url: '/switchboard' },
        { title: '障害物表示灯', src: '', url: '/blinker' },
        { title: '道路標識', src: '', url: '/roadsign' },
        { title: '道路反射鏡', src: '', url: '/mirror' },
      ],
    }
    ],
    featureCards: [
      { title: '施設新規登録' },
      { title: '委託データ登録' },
      { title: '業務支援機能' },
    ],
    childfeatureCards: [
      [{ ownertitle: '施設新規登録', title: '施設新規登録フォーム', url: '/newRegist', explain: 'システム用のデータを新規登録するための入力フォームを表示します。' },],
      [{ ownertitle: '委託データ登録', title: '委託データ登録サイト', url: '/order', explain: '業者が作成するためのデータを作成、納品するためのシステムを起動します。' },],
      [{ ownertitle: '業務支援機能', title: '業務支援機能', url: '/function', explain: '業務実施に有用な機能を表示します。' },],
    ],
    columns: [
      {
        label: '日時',
        field: 'createdAt',
        type: 'date',
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
      { createdAt: "2022-06-21", facilityType: '橋梁', processingType: '補修履歴登録', details: '〇〇施設の補修履歴が登録されました。', office: '第三建設事務所' },
      { createdAt: "2022-06-22", facilityType: '歩道橋', processingType: '補修履歴登録', details: '〇〇委託の更新依頼が登録されています。処理を行ってください。', office: '第三建設事務所' },
    ]
  }),
}
</script>

<style scoped>
.mainCards {
  border-radius: 0.77ex;
  margin: 10px 0px;
}

.mainCardsTitle {
  color: white;
  background-color: #007bff;
  padding: 10px;
  border-top-right-radius: 0.77ex;
  border-top-left-radius: 0.77ex;
}

.facility {
  background: #aedee6;
}
.facility-header {
  background: #e2f1f3;
}
/* .cardimg{
  max-height: 150px;
} */
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


a.btn--red.btn--cubic {
  border-bottom: 5px solid #838383;
}

a.btn--red.btn--cubic:hover {
  margin-top: 3px;
  border-bottom: 2px solid #eee7e8;
}

a.btn--radius {
  border-radius: 3vh;
}
a.btn--font {
  font-size: x-small;
}

.fa-position-right {
  position: absolute;
  top: calc(50% - .5em);
  right: 1rem;
}
</style>