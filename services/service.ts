import axios, { AxiosInstance } from "axios";
import { TOKEN_HEADER_NAME } from "~~/types";

// axiosの共通設定

const apiClient: AxiosInstance = axios.create({
  // リクエストヘッダ
  headers: {
    "Content-type": "application/json",
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


/**
 * WebAPIに関する基本的な機能を提供します。
 */
export default class Service {
  protected http = apiClient;

  /**
   * 指定したURLよりファイルをダウンロードし、ファイルに保存します。
   * @param url ファイル取得先のURL。URLは画像やExcelファイルなど単一ファイルを取得できるものである必要があります。
   */
  protected downloadToSave(url:string) {
    this.http.get(url, {
      responseType: 'blob'
    }).then((res)=>{
      // 保存する際のファイル名をレスポンスヘッダから取得します
      let filename = this.getFileName(res.headers["content-disposition"])

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  }

  /**
   * ファイルをメモリ上にダウンロードします。
   * @param url ファイル取得先のURL。
   * @returns 取得済ファイルへのURL。
   */
   protected downloadToUrl(url:string) {
    return this.http.get(url, {
      responseType: 'blob'
    }).then((res)=>{
      // 取得したバイナリをローカルのURLにします。（バイナリはメモリにストアされます）
      return window.URL.createObjectURL(res.data);
    });
  }

  /**
   * 画像ファイルをダウンロードします。
   * @param url ファイル取得先のURL
   * @param noimageUrl 取得できない場合の代替画像
   * @returns 取得済ファイルへのURL。このURLより画像を参照することができます。
   */
  public downloadImageToUrl(url:string, noimageUrl = "/assets/img/noimage.png") {
    return this.downloadToUrl(url)
      .catch((e)=>{
        return noimageUrl
      });
  }

  /**
   * レスポンスヘッダのcontent-dispositionからファイル名を取得します。
   * @param contentDisposition responseヘッダのcontent-disposition項目
   * @returns ファイル名
   */
  private getFileName(contentDisposition) {
    let fileName = contentDisposition.substring(contentDisposition.indexOf("''") + 2,
                                                contentDisposition.length
                                                );
    //デコードするとスペースが"+"になるのでスペースへ置換します
    fileName = decodeURI(fileName).replace(/\+/g, " ");

    return fileName;
}

}
