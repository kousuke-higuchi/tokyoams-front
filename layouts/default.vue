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

    <toast v-model:isOpen="shownToast" :message="toastMessage" />
    <loading-overlay v-model:isOpen="isLoading" />

  </v-app>
</template>
<script lang="ts" setup>
  const drawer = ref(false);
  const menuItems =  [
      { title: '施設管理画面', props: { prependIcon: 'mdi-content-copy'}, 
        children: [
          { title: '橋梁' , props:{ href:"/bridge" }},
          { title: '歩道橋', props:{ href: '/footbridge'}},
          { title: 'トンネル', props:{ href: '/tunnel'}},
          { title: '舗装', props:{ href: '/pavement'}},
          { title: '道路施設', 
            children:[
            { title: '共同溝', props:{ href: '/utilitytunnel' }},
            { title: '擁壁',   props:{ href: '/rtnwall' }},
            { title: '掘割道路', props:{ href: '/ditchroad' }},
            { title: '組立歩道', props:{ href: '/assemblywalkway' }},
            { title: '桟道', props:{ href: '/plankroad' }},
            { title: '地下歩道者道', props:{ href: '/udgwalkway' }},
            { title: 'ロックシェッド', props:{ href: '/rockshed' }},
            ],
          },
          { title: '道路附属物',
            children:[
            { title: '道路照明', props:{ href: '/streetlight' }},
            { title: '配電盤', props:{ href: '/switchboard' }},
            { title: '障害物', props:{ href: '/blinker' }},
            { title: '道路標識', props:{ href: '/roadsign' }},
            { title: '道路反射鏡', props:{ href: '/mirror' }},
            ],
          },
        ],
      },
      { title: '各種機能', props:{ prependIcon: 'mdi-animation-play'}, 
        children: [
          { title: '施設新規登録',  
            children:[
            { title: '施設新規登録フォーム', props:{ href: '/newRegist' }}
            ],
          },
          { title: '発注情報登録', 
            children:[
            { title: '発注登録サイト', props:{ href: '/order' }},
            ],
          },
          { title: '業務機能', 
            children:[
            { title: '業務機能', props:{ href: '/function' }},
            ],
          },
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
  
  // 処理中...表示の初期設定
  const loadingState = useLoading()
  const isLoading = computed<boolean>({
    get: ()=> loadingState.state.value.isLoading,
    set: value => loadingState.setLoading(value)
  })

  // トーストメッセージの初期設定
  const toastState = useToast();
  const toastMessage = computed<string>({
    get: ()=> toastState.state.value.message,
    set: value => toastState.showToast(value)
  })
  const shownToast = computed<boolean>({
    get: ()=> toastState.state.value.shown,
    set: value => toastState.setShown(value)
  })

</script>

