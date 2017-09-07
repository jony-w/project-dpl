var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/js/index.js',
    output:{
        path:path.resolve(__dirname, './build/'),
        filename:'app.js'
    },
    // 新引入
   plugins: [
        new HtmlWebpackPlugin({
            title: 'aaaa',
            template: 'test.html'
        })
    ],
    //设置开发者工具的端口号,不设置则默认为8080端口
    devServer: {
        contentBase: './',  // 服务根目录
        // color: true,  // 命令行是否彩色
        inline: true, // 项目文件保存自动编译文件模块
        port: 8090 // 启动端口
    },
    // resolve.extensions ['', '.js', '.vue'],
    // watch: true,
    // 使用loader模块
    module: {
      loaders: [
        {test: /\.css$/, loader: 'style-loader!css-loader'}
      ]
    }



};