/*
* @Author: limin
* @Date:   2017-12-19 14:27:29
* @Last Modified by:   limin
* @Last Modified time: 2017-12-29 18:36:11
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
                            presets: ['env', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },
    plugins: []
};

module.exports = config;
