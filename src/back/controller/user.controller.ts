import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { User } from '@b/entity/User';
import { IUserController } from '../entity/IUserTemplate';
import { IUser, ILoginDTO, IRegisterDTO } from '@t/IUser';
import { UserService } from '../service/user.service';
import { ErrorCode } from '@t/Result';
@Controller('')
export class UserController implements IUserController  {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  GetOne(id: number): Promise<User> {
    if(this.userService.AuthExist(id)){
      return this.userService.GetOne(id)
    }
    throw new HttpException("用户不存在", ErrorCode.BusinessException)
  }
  GetList(): Promise<User[]> {
    return this.userService.GetList()
  }
  Update(id: number, data: IUser): Promise<void> {
    this.userService.UpdateTele(id,data.tele)
    this.userService.UpdatePassword(id,data.password)
    this.userService.UpdatePower(id,data.power)
    this.userService.UpdateStatus(id,data.status)
    return
  }
  Delete(uid: number): Promise<void> {
    return this.userService.Delete(uid)
  }
  async Login(params: ILoginDTO): Promise<string> {
    const user = await this.userService.GetOneByAccountAndPassword(params.account,params.password)
    if(user){
      return this.userService.CreateToken(user.uid)
    }
    throw new HttpException("账号或密码错误",ErrorCode.BusinessException )
  }
  async register(params: IRegisterDTO): Promise<void> {
    if(this.userService.AuthAccountExist(params.account)){
      throw new HttpException("账号已存在",ErrorCode.BusinessException )
    }
    return await this.userService.Create(params)
  }
}
