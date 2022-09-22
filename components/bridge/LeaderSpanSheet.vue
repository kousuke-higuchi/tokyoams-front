<template>
  <v-container>
    <v-table density="compact" class="ledger">
      <thead>
        <tr>
          <th
            colspan="16"
            class="text-center ledger-th"
            style="border: 1px solid #dedede"
          >
            径間別諸元
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>径間番号</th>
          <td class="text-right">{{leaderSpan.spanNo}}</td>
          <th>支間長</th>
          <td class="text-right">{{leaderSpan.length + "ｍ"}}</td>
          <th>径間割</th>
          <td>{{leaderSpan.spanDivNum}}</td>
          <th>区分</th>
          <td>{{leaderSpan.spanDiv}} </td>
          <th>種別</th>
          <td>{{leaderSpan.spanKind}}</td>
          <th>箇所名</th>
          <td>{{leaderSpan.place}}</td>
          <th>桁下条件</th>
          <td>{{ketashitacond}}</td>
          <th>水面からの距離</th>
          <td rowspan="2">{{leaderSpan.distFrWL}} ｍ</td>
        </tr>
      </tbody>
    </v-table>
    <v-table density="compact" class="ledger">
      <tbody>
        <tr>
          <th rowspan="2">構造形式</th>
          <th>上部工➀</th>
          <td>{{leaderSpan.supType_S}}</td>
          <th rowspan="2">幅員</th>
          <th>車道部</th>
          <td class="text-right">{{leaderSpan.wid_Road}} ｍ</td>
          <th colspan="2"></th>
          <th rowspan="2">たわみ</th>
          <th>δ d</th>
          <td>{{leaderSpan.deltaD}}</td>
          <th>δ a/1</th>
          <td>{{leaderSpan.deltaEL}}</td>
          <th rowspan="2">路面位置</th>
          <td>{{leaderSpan.roadPos}}</td>
          <th rowspan="2">主桁(横)</th>
          <th>本数</th>
          <td class="text-right">{{leaderSpan.gdrNum}} 本</td>
          <th>間隔</th>
          <td class="text-right">{{leaderSpan.gdrBtwn}} ｍ</td>
          <th rowspan="2">横桁</th>
          <th>本数</th>
          <td class="text-right">{{leaderSpan.crsNum}} 本</td>
          <th>間隔</th>
          <td class="text-right">{{leaderSpan.crsBtwn}} ｍ</td>
          <th rowspan="2">縦桁</th>
          <th>本数</th>
          <td class="text-right">{{leaderSpan.verNum}} 本</td>
          <th>間隔</th>
          <td class="text-right">{{leaderSpan.verBtwn}} ｍ</td>
        </tr>
        <tr>
          <th>上部工➁</th>
          <td>{{leaderSpan.supType_E}}</td>
          <th>歩道部</th>
          <td class="text-right">{{leaderSpan.wid_Walk}} ｍ</td>
          <th class="text-center">計</th>
          <td class="text-right">{{leaderSpan.wid_Total}} ｍ</td>
          <th>δ e</th>
          <td>{{leaderSpan.deltaE}}</td>
          <th></th>
          <td></td>
          <td></td>
          <th>桁高</th>
          <td class="text-right">{{leaderSpan.gdrHight}} ｍ</td>
          <th>材種</th>
          <td>{{leaderSpan.gdrMaterial}}</td>
          <th>桁高</th>
          <td class="text-right">{{leaderSpan.crsHight}} ｍ</td>
          <th>材種</th>
          <td>{{leaderSpan.crsMaterial}}</td>
          <th>桁高</th>
          <td>{{leaderSpan.verHight}}</td>
          <th>材種</th>
          <td>{{leaderSpan.verMaterial}}</td>
        </tr>
        <tr>
          <th rowspan="2"></th>
          <th rowspan="2">下部工</th>
          <th>始端側</th>
          <th rowspan="2">脚番</th>
          <td>{{leaderSpan.subName_S}}</td>
          <th rowspan="2">躯体<br>形式</th>
          <td>{{leaderSpan.subType_S}}</td>
          <th rowspan="2">基礎<br>形式</th>
          <td>{{leaderSpan.basType_S}}</td>
          <th rowspan="2">伸縮<br>装置</th>
          <th>固定形式</th>
          <td>{{leaderSpan.expTypeFix}}</td>
          <th>材種</th>
          <td>{{leaderSpan.expMatFix}}</td>
          <th rowspan="2">支援</th>
          <th>固定形式</th>
          <td>{{leaderSpan.bearTypeFix}}</td>
          <th>材種</th>
          <td>{{leaderSpan.bearMatFix}}</td>
          <th rowspan="2">床振</th>
          <th>車道部厚さ</th>
          <td class="text-right">{{leaderSpan.decRodThk}} ｍｍ</td>
          <th>材種</th>
          <td>{{leaderSpan.decRodMat}}</td>
          <th rowspan="2">舗装</th>
          <th>車道部厚さ</th>
          <td class="text-right">{{leaderSpan.pavRodThk}} ｍｍ</td>
          <th>材種</th>
          <td>{{leaderSpan.pavRodMat}}</td>
          <th colspan="2"></th>
        </tr>
        <tr>
          <th>終端側</th>
          <td>{{leaderSpan.subName_E}}</td>
          <td>{{leaderSpan.subType_E}}</td>
          <td>{{leaderSpan.basType_E}}</td>
          <th>可動形式</th>
          <td>{{leaderSpan.expTypeMove}}</td>
          <th>材種</th>
          <td>{{leaderSpan.expMatMove}}</td>
          <th>可動形式</th>
          <td>{{leaderSpan.bearTypeMove}}</td>
          <th>材種</th>
          <td>{{leaderSpan.bearMatMove}}</td>
          <th>歩道部厚さ</th>
          <td class="text-right">{{leaderSpan.decWlkThk}} ｍｍ</td>
          <th>材種</th>
          <td>{{leaderSpan.decWlkMat}}</td>
          <th>歩道部厚さ</th>
          <td class="text-right">{{leaderSpan.pavWlkThk}} ｍｍ</td>
          <th>材種</th>
          <td>{{leaderSpan.pavWlkMat}}</td>
          <th colspan="2"></th>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script lang="ts" setup>
    import { LeaderSpan } from "@/types/bridge";
    interface Props {
        leaderSpan:  LeaderSpan;
    }
    const props = withDefaults(defineProps<Props>(), {
        leaderSpan:null,
    });
    
    console.log('子画面作成中');
    console.log(props.leaderSpan);
    const isRiverExist = (props.leaderSpan.undCon_Riv != null) && (props.leaderSpan.undCon_Riv == 1)  ? "■":"□"; 
    const isRoadExist = (props.leaderSpan.undCon_Rod != null) && (props.leaderSpan.undCon_Rod == 1) ? "■":"□"; 
    const isTrainExist = (props.leaderSpan.undCon_Trn != null) && (props.leaderSpan.undCon_Trn == 1) ? "■":"□"; 
    const isParkExist = (props.leaderSpan.undCon_Pak != null) && (props.leaderSpan.undCon_Pak == 1) ? "■":"□"; 
    //その他は、undCon_WaNとundCon_WaYがあるが、既存実装に合わせNを使用する
    const isOtherExist = props.leaderSpan.undCon_WaN ? "■":"□"; 
    const ketashitacond = `${isRiverExist} 河川  ${isRoadExist}  ` 
                              + `道路 ${isTrainExist}  鉄道 ${isParkExist}  公園 ${isOtherExist} その他`;
</script>