import { Logger, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {INestModule} from '@t/application.config'
import {UserController} from './controller/user.controller'
import {UserService} from './service/user.service'
import {TypeOrmModule} from '@nestjs/typeorm'
import {User} from './entity/User'
import { DATABASE } from '@t/application.config';
import {HttpExceptionFilter} from '@b/exception/http-exception.filter'

process.on('message',async (module:INestModule) => {
    const { name, port, baseUrl } = module;
    const app = await NestFactory.create(UserModule);
    app.setGlobalPrefix(baseUrl);
    app.useLogger(new Logger(name))
    app.useGlobalFilters(new HttpExceptionFilter(new Logger()))
    app.enableCors()
    
    await app.listen(port, () => {
        Logger.verbose(`服务${name}启动成功，端口号:${port}，基础路径：${baseUrl}`);
    });
})
@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: DATABASE.HOST,
        port: DATABASE.PORT,
        username: DATABASE.USERNAME,
        password:  DATABASE.PASSWORD,
        database: DATABASE.DATABASE,
        entities: [User],
    }),TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService,]
  })
  export class UserModule {}
  
