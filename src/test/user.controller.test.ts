import { Test } from "@nestjs/testing";

import { UserService } from "@b/service/user.service";
import { User } from "@b/entity/User";
import { TypeOrmModule } from "@nestjs/typeorm";

import { GetConfig } from '@t/application.config'
import { UserController } from "@b/controller/user.controller";
const profile = process.env.npm_lifecycle_event.split('-')[1] || 'dev'
const config = GetConfig(profile)
describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: config.DATABASE.HOST,
                    port: config.DATABASE.PORT,
                    username: config.DATABASE.USERNAME,
                    password: config.DATABASE.PASSWORD,
                    database: config.DATABASE.DATABASE,
                    entities: [User],
                }),
                TypeOrmModule.forFeature([User]),
            ],
            controllers: [UserController],
            providers: [UserService],
        }).compile();

        userController = moduleRef.get<UserController>(UserController);
    });

    describe('GetOne', () => {
        it('should return an array of user', async () => {
            const result = await userController.GetOne(2);
            expect(result).toBeInstanceOf(User);
        });
    })

    describe('GetList', () => {
        it('should return an array of user', async () => {
            const result = await userController.GetList();
            expect(result).toBeInstanceOf(Array);
        });
    })

    describe('Update', () => {
        it('should return an array of user', async () => {
            const user = new User();
            user.account = 'test';
            user.password = '123';
            user.tele = '123';
            user.power = 1;
            user.status = 0;
            const result = await userController.Update(1,user);
            expect(result).toBe(undefined);
        });
    })

    describe('Delete', () => {
        it('should return an array of user', async () => {
            const result = await userController.Delete(2);
            expect(result).toBe(undefined);
        });
    })


});
