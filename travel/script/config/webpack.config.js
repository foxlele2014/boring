const webpack = require('webpack');
const path = require('path');

const resource = 'resource';

let config = {
    /**
     * 入口：三种形式
     * 1.字符串（一个入口）
     * 2.对象
     * {
     *  entry1:aaa.js,
     *  entry2:bbb.js,...
     * 3.数组[{},{},{}]
     * }
     * tips:占位符[name]这种是需要有key的
     */
    entry:path.resolve('resource/app.js'),
    /**
     * 出口：{
     *  path:(required),绝对路径
     *  filename:(required)，可以使用固定名称，假如多入口的可以使用[name]
     * }
     */
    output:{
        path:path.resolve('public'),
        filename:'bundle.js'
    },
    /**
     * 
     */
    resolve:{

    },
    /**
     * 模块
     */
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['babel-preset-env','babel-preset-react']
                        }
                    }
                ],
                exclude:'/node_modules'
            },
            {
                test:/\.less$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'less-loader'
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    }
                ]
            }
        ]
    },
    /**
     * 插件
     */
    plugin:{
        
    }
}

module.exports = config;

//webpack编译js时，需要script-loader
//然后发现不认识jsx，
//这时需要jsx的loader
//然后还有import，es6语法
//需要babel转义
//不过转义需要参考，babel-preset-env，类似的babel-preset-es2015
//jsx因为是react里的，需要react的预设，babel-preset-react

//loader 里的use
//执行顺序是倒序的
//./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./resource/assets/less/all.less

//编译less的时候为什么是要先找less模块呢？(预编译，也是得找到对应的语法？)