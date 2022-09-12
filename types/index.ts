export const TOKEN_HEADER_NAME = 'X-AUTH-TOKEN'

/**
 * ユーザ情報
 */
export class User {
    id: number
    username: string
    usertypeid: number
    name: string
    officeid: number
    sectionid: number
    address: string
    memo: string
    admindepreciation: number
    apiToken: string
    tokenExpiredAt: Date
}


/**
 * トンネル 施設詳細_トンネル_その2、その5
 */
export class tunnelBlockImg {
    //TODO:DBのカラムに合わせた形に修正する
    blockId: Number;
    imgfile: any;
}

/**
 * トンネル 施設詳細_トンネル_その10
 */
export class tunnelInsp10 {
    //TODO:DBのカラムに合わせた形に修正する
    walkType?: String;
    material?: String;
    partName?: String;
    partSign?: String;
    partNum?: String;
    maxAccident?: String;
    minAccident?: String;
    secBAccident?: String;
    secC1Accident?: String;
    //区分C1の変状-更新~区分S2の変状まで省略
    cause1?: String;
    cause2?: String;
    soundness?: String;
    note?: String;
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
 * 施設詳細_道路施設(共同溝など)_様式1-補修履歴(ledger1Repair)
 */
export class RfaRepair {
    //TODO:DBのカラム判明次第、それに合わせた形に改修する
    repairid: Number;
    parentid: Number;
    date?: String;
    note?: String;
}

/**
 * 施設詳細_道路施設_様式・国1,2(nation1/nation2)
 */
export class RfaNation1And2 {
    facilityType: String;
    nationStyle: String;
}

/**
 * 施設詳細_道路施設(ロックシェッド)_その2,その5
 */
export class RockshedBlockImg {
    blockId: Number;
    imgfile: any;
}
/**
 * 地図座標
 */
export interface Coordinate {
    /** 緯度 */ latitude: number;
    /** 経度 */ longitude: number
}

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
 * 付属物一覧情報
 */
export interface AtfSummary {
    id: number;
    adminnumber: string;
    numberserial: string;
    formattedid: string;
    routename: string;
    officename: string;
    areaname: string;
    municipalityname: string
    latitude: number;
    longitude: number;
    wgsCoordinate: Coordinate
}

/**
 * 道路照明
 */
 export interface Streetlight {
    id: number;
    lightnumber: string;
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
    facilityname: string;
    facilitynumber: string;
    settypeid: number;
    lightkindid: number;
    contractmethodid: number;
    contractcapacity: number;
    leadinmethod: string;
    electricpoleadmin: string;
    electricpolenumber: string;
    powersupply: string;
    tepconumber: string;
    powermethod: string;
    powermethodline: string;
    powermethodvolt: string;
    contractnumber: string;
    tepcooffice: string;
    swichboardnumber: string;
    chargeitem: string;
    lampmaker: string;
    douser: string;
    dousercontent: string;
    dimmer: string;
    dimmercontent: string;
    lightheight: string;
    basetype: string;
    polemaker: string;
    polekind: string;
    polemountangle: number;
    polepaintcolor: string;
    polegroundpaint: string;
    polewide: number;
    polematerial: string;
    stickerprevent: string;
    stickerpreventcontent: string;
    pole1mountangle: number;
    pole1wide: number;
    pole1lightheight: number;
    pole2mountangle: number;
    pole2wide: number;
    pole2lightheight: number;
    pole3mountangle: number;
    pole3wide: number;
    pole3lightheight: number;
    pillarbasetype: string;
    contractor: string;
    setupdate: number;
    districtpolice: string;
    takeoversource: string;
    fep: string;
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
/**
 * 道路照明-ランプ
 */
export interface StreetlightLamp {
    streetlightid: number;
    id: number;
    constdate: number;
    l1categoryid: number;
    l1categoryetc: string;
    l1categorysub: string;
    l1categorysubetc: string;
    l1standard: number;
    l1number: number;
    l1maker: string;
    l1type: string;
    l1typeetc: string;
    l2categoryid: number;
    l2categoryetc: string;
    l2categorysub: string;
    l2categorysubetc: string;
    l2standard: number;
    l2number: number;
    l2maker: string;
    l2type: string;
    l2typeetc: string;
    l3categoryid: number;
    l3categoryetc: string;
    l3categorysub: string;
    l3categorysubetc: string;
    l3standard: number;
    l3number: number;
    l3maker: string;
    l3type: string;
    l3typeetc: string;
    updatedate: Date;
    updateuserid: number;
    currentstate: number;
}

/**
 * 道路照明-安定器
 */
 export interface StreetlightBallast {
    streetlightid: number;
    id: number;
    constdate: number;
    b1kind: string;
    b1capacityvolt: number;
    b1capacitywatt: number;
    b1number: number;
    b1maker: string;
    b2kind: string;
    b2capacityvolt: number;
    b2capacitywatt: number;
    b2number: number;
    b2maker: string;
    b3kind: string;
    b3capacityvolt: number;
    b3capacitywatt: number;
    b3number: number;
    b3maker: string;
    updatedate: Date;
    updateuserid: number;
    currentstate: number;
}

/**
 * 障害物表示灯
 */
export interface Blinker {
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
    facilityname: string;
    facilitynumber: string;
    settypeid: number;
    lightkindid: number;
    contractmethodid: number;
    contractcapacity: number;
    leadinmethod: string;
    electricpoleadmin: string;
    electricpolenumber: string;
    powermethod: string;
    powermethodline: string;
    powermethodvolt: string;
    tepconumber: string;
    tepcooffice: string;
    contractnumber: string;
    chargeitem: string;
    swichboardnumber: string;
    lampmaker: string;
    batterymaker: string;
    lightkind: string;
    lighthight1: number;
    lighthight2: number;
    lighthight3: number;
    b1kind: string;
    b1capacityvolt: number;
    b1capacitywatt: number;
    b1number: number;
    b1maker: string;
    b2kind: string;
    b2capacityvolt: number;
    b2capacitywatt: number;
    b2number: number;
    b2maker: string;
    b3kind: string;
    b3capacityvolt: number;
    b3capacitywatt: number;
    b3number: number;
    b3maker: string;
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

/**
 * 障害物表示灯-ランプ
 */
 export interface BlinkerLamp {
	blinkerid: number;
	id: number;
	constdate: number;
	l1categoryid: number;
	l1categoryetc: string;
	l1categorysub: string;
	l1categorysubetc: string;
	l1standard: number;
	l1number: number;
	l1maker: string;
	l1type: string;
	l1typeetc: string;
	l2categoryid: number;
	l2categoryetc: string;
	l2categorysub: string;
	l2categorysubetc: string;
	l2standard: number;
	l2number: number;
	l2maker: string;
	l2type: string;
	l2typeetc: string;
	l3categoryid: number;
	l3categoryetc: string;
	l3categorysub: string;
	l3categorysubetc: string;
	l3standard: number;
	l3number: number;
	l3maker: string;
	l3type: string;
	l3typeetc: string;
	updatedate: Date;
	updateuserid: number;
	currentstate: number;
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
    /**atf_cd_adminofficeテーブルとofficeidでjoin */
    officename: String;
    areaid: number;
    /**atf_cd_adminareaテーブルとareaidでjoin */
    areaname: string;
    routeid: number;
    /**atf_cd_routeテーブルとrouteidでjoin */
    routename: string;
    routesub: string;
    routecommonly: string;
    municipalityid: number;
    municipalityname: string;
    address: string;
    address2: string;
    distance: number;
    setposition: string;
    updownkind: string;
    latitude: string;
    longitude: string;
    createdate: Date;
    setpatternid: number;
    maplinkcode: string;
    mapnumber: string;
    mapnumber2: string;
    facilityname: string;
    facilitynumber: string;
    settypeid: number;
    /**atf_cd_settypeテーブルとsettypeidでjoin */
    settypename: string;
    lightkindid: number;
    /**atf_cd_ lightingkindidテーブルとlightkindidでjoin*/
    lightkindname: string;
    contractmethodid: number;
    /**atf_cd_contractmethodテーブルとcontractmethodidでjoin */
    contractmethodname: string;
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
    /**
     * 分電盤-自動点滅器
     * atf_tb_swb_flasher.switchbordidとatf_tb_switchbord.idでjoin(多対一)
     * TODO:複数あるうちのどのデータを表示するのか確認する
     */
    flashername: string;
    /**
     * 分電盤-自動点滅器V
     * atf_tb_swb_flasher.switchbordidとatf_tb_switchbord.idでjoin(多対一)
     * TODO:複数あるうちのどのデータを表示するのか確認する
     */
    flashervolt: number;
    /**
     * 分電盤-自動点滅器A
     * atf_tb_swb_flasher.switchbordidとatf_tb_switchbord.idでjoin(多対一)
     * TODO:複数あるうちのどのデータを表示するのか確認する
     */
    flasherwatt: number;
}

/**
 * 配電盤用台帳-写真
 */
export interface SwitchboardImage{
    updatedate: string;
    photopath: string;
}
