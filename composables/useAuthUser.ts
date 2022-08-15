import { Ref } from "nuxt/dist/app/compat/capi";
import { User } from "~~/types/types";

type AuthState = {
  isLogin:boolean;
  currentUser: User;
}

const _STORAGE_KEY_USER_ = 'authUser'

/**
 * サイト全体で取得できる認証情報を管理します
 * @see {@link https://www.memory-lovers.blog/entry/2022/06/04/180000 | 参考URL}
 * @returns 
 */
export const useAuthUser = () => {
  
  // ユーザ情報をローカルストレージから復元
  // ->リロード時にstateのデータがクリアされるため
  let userJsonText = getLocalstrageValue(_STORAGE_KEY_USER_)
  let user:User = undefined
  if ( userJsonText!=null ) {
    user = JSON.parse(userJsonText)
    console.debug("ユーザ情報を復元しました")
  }

  const state = useState<AuthState>("auth_state", () => ({
    isLogin: (user!=undefined),
    currentUser: user
  }));

  return {
    state: readonly(state),
    set: setUser(state),
    clear: clear(state),
  }
};

const getLocalstrageValue = (key:string) => {
  return window.sessionStorage.getItem(key)
}

const setUser = (state: Ref<AuthState>) => {
    return (user:User) => {
        state.value.currentUser = user;
        state.value.isLogin = true;   
        window.sessionStorage.setItem(_STORAGE_KEY_USER_, JSON.stringify(user));
    }
};

const clear = (state: Ref<AuthState>) => {
    return () => {
        state.value.currentUser = undefined;
        state.value.isLogin = false; 
        window.sessionStorage.removeItem(_STORAGE_KEY_USER_)     
    }
};
