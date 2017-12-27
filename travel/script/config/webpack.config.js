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
    entry:{
        app:path.resolve('resource/app.js'),
        test:path.resolve('resource/test.js'),
        vendor:['react','react-dom']
    },
    /**
     * 出口：{
     *  path:(required),绝对路径
     *  filename:(required)，可以使用固定名称，假如多入口的可以使用[name]
     * }
     */
    output:{
        path:path.resolve('public'),
        filename:'[name].js'
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
                        loader:'css-loader'
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
    plugins:[
        /*
            使用了两个CommonsChunkPlugin，第一个是无效的（name不一样，然后minChuncks一样的话，相当于是一样的配置了）
            三个配置不一样时就都每个配置都有文件出现,如：没有minChuncks，minChunck是不一样啊
            name:chunck 名，自定义的块名，然后块最后输出的文件名是filename，若无，就用name的
            chunck：涉及到的块，省略的话，就使用入口的数量
            minChunks：被引用的次数



            ***
            *
            * （http://foio.github.io/wepack-code-spliting/）
            * (https://github.com/webpack/webpack/issues/1016#issuecomment-182093533)
            * (http://blog.csdn.net/liangklfang/article/details/55224360)
            * 多个模块打包之后的代码集合叫chunk
            * chunk的类型：entry chunk ,唯一一个(包含webpack运行时的代码)
            * normal chunk
            * 
         */
        
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks:2

        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:['vendor'],
            filename:'vendor.js',
            // minChunks:function(module, count) {
            //     return module.context && module.context.indexOf('node_modules') !== -1;
            // }

        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'other',
            // chunck:2,
            minChunks:3

        }),
    ]
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