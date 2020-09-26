const {
    addWebpackAlias,
    addLessLoader,
    fixBabelImports,
    override,
    addDecoratorsLegacy
} = require('customize-cra')
const path = require('path')

module.exports = override(
    // @ 修饰器
    addDecoratorsLegacy(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        // 支持 less sass stylus
        style: true,
    }),
    // // 支持 antd 主题定制
    // addLessLoader({
    //     // 支持antd的按需加载
    //     javascriptEnabled: true,
    // }),
    // 别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@v': path.resolve(__dirname, 'src/views'),
        '@c': path.resolve(__dirname, 'src/components'),
    })
)