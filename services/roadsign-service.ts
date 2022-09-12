import Service from "./service";

import roadsignJson from "~~/assets/roadsignSummary.json"
import { AtfSummary } from "~~/types";

/**
 * 道路標識表示灯系のAPIを提供します。
 */
 class RoadsignService extends Service {

    /**
     * 道路標識をダウンロードします。
     */
    public getList() {
       // TODO: WebAPIによる実装に変更すること
       return new Promise<[AtfSummary]>((resolve)=>{
          resolve(roadsignJson as [AtfSummary])
       }) 
    }
}
export default new RoadsignService();