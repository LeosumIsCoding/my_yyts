import { IController } from "@b/entity/ITemplate";
import { IRegisterDTO, IUserHttpRequestes } from "@t/IUser";
import { User } from "./User";

// 用于实现用户的增删改查


export interface IUserController extends IController<User> ,IUserHttpRequestes {}

export interface IUserService {
    AuthAccountExist(account:string):Promise<boolean> // 账号是否存在
    Auth(account:string,password:string):Promise<boolean> // 账号密码是否正确
    AuthExist(uid:number):Promise<boolean> // 用户是否存在
    AuthPower(uid:number,power:number):Promise<boolean> // 用户权限是否正确
    AuthStatus(uid:number,status:number):Promise<boolean> // 用户状态是否正确
    Create(params:IRegisterDTO):Promise<void> // 创建用户
    Delete(uid:number):Promise<void> // 删除用户
    UpdateTele(uid:number,tele:string):Promise<void> // 更新用户信息
    UpdatePassword(uid:number,password:string):Promise<void> // 更新用户密码
    UpdatePower(uid:number,power:number):Promise<void> // 更新用户权限
    UpdateStatus(uid:number,status:number):Promise<void> // 更新用户状态
    CreateToken(uid:number):string // 创建token
    GetOneByAccountAndPassword(account:string,password:string):Promise<User> // 获取用户信息
    GetOne(uid:number):Promise<User> // 获取用户信息
    GetList():Promise<User[]> // 获取用户列表
}