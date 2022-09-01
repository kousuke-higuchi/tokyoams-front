<template>
  <div>
    <v-row>
      <v-col v-bind:md="child_extend ? 3 : 0" cols="12">
        <!-- <p> {{ child_extend }}</p> -->
        <bridge-side-card-details @isExtend='child_extend = $event' />
      </v-col>
      <v-col v-bind:md="child_extend ? 9 : 12" cols="12">
        <v-card elevation="3">
          <v-card-title>
            <v-row class="justify-start mt-1 ml-3">橋梁台帳 東京都</v-row>
          </v-card-title>
          <v-card-text>
            <v-table density="compact" class="ledger">
              <tbody>
                <tr>
                  <th colspan="6" class="text-center">事務者等</th>
                  <th colspan="7" class="text-center">占有物件調書</th>
                  <th colspan="8" class="text-center">交通量調書</th>
                </tr>
                <tr>
                  <th rowspan="2" class="text-center">計画容量</th>
                  <th>計画交通量</th>
                  <td colspan="2" class="text-center">不明 台／日</td>
                  <td colspan="2" class="text-center">不明 人／日</td>
                  <th rowspan="2" colspan="2" class="text-center">許可年月</th>
                  <th rowspan="2" class="text-center">占有者</th>
                  <th rowspan="2" class="text-center">種類及び数量</th>
                  <th rowspan="2" class="text-center">重量kg／ｍ</th>
                  <th rowspan="2" colspan="2" class="text-center">連絡先</th>
                  <th rowspan="2" class="text-center">調査年月</th>
                  <th rowspan="2" class="text-center">大型<br>トラック</th>
                  <th rowspan="2" class="text-center">普通<br>トラック</th>
                  <th rowspan="2" class="text-center">乗用車</th>
                  <th rowspan="2" class="text-center">軽自動</th>
                  <th rowspan="2" class="text-center">二輪車<br>自転車</th>
                  <th rowspan="2" class="text-center">歩行者</th>
                  <th rowspan="2" class="text-center">適用</th>
                </tr>
                <tr>
                  <th>計画流量</th>
                  <td colspan="4" class="text-center">230 ㎥／sec</td>
                </tr>
                <tr>
                  <th rowspan="2">占用許可</th>
                  <td colspan="5" class="text-center">□ 河川 □ 港湾 □ 鉄道 □ その他</td>
                  <td colspan="2" class="text-center"> 年　月</td>
                  <td>東京電力</td>
                  <td>15条</td>
                  <td>不明</td>
                  <td colspan="2"></td>
                  <td> 1988 年 10 月</td>
                  <td> 1424</td>
                  <td> 5090</td>
                  <td> 7075</td>
                  <td> ---</td>
                  <td> 2525</td>
                  <td> 2805</td>
                  <td> 653</td>
                </tr>
                <tr>
                  <td colspan="5"></td>
                  <td colspan="2" class="text-center"> 年　月</td>
                  <td>東京ガス</td>
                  <td>Φ300 × 2</td>
                  <td>不明</td>
                  <td colspan="2"></td>
                  <td> 1990 年 10 月</td>
                  <td> 1524</td>
                  <td> 6078</td>
                  <td> 8883</td>
                  <td> ---</td>
                  <td> 2044</td>
                  <td> 5673</td>
                  <td> 653</td>
                </tr>
                <tr>
                  <th rowspan="2">期間</th>
                  <td colspan="5" class="text-center"> 年 月 日 ～ 年 月 日 </td>
                  <td colspan="2"> </td>
                  <td>都水道局</td>
                  <td>Φ300 × 1</td>
                  <td>不明</td>
                  <td colspan="2"></td>
                  <td> 1994 年 10 月</td>
                  <td> 1455</td>
                  <td> 4546</td>
                  <td> 1970</td>
                  <td> ---</td>
                  <td> 2599</td>
                  <td> 4992</td>
                  <td> 648</td>
                </tr>
                <tr>
                  <td colspan="5" class="text-center"> 年 月 日 ～ 年 月 日 </td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td> 1999 年 10 月</td>
                  <td> 1604</td>
                  <td> 4251</td>
                  <td> 9620</td>
                  <td> ---</td>
                  <td> 2915</td>
                  <td> 5982</td>
                  <td> 5048</td>
                </tr>
                <tr>
                  <th>協定協議</th>
                  <td class="text-center">■ 無 □ 有</td>
                  <td colspan="4">内容 -</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td> 2005年 10 月</td>
                  <td> 1445</td>
                  <td> 4094</td>
                  <td> 12750</td>
                  <td> ---</td>
                  <td> 2449</td>
                  <td> 27630</td>
                  <td> 1021</td>
                </tr>
                <tr>
                  <th rowspan="5">事業費</th>
                  <th>事業費</th>
                  <td colspan="2" class="text-right"> 184383 円</td>
                  <td colspan="2" class="text-right"> 266 円 ／ ㎥</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>橋梁上部工費</th>
                  <td colspan="2" class="text-right">93837 円</td>
                  <td colspan="2" class="text-right">266 円 ／ ㎥</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>橋梁下部工費</th>
                  <td colspan="2" class="text-right">77838 円</td>
                  <td colspan="2" class="text-right">112 円 ／ ㎥</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>取付道路費</th>
                  <td colspan="2" class="text-right">不明 円</td>
                  <td colspan="2" class="text-right"></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>用地費・その他</th>
                  <td colspan="2" class="text-right">不明 円</td>
                  <td colspan="2" class="text-right"></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th rowspan="3">設計施工<br>関係書</th>
                  <th>設計</th>
                  <td colspan="4">不明</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>照査</th>
                  <td colspan="4">不明</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <th colspan="8" class="text-center">耐荷荷重調書</th>
                </tr>
                <tr>
                  <th>監督</th>
                  <td colspan="4">不明</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <th colspan="2" class="text-center">調査年月</th>
                  <th colspan="2" class="text-center">耐荷荷重</th>
                  <th colspan="2" class="text-center">材限荷重</th>
                  <th colspan="2" class="text-center">調査記事</th>
                </tr>
                <tr>
                  <th rowspan="5">施工業者</th>
                  <th rowspan="3">上部工</th>
                  <th>ケタ製作工</th>
                  <td>不明</td>
                  <th rowspan="3">工費</th>
                  <td class="text-right">円</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>ケタ架設工</th>
                  <td>不明</td>
                  <td class="text-right">円</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>上部仕上工</th>
                  <td>不明</td>
                  <td class="text-right">円</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th rowspan="2">下部工</th>
                  <th>箇所</th>
                  <td>不明</td>
                  <th rowspan="2">工費</th>
                  <td class="text-right">円</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th>箇所</th>
                  <td>不明</td>
                  <td class="text-right">円</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th colspan="6" class="text-center">変状調書</th>
                  <th colspan="7" class="text-center">塗装調書</th>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <th colspan="2" class="text-center">調査年月</th>
                  <th colspan="2" class="text-center">調査対象</th>
                  <th colspan="2" class="text-center">調査記録</th>
                  <th rowspan="3" class="text-center" style="writing-mode: vertical-rl;">塗装面積</th>
                  <th>構成別</th>
                  <th class="text-center">上部 ㎡</th>
                  <th class="text-center">下部 ㎡</th>
                  <th class="text-center">高欄 ㎡</th>
                  <th class="text-center">橋灯 ㎡</th>
                  <th class="text-center">計</th>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center">1980 年 3月</td>
                  <td colspan="2">橋梁上下部工</td>
                  <td colspan="2">変状外観調査(健全度 Cランク)</td>
                  <th>本橋部</th>
                  <td class="text-right">---</td>
                  <td class="text-right">---</td>
                  <td class="text-right">60.35</td>
                  <td class="text-right">135</td>
                  <td class="text-center">195.35</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center">1988 年 3月</td>
                  <td colspan="2">橋梁上下部工</td>
                  <td colspan="2">定期点検(総合評価 Bランク)</td>
                  <th>取付高架部</th>
                  <td class="text-right">---</td>
                  <td class="text-right">---</td>
                  <td class="text-right">---</td>
                  <td class="text-right">---</td>
                  <td class="text-center">---</td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center">1993 年 3月</td>
                  <td colspan="2">橋梁上下部工</td>
                  <td colspan="2">定期点検(総合評価 Bランク)</td>
                  <th colspan="7" class="text-center">塗装経歴</th>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center">1998 年 2月</td>
                  <td colspan="2">橋梁上下部工</td>
                  <td colspan="2">定期点検(総合評価 Cランク)</td>
                  <td rowspan="20" colspan="7">
                    <v-col>
                      <!--                 <v-row class="justify-center ml-3"  style="font-size: medium !important;">塗装経歴</v-row> -->
                      <v-row class="justify-end ml-3">
                        <v-btn class="btn " color="primary" dark size="small" v-on:click="onCreateClick()">新規登録</v-btn>
                      </v-row>
                    </v-col>
                    <div class="mt-3">
                      <vue-good-table :columns="columns" :rows="bidgePaint" style-class="vgt-table striped"
                        :pagination-options="{
                          enabled: true,
                          mode: 'records',
                          perPage: 10,
                          nextLabel: '次',
                          prevLabel: '前',
                          perPageDropdownEnabled: false,
                        }">
                        <template #table-row="props">
                          <span v-if="props.column.field == 'update'">
                            <v-btn class="btn" color="primary" dark size="small" v-on:click="onUpdateClick(props.row)">
                              更新</v-btn>
                          </span>
                          <span v-if="props.column.field == 'delete'">
                            <v-btn class="btn" color="error" dark size="small" v-on:click="onDeleteClick(props.row)">削除
                            </v-btn>
                          </span>
                          <span v-else>
                            {{ props.formattedRow[props.column.field] }}
                          </span>
                        </template>
                      </vue-good-table>
                    </div>
                  </td>
                  <th colspan="8" class="text-center">橋灯調書</th>
                </tr>
                <tr>
                  <td colspan="2" class="text-center">2003 年 3月</td>
                  <td colspan="2">橋梁上下部工</td>
                  <td colspan="2">定期点検(総合評価 Cランク)</td>
                  <th rowspan="2" colspan="2" class="text-center">年 月</th>
                  <th rowspan="2" class="text-center">基数</th>
                  <th rowspan="2" class="text-center">灯数</th>
                  <th colspan="2" class="text-center">種別</th>
                  <th rowspan="2" class="text-center">施工メーカ<br>(灯具メーカー)</th>
                  <th rowspan="2" class="text-center">適用</th>
                </tr>
                <tr>
                  <td colspan="2" class="text-center">2008 年 3月</td>
                  <td colspan="2">定期点検</td>
                  <td colspan="2">定期点検(総合評価 Cランク)</td>
                  <th class="text-center">型式</th>
                  <th class="text-center">W</th>
                </tr>
                <tr>
                  <td colspan="2" class="text-center">2013 年 2月</td>
                  <td colspan="2">定期点検</td>
                  <td colspan="2">定期点検(総合評価 Cランク)</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center">2015 年 2月</td>
                  <td colspan="2">定期点検</td>
                  <td colspan="2">ストック総点検</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center">2017 年 2月</td>
                  <td colspan="2">定期点検</td>
                  <td colspan="2">定期点検(総合評価 Cランク)</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center">2018 年 2月</td>
                  <td colspan="2">橋梁上下部工</td>
                  <td colspan="2">定期点検(総合評価 Cランク)</td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <td colspan="8"></td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th colspan="8" class="text-center">その他調書</th>
                </tr>
                <tr>
                  <td colspan="2" class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th>防音壁</th>
                  <td colspan="7">年設置</td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th>高さ</th>
                  <td colspan="2">H= ｍ</td>
                  <td colspan="2">H= ｍ</td>
                  <td colspan="3">取付擁壁H= ｍ</td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th>延長</th>
                  <td colspan="2">ｌ= ｍ</td>
                  <td colspan="2">ｌ= ｍ</td>
                  <td colspan="3">ｌ= ｍ</td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th colspan="8">排水型式</th>
                </tr>
                <tr>
                  <td colspan="2" class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th rowspan=2>区分</th>
                  <th colspan="2">たれ流し式</th>
                  <td colspan="2" class="text_right">4 箇所</td>
                  <th colspan="2">導水型式</th>
                  <td colspan="2" class="text_right"> 箇所</td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th colspan="2">排水桝</th>
                  <td colspan="2" class="text_right">4 個</td>
                  <th colspan="2">排水管延長</th>
                  <td colspan="2" class="text_right">ｌ＝ ｍ</td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center"></td>
                  <td colspan="2"></td>
                  <td colspan="2"></td>
                  <th rouspan="2" colspan="8"></th>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!--補修履歴登録画面-->
    <bridge-painting-history-dialog @before-close="onDialogClose" :dialog-item="dialogItem"
      v-model:isOpen="isShowDialog" />

  </div>
</template>

<script lang="ts">
import bidgePaintJson from "@/assets/bridgePaint.json"
import { PaintingBridgeHistory } from "~~/types"

export default defineComponent({
  data() {
    return {
      child_extend: Boolean,

      isShowDialog: false,
      bidgePaint: bidgePaintJson,
      // 一覧の列情報
      columns: [
        {
          label: '年月',
          field: 'createDate',
          type: 'date',
          // NOTE: Date形式をISO-8601に合わせた
          dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
          dateOutputFormat: 'yyyy-MM-dd',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '年月入力',
          },
        },
        {
          label: '下塗材料',
          field: 'lower1mat',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '下塗材料入力',
          },
        },
        {
          label: '下塗色',
          field: 'lower1color',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '下塗色入力',
          },
        },
        {
          label: '下塗材料',
          field: 'lower2mat',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '下塗材料入力',
          },
        },
        {
          label: '下塗色',
          field: 'lower2color',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '下塗色入力',
          },
        },
        {
          label: '中塗材料',
          field: 'middlemat',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '中塗材料入力',
          },
        },
        {
          label: '中塗色',
          field: 'middlecolor',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '中塗色入力',
          },
        },
        {
          label: '上塗材料',
          field: 'uppermat',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '上塗材料入力',
          },
        },
        {
          label: '上塗色',
          field: 'uppercolor',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '上塗色入力',
          },
        },
        {
          label: '面積  ㎡',
          field: 'area',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '面積入力',
          },
        },
        {
          label: '工費',
          field: 'cost',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '面積入力',
          },
        },
        {
          label: '塗装業者',
          field: 'companyname',
          sortable: false,
          filterOptions: {
            enabled: true,
            placeholder: '工費入力',
          },
        },
        {
          label: '',
          field: 'update',
          filterable: false,
          sortable: false,
        },
        {
          label: '',
          field: 'delete',
          filterable: false,
          sortable: false,
        },
      ],
      dialogItem: {} as PaintingBridgeHistory,
    };
  },
  mounted: function () {
    console.log("mounted ledger2");

  },
  methods: {
    onCreateClick() {
      console.log('clickUpdate');
      this.dialogItem = {} as PaintingBridgeHistory;
      this.isShowDialog = true;
    },
    onUpdateClick(row) {
      console.log('onUpdateClick', row);
      // 選択レコードの値を設定
      this.dialogItem = JSON.parse(JSON.stringify(row));
      this.isShowDialog = true;
    },
    onDeleteClick(row) {
      console.log('onDeleteClick', row);

      let shouldDelete = confirm(`ID=${row.reporthistid} の履歴を削除します。よろしいですか？`);
      if (shouldDelete) {
        //TODO: 選択した履歴を削除する
        //TODO: 表示の更新
      }
    },
    onDialogClose(accept: boolean, dialogItem: PaintingBridgeHistory) {
      if (accept) {
        console.info(`塗装経歴ダイアログを閉じました（確定 = ${accept}）`);
        //TODO: 更新処理
      }
    },
  },
});
</script>
