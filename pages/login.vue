<template>
  <v-app>
    <v-container class="d-flex align-center flex-column mt-5">

        <div class="w-50 ma-4" style="text-align:center">
            <h1>東京都AMS</h1>
        </div>

        <v-card
          class="w-50 elevation-12 py-4 px-16" max-width="600" min-width="400">
          <v-card-text class="pr-40">
            <v-form>
              <v-alert
                type="error"
                v-if='errorMessage.length>0'
              >
                {{errorMessage}}
              </v-alert>
              

              <v-text-field
                label="ユーザID" 
                variant="underlined"
                v-model="userId"
              />
              <v-text-field 
                label="パスワード"
                type="password"
                variant="underlined"
                v-model="password"
              />

              <v-btn color="primary" style="width:100%" @click="onLoginClick">ログイン
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
    </v-container>
    <loading-overlay v-model:isOpen="isLoading" />

  </v-app>
</template>

<script lang="ts" setup>
  import authService from '~~/services/auth-service';

  definePageMeta({
    layout: false,
  });

  const userId = ref("")
  const password = ref("")
  const errorMessage = ref("")
  const isLoading = ref(false)

  const onLoginClick = () => {
    console.info("ログインボタンを押下しました")

    isLoading.value = true;
    
    authService.login(userId.value, password.value)
    .then((res)=>{
      
      const to = useRoute().redirectedFrom?.path || '/'
      console.log(`ログインに成功-> '${to}'に移動します`)
      useRouter().push(to)

    }).catch((e)=>{
      if(e.response?.status == 403) {
        errorMessage.value = "ユーザID、またはパスワードが間違っています"
      } else {
        console.log("error ",e)
        errorMessage.value = "ログイン中に予期しないエラーが発生しました"
      }
    }).finally(()=>{
      isLoading.value = false
    });
  }

</script>