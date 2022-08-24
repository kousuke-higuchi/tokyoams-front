import Service from './service';

/**
 * 橋梁系のAPIを提供します。
 */
class BridgeService extends Service {

    /**
     * 橋梁一覧（Excel）をダウンロードします。
     */
    public downloadExcelList() {
        this.download("/api/Bridge/exportexcel");
    }
}
export default new BridgeService();