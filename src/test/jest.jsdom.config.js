module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
    rootDir: './',
    //  以test.js结尾的文件 或者以spec.js结尾的文件 或者以test.ts结尾的文件 或者以spec.ts结尾的文件  为测试文件
    testRegex: '\\.jsdom.test\\.ts$',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.ts$': 'ts-jest',
    },//匹配转换的文件 使用相应的转换器
    collectCoverage: true,//是否收集测试时的覆盖率信息，
    //哪些文件需要收集覆盖率信息 当测试文件在配置文件同一目录下时
    collectCoverageFrom: [
        '**/*.{js,ts,vue}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    coverageDirectory: '<rootDir>/jsdom/coverage',//覆盖率文件的输出目录    
    testEnvironment: 'jsdom',//测试环境 
}