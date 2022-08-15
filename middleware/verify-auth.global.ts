import authService from '~~/services/auth-service'

/**
 * ページ遷移をフックします
 */
export default defineNuxtRouteMiddleware((to, from) => {
    let require = import.meta.env.VITE_REQUIRE_AUTH || 'true'
    if(require === 'false') return

    if(to.path != '/login') {
        const authState = useAuthUser()
        // 認証済でなければログイン画面に移動する
        if(!authState.state.value.isLogin) {
            console.debug(`未ログインのため、ログイン画面に戻ります`)
            return navigateTo('/login')
        }
    }  

})
