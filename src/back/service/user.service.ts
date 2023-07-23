import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/User'
import { IUserService } from '../entity/IUserTemplate';
import { IRegisterDTO, IUser } from '@t/IUser';
import  jwt from 'jsonwebtoken'
import { JWT } from '@t/application.config';

@Injectable()
export class UserService implements IUserService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  CreateToken(uid: number): string {
    return jwt.sign({uid:String(uid)}, JWT.asign, { expiresIn: JWT.expiresIn })
  }
  GetOneByAccountAndPassword(account: string, password: string): Promise<IUser> {
    return this.userRepository.findOne({where:{account,password}})
  }

  async AuthAccountExist(account: string): Promise<boolean> {
    const user = await this.userRepository.findOne({where:{account}});
    return !!user;
  }

  async Auth(account: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { account } });
    if (!user) {
      return false;
    }
    return user.password === password;
  }

  async AuthExist(uid: number): Promise<boolean> {
    const user = await this.userRepository.findOne({where:{uid}});
    return !!user;
  }

  async AuthPower(uid: number, power: number): Promise<boolean> {
    const user = await this.userRepository.findOne({where:{uid}});
    if (!user) {
      return false;
    }
    return user.power === power;
  }

  async AuthStatus(uid: number, status: number): Promise<boolean> {
    const user = await this.userRepository.findOne({where:{uid}});
    if (!user) {
      return false;
    }
    return user.status === status;
  }

  async Create(params: IRegisterDTO): Promise<void> {
    const user = new User();
    user.account = params.account;
    user.password = params.password;
    user.tele = params.tele;
    user.power = params.power;
    user.status = 0;
    user.insert_time = new Date();
    user.update_time = new Date();
    await this.userRepository.save(user);
  }

  async Delete(uid: number): Promise<void> {
    await this.userRepository.update(uid, { status: 1 });
  }

  async UpdateTele(uid: number, tele: string): Promise<void> {
    await this.userRepository.update(uid, { tele });
  }

  async UpdatePassword(uid: number, password:string): Promise<void> {
    await this.userRepository.update(uid, { password });
  }

  async UpdatePower(uid: number, power: number): Promise<void> {
    await this.userRepository.update(uid, { power });
  }

  async UpdateStatus(uid: number, status: number): Promise<void> {
    await this.userRepository.update(uid, { status });
  }

  async GetOne(uid: number): Promise<IUser> {
    const user = await this.userRepository.findOne({where:{uid}});
    return user;
  }

  async GetList(): Promise<IUser[]> {
    const users = await this.userRepository.find();
    return users;
  }
}
