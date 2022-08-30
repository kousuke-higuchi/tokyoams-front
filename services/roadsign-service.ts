import Service from "./service";

import roadsignJson from "~~/assets/roadsign.json"
import { RoadsignSummary } from "~~/types";

/**
 * 道路標識表示灯系のAPIを提供します。
 */
 class RoadsignService extends Service {

    /**
     * 道路標識をダウンロードします。
     */
    public getList() {
       // TODO: WebAPIによる実装に変更すること
       return new Promise<[RoadsignSummary]>((resolve)=>{
          resolve(roadsignJson as [RoadsignSummary])
       }) 
    }
}
export default new RoadsignService();