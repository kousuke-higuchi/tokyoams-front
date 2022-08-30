<template>
  <v-row>
    <v-col md="3" cols="12">
      <pavement-side-card-details/>
    </v-col>
    <v-col md="9" cols="12">
      <v-card>
        <v-card-text class="text-h5 text-center">舗装履歴台帳</v-card-text>
        <v-card-text>
          <v-row no-gutters>
            <!--道路構成-->
            <v-table density="compact" class="ledger">
              <tbody>
                <tr>
                  <th colspan="3" class="text-center">事務所名</th>
                  <td class="text-center">{{ pavement.office }}</td>
                  <th class="text-center">工区名</th>
                  <td colspan="2" class="text-center">{{ pavement.area }}</td>
                  <th class="text-center">路線名</th>
                  <td colspan="5" class="text-center">{{ pavement.route }}</td>
                  <th class="text-center">路線番号</th>
                  <td class="text-center">{{ pavement.routeNumber }}</td>
                  <th colspan="2" class="text-center">地点標</th>
                  <td class="text-center">{{ pavement.waypoint }}</td>
                  <th class="text-center">支線番号</th>
                  <td class="text-center">{{ pavement.branch }}</td>
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
                <tr v-for="item in uphillPaveItems" :key="item.id">
                  <th v-if="item.id == 1" rowspan="5" class="text-center" style="writing-mode: vertical-rl;">舗装履歴</th>
                  <td class="text-center">{{item.id}}</td>
                  <td class="text-center">{{item.waypoint.from[1]}} {{item.waypoint.from[2]}}<br/>{{item.waypoint.to[1]}} {{item.waypoint.to[2]}}</td>
                  <td class="text-center">{{item.year}}</td>
                  <td class="text-center">{{item.lane}}</td>
                  <td class="text-center">{{item.constType}}</td>
                  <td class="text-center">{{item.constMethod}}</td>
                  <td class="text-center">{{item.surface}}</td>
                  <td class="text-center">{{item.materialThick1}}</td>
                  <td class="text-center">{{item.materialThick2}}</td>
                  <td class="text-center">{{item.materialThick3}}</td>
                  <td class="text-center">{{item.materialThick4}}</td>
                  <td class="text-center">{{item.materialThick5}}</td>
                  <td class="text-center">{{item.materialThick6}}</td>
                  <td class="text-center">{{item.totalThick}}</td>
                  <td class="text-center">{{item.TA}}</td>
                  <td class="text-center">{{item.CBR}}</td>
                  <td class="text-center">{{item.trafficDiv}}</td>
                  <td class="text-center">{{item.note}}</td>
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
                <tr v-for="item in downhillPaveItems" :key="item.id">
                  <th v-if="item.id == 1" rowspan="5" class="text-center" style="writing-mode: vertical-rl;">舗装履歴</th>
                  <td class="text-center">{{item.id}}</td>
                  <td class="text-center">{{item.waypoint.from[1]}} {{item.waypoint.from[2]}}<br/>{{item.waypoint.to[1]}} {{item.waypoint.to[2]}}</td>
                  <td class="text-center">{{item.year}}</td>
                  <td class="text-center">{{item.lane}}</td>
                  <td class="text-center">{{item.constType}}</td>
                  <td class="text-center">{{item.constMethod}}</td>
                  <td class="text-center">{{item.surface}}</td>
                  <td class="text-center">{{item.materialThick1}}</td>
                  <td class="text-center">{{item.materialThick2}}</td>
                  <td class="text-center">{{item.materialThick3}}</td>
                  <td class="text-center">{{item.materialThick4}}</td>
                  <td class="text-center">{{item.materialThick5}}</td>
                  <td class="text-center">{{item.materialThick6}}</td>
                  <td class="text-center">{{item.totalThick}}</td>
                  <td class="text-center">{{item.TA}}</td>
                  <td class="text-center">{{item.CBR}}</td>
                  <td class="text-center">{{item.trafficDiv}}</td>
                  <td class="text-center">{{item.note}}</td>
                </tr>
              </tbody>
            </v-table>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default defineComponent({
  data(){
    return{
      pavement:{office:'第一建築事務所',area:'千代田工区',route:'麹町竹平線',routeNumber:'特401',waypoint:0,branch:0},
      uphillPaveItems:[
        {id:1,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.1,2:0}
        },
        year:'H26',
        lane:2,
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        CBR:0,
        trafficDiv:null,
        note:null,
        },
        {id:2,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.2,2:0}
        },
        year:'H26',
        lane:1,
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        CBR:0,
        trafficDiv:null,
        note:null,
        },
        {id:3,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.1,2:0}
        },
        year:'H26',
        lane:1,
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        CBR:0,
        trafficDiv:null,
        note:null,
        },
        {id:4,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.2,2:60}
        },
        year:'H26',
        lane:2,
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        CBR:0,
        trafficDiv:null,
        note:null,
        },
        {id:5,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.3,2:9}
        },
        year:'H26',
        lane:1,
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        CBR:0,
        trafficDiv:null,
        note:null,
        },
      ],
      downhillPaveItems:[
        {id:1,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.4,2:30}
        },
        year:'H26',
        lane:123,
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        CBR:0,
        trafficDiv:null,
        note:null,
        },
        {id:2,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.1,2:0}
        },
        year:'H26',
        lane:123,
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        CBR:0,
        trafficDiv:null,
        note:null,
        },
        {id:3,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.3,2:0}
        },
        year:'H26',
        lane:123,
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        CBR:0,
        trafficDiv:null,
        note:null,
        },
        {id:4,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.2,2:0}
        },
        year:'H26',
        lane:2,
        constType:'補修',
        constMethod:'切削',
        surface:'アスファルト',
        materialThick1:4,
        materialThick2:6,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:10,
        CBR:0,
        trafficDiv:null,
        note:null,
        },
        {id:5,
        waypoint:{
          from:{1:0,2:0},
          to:{1:0.1,2:0}
        },
        year:'H16',
        lane:123,
        constType:'補修',
        constMethod:'切削',
        surface:'低騒音',
        materialThick1:'高粘度13 10',
        materialThick2:null,
        materialThick3:null,
        materialThick4:null,
        materialThick5:null,
        materialThick6:null,
        totalThick:10,
        TA:0,
        CBR:0,
        trafficDiv:null,
        note:null,
        },
      ],
    }
  }
})
</script>
