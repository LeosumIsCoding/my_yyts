import { IHttpRequestes } from "@t/IHttpInterface";
import { RouteRecordRaw } from "vue-router";



export interface IRequestApi<T> extends IHttpRequestes<T> {

}

export interface IAction<T> extends IRequestApi<T>{

}

export interface VueModule{
    name:string;
    router:RouteRecordRaw
}