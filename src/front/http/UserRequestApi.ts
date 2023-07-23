
import {IUserHttpApi} from '@f/entity/IUserTemplate'
import { User } from '@f/entity/User';
import { ILoginDTO, IRegisterDTO } from '@t/IUser';

export class UserHttpApi implements IUserHttpApi<User>{
    GetOne(id: number): Promise<User> {
        throw new Error('Method not implemented.');
    }
    GetList(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }
    Update(id: number, data: User): Promise<void> {
        throw new Error('Method not implemented.');
    }
    Delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    Login(params: ILoginDTO): Promise<string> {
        throw new Error('Method not implemented.');
    }
    register(params: IRegisterDTO): Promise<void> {
        throw new Error('Method not implemented.');
    }

}