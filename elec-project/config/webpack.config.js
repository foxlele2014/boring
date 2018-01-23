/*
* @Author: limin
* @Date:   2017-12-19 14:27:29
* @Last Modified by:   limin
* @Last Modified time: 2017-12-29 18:36:11
*/
/**
 * __dirname是基于使用它的文件的位置而言的
 * 所以要抽取公共路径的话，可以抽取每个文件的前缀作为resolve的第一个参数
 */

const webpack = require('webpack');
const path = require('path');

const assets = '/resource/assets';

const config = {
    entry: path.resolve('resource/renderer.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve('public')
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.less'],
        alias: {
            '@config': 'aaaa'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                //这里是仅仅吗
                exclude: [path.resolve('node_modules')],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react'],
                            plugin:[]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{ loader: 'style-loader!css-loader!less-loader' }]
            },
            {
                test: /\.css$/,
                user: [{ loader: 'style-loader!css-loader' }]
            }
        ]
    },
    plugins: []
};

module.exports = config;
