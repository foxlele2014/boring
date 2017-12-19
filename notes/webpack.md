# webpack

1. entry
2. output
3. loader
4. plugin


依赖图的起点（entry）

output.filename

output.path

loader:识别出文件（test）--> 转换（use)

loader 转换某些类型的模块

plugin：require，然后写入plugin:[] 

需要new操作创建plugin实例


entry可以单入口，可以多入口

commonChunkPlugin可以提取公共文件

output：单入口则只有个出口（path（绝对路径）。filename文件名


配置了多个入口时，（即多个chunk），则使用占位符[name]确保文件的唯一性

文件的publiPath可以置空，假如无法知道的话，可以在入口里配置？？？？


loader可以在import或者加载时进行预处理文件（其他构建工具里的任务）

## 使用loader的方式
1. 配置（webpack.config.js里
2. 内联（在每个import里显示引用loader
3. cli（在shell命令里指定？？？

``` 
module:{
	rules:[
		{
			test:'正则',
			use:[
				{loader:loader1,options:{module:true}},
				{loader2}
			]
		}
	]
}
```


### 内联
某个loader ！ 文件名


## plugin

webpack 插件是一个具有apply属性的javascript对象

apply属性会被webpack compiler 调用，并且compiler对象在整个编译生命周期里有效

而且必须要new，可以传入参数


## 配置
导出一个对象的javascript文件

可以require文件或者模块

标准的nodejs commonjs模块

## 模块
- es2015 import
- commonJs require
- AMD define & require 
- less/css/sass @import
- url(...)

注意：webpack 1 需要特定的 loader 来转换 ES 2015 import，然而通过 webpack 2 可以开箱即用。

## 模块解析

- 绝对路径
- 相对路径
- 模块路径

resolve.alias 配置别名

文件或者是目录


resolve.extensions 解析的后缀名
（引入的模块没写后缀名，则按这个来处理）


指向的是文件夹？
package.json？ resolve.mainfields 配置指定的 && package.json的main字段存在 ： 只能靠resolve.mainfields 里配置的能否和require、import的对应上


## 依赖图

## 构建目标

target

## manifest

代码类型

1. 自己写的
2. library 、vendor
3. runtime 、manifest（管理模块的交互）

转化为__webpack_require__

提取manifest

## 模块热替换

HMR




-------------------------------------


# 配置

读配置

- 终端
- node


node的path模块

__dirname


-----------------------
path 模块解析：

> [path](http://www.runoob.com/nodejs/nodejs-path-module.html)


方法：(练习markdown 的表格写法）

方法名 | 描述
--------- | -----------
path.nomalize(p) | 规范化路径（注意.. /.)
dddd | dfsd


不同语言书写
babelrc（babel的文件）


Promise？ 



- entry


	string、object、array





- output


	path必须是绝对路径，可以用path.resolve(__dirname,'public');获取
	publicPath按需加载、外部资源（图片文件）
	
	编译时指定文件名字：
	如js/[name].js  (chunkFilename)
	
	 然后引用时，会加上publicPath（相对于浏览器使用时，
	 如publicPath/js/[name].js
 
 

 

 - module

	处理项目中不同类型的模块
	
- resolve

	设置模块如何被解析
	
	resole.modules:["node_modules"]默认
	
- plugin
	
	如何写一个插件


- Watch 和 WatchOptions




# API

- 命令行


# 指南

昨天看了一遍（20171126），但还是不是特别熟悉，假如用的话，应该还是很简单的，但是假如需要自己写插件就有点难。
需要了解下webpack的事件流，
compiler以及complication类。
找些资料分析了解下。
然后再自己用react、webpack、redux来搭建下项目（尝试不使用react-redux、react-route）。这些自己处理，看下怎么样。
或者先试react、webpack
之后再加上redux这个数据处理的东西。



# 事件流
```javascript
module.exports = {

}
```

事件驱动？
每个插件都有在不同事件执行的action。
它发生到这个事件的时候是如何安排这些插件的action的执行的呢。
把他们都push到一个栈吗？按照代码plugins的顺序。？
然后再出栈。（那么他会将所有plugin的代码都预览。之后再分类？）；

然后再开始从run开始执行编译、打包？



首先是compiler的事件，
之后很神奇，他会提供一个compiler的实例类，compilation，这个类也有事件？
这个是编译事件。这个事件会分成很多小事件。

就说是一个生命周期，每个生命周期又会发生很多事件。
这个compilation具体在当前的，对当前正在处理的一个asset进行处理

```javascript
const webpack = require('webpack');
const {compiler} = webpack;

compiler.plugin('compilation',function(compilaton,callback){
	compilation.plugin('optimize-tree',function(chunk,modules){
	
		.......
	});
});

```

> compiler 对象代表的是不变的webpack环境，是针对webpack的

> compilation 对象针对的是随时可变的项目文件，只要文件有改动，compilation就会被重新创建。

> [webpack 之plugin运行机制](https://fengmiaosen.github.io/2017/03/21/webpack-core-code/)

> [webpack事件流](https://segmentfault.com/a/1190000008060440)



# webpack 注意事项

注意事项：

- entry为字符串时，output的filename只能指定具体名字，不能使用占位符。[name].js之类的，这个只有在不是字符串时有效。
- entry对象是key:value
- webpack的配置文档是不可以自定义key的。







# 疑问

> [webpack 为什么这么难用？ - Stark伟的文章 - 知乎](http://zhuanlan.zhihu.com/p/32148338)

dllPlugin 、commonChunkPlugin都可以抽离vendor进行打包。
是可以只用一种吗？

还有commons，对于入口文件里的。它会去打包require或者import进去的代码吗，这样子也重复了吗？？？
（还是因为用的是同一个commonChunkPlugin，所以里边做了处理，）？？？？


这种抽离代码，假如代码里的，如react里import了a，然后有另外一个xxx也import了a，
这时a会被打包到里边。假如这两个东西，react和xxx是属于不同文件的，则会被打进自己的部分吗？？？



两种一起用的话，代码会部分重复吗?(dll里配置的那部分，会不会在vendor里重复了呢？？？）

```js
 new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./manifest.base.json"),
            name: 'dll_base'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function (module) {
                return module.context &&
                    module.context.indexOf("node_modules") !== -1 ;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            chunks: baseConfig.entry,
            minChunks: baseConfig.entry.length
        }),

```


```js

module.exports = {
    output: {
        path: buildPath,
        filename: '[name].js?v=[hash]',
        library: '[name]'
    },
    entry: {
        'dll_base': vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve('./scripts/config/manifest.base.json'),
            name: '[name]',
            context: __dirname
        })
    ]
}


```

- quote

```html
<script type="text/javascript" src="/js/dll_base.js"></script>   
<script type="text/javascript" src="/js/commons.js?v=87561a073654580d3a6e"></script>
<script type="text/javascript" src="/js/vendor.js?v=5dd3382efdc987511a13"></script>
    

```

webpack有个externals的配置项，里边写入的模块，表示是排除的。
假设在dll里配置了这些排除的模块，那么肯定会被弄成一个js文件，在common里也不会出现他们了。？？
是否可以这样？？？

不过觉得我还是得自己验证这些重复性模块被打包的问题。。。问别人看文档，都还是不如实际操作来一遍。


> [抽离第三方库](https://github.com/superpig/blog/issues/6)

> [dllPlugin存在的问题?](https://segmentfault.com/q/1010000008121331)

> [ref](https://github.com/pigcan/blog/issues/1)

> [ref](http://engineering.invisionapp.com/post/optimizing-webpack/)

> [ref](http://dev.dafan.info/detail/331496?p=)

> [ref](https://segmentfault.com/q/1010000005975720)

> [ref](https://github.com/superpig/blog/issues/6)




	
 
 
 

















































