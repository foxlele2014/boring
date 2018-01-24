const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path'); 

const config = {
    entry:{dll:['react','react-dom','react-router-dom','react-redux','redux','whatwg-fetch','classnames']},
    output:{
        filename:'[name].js',
        path:path.resolve('public')
    },
    plugins:[
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify('production')
        }),
        new webpack.DllPlugin({
            context:__dirname,
            name:'[name]',
            path:path.join(__dirname, "manifest.json"),
        }),
        new UglifyJsPlugin()
    ]
}

module.exports = config;