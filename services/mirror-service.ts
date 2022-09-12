import Service from "./service";

import mirrorJson from "~~/assets/mirrorSummary.json"
import { AtfSummary } from "~~/types";

/**
 * 道路反射鏡系のAPIを提供します。
 */
 class MirrorService extends Service {

    /**
     * 道路反射鏡をダウンロードします。
     */
    public getList() {
       // TODO: WebAPIによる実装に変更すること
       return new Promise<[AtfSummary]>((resolve)=>{
          resolve(mirrorJson as [AtfSummary])
       }) 
    }

    /**
     * 道路反射鏡台帳を更新します。
     * @param mirror TODO:仮の値。データが確定し次第正しい値を実装
     * @param images TODO:仮の値。データが確定し次第正しい値を実装
     * @param maps TODO:仮の値。データが確定し次第正しい値を実装
     */
    public save(mirror:any, images?:any,maps?:any){
      //データやデータ型が確定していないためany型。確定次第改修。

      //入力情報・画像更新の問い合わせ
      let formData = new FormData();
      //TODO:機能も値が確定次第実装する
      // Object.getOwnPropertyNames(mirror).forEach(prop =>{
      //    formData.append(prop,mirror[prop]);
      // });
      // images?.forEach(f=>{
      //    formData.append(prop,mirror[prop]);
      // });
      // maps?.forEach(f=>{
      //    formData.append('maps',f);
      // });
      console.log(formData)
      let config = {
         headers:{
            'content-type':'multipart/form-data'
         }
      };

      //BE実装していないためnullを返す
      return null;
    }
}
export default new MirrorService();