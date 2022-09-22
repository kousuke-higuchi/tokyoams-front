import { Coordinate } from ".";
/**
 * 歩道橋一覧情報
 */
export interface Fbg2Summary {
    id: number;
    code: string;
    name: string;
    office: string;
    area: string;
    placestart: string;
    placeend: string;
    latitude: number;
    longitude: number;
    routeName: string;
    wgsCoordinate: Coordinate;
    formattedAddress: string;
}

/**
 * 歩道橋 台帳様式2 変状調書
 */
 export interface Fbg2Damage {
    bridgeid: number;
    investdate?: number;
    investobject?: string;
    investreport?: string;
    investtrader?: string;
    createDate?: string;
};

/**
 * 歩道橋 台帳様式2 交通量調書
 */
 export interface Fbg2Trafficcensus {
    bridgeid: number;
    censusdate?: number;
    carvolume?: number;
    largeratio?: number;
    largevolume?: number;
    othervolume?: number;
    motorbike?: number;
    bicycle?: number;
    walker?: number;
    memo?: string;
    createDate?: string;
};

/**
 * 歩道橋 台帳様式2 敷地調書
 */
 export interface Fbg2Ground {
    bridgeid: number;
    id: number;
    underid: number;
    undername?: string;
    contact?: string;
    period?: string;
};

/**
 * 歩道橋 台帳様式2 占用・添架物件調書
 */
 export interface Fbg2Exclusiveuse {
    bridgeid: number;
    approvedate?: number;
    owner?: string;
    kindsize?: string;
    weight?: number;
    unitname?: string;
    contact?: string;
    createDate?: number;
};

/**
 * 歩道橋 台帳様式2 塗装調書
 */
 export interface Fbg2Paint {
    bridgeid: number;
    supergeneral?: number;
    superspecial?: number;
    subgeneral?: number;
    subspecial?: number;
    railing?: number;
    light?: number;
    total?: number;
};

/**
 * 歩道橋 台帳様式4 写真台帳
 */
 export interface Fbg2Picture {
    pictureid: number;
    pictnumber?: number;
    createnumstring?: string;
    pictureimg?: string;
};

/**
 * 歩道橋 台帳様式4 写真台帳-撮影方向案内図
 */
 export interface Fbg2Pictureinfo {
    id: number;
    pictureimg?: string;
};

/**
 * 歩道橋 台帳様式5 平面図
 */
 export interface Fbg2Floorplan {
    id: number;
    img?: string;
};

/**
 * 歩道橋 台帳様式6 立体図
 */
 export interface Fbg2Elevation {
    id: number;
    img?: string;
};

/**
 * 歩道橋 台帳様式8 歩行者交通量案内図
 */
 export interface Fbg2WalkGuideMap {
    id: number;
    img?: string;
};

/**
 * 歩道橋 定期点検様式4 定期点検写真
 */
 export interface Fbg2Periodinsppicture {
    periodinspid: number;
    id: number;
    spanno?: string;
    pictno?: number;
    partname?: string;
    damagekind?: string;
    situation?: string;
    judgeid?: string;
    img?: string;
};

/**
 * 歩道橋 定期点検様式5 損傷図
 */
 export interface Fbg2Periodinspdamage {
    periodinspid: number;
    spanid: number;
    id: number;
    img?: string;
};

/**
 * 歩道橋 国様式2
 */
 export interface Fbg2Minitryinsppicture {
    minitryid: number;
    id: number;
    photonumber?: string;
    judgeinspect?: string;
    createParts?: string;
    pictureimg?: string;
};