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