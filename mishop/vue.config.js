module.exports = {
    // 关闭语法书写规范的检查
    lintOnSave: false,
    devServer: {
        port: 8080,
        open: true,
      /*   proxy: {
            "/v1": {
                target: "http://localhost:8000/v1",
                //切换代理是否切换域
                changeOrigin: true,
                //路由修改了，但是服务器接收请求的路径我们无权修改，所以在真正发送请求的时候要把这个路由再去掉
                pathRewrite: {
                    //正则匹配到的内容替换为空
                    "^/v1": ""
                }
            }
        } */
    }
}