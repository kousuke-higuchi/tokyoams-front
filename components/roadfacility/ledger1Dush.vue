<template>
  <v-card class="rfaTable">
    <v-container>
      <v-sheet class="d-flex tbTitle">
        <v-card-text class="title">{{ title }}</v-card-text>
        <v-card-text>{{ office }}</v-card-text>
        <v-card-text class="title">管理番号</v-card-text>
        <v-card-text>{{ adminId }}</v-card-text>
      </v-sheet>
      <v-row no-gutters>
        <v-col md="6" cols="12">
          <!--施設位置図-->
          <v-card class="rounded-0 elevation-0">
            <v-card-text class="text-center pa-0 border">施設位置図</v-card-text>
            <v-container class="border">
              <!--TODO:BEで取得した写真を表示する-->
              <v-img src="../../assets/img/utilitytunnel/positionMap.jpg"></v-img>
            </v-container>
          </v-card>
          <!--現状写真-->
          <v-card class="rounded-0 elevation-0">
            <v-card-text class="text-center pa-0 border">現状写真(全景)</v-card-text>
            <v-container class="border">
              <!--TODO:BEで取得した写真を表示する-->
              <v-img src="../../assets/img/utilitytunnel/statusQuo.jpg"></v-img>
            </v-container>
          </v-card>
        </v-col>
        <v-col md="6" cols="12">
          <!--点検事項-->
          <v-table density="compact">
            <thead>
              <tr>
                <th nowrap class="text-center" colspan="4">点検事項</th>
              </tr>
              <tr>
                <th nowrap class="text-center">調査年月</th>
                <th nowrap class="text-center">調査記事</th>
                <th nowrap class="text-center">点検者名</th>
                <th nowrap class="text-center">点検会社名</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in inspectionItems" :key="i">
                <td nowrap>{{ item.date }}</td>
                <td nowrap class="pa-0">
                  <v-sheet v-for="noteitem in item.note" :key="noteitem">
                    {{ noteitem }}
                  </v-sheet>
                </td>
                <td nowrap>{{ item.inspector }}</td>
                <td nowrap>{{ item.company }}</td>
              </tr>
            </tbody>
          </v-table>
          <!--特記事項-->
          <v-table density="compact">
            <thead>
              <tr>
                <th nowrap class="text-center">特記事項</th>
              </tr>
            </thead>
            <tbody>
              <td>
                <v-container>
                  <v-sheet v-for="mention in specialMentions" :key="mention">
                    {{ mention }}
                  </v-sheet>
                </v-container>
              </td>
            </tbody>
          </v-table>
        </v-col>
        <v-col md="12" cols="12">
          <v-card class="rounded-0 elevation-0">
            <v-card-text class="text-center pa-0 border">住宅地図</v-card-text>
            <v-container class="border">
              <!--TODO:BEで取得した写真を表示する-->
              <v-img src="../../assets/img/utilitytunnel/led1dushMap.jpg"></v-img>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    title: String
    //TODO:DBのテーブル,カラムが判明次第、propsでデータを受け取るように変更する
  },
  data() {
    return {
      //TODO:DBのテーブル,カラムが判明次第削除
      //ここから
      office: '西多摩建設事務所',
      adminId: 'H033M0010-00',
      inspectionItems: [
        {
          date: 'H13.3',
          note: [
            '・床版に小規模な遊離石灰が数箇所発生している。',
          ],
          inspector: null,
          company: null
        },
        {
          date: 'H17.2',
          note: [
            '・桟橋本体は前回同様、軽微な遊離石灰のみである。',
            '・基礎周囲部の陥没が数箇所でみられる。',
            '・これに伴い、起点側のブロック積擁壁が損壊している。',
          ],
          inspector: '長谷川秀',
          company: '（株）地研コンサルタンツ'
        },
        {
          date: 'H23.3',
          note: [
            '基礎周囲部の陥没が数箇所発生しており、一部で進行がみられる。起点側擁壁のひびわれは55→72mmに増加している。',
            '遊離石灰に目立つ進行はみられない。',
          ],
          inspector: '鎌田康弘',
          company: '（株）東京シビルコンサルタント'
        },
        {
          date: 'H13.3',
          note: [
            '深礎杭周辺の土砂流出が目立つ。',
            '起点側の擁壁に目地沿いのひびわれ進行。',
          ],
          inspector: '鎌田康弘',
          company: '（株）東京シビルコンサルタント'
        },
      ],
      specialMentions: [
        null,
      ]
      //ここまで
    }
  }
})
</script>