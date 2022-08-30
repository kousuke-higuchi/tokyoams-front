import Service from "./service";

import blinkerJson from "~~/assets/blinker.json"
import { BlinkerSummary } from "~~/types";

/**
 * 障害物表示灯系のAPIを提供します。
 */
 class BlinkerService extends Service {

    /**
     * 障害物表示灯をダウンロードします。
     */
    public getList() {
       // TODO: WebAPIによる実装に変更すること
       return new Promise<[BlinkerSummary]>((resolve)=>{
          resolve(blinkerJson as [BlinkerSummary])
       }) 
    }
}
export default new BlinkerService();