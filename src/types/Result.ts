export enum ErrorCode{
    BusinessException=250,
    UnknowException=251
}

export class Result<T>{
    code: ErrorCode
    msg: string
    data: T

    constructor(code: ErrorCode, msg: string, data: T) {
        this.code = code
        this.msg = msg
        this.data = data
    }

    static success(): Result<void> {
        return new Result<void>(ErrorCode.BusinessException, "success", undefined)
    }

    static data<T>(data: T): Result<T> {
        return new Result<T>(ErrorCode.BusinessException, "success", data)
    }

    static error(code:number,msg: string): Result<void> {
        return new Result<void>(code, msg, undefined)
    }
}