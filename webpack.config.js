const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    hello: './src/hello.ts',
    box: './src/box.ts'
  },
  // 开发工具，方便调试
  devtool: 'inline-source-map',
  // 用于启服务的配置
  devServer:{
    static: './dist', // 表示在dist里面启服务
  },
  // 输出配置
  output: {
    // 输出的文件名
    filename: '[name].js',// 这种是变量的形式传进去的，即将上面的入口文件拿过来当作输出文件名了
    // 输出的路径
    path: path.resolve(__dirname,'dist')
  },
  // 配置引入文件时的自动识别文件类型
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  // 配置模块规则
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader'}
    ]
  }
}