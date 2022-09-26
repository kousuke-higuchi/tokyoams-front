import { Coordinate } from ".";
/**
 * 橋梁一覧
 */
export interface BridgeSummary {
    id: Number;
    code: String;
    bridge_name: String;
    office: String;
    area: String;
    cityfrom: String;
    choumefrom: String;
    cityto: String;
    choumeto: String;
    latitude: Number;
    longitude: Number;
    route_name: String;
    formattedAddress: Number;
    wgsCoordinate: Coordinate;
}

/**
 * 径間
 */
export interface BridgeSpan{
    id: number;
    bridgeid?: number;
    spanno: number;
    spanlen?: string;
    spandivid?: number;
    pierstrid?: number;
    pierendid?: number;
    roadwaywid?: string;
    sidewalkwid?: string;
    totalwid?: string;
    roadwaykindid?: number;
    riverexist?: number;
    roadexist?: number;
    trainexist?: number;
    parkexist?: number;
    otherexist?: number;
    waterexist?: number;
    spanmainsubid?: number;
    distancefromwl?: string;
    delta_d?: string;
    delta_e?: string;
    delta_el?: string;
    place?: string;
    spandivnum?: string;
}

/**
 * 施設詳細_橋梁_橋梁台帳（径間）
 */
export interface LeaderSpan {
    spanId: number;
    spanNo?: number;
    spanDiv?: string;
    spanKind?: string;
    place?: string;
    spanDivNum?: string;
    //タワミ
    deltaD?: number;
    deltaE?: number;
    deltaEL?: number;
    
    supType_S?: string;
    supType_E?: string;
    subType_S?: string;
    subType_E?: string;
    subName_S?: string;
    subName_E?: string;

    basType_S?: string;
    basType_E?: string;
    basName_S?: string;
    basName_E?: string;

    roadPos?: string;
    
    undCon_Riv?: number;
    undCon_Rod?: number;
    undCon_Trn?: number;
    undCon_Pak?: number;
    undCon_WaY?: number;
    undCon_WaN?: number;

    distFrWL?: number;
    length?: number;
    
    wid_Road?: number;
    wid_Walk?: number;
    wid_Total?: number;
    
    gdrNum?: string;
    gdrHight?: string;
    gdrBtwn?: string;
    gdrMaterial?: string;

    crsNum?: string;
    crsHight?: string;
    crsBtwn?: string;
    crsMaterial?: string;

    verNum?: string;
    verHight?: string;
    verBtwn?: string;
    verMaterial?: string;

    expTypeFix?: string;
    expMatFix?: string;
    expTypeMove?: string;
    expMatMove?: string;

    bearTypeFix?: string;
    bearMatFix?: string;
    bearTypeMove?: string;
    bearMatMove?: string;

    decRodThk?: string;
    decRodMat?: string;
    decWlkThk?: string;
    decWlkMat?: string;

    pavRodThk?: string;
    pavRodMat?: string;
    pavWlkThk?: string;
    pavWlkMat?: string;
}

/**
 * 橋梁補修履歴
 */
export interface BridgeRepairHistory {
    repairid: Number;
    parentid: Number;
    kindid: Number;
    kindname: String;
    constdate: Number;
    contractor: String;
    note: String;
    createDate: Date;
}

/**
 * 橋梁塗装履歴
 */
export interface PaintingBridgeHistory {
    createDate?: string;
    lower1mat?: string;
    lower1color?: string;
    lower2mat?: string;
    lower2color?: string;
    middlemat?: string;
    middlecolor?: string;
    uppermat?: string;
    uppercolor?: string;
    area?: string;
    cost?: string;
    companyname?: string;
}

/**
 * 橋梁 現場写真
 */
export interface BridgePicture {
    no: Number;
    description: String;
    createDate: String;
    img: String;
};

/**
 * 橋梁 写真情報
 */
 export interface BridgePhoto {

    bridgeid: number;
    photokindid: number;
    dataid: number;
    photoname?: string;
    item1?: string;
    item2?: string;
    item3?: string;
    item4?: string;
    item5?: string;
    photodate?: number;
    takedate?: number;
    photodata?: string;

    //フロントのプログラムで設定
    spanno: string;
    url?: string;
    memo?: string;
    createdate?: Date;
};


/**
 * 橋梁 検索フォーム
 */
export interface BridgeSearchForm {
    facilityName?:string,
    lengthFrom?: number,
    lengthTo?: number,
    completionYearFrom?: number,
    completionYearTo?: number,
    inspectionYearFrom?: number,
    inspectionYearTo?: number,
    lastInspectionYearFrom?: number,
    lastInspectionYearTo?: number,
    soundnesses?: number[],
}

/**
 * 橋梁 写真種別の定義
 */
 export const BRG_TB_BRIDGEPHOTO = {
    PHOTOLEADER: 1, //写真台帳
    GENTERAL: 2,    //一般図
    HANDRAIL: 3,    //高欄図
    SPANGENERAL: 6, //径間全体図
    LOCAL: 7        //現地写真
  } as const;
