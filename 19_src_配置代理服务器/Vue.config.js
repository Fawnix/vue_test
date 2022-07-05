module.exports = {
// 开启代理服务器(方式一)
  /* devServer: {
    proxy: 'http://localhost:5000'
  }, */

// 开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        //^/atguigu匹配以atguigu开头的路径，把它变成了后面那个空字符串
        pathRewrite:{'^/atguigu':''},
        // ws: true,//用于支持WebSocket
        // changeOrigin: true//用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        //^/atguigu匹配以atguigu开头的路径，把它变成了后面那个空字符串
        pathRewrite: { '^/demo': '' },
        // ws: true,//用于支持WebSocket
        // changeOrigin: true//用于控制请求头中的host值
      },
    }
  }
}