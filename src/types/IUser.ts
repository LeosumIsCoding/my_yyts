import { IHttpRequestes } from "@t/IHttpInterface"

export enum UserStatus{
    normal ,
    disable
}

export enum UserPower{
    normal,
    admin,
    superAdmin,
}

export interface IUserMetaData{
    uid:number
    account:string
    password:string
    insert_time:Date
    status:UserStatus
    update_time:Date
    power:number
}


export interface IUser extends IUserMetaData{
    tele:string
}


export interface ILoginDTO{
    account:string
    password:string
    power:UserPower
}

export interface IRegisterDTO{
    account:string
    password:string
    tele:string
    power:UserPower
}

export  interface IUserHttpRequestes {
    Login(params : ILoginDTO):Promise<string>
    register(params: IRegisterDTO):Promise<void>
}




