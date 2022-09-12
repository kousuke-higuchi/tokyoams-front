import Service from './service';
import { Fbg2Summary } from "~~/types";

/**
 * 歩道橋系のAPIを提供します。
 */
class FootbridgeService extends Service {

  /**
   * 歩道橋一覧を取得します。
   */
  public getList(officeid: number): Promise<any> {
    let footbridges = this.http.get(`/api/FootBridge/${officeid}`);
    console.info(this.http.get(`/api/FootBridge/${officeid}`))
    console.info(footbridges);
    console.info(`/api/FootBridge/${officeid}`);
    return this.http.get(`/api/FootBridge/${officeid}`);
  }

  /**
   * 歩道橋一覧（Excel）をダウンロードします。
   */
  public downloadExcelList() {
    this.downloadToSave("/api/FootBridge/exportexcel");
  }
}
export default new FootbridgeService();