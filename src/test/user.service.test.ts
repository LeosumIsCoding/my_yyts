import { Test } from "@nestjs/testing";

import { UserService } from "@b/service/user.service";
import { User } from "@b/entity/User";
import { TypeOrmModule } from "@nestjs/typeorm";

import {DATABASE} from '@t/application.config'
describe('UserService', () => {
    let service: UserService;
    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [TypeOrmModule.forRoot({
                type: 'mysql',
                host: DATABASE.HOST,
                port: DATABASE.PORT,
                username: DATABASE.USERNAME,
                password:  DATABASE.PASSWORD,
                database: DATABASE.DATABASE,
                entities: [User],
            }),TypeOrmModule.forFeature([User])],
            providers: [UserService, User],
        }).compile();
        service = module.get<UserService>(UserService);
    })
    it('should be defined', () => {
        expect(service).toBeDefined();
    })

    describe('CreateToken', () => {
        it('should return a token', () => {
            const result = service.CreateToken(1)
            console.debug(result)
            expect(result).toBeDefined()
            expect(result).not.toBeNull()
            expect(typeof result).toBe('string')
        })
    })

    describe('GetOneByAccountAndPassword', () => {
        it('should return a user', async () => {
            const result = await service.GetOneByAccountAndPassword('test','123')
            console.debug(result)
            expect(result).toBeDefined()
            expect(result).not.toBeNull()
            expect(typeof result).toBe('object')
        })
    })

    describe('AuthAccountExist', () => {
        it('should return true', async () => {
            const result = await service.AuthAccountExist('test')
            console.debug(result)
            expect(result).toBeDefined()
            expect(result).not.toBeNull()
            expect(typeof result).toBe('boolean')
        })
    })

    describe('Auth', () => {
        it('should create a2 user', async () => {
            const result = await service.Create({
                account: 'test'+Date.now().toString().slice(-6),
                password: 'test',
                tele: 'test',
                power: 0,
            })
            expect(result).toBeUndefined()
        })
    })

    describe('AuthExist', () => {
        it('should return true', async () => {
            const result = await service.AuthExist(2)
            console.debug(result)
            expect(result).toBeDefined()
            expect(result).not.toBeNull()
            expect(typeof result).toBe('boolean')
        })
    })

    describe('AuthPower', () => {
        it('should return true', async () => {
            const result = await service.AuthPower(2,0)
            console.debug(result)
            expect(result).toBeDefined()
            expect(result).not.toBeNull()
            expect(typeof result).toBe('boolean')
        })
    })

    describe('AuthStatus', () => {
        it('should return true', async () => {
            const result = await service.AuthStatus(2,0)
            console.debug(result)
            expect(result).toBeDefined()
            expect(result).not.toBeNull()
            expect(typeof result).toBe('boolean')
        })
    })


    describe('Create', () => {
        it('should create a user', async () => {
            const result = await service.Create({
                account: 'test'+Date.now().toString().slice(-6),
                password: 'test',
                tele: 'test',
                power: 0,
            })
            expect(result).toBeUndefined()
        })
    })

    describe('Delete', () => {
        it('should delete a user', async () => {
            const result = await service.Delete(2)
            expect(result).toBeUndefined()
            service.UpdateStatus(2,0)
        })

        
    })
})