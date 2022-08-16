<template>
  <v-row>
    <v-col md="3" cols="12">
      <pavement-side-card-details/>
    </v-col>
    <v-col md="9" cols="12">
      <v-card>
        <v-card-text class="text-h4 text-center">舗装履歴台帳</v-card-text>
        <div class="d-flex">
          <v-card-text class="text-h6 border">事務所名</v-card-text>
          <v-card-text class="text-h6 border">{{pavement.office}}</v-card-text>
          <v-card-text class="text-h6 border">工区名</v-card-text>
          <v-card-text class="text-h6 border">{{pavement.area}}</v-card-text>
          <v-card-text class="text-h6 border">路線名</v-card-text>
          <v-card-text class="text-h6 border">{{pavement.route}}</v-card-text>
          <v-card-text class="text-h6 border">路線番号</v-card-text>
          <v-card-text class="text-h6 border">{{pavement.routeNumber}}</v-card-text>
          <v-card-text class="text-h6 border">地点標</v-card-text>
          <v-card-text class="text-h6 border">{{pavement.waypoint}}km</v-card-text>
          <v-card-text class="text-h6 border">支線番号</v-card-text>
          <v-card-text class="text-h6 border">{{pavement.branch}}</v-card-text>
        </div>
        <v-card-content class="pa-0">
          <v-card class="pa-0">
            <v-card-text class="text-center">上り車線</v-card-text>
            <v-table density="compact" class="border">
              <thead>
                <tr>
                  <th rowspan="2" class="border"></th>
                  <th colspan="5" class="text-center border">工事</th>
                  <th colspan="13" class="text-center border">舗装構造</th>
                </tr>
                <tr>
                  <th class="text-center border">履歴番号</th>
                  <th class="text-center border"><p>自 地点標</p><p>至 地点標</p></th>
                  <th class="text-center border">施工年度</th>
                  <th class="text-center border">車線番号</th>
                  <th class="text-center border">工事種別</th>
                  <th class="text-center border">工法</th>
                  <th class="text-center border">表層区分</th>
                  <th class="text-center border">材料厚さ(cm)</th>
                  <th class="text-center border">材料厚さ(cm)</th>
                  <th class="text-center border">材料厚さ(cm)</th>
                  <th class="text-center border">材料厚さ(cm)</th>
                  <th class="text-center border">材料厚さ(cm)</th>
                  <th class="text-center border">材料厚さ(cm)</th>
                  <th class="text-center border">総厚(cm)</th>
                  <th class="text-center border">TA</th>
                  <th class="text-center border">設計CBR</th>
                  <th class="text-center border">センサス交通量区分</th>
                  <th class="text-center border">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in uphillPaveItems" :key="item.id">
                  <th class="border">舗装構成</th>
                  <td class="border">{{item.id}}</td>
                  <td class="border">{{item.waypoint.from[1]}} {{item.waypoint.from[2]}}<br/>{{item.waypoint.to[1]}} {{item.waypoint.to[2]}}</td>
                  <td class="border">{{item.year}}</td>
                  <td class="border">{{item.lane}}</td>
                  <td class="border">{{item.constType}}</td>
                  <td class="border">{{item.constMethod}}</td>
                  <td class="border">{{item.surface}}</td>
                  <td class="border">{{item.materialThick1}}</td>
                  <td class="border">{{item.materialThick2}}</td>
                  <td class="border">{{item.materialThick3}}</td>
                  <td class="border">{{item.materialThick4}}</td>
                  <td class="border">{{item.materialThick5}}</td>
                  <td class="border">{{item.materialThick6}}</td>
                  <td class="border">{{item.totalThick}}</td>
                  <td class="border">{{item.TA}}</td>
                  <td class="border">{{item.CBR}}</td>
                  <td class="border">{{item.trafficDiv}}</td>
                  <td class="border">{{item.note}}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
          <v-card class="pa-0">
            <v-card-text class="text-center">下り車線</v-card-text>
            <v-table density="compact" class="border">
              <thead>
                <tr>
                  <th rowspan="2" class="border"></th>
                  <th colspan="5" class="text-center border">工事</th>
                  <th colspan="13" class="text-center border">舗装構造</th>
                </tr>
                <tr>
                  <th class="text-center border">履歴番号</th>
                  <th class="text-center border"><p>自 地点標</p><p>至 地点標</p></th>
                  <th class="text-center border">施工年度</th>
                  <th class="text-center border">車線番号</th>
                  <th class="text-center border">工事種別</th>
                  <th class="text-center border">工法</th>
                  <th class="text-center border">表層区分</th>
                  <th class="text-center border">材料厚さ(cm)</th>
                  <th class="text-center border">材料厚さ(cm)</th>
                  <th class="text-center border">材料厚さ(cm)</th>
                  <th class="text-center border">材料厚さ(cm)</th>
                  <th class="text-center border">材料厚さ(cm)</th>
                  <th class="text-center border">材料厚さ(cm)</th>
                  <th class="text-center border">総厚(cm)</th>
                  <th class="text-center border">TA</th>
                  <th class="text-center border">設計CBR</th>
                  <th class="text-center border">センサス交通量区分</th>
                  <th class="text-center border">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in downhillPaveItems" :key="item.id">
                  <th class="border">舗装構成</th>
                  <td class="border">{{item.id}}</td>
                  <td class="border">{{item.waypoint.from[1]}} {{item.waypoint.from[2]}}<br/>{{item.waypoint.to[1]}} {{item.waypoint.to[2]}}</td>
                  <td class="border">{{item.year}}</td>
                  <td class="border">{{item.lane}}</td>
                  <td class="border">{{item.constType}}</td>
                  <td class="border">{{item.constMethod}}</td>
                  <td class="border">{{item.surface}}</td>
                  <td class="border">{{item.materialThick1}}</td>
                  <td class="border">{{item.materialThick2}}</td>
                  <td class="border">{{item.materialThick3}}</td>
                  <td class="border">{{item.materialThick4}}</td>
                  <td class="border">{{item.materialThick5}}</td>
                  <td class="border">{{item.materialThick6}}</td>
                  <td class="border">{{item.totalThick}}</td>
                  <td class="border">{{item.TA}}</td>
                  <td class="border">{{item.CBR}}</td>
                  <td class="border">{{item.trafficDiv}}</td>
                  <td class="border">{{item.note}}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-card-content>
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
