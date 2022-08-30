import Service from "./service";

import mirrorJson from "~~/assets/mirror.json"
import { MirrorSummary } from "~~/types";

/**
 * 道路反射鏡系のAPIを提供します。
 */
 class MirrorService extends Service {

    /**
     * 道路反射鏡をダウンロードします。
     */
    public getList() {
       // TODO: WebAPIによる実装に変更すること
       return new Promise<[MirrorSummary]>((resolve)=>{
          resolve(mirrorJson as [MirrorSummary])
       }) 
    }
}
export default new MirrorService();