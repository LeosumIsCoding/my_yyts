export interface IConfig {
    port: number;
    baseUrl: string;
}

export interface INestModule extends IConfig {
    name: string;
}




function ServerGetConfig(profile: string) {
    // 主机配置
    const server = {
        PROFILE: profile,
        HTTP_PROTOCOL: 'http',
        WS_PROTOCOL: 'ws',
        HOST: 'localhost',
        PORT: 4361,
    }
    if (profile === 'prod') {
        server.HOST = '----',
            server.PORT = 6415,
            server.HOST = '0.0.0.0'
    }
    return server
};

function getDataBaseConfig(profile: string) {
    // 数据库配置
    const DATABASE = {
        HOST: '****',
        PORT: 3306,
        USERNAME: 'root',
        PASSWORD: 'leosum123',
        DATABASE: 'foobar',
    }
    if (profile === 'prod') {
        DATABASE.HOST = 'localhost'
        DATABASE.PORT = 3306,
            DATABASE.PASSWORD = '123456'
    }
    return DATABASE
}

function getRedisConfig(profile: string) {
    const REDIS = {
        HOST: '127.0.0.1',
        PORT: 6379,
        PASSWORD: '123456',
    }
    return REDIS
}

function getJwtConfig(profile: string) {
    const JWT = {
        asign: 'foobar',
        expiresIn: '7d',
    }
    return JWT
}

function getModulesConfig(profile: string) {
    const modules = [
        {
            name: 'main.module',
            port: 3000,
            baseUrl: '/',
        },
        {
            name: 'user.module',
            port: 3001,
            baseUrl: '/api/user',
        },
    ] as INestModule[]
    return modules
}

const profile = process.env.NODE_ENV || 'prod'
export const SERVER = ServerGetConfig(profile)
export const DATABASE = getDataBaseConfig(profile)
export const REDIS = getRedisConfig(profile)
export const JWT = getJwtConfig(profile)
export const MODULES = getModulesConfig(profile)






