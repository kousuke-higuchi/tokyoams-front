/** 舗装区間ID(タイトル部分) */
export class PaveTbKukanid {
  kukanid: number;
  office: {
    officeid: number;
    name?: String;
  };
  area: {
    adminareaid: number;
    name?: String;
    officeid?: number
  };
  routekind: {
    routekindid: number;
    name?: String;
    abbreviate?: String;
  };
  route: {
    routeid: number;
    routekindid?: number;
    routecode?: number;
    name?: String;
  };
  spotpoint: number;
  branchlineno: number;
  longitude?: number;
  latitude?: number;
  managementdiv?: number;

  /** 路線番号 表示用 */
  routenumber?: string;
}

/** 道路構成 */
export class PaveTbRoadformation {
  spotpointpos: number;
  roadttlwid?: number;
  censtripwid?: number;
  censtrip?: {
    censtripid: number;
    name: string;
  };
  form?: {
    formid: number;
    name: string;
  };
  pavwid1?: number;
  lanenum1?: number;
  rgtturnlane1?: number;
  lftturnlane1?: number;
  swkind1?: {
    swkindid?: number;
    name?: string;
  };
  swpavekind1?: {
    swpavekindid?: number;
    name?: string;
  };
  swwid1?: number;
  guafencekind1?: {
    guardfenceid?: number;
    name?: string;
  };
  slpvgt1?: {
    slpvgtid?: number;
    name?: string;
  };
  pavwid2?: number;
  lanenum2?: number;
  rgtturnlane2?: number;
  lftturnlane2?: number;
  swkind2?: {
    swkindid?: number;
    name?: string;
  };
  swpavekind2?: {
    swpavekindid?: number;
    name?: string;
  };
  swwid2?: number;
  guafencekind2?: {
    guardfenceid?: number;
    name?: string;
  };
  slpvgt2?: {
    slpvgtid?: number;
    name?: string;
  };
  refixdate?: Date;
  kukanid: string;
  spotphotograph1?: string;
  spotphotograph2?: string;
  spotphotograph3?: string;
  spotphotograph4?: string;
  spotphotograph1_blob?: any; //bytea型
  spotphotograph2_blob?: any; //bytea型
  spotphotograph3_blob?: any; //bytea型
  spotphotograph4_blob?: any; //bytea型

};

/** 路床+CBR */
export class PavTbSubgradesoilcbr {
  measuredate?: Date;
  observpoint1?: number;
  cbrval1?: number;
  observpoint2?: number;
  cbrval2?: number;
  observpoint3?: number;
  cbrval3?: number;
  observpoint4?: number;
  cbrval4?: number;
  refixdate?: Date;
  kukanid: string;
  seqno: number;
};

/** 交通量 */
export class PavTbTraffsurvey {
  surveydate?: Date;
  surveypos?: number;
  surveytime?: {
    surveytimeid?: number;
    name?: string;
  };
  totalvol1?: number;
  largetruck1?: number;
  other1?: number;
  totalvol2?: number;
  largetruck2?: number;
  other2?: number;
  comvehicleratio?: number;
  daytimeratio?: number;
  pedestrian?: number;
  bicycle?: number;
  twowheelvehicle?: number;
  crowratio?: number;
  refixdate?: Date;
  kukanid: string;
  seqno: number;

  /** 表示用 調査日 */
  viewSurveydate?: string;
};

/** 緊急路線指定 */
export class PavTbRouteemergency {
  kukanid: string;
  seqno: number;
  spotpointto?: number;
  routeemergencytype?: number;

  //以下表示用カラム
  emergency?: string; // 緊急交通路
  transportion?: string; // 緊急輸送路
  rescue?: string;// 緊急敬開路線
}

/** 舗装履歴 */
export class PaveHistory {
  trafdirectionid?: number;
  workfiskyear?: Date;
  spotpointposfrom?: number;
  spotpointnoto?: number;
  spotpointposto?: number;
  constkind?: {
    constkindid?: number;
    name?: String;
  };
  lineid1?: number;
  lineid2?: number;
  lineid3?: number;
  lineid4?: number;
  lineid5?: number;
  lineid6?: number;
  lineid7?: number;
  constructmtd?: {
    constructmtdid?: number;
    name?: String;
  };
  surfacediv?: {
    surfaceid?: number;
    name?: String;
  };
  material1?: {
    materialid?: number;
    name?: String;
    coef?: number;
  };
  thick1?: number;
  material2?: {
    materialid?: number;
    name?: String;
    coef?: number;
  };
  thick2?: number;
  material3?: {
    materialid?: number;
    name?: String;
    coef?: number;
  };
  thick3?: number;
  material4?: {
    materialid?: number;
    name?: String;
    coef?: number;
  };
  thick4?: number;
  material5?: {
    materialid?: number;
    name?: String;
    coef?: number;
  };
  thick5?: number;
  material6?: {
    materialid?: number;
    name?: String;
    coef?: number;
  };
  thick6?: number;
  ta?: number;
  cbr?: number;
  dsgtraffvoldivid?: number;
  refixdate?: Date;
  kukanid: String;
  seqno: number;

  /** 施工年度 表示用 */
  workfiskyearJp?: string;

  /** 総厚 */
  fullthick?: number;
};

/** 路面性状 */
export class PavTbRoadsurfcond {
  trafdirectionid?: number;
  surface1?: {
    surfaceid?: number;
    name?: string;
  };
  surveydate1?: Date;
  crackratio1?: number;
  crackindex1?: number;
  maxcrackwid1?: number;
  maxwadachibore1?: number;
  avewadachibore1?: number;
  smoothness1?: number;
  mni1?: number;
  mci1?: number;
  surface2?: {
    surfaceid?: number;
    name?: string;
  };
  surveydate2?: Date;
  crackratio2?: number;
  crackindex2?: number;
  maxcrackwid2?: number;
  maxwadachibore2?: number;
  avewadachibore2?: number;
  smoothness2?: number;
  mni2?: number;
  mci2?: number;
  refixdate?: Date;
  kukanid: string;
  seqno: number;
  laneno?: number;

  //表示用 調査日1
  viewSurveydate1?: string;
  //表示用 調査日2
  viewSurveydate2?: string;
};

/** 道路交通振動 */
export class PavTbTrafficvibration {
  seqnovib?: number;
  measuredate?: Date;
  observpointno?: number;
  observpos?: number;
  reqlimitid?: number;
  daytimeviblevel?: number;
  nighttimeviblevel?: number;
  refixdate?: Date;
  kukanid: string;
  seqno: number;
  reqlimitname?: string;

  /** 表示用 測定日 */
  viewMeasuredate?: string;
}

/** 道路交通騒音 */
export class PavTbTrafficnoise {
  seqnodiv?: number;
  measuredate?: Date;
  observpointno?: number;
  observpos?: number;
  reqlimitid?: number;
  morningtimenoiselevel?: number;
  daytimenoiselevel?: number;
  afternoontimenoiselevel?: number;
  nighttimenoiselevel?: number;
  refixdate?: Date;
  kukanid: string;
  seqno: number;
  reqlimitname?: string;

  /** 表示用 測定日 */
  viewMeasuredate?: string;
}

/** 空洞調査テーブル */
export class PavTbCavityInspect {
  kukanid?: string;
  spotpointposfrom?: number;
  abnormalsrveydate1: Date;
  abnormalsurveykind?: string;
  sightfontage?: string;
  trafdirection?: {
    trafdirectionid: number;
    name?: string;
  };
  lane?: string;
  roadsidewalk?:string;
  abnormalsignalDepth?: number;
  abnormalsignalVertical?: number;
  abnormalsignalHorizon?: number;
  abnormalsignalCh?: number;
  surveyDate1St?: Date;
  handysurveydate?: Date;
  surveyDate2Nd?: Date;
  judge?: string;
  cavescaleDepth?: number;
  cavescaleThin?: number;
  cavescaleVertical?: number;
  cavescaleHorizon?: number;
  cavescaleArea?: number;
  cavescaleVolume?: number;
  seqno: number;

  /** KP */
  kp?: string;
  /** 表示用1次調査日 */
  viewSurveyDate1st:string;
  /** 表示用2次調査日 */
  viewSurveyDate2nd:string;
}

/** 空洞調査 写真 */
export class PaveCavityPhoto{
  /** 位置図 */
  positionFigUrl?: string;
  /** 空洞の広がり */
  caveExpansePhotoUrl?: string;
  /** ドーロスコープ撮影画像 */
  scopeRecordPhotoUrl?: string;
}

/** 舗装台帳 */
export class PavLedger {
  pavTbKukanid: PaveTbKukanid;
  roadformation?: PaveTbRoadformation;
  subgradesoilcbr?: PavTbSubgradesoilcbr;
  trafficsurvey?: PavTbTraffsurvey;
  routeemergency?: PavTbRouteemergency;
  upHistories?: Array<PaveHistory>;
  upRoadsurfcond?: PavTbRoadsurfcond;
  downHistories?: Array<PaveHistory>;
  downRoadsurfcond?: PavTbRoadsurfcond;
  paveVibrations?: Array<PavTbTrafficvibration>;
  paveNoises?: Array<PavTbTrafficnoise>;
};

/** 補修履歴台帳 */
export class PaveHistoryLedger {
  tbKukanid: PaveTbKukanid;
  upHistories?: Array<PaveHistory>;
  downHistories?: Array<PaveHistory>;
};

/** 空洞調査 */
export class PaveCavity {
  tbKukanid: PaveTbKukanid;
  cavityInspect: PavTbCavityInspect;
}

/** 緊急輸送啓開路線の形式 */
export enum EmergencyType {
  /** 緊急交通路 */
  EMERGENCY = 1,
  /** 緊急輸送路 */
  TRANSPORTION = 2,
  /** 緊急啓開路線 */
  RESCUE = 3
};

/** 空洞調査写真 */
export enum CavityPhotoType {
  /** 位置図 */
  POSITIONFIG,
  /** 空洞の広がり */
  CAVEEXPANSEPHOTO,
  /** ドーロスコープ撮影画像 */
  SCOPERECORDPHOTO,
}