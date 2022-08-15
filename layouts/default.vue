<template>
  <v-app id="inspire">
    <layouts-app-bar v-model:drawer="drawer" />

    <v-navigation-drawer app v-model="drawer" fixed temporary>
      <v-list 
        :items="menuItems"
        v-model:opened="openedItems"
        item-value="title"
        color="primary"
      dense>
      </v-list>

    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container fluid>

      <slot />

      </v-container>
    </v-main>

    <loading-overlay v-model:isOpen="isLoading" />
  </v-app>
</template>
<script lang="ts">

  export default defineComponent({
    data() {
      const menuItems =  [
          { title: '施設管理画面', props: { prependIcon: 'mdi-content-copy'}, 
            children: [
              { title: '橋梁' , props:{ to:"/bridge" }},
              { title: '歩道橋', props:{ to: '/footbridge'}},
              { title: 'トンネル', props:{ to: '/tobeImplement'}},
              { title: '舗装', props:{ to: '/pavement'}},
              { title: '道路施設', 
                children:[
                { title: '共同溝', props:{ to: '/tobeImplement' }},
                { title: '擁壁',   props:{ to: '/tobeImplement' }},
                { title: '掘割道路', props:{ to: '/tobeImplement' }},
                { title: '組立歩道', props:{ to: '/tobeImplement' }},
                { title: '桟道', props:{ to: '/tobeImplement' }},
                { title: '地下歩道者道', props:{ to: '/tobeImplement' }},
                { title: 'ロックシェッド', props:{ to: '/tobeImplement' }},
                ],
              },
              { title: '道路附属物',
                children:[
                { title: '道路照明', props:{ to: '/streetlight' }},
                { title: '配電盤', props:{ to: '/switchboard' }},
                { title: '障害物', props:{ to: '/blinker' }},
                { title: '道路標識', props:{ to: '/sign' }},
                { title: '道路反射鏡', props:{ to: '/tobeImplement' }},
                ],
              },
            ],
          },
          { title: '各種機能', props:{ prependIcon: 'mdi-animation-play'}, 
            children: [
              { title: '施設新規登録',  
                children:[
                { title: '道路附属物の場合', props:{ to: '/tobeImplement' }},
                ],
              },
              { title: '発注情報登録', 
                children:[
                { title: '発注登録サイト', props:{ to: '/tobeImplement' }},
                ],
              },
              { title: '更新依頼処理', 
                children:[
                { title: '更新依頼の処理', props:{ to: '/tobeImplement' }},
                ],
              },
            ],
          },
          {
            title: '補修履歴', props:{ prependIcon: 'mdi-history'},  
            children: [
              { title: '登録',  props:{ to: '/tobeImplement' }},
            ],
          },
      ];

      // サイドメニュー（初期状態）をすべて開いた状態にする
      let openedItems = []
      const fillTitleRecurse = (item) => {
        // 子項目があるタイトルを配列化する
        if(item.children) {
          openedItems.push(item.title);
          item.children.forEach((c)=> { fillTitleRecurse(c) });
        }
      }
      menuItems.forEach((m)=> {fillTitleRecurse(m)})
      
      const loadingState = useLoading()
      const isLoading = computed<boolean>({
        get: ()=> loadingState.state.value.isLoading,
        set: value => loadingState.setLoading(value)
      })


      return {
        drawer: false,
        openedItems: openedItems,
        menuItems,
        isLoading,
      }
    },
    methods: {
    }
  })

</script>

