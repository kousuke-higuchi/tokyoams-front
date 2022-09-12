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
    dataid: number;
    item1: string;
    takedate: Date;
    url?: string;
};

