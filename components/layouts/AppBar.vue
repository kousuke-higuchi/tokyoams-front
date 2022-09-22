<template>
    <v-app-bar app flat height="30">
      <v-app-bar-nav-icon @click="() => { drawerComputed = !drawer }"></v-app-bar-nav-icon>
        <v-btn v-for="(link, i) in links" :key="i" text>
            <v-icon>{{ link.icon }}</v-icon>                
            <template v-if="link.newTab">
                <a :href="link.url" class="text-decoration-none" style="color:black" target="ams_manual">
                  {{ link.name }}
                </a>
            </template>
            <template v-else>
                <NuxtLink :to="link.url" tag="div" class="text-decoration-none" style="color:black">
                  {{ link.name }}
                </NuxtLink>
            </template>
        </v-btn> 
      <v-btn class ="ml-auto" @click="onLogoutClick()">ログアウト</v-btn>
    </v-app-bar>
    <v-app-bar style="background-color:lightcyan"  height="54">
        <v-avatar color="white" size="40" style="border: 1px solid #dcdcdc;">
          <img style="width:34px" :src= 'getLogoPath()'/>
        </v-avatar>
          <div class="ml-4"><h2>建設局 道路施設管理システム</h2> </div>
          <v-row justify="end" class="mr-1"> {{ currentFacilityGroup }} {{userName }}</v-row>
    </v-app-bar>
</template>
<script lang="ts">

    import authService from '~~/services/auth-service';
    export default defineComponent({
        props: {
            drawer: Boolean,
        },
        emits: ['update:drawer'],
        setup:  (props, { emit }) => {
            const { drawer } = toRefs(props)
            const drawerComputed = computed({
            get: () => drawer.value,
            set: (value) => {
                emit('update:drawer', value)
            },
            })

            // 問合せ: メーラに自動入力する情報
            let contactTo = "kousuke_higuchi@jip-ts.co.jp"
            let subject = "【道路施設管理システム】お問い合わせ"
            let body = "件名：%0D%0A問合せ内容：%0D%0A"

            const userName = ref('');
            const authState = useAuthUser();
            if (authState.state.value.isLogin) {
                userName.value = authState.state.value.currentUser.name;
            }
            const links = [
                { name:'Home', icon:'mdi-home', url:'/' , newTab: false},
                { name:'マニュアル', icon:'mdi-book', url:'/assets/pdf/manual.pdf', newTab: true },
                { name:'問い合わせはこちら', icon:'mdi-email', url:`mailto:${contactTo}?subject=${subject}&body=${body}`, newTab: false },
                { name:'推奨閲覧設定', icon:'mdi-settings', url:'/recommendSetting' , newTab: false},
            ]
            return {
                drawerComputed,
                links,
                userName,
            }
        },
        data() {
            return {
                currentFacilityGroup: '',
            }
        },
        methods: {
            onLogoutClick: () => {
                authService.logout().then(()=>{
                    navigateTo("/login")
                })
            },
            getLogoPath(){
                return new URL('../../assets/img/symbol_tokyo.svg',import.meta.url).href
            },
        }
    })
    
</script>
