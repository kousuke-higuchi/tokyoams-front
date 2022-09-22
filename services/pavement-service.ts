import Service from "./service";
import { EmergencyType, CavityPhotoType, PavLedger, PavTbCavityInspect, PaveTbKukanid, PaveTbRoadformation, PavTbSubgradesoilcbr, PavTbTrafficnoise, PavTbTraffsurvey, PavTbRouteemergency, PavTbRoadsurfcond, PaveHistory, PavTbTrafficvibration } from "../types/pavement";

/**
 * 舗装系のAPIを提供します。
 */
class PavementService extends Service {
  /**
   * 舗装一覧を取得します。
   * @param officeid 事務所コード
   * @returns 舗装一覧
   */
  public getList(officeid: number): Promise<any> {
    let res = this.http.get(`/api/Pavement/${officeid}`)
    return res;
  }

  /**
   * 舗装一覧(Excel)をダウンロードします。
   * @param officeid 事務所コード
   */
  public downloadExcelList(officeid: number) {
    this.downloadToSave(`api/Pavement/exportexcel/${officeid}`)
  }

  /**
   * 舗装台帳画面のデータを取得します。
   * @param kukanid 区間ID
   * @returns 舗装台帳画面一覧
   */
  public getPaveLedger(kukanid: String): Promise<any> {
    const res = this.http.get(`/api/Pavement/${kukanid}/ledger1`).then(s => {
      //データがない場合、オブジェクトを生成
      if(s.data.pavTbKukanid == null){
        s.data.pavTbKukanid = new PaveTbKukanid;
      }
      if(s.data.roadformation == null){
        s.data.roadformation = new PaveTbRoadformation;
      }
      if(s.data.subgradesoilcbr == null){
        s.data.subgradesoilcbr = new PavTbSubgradesoilcbr;
      }
      if(s.data?.trafficsurvey == null){
        s.data.trafficsurvey = new PavTbTraffsurvey;
      }
      if(s.data?.routeemergency == null){
        s.data.routeemergency = new PavTbRouteemergency;
      }
      if(s.data?.upRoadsurfcond == null){
        s.data.upRoadsurfcond = new PavTbRoadsurfcond;
      }
      if(s.data?.downRoadsurfcond == null){
        s.data.downRoadsurfcond = new PavTbRoadsurfcond;
      }
      if(s.data?.paveVibrations == null){
        s.data.paveVibrations = new PavTbTrafficvibration;
      }
      if(s.data?.paveNoises == null){
        s.data.paveNoises = new PavTbTrafficnoise;
      }


      //路線番号を作成
      s.data.pavTbKukanid.routenumber = this.getRouteNumber(s.data?.pavTbKukanid.routekind?.abbreviate, s.data?.pavTbKukanid.route?.routecode);

      //表示用交通量の表示
      s.data.trafficsurvey.viewSurveydate = this.formatLongJapaneseDate(s.data?.trafficsurvey?.surveydate);

      //表示用の履歴日付,総厚を作成,取得
      s.data?.upHistories.forEach(element => {
        element.workfiskyearJp = this.formatJapaneseYear(element?.workfiskyear);
        element.fullthick = this.getFullThick([element?.thick1, element?.thick2, element?.thick3, element?.thick4, element?.thick5, element.thick6])
      });
      s.data.downHistories.forEach(element => {
        element.workfiskyearJp = this.formatJapaneseYear(element?.workfiskyear);
        element.fullthick = this.getFullThick([element?.thick1, element?.thick2, element?.thick3, element?.thick4, element?.thick5, element.thick6])
      });

      //緊急輸送啓開路線指定を取得
      if (s.data?.routeemergency?.routeemergencytype == EmergencyType.EMERGENCY) {
        s.data.routeemergency.emergency = '指';
      }
      else if (s.data?.routeemergency?.routeemergencytype == EmergencyType.TRANSPORTION) {
        s.data.routeemergency.transportion = '指';
      }
      else if (s.data?.routeemergency?.routeemergencytype == EmergencyType.RESCUE) {
        s.data.routeemergency.rescue = '指';
      }

      //道路交通振動の表示用日付を取得
      s.data.paveVibrations.forEach(element => {
        element.viewMeasuredate = this.formatShortJapaneseDate(element.measuredate);
      });

      //道路交通騒音の表示用日付を取得
      s.data.paveNoises.forEach(element => {
        element.viewMeasuredate = this.formatShortJapaneseDate(element.measuredate);
      });

      //都面性状の表示用日付を取得
      s.data.upRoadsurfcond.viewSurveydate1 = this.formatShortJapaneseDate(s.data.upRoadsurfcond.surveydate1);
      s.data.upRoadsurfcond.viewSurveydate2 = this.formatShortJapaneseDate(s.data.upRoadsurfcond.surveydate2);
      s.data.downRoadsurfcond.viewSurveydate1 = this.formatShortJapaneseDate(s.data.downRoadsurfcond.surveydate1);
      s.data.downRoadsurfcond.viewSurveydate2 = this.formatShortJapaneseDate(s.data.downRoadsurfcond.surveydate2);


      return s;
    })

    return res;

  }

  /**
   * 舗装履歴台帳画面のデータを取得します。
   * @param kukanid 区間ID
   * @returns 舗装履歴台帳一覧
   */
  public getHistoryList(kukanid: String): Promise<any> {
    const res = this.http.get(`/api/Pavement/${kukanid}/repair`).then(s => {
      //データが存在しないときにオブジェクトを生成
      if(s.data.tbKukanid == null){
        s.data.tbKukanid = new PaveTbKukanid;
      }

      //路線番号を作成
      s.data.tbKukanid.routenumber = this.getRouteNumber(s.data?.tbKukanid.routekind.abbreviate, s.data?.tbKukanid.route.routecode);

      //表示用の日付を作成
      s.data.upHistories.forEach(element => {
        element.workfiskyearJp = this.formatJapaneseYear(element?.workfiskyear);
        element.fullthick = this.getFullThick([element?.thick1, element?.thick2, element?.thick3, element?.thick4, element?.thick5, element.thick6])
      });
      s.data.downHistories.forEach(element => {
        element.workfiskyearJp = this.formatJapaneseYear(element?.workfiskyear);
        element.fullthick = this.getFullThick([element?.thick1, element?.thick2, element?.thick3, element?.thick4, element?.thick5, element.thick6])
      });

      return s;
    })
    console.log("レスポンス:", res);
    return res;
  };

  /**
   * 空洞調査画面のデータを取得します。
   * @param kukanid 区間ID
   * @returns 空洞調査画面データ
   */
  public getPaveCavity(kukanid: string): Promise<any> {
    const res = this.http.get(`/api/Pavement/${kukanid}/cavity`).then(s => {
      if (s.data?.cavityInspect == null) {
        s.data.cavityInspect = PavTbCavityInspect;
      }

      //KPを取得
      if (s.data?.tbKukanid?.spotpoint != null && s.data?.cavityInspect?.spotpointposfrom != null) {
        s.data.cavityInspect.kp = (Math.floor(s.data?.tbkukanid?.spotpoint as number * 10) / 10).toString() + Math.floor(s.data?.cavityInspect?.spotpointposfrom).toString();
      }
      //表示用の日付を取得
      s.data.cavityInspect.viewSurveyDate1st = this.formatLongJapaneseDate(s.data.cavityInspect.surveydate1St);
      s.data.cavityInspect.viewSurveyDate2nd = this.formatLongJapaneseDate(s.data.cavityInspect.surveydate2Nd);

      return s;
    })
    return res;
  }

  /**
   * 空洞調査画面の写真を取得します。
   * @param kukanid 区間ID
   * @param photoType 取得写真の種類
   * @returns 取得済み画像のURL
   */
  public getImageUrl(kukanid: string, photoType: CavityPhotoType) {
    const response = ref<any>();
    if (photoType == CavityPhotoType.POSITIONFIG) {
      response.value = this.downloadImageToUrl(`/api/Pavement/${kukanid}/image/0`);
    }
    else if (photoType == CavityPhotoType.CAVEEXPANSEPHOTO) {
      response.value = this.downloadImageToUrl(`/api/Pavement/${kukanid}/image/1`);
    }
    else if (photoType == CavityPhotoType.SCOPERECORDPHOTO) {
      response.value = this.downloadImageToUrl(`/api/Pavement/${kukanid}/image/2`)
    }
    return response.value;
  }

  /**
   * 表示用の日付(平成〇〇年〇〇月〇〇日 形式)を取得します。
   * @param fullDate 日付(string)
   * @returns 日付(平成〇〇年〇〇月〇〇日 形式)
   */
  private formatLongJapaneseDate = (fullDate) => {
    var pattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}\+\d{2}:\d{2}/
    if (!pattern.test(fullDate)) {
      return '';
    }
    let date = new Date(fullDate);
    const options = { dateStyle: "long" };
    var jpDate = Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(new Date(date));
    return jpDate;
  }

  /** 表示用の日付(H〇〇/〇〇/〇〇 形式)を取得します。
   * @param fullDate 日付(String)
   * @return 日付(H〇〇/〇〇/〇〇 形式)
   */
  private formatShortJapaneseDate = (fullDate) => {
    var pattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}\+\d{2}:\d{2}/
    if (!pattern.test(fullDate)) {
      return '';
    }
    let date = new Date(fullDate);
    const options = { dateStyle: "short" };
    var jpDate = Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(new Date(date));
    return jpDate;
  }

  /** 表示用の日付(年度 H〇〇年 形式)を取得します。
   * @param fullDate 日付(String)
   * @return 日付(年度 H〇〇年 形式)
   */
  private formatJapaneseYear(fullDate) {
    var pattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}\+\d{2}:\d{2}/
    if (!pattern.test(fullDate)) {
      return '';
    }
    let date = new Date(fullDate);
    //年度表示にするため3カ月引く
    date.setMonth(date.getMonth() - 3);
    var jpDate = Intl.DateTimeFormat('ja-JP-u-ca-japanese', { era: 'narrow', year: 'numeric' }).format(new Date(date));
    return jpDate;
  }

  /**
   * 路線番号を取得します。
   * @param abbreviat 路線種類
   * @param routecode 路線コード
   * @return 路線番号
   */
  private getRouteNumber(abbreviat: String, routecode: Number) {
    return abbreviat + String(routecode);
  }

  /**
   * 総厚を求めます。
   * @param thicks 合計する厚さの配列
   */
  private getFullThick(thicks: number[]) {
    let fullthick = 0 as number;
    thicks.forEach(thick => {
      fullthick += thick ?? 0;
    });
    return fullthick;
  }

}
export default new PavementService();