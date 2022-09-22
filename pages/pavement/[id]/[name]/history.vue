<template>
  <v-row>
    <v-col :md="child_extend ? 3 : 0" cols="12">
      <pavement-side-card-details @is-extend="child_extend = $event" />
    </v-col>
    <v-col :md="child_extend ? 9 : 12" cols="12">
      <v-card>
        <v-card-text class="text-h5 text-center">舗装履歴台帳</v-card-text>
        <v-card-text>
          <!--道路構成-->
          <v-table density="compact" class="ledger">
            <tbody>
              <tr>
                <th colspan="3" class="text-center">事務所名</th>
                <td class="text-center">{{ paveInfo.office?.name }}</td>
                <th class="text-center">工区名</th>
                <td colspan="2" class="text-center">{{ paveInfo.area?.name }}</td>
                <th class="text-center">路線名</th>
                <td colspan="5" class="text-center">{{ paveInfo.route?.name }}</td>
                <th class="text-center">路線番号</th>
                <td class="text-center">{{ paveInfo.routenumber }}
                </td>
                <th colspan="2" class="text-center">地点標</th>
                <td class="text-center">{{ paveInfo.spotpoint }}</td>
                <th class="text-center">支線番号</th>
                <td class="text-center">{{ paveInfo.branchlineno }}</td>
              </tr>
              <tr>
                <th rowspan="7" class="text-center" style="writing-mode: vertical-rl;">上り車線</th>
                <th rowspan="2"></th>
                <th colspan="5" class="text-center">工事</th>
                <th colspan="13" class="text-center">舗装構造</th>
              </tr>
              <tr>
                <th class="text-center">履歴番号</th>
                <th class="text-center">自 地点標<br>至 地点標</th>
                <th class="text-center">施工年度</th>
                <th class="text-center">車線番号</th>
                <th class="text-center">工事種別</th>
                <th class="text-center">工法</th>
                <th class="text-center">表層区分</th>
                <th class="text-center">材料厚さ<br>(cm)</th>
                <th class="text-center">材料厚さ<br>(cm)</th>
                <th class="text-center">材料厚さ<br>(cm)</th>
                <th class="text-center">材料厚さ<br>(cm)</th>
                <th class="text-center">材料厚さ<br>(cm)</th>
                <th class="text-center">材料厚さ<br>(cm)</th>
                <th class="text-center">総厚<br>(cm)</th>
                <th class="text-center">TA</th>
                <th class="text-center">設計<br>CBR</th>
                <th class="text-center">センサス<br>交通量区分</th>
                <th class="text-center">備考</th>
              </tr>
              <tr v-for="(item,i) in paveUpHistories" :key="i">
                <th v-if="i == 0" rowspan="5" class="text-center" style="writing-mode: vertical-rl;">舗装履歴</th>
                <td class="text-center">{{ i+1 }}</td>
                <td class="text-center">
                  {{ paveInfo.spotpoint }}　{{ item.spotpointposfrom }}<br />{{ item.spotpointnoto }}　{{ item.spotpointposto }}
                </td>
                <td class="text-center">{{ item.workfiskyearJp }}</td>
                <td class="text-center">{{ i + 1 }}</td>
                <td class="text-center">{{ item.constkind?.name }}</td>
                <td class="text-center">{{ item.constructmtd?.name }}</td>
                <td class="text-center">{{ item.surfacediv?.name }}</td>
                <td class="text-center">
                  {{ item.material1?.name }}<br />{{item.thick1}}
                </td>
                <td class="text-center">
                  {{ item.material2?.name }}<br />{{item.thick2}}
                </td>
                <td class="text-center">
                  {{ item.material3?.name }}<br />{{item.thick3}}
                </td>
                <td class="text-center">
                  {{ item.material4?.name }}<br />{{item.thick4}}
                </td>
                <td class="text-center">
                  {{ item.material5?.name }}<br />{{item.thick5}}
                </td>
                <td class="text-center">
                  {{ item.material6?.name }}<br />{{item.thick6}}
                </td>
                <td class="text-center">{{ item.fullthick }}</td>
                <td class="text-center">{{ item.ta }}</td>
                <td class="text-center">{{ item.cbr }}</td>
                <td class="text-center">{{ item.dsgtraffvoldivid }}</td>
                <td class="text-center">{{ null }}</td>
              </tr>
              <!-- 空の行 -->
              <tr v-for="j in getBlankRowNum(paveUpHistories.length)" :key="j">
                <th v-if="j == 1 && getBlankRowNum(paveUpHistories.length) == 5" rowspan="5" class="text-center" style="writing-mode: vertical-rl;">舗装履歴</th>
                <td v-for="k in 18"></td>
              </tr>
              <tr>
                <th rowspan="7" class="text-center" style="writing-mode: vertical-rl;">下り車線</th>
                <th rowspan="2"></th>
                <th colspan="5" class="text-center">工事</th>
                <th colspan="13" class="text-center">舗装構造</th>
              </tr>
              <tr>
                <th class="text-center">履歴番号</th>
                <th class="text-center">自 地点標<br>至 地点標</th>
                <th class="text-center">施工年度</th>
                <th class="text-center">車線番号</th>
                <th class="text-center">工事種別</th>
                <th class="text-center">工法</th>
                <th class="text-center">表層区分</th>
                <th class="text-center">材料厚さ<br>(cm)</th>
                <th class="text-center">材料厚さ<br>(cm)</th>
                <th class="text-center">材料厚さ<br>(cm)</th>
                <th class="text-center">材料厚さ<br>(cm)</th>
                <th class="text-center">材料厚さ<br>(cm)</th>
                <th class="text-center">材料厚さ<br>(cm)</th>
                <th class="text-center">総厚<br>(cm)</th>
                <th class="text-center">TA</th>
                <th class="text-center">設計<br>CBR</th>
                <th class="text-center">センサス<br>交通量区分</th>
                <th class="text-center">備考</th>
              </tr>
              <tr v-for="(item,i) in paveDownHistories" :key="i">
                <th v-if="i == 0" rowspan="5" class="text-center" style="writing-mode: vertical-rl;">舗装履歴</th>
                <td class="text-center">{{ i+1 }}</td>
                <td class="text-center">
                  {{ paveInfo.spotpoint }}　{{ item.spotpointposfrom }}<br />{{ item.spotpointnoto }}　{{ item.spotpointposto }}
                </td>
                <td class="text-center">{{ item.workfiskyearJp }}</td>
                <td class="text-center">{{ i + 1 }}</td>
                <td class="text-center">{{ item.constkind?.name }}</td>
                <td class="text-center">{{ item.constructmtd?.name }}</td>
                <td class="text-center">{{ item.surfacediv?.name }}</td>
                <td class="text-center">
                  {{ item.material1?.name }}<br />{{item.thick1}}
                </td>
                <td class="text-center">
                  {{ item.material2?.name }}<br />{{item.thick2}}
                </td>
                <td class="text-center">
                  {{ item.material3?.name }}<br />{{item.thick3}}
                </td>
                <td class="text-center">
                  {{ item.material4?.name }}<br />{{item.thick4}}
                </td>
                <td class="text-center">
                  {{ item.material5?.name }}<br />{{item.thick5}}
                </td>
                <td class="text-center">
                  {{ item.material6?.name }}<br />{{item.thick6}}
                </td>
                <td class="text-center">
                  {{ item.fullthick }}</td>
                <td class="text-center">{{ item.ta }}</td>
                <td class="text-center">{{ item.cbr }}</td>
                <td class="text-center">{{ item.dsgtraffvoldivid }}</td>
                <td class="text-center">{{ }}</td>
              </tr>
              <!-- 空の行 -->
              <tr v-for="j in getBlankRowNum(paveDownHistories.length)" :key="j">
                <th v-if="j == 1 && getBlankRowNum(paveDownHistories.length) === 5" rowspan="5" class="text-center" style="writing-mode: vertical-rl;">舗装履歴</th>
                <td v-for="k in 18"></td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { PaveHistoryLedger, PaveTbKukanid, PaveHistory } from '~~/types/pavement';
import pavementService from '~~/services/pavement-service';

const route = useRoute();
console.log(route.params.name);

const child_extend = ref(true);

const pavement = ref(new PaveHistoryLedger);
const paveInfo = ref(new PaveTbKukanid);
const paveUpHistories = ref(new Array<PaveHistory>);
const paveDownHistories = ref(new Array<PaveHistory>);

const loading = useLoading();
loading.setLoading(true);

onMounted(() => {
  pavementService.getHistoryList(route.params.id.toString()).then(s => {
    pavement.value = s.data;
    paveInfo.value = pavement.value.tbKukanid;
    paveUpHistories.value = pavement.value.upHistories;
    paveDownHistories.value = pavement.value.downHistories;
  }).finally(()=>{
    loading.setLoading(false);
  })
})

/**
 * 空の行数を求めます
 * @param histories 履歴の件数
 * @return 空行数
 */
const getBlankRowNum = (histories) => {
  const nullrows = 5 - histories;
  return nullrows;
}
</script>
