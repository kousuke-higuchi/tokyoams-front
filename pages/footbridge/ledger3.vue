<template>
  <div>
    <v-row>
      <v-col md="3" cols="12">
        <fbg-side-card-details />
      </v-col>
      <v-col md="9" cols="12">
          <v-card elevation="3">
            <v-card-title>
              <v-row class="justify-start mt-1 ml-3">橋梁台帳  東京都</v-row>
              <v-row class="justify-end mt-1 mr-3">鎌倉橋  No.01110010-0</v-row>
            </v-card-title>
          <v-card-text>
          <v-row>
          <v-col md="4" cols="12">
            <v-card class="overflow-auto" elevation="4">
              <v-card-title>
                一般事項
              </v-card-title>
              <v-card-text>
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th class="text-left">項目</th>
                      <th class="text-left">内容</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in general" :key="item.name">
                      <td>{{ item.item }}</td>
                      <td>{{ item.name }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card-text>
            </v-card >
          </v-col>
          <v-col md="4" cols="12">
            <v-card class="overflow-auto"  elevation="4">
              <v-card-title>
                上部構造
              </v-card-title>
              <v-card-text>
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th class="text-center"></th>
                      <th class="text-center">主径間</th>
                      <th class="text-center">側径間</th>
                      <th class="text-center">取付道路</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in upperStruct" :key="item.item">
                      <td>{{ item.item }}</td>
                      <td>{{ item.main }}</td>
                      <td>{{ item.sub }}</td>
                      <td>{{ item.road }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-divider></v-divider>
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th class="text-center"></th>
                      <th class="text-center">主径間構造</th>
                      <th class="text-center">主径間材種</th>
                      <th class="text-center">側径間構造</th>
                      <th class="text-center">側径間材種</th>
                      <th class="text-center">道路構造</th>
                      <th class="text-center">道路材種</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in upperStructDetail" :key="item.item">
                      <td>{{ item.item }}</td>
                      <td>{{ item.mainStruct }}</td>
                      <td>{{ item.mainMaterial }}</td>
                      <td>{{ item.subStruct }}</td>
                      <td>{{ item.subMaterial }}</td>
                      <td>{{ item.roadStruct }}</td>
                      <td>{{ item.roadMaterial }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-divider></v-divider>
                <div class="text-center">主要材料</div>
                <v-divider></v-divider>
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th class="text-center">材料</th>
                      <th class="text-center">橋梁部</th>
                      <th class="text-center">取付道路部</th>
                      <th class="text-center">合計</th>
                      <th class="text-center">摘用</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in upperStructMaterial" :key="item.item">
                      <td>{{ item.item }}</td>
                      <td>{{ item.bridge }}</td>
                      <td>{{ item.road }}</td>
                      <td>{{ item.sum }}</td>
                      <td>{{ item.note }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-divider></v-divider>
                <v-table density="compact">
                  <tbody>
                    <tr v-for="item in upperNote" :key="item.name">
                      <td>{{ item.item }}</td>
                      <td>{{ item.name }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card-text>
            </v-card >
          </v-col>
          <v-col md="4" cols="12">
            <v-card class="overflow-auto" elevation="4">
              <v-card-title>
                下部構造
              </v-card-title>
              <v-card-text>
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th class="text-left"></th>
                      <th class="text-left"></th>
                      <th class="text-left">構造形式</th>
                      <th class="text-left">材種</th>
                      <th class="text-left">基礎到達層深さ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in lowerStruct" :key="item.type">
                      <td>{{ item.item }}</td>
                      <td>{{ item.type }}</td>
                      <td>{{ item.struct }}</td>
                      <td>{{ item.material }}</td>
                      <td>{{ item.basic }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-divider></v-divider>
                <div class="text-center">一基当り上部工反力</div>
                <v-divider></v-divider>
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th class="text-left">基礎番号</th>
                      <th class="text-left">常時 直</th>
                      <th class="text-left">常時 平</th>
                      <th class="text-left">地震 直</th>
                      <th class="text-left">地震 平</th>
                      <th class="text-left">摘要</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in lowerResilience" :key="item.no">
                      <td>{{ item.no }}</td>
                      <td>{{ item.vertical }}</td>
                      <td>{{ item.horizon }}</td>
                      <td>{{ item.vertical4Quake }}</td>
                      <td>{{ item.horizon4Quake }}</td>
                      <td>{{ item.note }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-divider></v-divider>
                <div class="text-center">主要材料</div>
                <v-divider></v-divider>
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th class="text-center">材料</th>
                      <th class="text-center">橋梁部</th>
                      <th class="text-center">取付道路部</th>
                      <th class="text-center">合計</th>
                      <th class="text-center">摘用</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in lowerStructMaterial" :key="item.item">
                      <td>{{ item.item }}</td>
                      <td>{{ item.bridge }}</td>
                      <td>{{ item.road }}</td>
                      <td>{{ item.sum }}</td>
                      <td>{{ item.note }}</td>
                    </tr>
                  </tbody>
                </v-table>
                <v-divider></v-divider>
                <v-table density="compact">
                  <tbody>
                    <tr v-for="item in upperNote" :key="item.name">
                      <td>{{ item.item }}</td>
                      <td>{{ item.name }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card-text>
            </v-card >
          </v-col>
          </v-row>
          </v-card-text>
        </v-card >
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
/* HACK: setup const tab = ref('note')で tabを'note'に初期化できなかった */
export default defineComponent({
  data() {
    return {
      general: [
        { item: '橋名',     name: '鎌倉橋',    },
        { item: 'フリガナ', name: 'カマクラバシ',   },
        { item: '位置 自',  name: '千代田区 内神田 1丁目 地内', },
        { item: '位置 至',  name: '千代田区 大手町 1丁目 地内', },
        { item: '路線名',   name: '特例都道町有楽町線402号',    },
        { item: '路線名 都市計画街路', name: '補助94号線', },
        { item: '路線名 通常名',      name: '---',     },
        { item: '橋下種類',      name: '河川  日本橋川',   },
        { item: '橋格',       name: '1等橋',   },
        { item: '(示方書)',      name: 'T15',   },
        { item: '橋格',       name: '1等橋',   },
        { item: '設計震度',       name: 'KH= 0 KV= 0',   },
        { item: '橋長',       name: '30.175 ｍ',   },
        { item: '総格員',       name: '22.98 ｍ',   },
        { item: '有効格員 車道',       name: '16.6 ｍ',   },
        { item: '有効格員 歩道',       name: '282.70 ｍ',   },
        { item: '有効格員 合計',       name: '22 ｍ',   },
        { item: '橋面積',       name: '693.4 ㎡',   },
        { item: '地盤格',       name: '2849.0 ㎝',   },
        { item: '平面線形',       name: '直 斜角 α = 90° 曲事半径 R= ∞ ｍ',   },
        { item: '縦断勾配',       name: '橋梁部 1.67 %  取付部 3.33 %',   },
        { item: '横断勾配',       name: '車道   2 %     歩道   2 %',   },
        { item: '携定ケタ下桟高',       name: '不明 ｍ',   },
        { item: '携定制限格',       name: '不明 ｍ',   },
        { item: '携定ケタ下空間高',       name: '不明 ｍ',   },
        { item: '中央ケタ下桟高',       name: 'AP 不明 ｍ',   },
        { item: '最低ケタ下桟高',       name: 'AP 不明 ｍ',   },
        { item: '最高水位',       name: 'AP 不明 ｍ',   },
        { item: '最低川床高',       name: 'AP 不明 ｍ',   },
        { item: '橋下路面高',       name: 'AP 不明 ｍ',   },
        { item: '橋台敷 ',       name: '右岸上置側　 ㎥  左岸上置側　㎥',   },
        { item: '橋台敷 ',       name: '右岸下置側　 ㎥  左岸下置側　㎥',   },
        { item: '着工',           name: '1928 年  1 月',   },
        { item: 'しゅん工',       name: '1929 年  3 月',   },
        { item: '記事',       name: '(マイクロ) 有  (竣工図) 無  (計算書) 不明',   },
        { item: '管理区分',       name: '都管理橋梁',   },
      ],
      upperStruct: [
        { item: '延長',          main: '30.175 ｍ',  sub:' ｍ',     road:'右岸取付      ｍ ',  },
        { item: '径間材',        main: '1径間',       sub:'径間', road:'   階段部    ｍ ',   },
        { item: '(支間)',        main: '30.175',     sub:'',     road:'   盛土部    ｍ ',   },
        { item: '',              main: '',           sub:'',     road:'   階段部    ｍ ',   },
        { item: '',              main: '',           sub:'',     road:'左岸取付     ｍ ',   },
        { item: '',              main: '',           sub:'',     road:'   階段部    ｍ ',   },
        { item: '',              main: '',           sub:'',     road:'   盛土部    ｍ ',   },
        { item: '',              main: '',           sub:'',     road:'   階段部    ｍ ',   },
        { item: '路面位置',       main: '上部',       sub:'無',     road:'',                  },
        { item: 'タワミ',         main: 'δd=  δe=  δe/1=', sub: 'δd=  δe=  δe/1= ',  road:'', },
        { item: '構造形式',       main: 'SRC固定アーチ橋', sub: '', road:'',           },
      ],
      upperStructDetail: [
        { item: '主桁(横)',   mainStruct: '主ケタ数 37本', mainMaterial: 'SRC',
         subStruct: '主ケタ数   本', subMaterial: '', roadStruct: '主ケタ数   本', roadMaterial: '', },
        { item: '主桁(横)',   mainStruct: 'ケタ高 1.372 ｍ', mainMaterial: '',
         subStruct: 'ケタ高   ｍ', subMaterial: '',  roadStruct: 'ケタ高   ｍ', roadMaterial: '', },
        { item: '主桁(横)',   mainStruct: '間隔   0.61 ｍ', mainMaterial: '',
         subStruct: '間隔       ｍ', subMaterial: '', roadStruct: '間隔       ｍ', roadMaterial: '', },

        { item: '床板横桁',   mainStruct: 'ケタ高 1.372 ｍ', mainMaterial: 'SRC',
         subStruct: 'ケタ高   ｍ', subMaterial: '',  roadStruct: 'ケタ高   ｍ', roadMaterial: '', },
        { item: '床板横桁',   mainStruct: '間隔 3.5 ｍ', mainMaterial: '',
         subStruct: '間隔    ｍ', subMaterial: '', roadStruct: '間隔    ｍ', roadMaterial: '', },
        { item: '床板縦桁',   mainStruct: 'ケタ高  ｍ', mainMaterial: 'SRC',
         subStruct: 'ケタ高   ｍ', subMaterial: '',  roadStruct: 'ケタ高   ｍ', roadMaterial: '', },
        { item: '床板縦桁',   mainStruct: '間隔  ｍ', mainMaterial: '',
         subStruct: '間隔    ｍ', subMaterial: '', roadStruct: '間隔    ｍ', roadMaterial: '', },
        { item: '床板車道',   mainStruct: 'ts ｍｍ', mainMaterial: '',
         subStruct: 'ts ｍｍ', subMaterial: '',  roadStruct: 'ts ｍｍ', roadMaterial: '', },
        { item: '床板歩道',   mainStruct: 'ts ｍｍ', mainMaterial: '',
         subStruct: 'ts ｍｍ', subMaterial: '', roadStruct: 'ts ｍｍ', roadMaterial: '', },
        { item: '舗装車道',   mainStruct: 'ts 50 ｍｍ', mainMaterial: 'アスファルト',
         subStruct: 'ts ｍｍ', subMaterial: '',  roadStruct: 'ts ｍｍ', roadMaterial: '', },
        { item: '舗装歩道',   mainStruct: 'ts 10 ｍｍ', mainMaterial: 'コンクリート',
         subStruct: 'ts ｍｍ', subMaterial: '', roadStruct: 'ts ｍｍ', roadMaterial: '', },
        { item: '仲縮車道',   mainStruct: '突合せ', mainMaterial: 'ゴム',
         subStruct: '',       subMaterial: '',  roadStruct: '',       roadMaterial: '', },
        { item: '仲縮歩道',   mainStruct: '', mainMaterial: '',
         subStruct: '', subMaterial: '', roadStruct: '', roadMaterial: '', },
        { item: '支承車道',   mainStruct: '', mainMaterial: '',
         subStruct: '',       subMaterial: '',  roadStruct: '',       roadMaterial: '', },
        { item: '支承歩道',   mainStruct: '', mainMaterial: '',
         subStruct: '', subMaterial: '', roadStruct: '', roadMaterial: '', },
      ],
      upperStructMaterial: [
        { item: '主鋼材',      bridge: '不明 t', road: 't', sum: 't', note: ''},
        { item: '鉄筋',        bridge: 't', road: 't', sum: 't', note: ''},
        { item: 'PC鋼材',      bridge: '不明 t', road: 't', sum: 't', note: ''},
        { item: '高構材',      bridge: '不明 t', road: 't', sum: 't', note: '型式:石造'},
        { item: 'コンクリート',bridge: '不明 ㎥', road: '㎥', sum: '㎥', note: ''},
        { item: 'アスコン',    bridge: '不明 t', road: 't', sum: 't', note: ''},
        { item: '石材',       bridge: '不明 ㎥', road: '㎥', sum: '㎥', note: ''},
        { item: '木材',       bridge: '不明 ㎥', road: '㎥', sum: '㎥', note: ''},
        { item: '上部死荷重',  bridge: '不明 t ( 不明 t/㎥)', road: 't ( 不明 t/㎥)', sum: 's㎥', note: ''},
      ],
      upperNote: [
        { item: '記事',     name: '不明',    },
      ],
      lowerStruct: [
        { item: '橋台 (A1)(A2)', type: '筐体', struct: '重力式 10973 × 23012 ×9297', material: 'RC', basic: '' }, 
        { item: '橋台 (A1)(A2)', type: '基礎', struct: '杭基礎(推定) Φ273 × 7270 × 9297', material: '木', basic: 'AP-砂塵' }, 
      ],
      lowerResilience: [
        { no: 'A1',           vertical: 't',  horizon: 't', vertical4Quake: 't',  horizon4Quake: 't', note: '不明'  }, 
        { no: 'A2',           vertical: 't',  horizon: 't', vertical4Quake: 't',  horizon4Quake: 't', note: '不明'  }, 
        
      ],
      lowerStructMaterial: [
        { item: '鋼抗',       bridge: '不明 t', road: 't', sum: 't', note: ''},
        { item: 'RC抗',       bridge: '不明 本', road: '本', sum: '本', note: ''},
        { item: 'PC抗',       bridge: '不明 本', road: '本', sum: '本', note: ''},
        { item: '鋼材',       bridge: '不明 t', road: 't', sum: 't', note: ''},
        { item: '鉄筋',       bridge: '不明 t', road: 't', sum: 't', note: ''},
        { item: 'コンクリート',bridge: '不明 ㎥', road: '㎥', sum: '㎥', note: ''},
        { item: '石材',       bridge: '不明 ㎥', road: '㎥', sum: '㎥', note: ''},
        { item: '木材',       bridge: '不明 ㎥', road: '㎥', sum: '㎥', note: ''},
        { item: '搬入れ長',   bridge: '不明 ｍ', road: 'ｍ', sum: '0 ｍ', note: ''},
      ],
    }
  },
  mounted: function() {
    console.log("mounted ledget1");
  },
  methods: {
  },
});
</script>
<style>
</style>