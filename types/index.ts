export const TOKEN_HEADER_NAME = 'X-AUTH-TOKEN'

/**
 * ユーザ情報
 */
export class User {
    id: number
    username: string
    usertypeid : number
    name : string
    officeid: number
    sectionid: number
    address: string
    memo: string
    admindepreciation: number
    apiToken: string
    tokenExpiredAt: Date
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

/** 附属物 補修履歴 */
export class AttachRepair {
    repairid: number;
    parentid: number;
    kindid?: number;
    kindname?: string;
    constdate?: number;
    contractor?: string;
    note?: string;
    createDate?: Date;
}

/**
 * 地図座標
 */
export interface Coordinate {
    /** 緯度 */ latitude: number;
    /** 経度 */ longitude: number
}

/**
 * 配電盤一覧情報
 */
export interface SwitchboardSummary {
    id: number;
    formattedId: string;
    routename: string;
    officename: string;
    areaname: string;
    municipalityname: string
    latitude: number;
    longitude: number;
    wgsCoordinate: Coordinate
}

/**
 * 配電盤
 */
export interface Switchboard {
    id: number;
    adminnumber: string;
    numberserial: string;
    code: number;
    officeid: number;
    areaid: number;
    routeid: number;
    routesub: string;
    routecommonly: string;
    municipalityid: number;
    municipalityname: string;
    address: string;
    address2: string;
    distance: number;
    setposition: string;
    updownkind: string;
    latitude: number;
    longitude: number;
    createdate: number;
    setpatternid: number;
    maplinkcode: string;
    mapnumber: string;
    mapnumber2: string;
    facilityname: string;
    facilitynumber: string;
    settypeid: number;
    lightkindid: number;
    contractmethodid: number;
    contractcapacity: number;
    leadinmethod: string;
    tepconumber: string;
    powermethod: string;
    powermethodline: string;
    powermethodvolt: string;
    contractnumber: string;
    tepcooffice: string;
    swichboardmaker: string;
    swichboardnumber: string;
    swichboardtype: string;
    swichboardmaterial: string;
    stickerprevent: string;
    circuitnumber: number;
    dimmer: string;
    chargeitem: string;
    supplystart1Id: number;
    supplyend1Id: number;
    supplystart1: string;
    supplyend1: string;
    supplystart2Id: number;
    supplyend2Id: number;
    supplystart2: string;
    supplyend2: string;
    supplystart3Id: number;
    supplyend3Id: number;
    supplystart3: string;
    supplyend3: string;
    supplystart4Id: number;
    supplyend4Id: number;
    supplystart4: string;
    supplyend4: string;
    supplystart5Id: number;
    supplyend5Id: number;
    supplystart5: string;
    supplyend5: string;
    supplystart6Id: number;
    supplyend6Id: number;
    supplystart6: string;
    supplyend6: string;
    supplystart7Id: number;
    supplyend7Id: number;
    supplystart7: string;
    supplyend7: string;
    supplystart8Id: number;
    supplyend8Id: number;
    supplystart8: string;
    supplyend8: string;
    leadinpole: string;
    leadinnumber: string;
    leadinpolestandard: string;
    leadinpolematerial: string;
    leadinbasetype: string;
    leadinbasesize: string;
    pillarbasetype: string;
    specialnotes: string;
    contractor: string;
    setupdate: number;
    districtpolice: string;
    takeoversource: string;
    oldadminroutename: string;
    oldadminadminnumber: string;
    note: string;
    removalflag: number;
    deleteflag: number;
    class1: number;
    class2: number;
    class3: number;
    class4: number;
    class5: number;
    spare1: string;
    spare2: string;
    spare3: string;
    spare4: string;
    spare5: string;
    numeric1: number;
    numeric2: number;
    numeric3: number;
    numeric4: number;
    numeric5: number;
    updatedate: Date;
    updateflag: number;
    registclass: number;
    reservenumber: string;
    reservename: string;
    reservecontractor: string;
    updateuserid: number;
    operationalstatusid: number;
}