module.exports = {
    moduleFileExtensions: ["js", "json", "ts"],
    rootDir: './src',
    //  以 .test.ts 结尾的文件 为测试文件
    testRegex:  '\\.test\\.ts$',//匹配测试文件
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },//匹配转换的文件 使用相应的转换器
    collectCoverage: true,//是否收集测试时的覆盖率信息，
    //哪些文件需要收集覆盖率信息 当测试文件在配置文件同一目录下时
    collectCoverageFrom: [
        '**/*.{ts}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        "@f/(.*)$": "<rootDir>/front/$1",
        "@b/(.*)$": "<rootDir>/back/$1",
        "@t/(.*)$": "<rootDir>/types/$1",
        "@u/(.*)$": "<rootDir>/utils/$1"
    },
    coverageDirectory: '<rootDir>/test/coverage',//覆盖率文件的输出目录    
    testEnvironment: 'node',//测试环境 
}