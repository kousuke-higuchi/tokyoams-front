import Service from "~~/services/service";

import { Switchboard } from "~~/types/atf/switchboard";
import { AtfSummary } from "~~/types";

/**
 * 配電盤系のAPIを提供します。
 */
 class SwitchboardService extends Service {

    /**
     * 配電盤一覧を取得します。
     */
    public async getList() {
      return this.http.get<AtfSummary[]>("/api/switchboard").then((list)=> {
         return list;
      });
    }

    /**
     * 配電盤を取得します。
     * @param id 取得する配電盤ID
     * @returns 
     */
    public get(id:number) {
      return this.http.get<Switchboard>(`/api/switchboard/${id}`).then((t)=>{
         return t.data;
       });
    }

    /**
     * 配電盤台帳を更新します。
     * @param switchboard 
     * @param diagram 
     * @param photo 
     * @returns 
     */
    public save(switchboard: Switchboard, photo?:File, diagram?:File) {
      
      // 入力情報・画像更新の問合せ
      let formData = new FormData();
      formData.append('switchboard', new Blob([JSON.stringify(switchboard)], {type : 'application/json'}))
      if(diagram) formData.append('diagram', diagram);
      if(photo) formData.append('photo', photo);

      let config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };

      return this.http.post<Switchboard>(`/api/switchboard/${switchboard.id}`, formData, config);
    }
}

export default new SwitchboardService();