
// 定义http默认请求接口
export interface IHttpRequestes<T> {
    GetOne(id: number): Promise<T>

    GetList(): Promise<T[]>

    Update(id: number, data: T): Promise<void>

    Delete(id: number): Promise<void>
}



