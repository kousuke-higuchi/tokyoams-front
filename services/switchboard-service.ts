import Service from "./service";

import switchboardJson from "~~/assets/switchboard.json"
import { Switchboard, SwitchboardSummary } from "~~/types";

/**
 * 配電盤系のAPIを提供します。
 */
 class SwitchboardService extends Service {

    /**
     * 配電盤一覧を取得します。
     */
    public getList() {
       // TODO: WebAPIによる実装に変更すること
       return new Promise<[SwitchboardSummary]>((resolve)=>{
          resolve(switchboardJson as [SwitchboardSummary])
       }) 
    }

    /**
     * 配電盤台帳を更新します。
     * @param switchboard 
     * @param attachments 
     * @param images 
     * @returns 
     */
    public save(switchboard: Switchboard, attachments?:[File], images?:[File]) {
      
      // 入力情報・画像更新の問合せ
      let formData = new FormData();
      Object.getOwnPropertyNames(switchboard).forEach(prop => {
         formData.append(prop, switchboard[prop]);
      });
      attachments?.forEach(f=>{
         formData.append('attachments', f);
      });
      images?.forEach(f => {
         formData.append('images', f);
      });
      console.log(formData)
      let config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };

      return this.http.post<Switchboard>(`/api/AtfSwitchboard/${switchboard.id}/update`, formData, config);
    }
}
export default new SwitchboardService();