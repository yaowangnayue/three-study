1、初始化npm：npm init -y
2、设置权限，private设置为true，防止不小心发布
3、安装依赖文件
  - 先安装webpack相关的
    ``` cnpm install webpack webpack-cli webpack-dev-server --save-dev```
  - 安装ts相关的依赖
    ``` cnpm install typescript ts-loader --save-dev ```
  - 安装three.js相关的依赖
    ``` cnpm install three @types/three --save```
4、设置启服务的命令：
  在package.js里面："start":"webpack server --open"
5、创建项目文件
  - src
  - dist
  - ts配置文件tsconfig.json
  - webpack的配置文件，webpack.config.js