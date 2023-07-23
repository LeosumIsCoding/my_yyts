import { Controller, Get,HttpException,Logger } from '@nestjs/common';
import { MainService } from './main.service';
import { ErrorCode, Result } from '@t/Result';

@Controller('')
export class MainController {
    logger = new Logger('MainController',{timestamp:true})
    constructor(
        private readonly mainService: MainService
    ){} 

    @Get('hello')
    getHello(): Result<string> {
        this.logger.log('hello')
        return Result.data(this.mainService.getHello());
    }


    @Get('helloAsync')
    async getHelloAsync(): Promise<Result<string>> {
        return Result.data(await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.mainService.getHello());
            }, 5000)
        }))
    }

    @Get('fuck')
    fuck(){
        throw new HttpException("我草泥马",ErrorCode.BusinessException)
    }
}
