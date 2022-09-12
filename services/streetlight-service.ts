import Service from "./service";

import { AtfSummary } from "~~/types";

/**
 * 道路照明系のAPIを提供します。
 */
 class StreetlightService extends Service {

   　/**
     * 道路照明一覧を取得します。
     */
    public getList(officeid: number): Promise<any> {
      
      let paves = this.http.get(`/api/AtfStreetlight/${officeid}`)
      console.log(paves)
      return this.http.get(`/api/AtfStreetlight/${officeid}`);
  }
  
}
export default new StreetlightService();