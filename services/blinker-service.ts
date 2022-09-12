import Service from "./service";

import blinkerJson from "~~/assets/blinkerSummary.json"
import { AtfSummary } from "~~/types";

/**
 * 障害物表示灯系のAPIを提供します。
 */
 class BlinkerService extends Service {

    /**
     * 障害物表示灯をダウンロードします。
     */
    public getList() {
       // TODO: WebAPIによる実装に変更すること
       return new Promise<[AtfSummary]>((resolve)=>{
          resolve(blinkerJson as [AtfSummary])
       }) 
    }
}
export default new BlinkerService();