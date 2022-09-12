import { AtfAdminoffice } from ".";


/**
 * 配電盤用台帳-写真
 */
 export interface SwitchboardPhoto{
    switchboardid: number;
    id: number;
    photokindid:number;
    updatedate: Date;
    phototakedate:number;
    photono:number;
}


/**
 * 配電盤
 */
 export interface Switchboard {
    id : number;
    adminnumber : string;
    numberserial : string;
    code : number;
    office: AtfAdminoffice;
    areaid : number;
    routeid : number;
    routesub : string;
    routecommonly : string;
    municipalityid : number;
    municipalityname : string;
    address : string;
    address2 : string;
    distance : number;
    setposition : string;
    updownkind : string;
    latitude : number;
    longitude : number;
    createdate : number;
    setpatternid : number;
    maplinkcode : string;
    mapnumber : string;
    mapnumber2 : string;
    facilityname : string;
    facilitynumber : string;
    settypeid : number;
    lightkindid : number;
    contractmethodid : number;
    contractcapacity : number;
    leadinmethod : string;
    tepconumber : string;
    powermethod : string;
    powermethodline : string;
    powermethodvolt : string;
    contractnumber : string;
    tepcooffice : string;
    swichboardmaker : string;
    swichboardnumber : string;
    swichboardtype : string;
    swichboardmaterial : string;
    stickerprevent : string;
    circuitnumber : number;
    dimmer : string;
    chargeitem : string;
    supplystart1Id : number;
    supplyend1Id : number;
    supplystart1 : string;
    supplyend1 : string;
    supplystart2Id : number;
    supplyend2Id : number;
    supplystart2 : string;
    supplyend2 : string;
    supplystart3Id : number;
    supplyend3Id : number;
    supplystart3 : string;
    supplyend3 : string;
    supplystart4Id : number;
    supplyend4Id : number;
    supplystart4 : string;
    supplyend4 : string;
    supplystart5Id : number;
    supplyend5Id : number;
    supplystart5 : string;
    supplyend5 : string;
    supplystart6Id : number;
    supplyend6Id : number;
    supplystart6 : string;
    supplyend6 : string;
    supplystart7Id : number;
    supplyend7Id : number;
    supplystart7 : string;
    supplyend7 : string;
    supplystart8Id : number;
    supplyend8Id : number;
    supplystart8 : string;
    supplyend8 : string;
    leadinpole : string;
    leadinnumber : string;
    leadinpolestandard : string;
    leadinpolematerial : string;
    leadinbasetype : string;
    leadinbasesize : string;
    pillarbasetype : string;
    specialnotes : string;
    contractor : string;
    setupdate : number;
    districtpolice : string;
    takeoversource : string;
    oldadminroutename : string;
    oldadminadminnumber : string;
    note : string;
    removalflag : number;
    deleteflag : number;
    class1 : number;
    class2 : number;
    class3 : number;
    class4 : number;
    class5 : number;
    spare1 : string;
    spare2 : string;
    spare3 : string;
    spare4 : string;
    spare5 : string;
    numeric1 : number;
    numeric2 : number;
    numeric3 : number;
    numeric4 : number;
    numeric5 : number;
    updatedate : Date;
    updateflag : number;
    registclass : number;
    reservenumber : string;
    reservename : string;
    reservecontractor : string;
    updateuserid : number;
    operationalstatusid : number;

    photos: SwitchboardPhoto[];

    // /**
    //  * 分電盤-自動点滅器
    //  * atf_tb_swb_flasher.switchbordidとatf_tb_switchbord.idでjoin(多対一)
    //  * TODO:複数あるうちのどのデータを表示するのか確認する
    //  */
    // flashername: string;
    // /**
    //  * 分電盤-自動点滅器V
    //  * atf_tb_swb_flasher.switchbordidとatf_tb_switchbord.idでjoin(多対一)
    //  * TODO:複数あるうちのどのデータを表示するのか確認する
    //  */
    // flashervolt: number;
    // /**
    //  * 分電盤-自動点滅器A
    //  * atf_tb_swb_flasher.switchbordidとatf_tb_switchbord.idでjoin(多対一)
    //  * TODO:複数あるうちのどのデータを表示するのか確認する
    //  */
    // flasherwatt: number;
}