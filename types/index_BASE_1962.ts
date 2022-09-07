export const TOKEN_HEADER_NAME = 'X-AUTH-TOKEN'

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

//施設詳細_附属物_補修履歴
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
