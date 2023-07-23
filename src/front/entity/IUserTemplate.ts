import { IRequestApi } from "./ITemplate";
import {IUserHttpRequestes} from '@t/IUser'

export interface IUserHttpApi<T> extends  IRequestApi<T>,IUserHttpRequestes {}

export interface IUserAction<T> extends IUserHttpApi<T>{}