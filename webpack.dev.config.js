const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js'),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],// cacheDirectory是用来缓存编译结果，下次编译加速
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 8888,
        compress: true, // 设定所有来自dist目录的文件都被gzip压缩
        historyApiFallback: true
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router')
        }
    }
}
