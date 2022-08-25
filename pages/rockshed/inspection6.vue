<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <rockshed-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
        <v-card>
          <div class="d-flex">
            <v-sheet>
              <v-container>ブロック番号</v-container>
            </v-sheet>
            <v-sheet class="ma-1">
              <v-select v-model="page" :items="numbers" item-title="page" variant="outlined" density="compact"
                hide-details></v-select>
            </v-sheet>
          </div>
          <v-window v-model="page">
            <v-window-item v-for="item in sections" :key="item.blockId" :value="item.blockId">
              <!--TODO:テーブルのカラムに表示するデータを設定する-->
              <v-container>
                <v-row no-gutters>
                  <v-col md="6" cols="12" v-for="(photoInfo, i) in item.photoInfos" :key="i">
                    <v-table density="compact" style="white-space:nowrap;">
                      <tbody>
                        <tr>
                          <th class="border">写真番号</th>
                          <td class="border">{{ null }}</td>
                          <th class="border"></th>
                          <td class="border"></td>
                          <th class="border">撮影年月日</th>
                          <td class="border">{{ null }}</td>
                        </tr>
                        <tr>
                          <th class="border">部材</th>
                          <td class="border">{{ null }}</td>
                          <th class="border">要素番号</th>
                          <td class="border">{{ null }}</td>
                          <th class="border" colspan="2" rowspan="2">メモ</th>
                        </tr>
                        <tr>
                          <th class="border">変状の種類</th>
                          <td class="border">{{ null }}</td>
                          <th class="border">変状程度</th>
                          <td class="border">{{ null }}</td>
                        </tr>
                        <tr>
                          <td class="border" colspan="4">
                            <v-container>
                              <v-img :src="photoInfo.imgfile" />
                            </v-container>
                          </td>
                          <td class="border" colspan="2">
                            <v-textarea v-model="photoInfo.memo" :placeholder="photoInfo.memo" variant="plain"
                              hint="メモを入力してください" persistent-hint></v-textarea>
                          </td>
                        </tr>
                      </tbody>
                    </v-table>
                  </v-col>
                </v-row>
              </v-container>
              <div class="d-flex justify-end">
                <v-btn class="ma-2" color="primary" @click="onclickRegistrationBtn(this.photoInfo)">登録</v-btn>
              </div>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      page: 1,
      numbers: [1, 2, 3],
      //TODO:DBのカラムに合わせた形に修正する
      sections: [
        {
          blockId: 1,
          photoInfos: [
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },]
        },
        {
          blockId: 2,
          photoInfos: [
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },]
        },
        {
          blockId: 3,
          photoInfos: [
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },
            { imgfile: null, memo: null },]
        },
      ],
    }
  },
  methods: {
    onclickRegistrationBtn(infos) {
      //TODO:データが取得できていない。
      console.debug("RegistrationBtnが押下されました。photoInfos:" + infos);
    }
  }
})
</script>