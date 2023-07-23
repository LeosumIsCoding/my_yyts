import { IHttpRequestes } from "@t/IHttpInterface";

// 业务逻辑

// 接收请求
export interface IController<T> extends IHttpRequestes<T> {

}
// 实现业务逻辑
export interface IService<T> extends IController<T> {

}


