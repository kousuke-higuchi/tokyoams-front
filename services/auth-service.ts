import { TOKEN_HEADER_NAME, User } from '~~/types';
import Service from './service';

/**
 * 認証系のAPIを提供します。
 */
class AuthService extends Service {
    /**
     * Webサーバでログイン認証を行います
     * @param userId ログインID 
     * @param password パスワード
     */
    public login(userId:string, password:string) {
        let params = {
            'username': userId,
            'password': password
        }

        var res = this.http.post<User>("/api/login", params)
        return res.then(( r )=>{
            let user = r.data;
            // ログイン成功->クライアントサイドで認証情報を保存する
            //let token = r.headers[TOKEN_HEADER_NAME];
            let state = useAuthUser()
            state.set(user);
            
            console.debug("stateに認証情報を保存しました", state.state.value)
        })
    }

    /**
     * 認証済のユーザ情報を取得します
     * @returns ログイン中のユーザ情報
     */
    public getCurrentUser() {
        // ログイン中のユーザ情報を取得
        let state = useAuthUser().state
        if(state.value.isLogin) {
            return state.value.currentUser
        }
        return null
    }

    /**
     * Webサーバからログアウトします
     */
    public logout() {
        // Webサーバにログアウトを要求
        let ret = this.http.post("/api/logout") 
        return ret.then((res)=>{
             
        }).finally(()=>{
            // 保持している認証情報をクリアする
            useAuthUser().clear();
        })
    }
}

export default new AuthService();