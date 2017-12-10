const webpack = require('webpack');
const path = require('path');

const resource = 'resource';

let config = {
    entry:path.resolve('resource/app.js'),
    output:{
        path:path.resolve('public'),
        filename:'bundle.js'
    },
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
                test:/\.(css|less)$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'less-loader'
                    }
                ]
            }
        ]
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

//编译less的时候为什么是要先找less模块呢？