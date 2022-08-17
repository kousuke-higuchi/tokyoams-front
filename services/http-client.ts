import axios, { AxiosInstance } from "axios";
import { TOKEN_HEADER_NAME } from "~~/types";

const apiClient: AxiosInstance = axios.create({
  // リクエストヘッダ
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
  },
});

apiClient.interceptors.request.use(request => {
  // 認証済の場合、ヘッダに認証トークンを追加する
  let state = useAuthUser().state
  if(state.value.isLogin) {
    let token = state.value.currentUser?.apiToken
    request.headers.common[TOKEN_HEADER_NAME] = `Bearer ${token}`
  }
  console.debug("WebAPIにリクエストしています", request);
  return request;
})

apiClient.interceptors.response.use(response => {
  console.debug("WebAPIの応答がありました",response);
  return response;
})

export default apiClient;
