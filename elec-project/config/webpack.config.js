/*
* @Author: limin
* @Date:   2017-12-19 14:27:29
* @Last Modified by:   limin
* @Last Modified time: 2017-12-29 18:36:11
*/

const webpack = require('webpack');
const path = require('path');

const assets = '/resource/assets';

export default = {
    entry:path.resolve(__dirname,'/resource/renderer.js'),
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },
    resolve:{

    },
    module:{
        rules:[
            {}
        ]
    },
    plugins:[

    ]
}