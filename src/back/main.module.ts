import { Module,Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {INestModule} from '@t/application.config'
import {MainController} from './main/main.controller'
import {MainService} from './main/main.service'
import {HttpExceptionFilter} from '@b/exception/http-exception.filter'

process.on('message',async (module:INestModule) => {
    const { name, port, baseUrl } = module;
    const app = await NestFactory.create(MainModule);
    app.setGlobalPrefix(baseUrl);
    app.useLogger(new Logger(name))
    app.useGlobalFilters(new HttpExceptionFilter(new Logger()))
    app.enableCors()
    await app.listen(port, () => {
        Logger.verbose(`服务${name}启动成功，端口号:${port}，基础路径：${baseUrl}`);
    });
})
@Module({
    controllers: [MainController],
    providers: [MainService],
})
export class MainModule {}
