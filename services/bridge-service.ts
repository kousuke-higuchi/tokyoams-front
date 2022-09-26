import Service from './service';
import bridgesJson from "@/assets/bridge.json"
import { BridgeSearchForm } from '~~/types/bridge';

/**
 * 橋梁系のAPIを提供します。
 */
class BridgeService extends Service {
    /**
     * 橋梁一覧を取得します。
     * @param officeid 
     * @returns 橋梁一覧L
     */
    public getList(officeid?: number): Promise<any> {
        if(officeid===undefined) { return 
        }
        let paves = this.http.get(`/api/Bridge/${officeid}`)
        console.log(paves)
        return this.http.get(`/api/Bridge/${officeid}`);
    }

    public search(params: BridgeSearchForm) {
        return this.http.get(`/api/Bridge`, { params: params} );
    }

    /**
     * 工区(Area)一覧を取得します。
     * @param officeid 
     * @returns 橋梁一覧L
     */
     public getAreaList(officeid?: number): Promise<any> {
        return this.http.get(`/api/Bridge/${officeid}/area`);
    }

    public getList4Mock() {
        return bridgesJson;
        // return new Promise<any[]>((resolve)=>{
        //     resolve(bridgesJson)
        // })         
    }

    /**
     * 橋梁径間情報を取得します。  
     */
    public getSpanList(bridgeId: number): Promise<any> {
        return this.http.get(`/api/Bridge/${bridgeId}/span`)
    }

    /**
     * 橋梁台帳(径間)を取得します。
     */
    public getLeaderSpanList(bridgeId: number): Promise<any> {
        return this.http.get(`/api/Bridge/${bridgeId}/leaderSpan`)
    }

    /**
     * 橋梁一覧（Excel）をダウンロードします。
     */
    public downloadExcelList() {
        this.downloadToSave("/api/Bridge/exportexcel");
    }

    /**
     * 橋梁の写真情報を取得します。
     * @param bridgeId 橋梁ID
     * @param kindId 写真種別ID
     * @returns 
     */
     public getImageInfo(bridgeId: number, kindId: number) {
        return this.http.get(`/api/Bridge/${bridgeId}/imageInfo/${kindId}`)
    }
    
    /**
     * 橋梁の画像を取得します。
     * @param bridgeId 
     * @param kindId 
     * @param dataId 
     * @returns 取得済画像のURL
     */
    public getImageUrl(bridgeId: number, kindId: number, dataId: number) {
        return this.downloadImageToUrl(`/api/Bridge/${bridgeId}/image/${kindId}/${dataId}`)
    }
    
}
export default new BridgeService();