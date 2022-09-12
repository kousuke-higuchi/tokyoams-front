<template>
  <v-container>
    <v-table density="compact">
      <tbody>
        <tr>
          <th rowspan="2">
            トンネル名称
          </th>
          <td rowspan="2">
            ゴンダトンネル<br />権田トンネル
          </td>
          <th>路線名</th>
          <td>主32 八王子五日市線</td>
          <th>点検業者・点検者名</th>
          <td>アジア航測（株）青柳健二</td>
          <th>点検年月日</th>
          <td>2018年11月9日</td>
        </tr>
        <tr>
          <th>管理事務所</th>
          <td>西多摩建設事務所</td>
          <th>調査業者・調査技術者名</th>
          <td>-</td>
          <th>調査年月日</th>
          <td>-</td>
        </tr>
      </tbody>
    </v-table>
    <v-row no-gutters>
      <v-col cols="6" v-for="(item, i) in dmgInfo" :key="i">
        <v-table density="compact">
          <tr>
            <th rowspan="2">写真<br />番号</th>
            <th>スパン<br />番号</th>
            <td style="width: 10%;">{{  item.span  }}</td>
            <td rowspan="8" colspan="3">
              <v-container>
                <v-img :src="item.img"></v-img>
              </v-container>
            </td>
          </tr>
          <tr>
            <th>変状<br />番号</th>
            <td>{{ item.dmgNum }}</td>
          </tr>
          <tr>
            <th rowspan="2">変状<br />部位</th>
            <th>対象<br />箇所</th>
            <td>{{ item.section }}</td>
          </tr>
          <tr>
            <th>部位<br />区分</th>
            <td>{{ item.partType }}</td>
          </tr>
          <tr>
            <th colspan="2">変状区分</th>
            <td>{{ item.dmgSection }}</td>
          </tr>
          <tr>
            <th colspan="2">変状種類</th>
            <td>{{ item.dmgType }}</td>
          </tr>
          <tr>
            <th rowspan="2">健全性</th>
            <th>点検後</th>
            <td>{{ item.insp }}</td>
          </tr>
          <tr>
            <th>措置後</th>
            <td></td>
          </tr>
          <tr>
            <th rowspan="2">異常<br/>規模</th>
            <th>前回</th>
            <td colspan="4">{{item.old}}</td>
          </tr>
          <tr>
            <th>今回</th>
            <td colspan="4">{{item.now}}</td>
          </tr>
          <tr>
            <th colspan="2">調査方針</th>
            <td colspan="2" style="width: 40%;">{{ item.survey }}</td>
            <th>実施日</th>
            <td>{{ item.surveyDate }}</td>
          </tr>
          <tr>
            <th colspan="2">措置方針</th>
            <td colspan="2"></td>
            <th>実施日</th>
            <td></td>
          </tr>
          <tr>
            <th colspan="2">メモ</th>
            <td colspan="4"></td>
          </tr>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  export default defineComponent({
    // props:{

    // }
  data() {
    return {
      //仮データ
      dmgInfo: [
        {
          span: 'PS',
          dmgNum: 31,
          section: '履工',
          partType: 'アーチ',
          dmgSection:'外力',
          dmgType: 'ひび割れ',
          insp: 'Ⅱa',
          old:null,
          now: '0.5mm×25m',
          survey: '経過観察の継続',
          surveyDate: '2018年11月9日',
          img: '../../assets/img/dmg/tnlD11Img1.jpg',
        },
        {
          span: 'PS',
          dmgNum: 31,
          section: '履工',
          partType: '左アーチ',
          dmgSection:'外力',
          dmgType: 'ひび割れ',
          insp: 'Ⅱa',
          old:null,
          now: '0.5mm×25m',
          survey: '経過観察の継続',
          surveyDate: '2018年11月9日',
          img: '../../assets/img/dmg/tnlD11Img2.jpg',
        },
        {
          span: 'PS',
          dmgNum: 31,
          section: '履工',
          partType: '右アーチ',
          dmgSection:'外力',
          dmgType: 'ひび割れ',
          insp: 'Ⅱa',
          old:null,
          now: '0.5mm×25m',
          survey: '経過観察の継続',
          surveyDate: '2018年11月9日',
          img: '../../assets/img/dmg/tnlD11Img3.jpg',
        },
        {
          span: 'PS',
          dmgNum: 31,
          section: '履工',
          partType: '右アーチ',
          dmgSection:'材料劣化',
          dmgType: 'はく離',
          insp: 'Ⅰ',
          old:'0.05m×1.2m',
          now: '0.5mm×25m',
          survey: '経過観察の継続',
          surveyDate: '2018年11月9日',
          img: '../../assets/img/dmg/tnlD11Img4.jpg',
        },
      ]
    }
  },
});
</script>