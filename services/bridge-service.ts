import Service from './service';

/**
 * 橋梁系のAPIを提供します。
 */
class BridgeService extends Service {
    /**
     * 橋梁一覧を取得します。
     */
    public getList(officeid: number): Promise<any> {
        let paves = this.http.get(`/api/Bridge/${officeid}`)
        console.log(paves)
        return this.http.get(`/api/Bridge/${officeid}`);
    }

    /**
     * 橋梁一覧（Excel）をダウンロードします。
     */
    public downloadExcelList() {
        this.downloadToSave("/api/Bridge/exportexcel");
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