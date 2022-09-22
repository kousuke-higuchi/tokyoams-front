import Service from "./service";

import { AtfSummary } from "~~/types";

/**
 * 道路照明系のAPIを提供します。
 */
 class StreetlightService extends Service {

   /**
     * 道路照明一覧を取得します。
     */
    public getList(officeid: number): Promise<any> {
      return this.http.get(`/api/AtfStreetlight/${officeid}`);
    }

    /**
     * 道路照明一覧を取得します。
     */
    public getByAreaID(areaid: number): Promise<any> {
      return this.http.get(`/api/AtfStreetlight/byAreaId/${areaid}`);
    }
  }
  
export default new StreetlightService();