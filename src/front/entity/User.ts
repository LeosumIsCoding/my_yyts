import { IUser } from "@t/IUser";


export class User implements IUser{
    power: number;
    uid: number;
    tele: string;
    insert_time: Date;
    status: number;
    update_time: Date;
    account: string;
    password: string;
}