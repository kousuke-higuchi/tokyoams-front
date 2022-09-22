import Service from './service';

/**
 * 歩道橋系のAPIを提供します。
 */
class FootbridgeService extends Service {

  /**
   * 歩道橋一覧（Excel）をダウンロードします。
   */
  public downloadExcelList() {
    this.downloadToSave("/api/Footbridge/exportexcel");
  }

  /**
   * 歩道橋一覧を取得します。
   * @param officeid 事務所ID
   * @returns 歩道橋一覧 list
   */
  public getList(officeid: number): Promise<any> {
    let footbridges = this.http.get(`/api/Footbridge/${officeid}`);
    console.info(footbridges);
    return footbridges;
  }

  /**
   * 歩道橋-台帳様式2-変状調書情報を取得します。
   * @param bridgeid 歩道橋ID
   * @returns 変状調書情報 list
   */
  public getDamageList(bridgeid: number): Promise<any> {
    let damageList = this.http.get(`/api/Footbridge/${bridgeid}/damage`);
    console.info(damageList);
    return damageList;
  }

  /**
   * 歩道橋-台帳様式2-交通量調書情報を取得します。
   * @param bridgeid 歩道橋ID
   * @returns 交通量調書情報 list
   */
  public getTrafficcensusList(bridgeid: number): Promise<any> {
    let trafficcensusList = this.http.get(`/api/Footbridge/${bridgeid}/trafficcensus`);
    console.info(trafficcensusList);
    return trafficcensusList;
  }

  /**
   * 歩道橋-台帳様式2-敷地調書情報を取得します。
   * @param bridgeid 歩道橋ID
   * @returns 敷地調書情報 list
   */
  public getGroundList(bridgeid: number): Promise<any> {
    let groundList = this.http.get(`/api/Footbridge/${bridgeid}/ground`);
    console.info(groundList);
    return groundList;
  }

  /**
   * 歩道橋-台帳様式2-占用・添架物件調書情報を取得します。
   * @param bridgeid 歩道橋ID
   * @returns 占用・添架物件調書情報 list
   */
  public getExclusiveuseList(bridgeid: number): Promise<any> {
    let exclusiveuseList = this.http.get(`/api/Footbridge/${bridgeid}/exclusiveuse`);
    console.info(exclusiveuseList);
    return exclusiveuseList;
  }

  /**
   * 歩道橋-台帳様式2-塗装調書情報を取得します。
   * @param bridgeid 歩道橋ID
   * @returns 塗装調書情報
   */
  public getPaintData(bridgeid: number): any {
    let paintData = this.http.get(`/api/Footbridge/${bridgeid}/paint`);
    console.info(paintData);
    return paintData;
  }

  /**
   * 歩道橋-台帳様式4-写真台帳-撮影方向情報を取得します。
   * @param bridgeid 歩道橋ID
   * @returns 撮影方向情報 list
   */
  public getPictureList(bridgeid: number): Promise<any> {
    let picturelist = this.http.get(`/api/Footbridge/${bridgeid}/picture`);
    console.info(picturelist);
    return picturelist;
  }

  //TODO:現状DBで1:1の為単体で取得している 複数存在した場合にはListに切り替えること
  /**
   * 歩道橋-台帳様式4-写真台帳-撮影方向案内図情報を取得します。
   * @param bridgeid 歩道橋ID
   * @returns 撮影方向案内図情報
   */
  public getPictureinfoData(bridgeid: number): any {
    let pictureinfoData = this.http.get(`/api/Footbridge/${bridgeid}/pictureinfo`);
    console.info(pictureinfoData);
    return pictureinfoData;
  }
  //     /**
  //  * 歩道橋-台帳様式4-写真台帳-撮影方向案内図情報を取得します。
  //  * @param bridgeid 歩道橋ID
  //  * @returns 撮影方向案内図情報 list
  //  */
  //      public getPictureinfoList(bridgeid: number): Promise<any> {
  //       let pictureinfolist = this.http.get(`/api/Footbridge/${bridgeid}/pictureinfo`);
  //       console.info(pictureinfolist);
  //       return pictureinfolist;
  //     }

  /**
   * 歩道橋-台帳様式5-平面図情報を取得します。
   * @param bridgeid 歩道橋ID
   * @returns 平面図情報 list
   */
  public getFloorplanList(bridgeid: number): Promise<any> {
    let floorplanlist = this.http.get(`/api/Footbridge/${bridgeid}/floorplan`);
    console.info(floorplanlist);
    return floorplanlist;
  }

  /**
  * 歩道橋-台帳様式6-立体図情報を取得します。
  * @param bridgeid 歩道橋ID
  * @returns 立体図情報 list
  */
  public getElevationList(bridgeid: number): Promise<any> {
    let elevationlist = this.http.get(`/api/Footbridge/${bridgeid}/elevation`);
    console.info(elevationlist);
    return elevationlist;
  }

  /**
   * 歩道橋-台帳様式8-歩行者交通量案内図情報を取得します。
   * @param bridgeid 歩道橋ID
   * @returns 歩行者交通量案内図情報 list
   */
  public getWalkguidemapList(bridgeid: number): Promise<any> {
    let walkguidemaplist = this.http.get(`/api/Footbridge/${bridgeid}/walkguidemap`);
    console.info(walkguidemaplist);
    return walkguidemaplist;
  }

  /**
   * 歩道橋-定期点検様式4の情報を取得します。
   * @param bridgeid 歩道橋ID
   * @returns 定期点検様式4情報 list
   */
  public getPeriodInsppictureList(bridgeid: number): Promise<any> {
    let periodInspPictureList = this.http.get(`/api/Footbridge/${bridgeid}/periodInsppicture`);
    console.info(periodInspPictureList);
    return periodInspPictureList;
  }

  /**
   * 歩道橋-定期点検様式5の情報を取得します。
   * @param bridgeid 歩道橋ID
   * @returns 定期点検様式5情報 list
   */
  public getPeriodinspdamageList(bridgeid: number): Promise<any> {
    let periodinspdamageList = this.http.get(`/api/Footbridge/${bridgeid}/periodinspdamage`);
    console.info(periodinspdamageList);
    return periodinspdamageList;
  }

  /**
   * 歩道橋-国様式2の情報を取得します。
   * @param bridgeid 歩道橋ID
   * @returns 国様式2情報 list
   */
  public getMinitryinsppictureList(bridgeid: number): Promise<any> {
    let minitryinsppictureList = this.http.get(`/api/Footbridge/${bridgeid}/minitryinsppicture`);
    console.info(minitryinsppictureList);
    return minitryinsppictureList;
  }

  /**
   * 歩道橋-詳細画面-台帳様式4-写真台帳-撮影方向図の画像を取得します。
   * @param bridgeId 　歩道橋ID
   * @param id         画像ID  
   * @returns 取得済画像のURL
   */
  public getPictureImageUrl(bridgeId: number, id: number) {
    return this.downloadImageToUrl(`/api/Footbridge/${bridgeId}/pictureImg/${id}`);
  }

  /**
   * 歩道橋-詳細画面-台帳様式4-写真台帳-撮影方向案内図の画像を取得します。
   * @param bridgeId 　歩道橋ID
   * @param id         画像ID  
   * @returns 取得済画像のURL
   */
  public getPictureinfoImageUrl(bridgeId: number, id: number) {
    return this.downloadImageToUrl(`/api/Footbridge/${bridgeId}/pictureinfoImg/${id}`);
  }

  /**
   * 歩道橋-詳細画面-台帳様式5-平面図の画像を取得します。
   * @param bridgeId 　歩道橋ID
   * @param id         画像ID  
   * @returns 取得済画像のURL
   */
  public getFloorpnanImageUrl(bridgeId: number, id: number) {
    return this.downloadImageToUrl(`/api/Footbridge/${bridgeId}/floorplanImg/${id}`);
  }

  /**
   * 歩道橋-詳細画面-台帳様式6-立体図の画像を取得します。
   * @param bridgeId 　歩道橋ID
   * @param id         画像ID  
   * @returns 取得済画像のURL
   */
  public getElevationImageUrl(bridgeId: number, id: number) {
    return this.downloadImageToUrl(`/api/Footbridge/${bridgeId}/elevationImg/${id}`);
  }

  /**
   * 歩道橋-詳細画面-台帳様式8-歩行者交通量案内図の画像を取得します。
   * @param bridgeId 　歩道橋ID
   * @param id         画像ID  
   * @returns 取得済画像のURL
   */
  public getWalkguidemapImageUrl(bridgeId: number, id: number) {
    return this.downloadImageToUrl(`/api/Footbridge/${bridgeId}/walkguidemapImg/${id}`);
  }

  /**
   * 歩道橋-詳細画面-定期点検様式4-写真台帳の画像を取得します。
   * @param bridgeId 　    歩道橋ID
   * @param periodinspid　 定期点検ID
   * @param id             写真ID
   * @returns 取得済画像のURL
   */
  public getPeriodInsppictureImageUrl(bridgeId: number, periodinspid: number, id: number) {
    return this.downloadImageToUrl(`/api/Footbridge/${bridgeId}/periodInsppictureImg/${periodinspid}/${id}`);
  }

  /**
   * 歩道橋-詳細画面-定期点検様式5-損傷図の画像を取得します。
   * @param bridgeId 　    歩道橋ID
   * @param periodinspidId 定期点検ID
   * @param spanId　　　　　径間ID
   * @param id             損傷図ID
   * @returns 取得済画像のURL
   */
  public getPeriodinspdamageImageUrl(bridgeId: number, periodinspidId: number, spanId: number, id: number) {
    return this.downloadImageToUrl(`/api/Footbridge/${bridgeId}/periodinspdamageImg/${periodinspidId}/${spanId}/${id}`);
  }

  /**
 * 歩道橋-詳細画面-国様式2の画像を取得します。
 * @param bridgeId 　歩道橋ID
 * @param minitryId  国点検ID
 * @param id         状況（損傷）ID
 * @returns 取得済画像のURL
 */
  public getMinitryinsppictureImageUrl(bridgeId: number, minitryId: number, id: number) {
    return this.downloadImageToUrl(`/api/Footbridge/${bridgeId}/minitryinsppictureImg/${minitryId}/${id}`);
  }
}
export default new FootbridgeService();