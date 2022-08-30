import Service from "./service";

import streetlightJson from "~~/assets/streetlight.json"
import { StreetlightSummary } from "~~/types";

/**
 * 道路照明系のAPIを提供します。
 */
 class StreetlightService extends Service {

    /**
     * 道路照明一覧をダウンロードします。
     */
    public getList() {
       // TODO: WebAPIによる実装に変更すること
       return new Promise<[StreetlightSummary]>((resolve)=>{
          resolve(streetlightJson as [StreetlightSummary])
       }) 
    }
}
export default new StreetlightService();