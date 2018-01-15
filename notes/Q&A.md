# Q&A

## todolist

1. [x] curry 函数柯里化
2. [x] 观察者模式（发布订阅模式）
3. [x] babel原理
4. [x] promise
5. [x] require
6. [ ] 路由的实现
7. [x] wireshark
8. [x] 自动化测试（mocha、breakJs、jest）（实践过jest了，只是大概知道怎么写了而已 = = ）
9. [x] webpack打包原理、插件编写
10. [x] 前端安全xss、csrf
11. [x] es6的特性
12. [x] gulp结合webpack
13. [x] 双向数据的绑定的实现原理
14. [ ] canvas、node（数据可视化方面）
15. [ ] css3
16. [ ] 移动端开发
17. [x] 跨域
18. [x] 浅拷贝和深拷贝
19. [x] 正则
20. [ ] websocket
21. [x] js运行时的函数栈(了解js环境的运行栈（= =。究竟什么时候就会不执行栈里边的东西了）
22. [ ] 脚手架
23. [x] 2017新技术
24. [ ] 架构项目
25. [ ] 使用各种全家桶之类的。如react、vue自己实现components
26. [ ] egg/koa框架了解使用
27. [ ] 在浏览器输入url之后发生了什么（主要是看一本书就好了，不过之前看了一部分，涉及到ip之类的那部分= =我就有点懵了，之前的网络的知识都忘了）

### 观察者模式
事件驱动的都是这类模式，

### require

> [require解读 ](http://www.ruanyifeng.com/blog/2015/05/require.html)

> [require 解读2](http://wanderyt.github.io/2017/09/06/Require-in-Node-js/)

### 双向绑定
似乎这个对于输入框（Input、select、textarea等），加了个onChange事件监听，变化的时候就修改某个值
> [剖析Vue实现原理 - 如何实现双向绑定mvvm](https://github.com/DMQ/mvvm)

### 正则
> [身份证正则解析](http://www.jb51.net/article/109384.htm)


### call stack
> [浅析javascript调用栈](https://segmentfault.com/a/1190000010360316)

call stack：这个用谷歌的工具来查看的时候，我想查看的是具体的，例如，打开一个页面，栈里就加入了很多数据，例如某个数据只是一个文件里的大的function，但是这个里边又有很多function，我想查看的是这边的小的function的call stack，但是看不到。不知道该怎么操作才能进去。（LIFO）

通过chrome的开发者工具来学习一下

断点，edit-breakpoint



> [用开发工具来学习this，以及闭包](http://m.php.cn/article/353143.html)
> [JavaScript 中的执行上下文和调用栈是什么？](http://www.zcfy.cc/article/what-is-the-execution-context-amp-stack-in-javascript-by-david-shariff-4007.html)

### promise

> [promise 迷你小书](http://liubin.org/promises-book/)

> [promise必知必会十道题](https://cnodejs.org/topic/5a014cbe235953e84e47d543)

### 路由实现

- react-router

location.key unique identifier for this location

> [location.key](https://github.com/ReactTraining/history/issues/76) 

> [react-router 原理](http://zhenhua-lee.github.io/react/history.html)

> [分析react-router4原理并实现（history方法）](https://github.com/youngwind/blog/issues/109)

> [分析react-router4原理并实现（hash方法） ](https://github.com/joeyguo/blog/issues/2)



### 脚手架

> [yeoman-generator](https://leozdgao.me/write-yeoman-generator/)

> [之前同事写的](https://github.com/Roy9102/yo-react/blob/master/app/index.js)

> [yeoman.io](http://yeoman.io/authoring/)



### 项目：（思考方向）

- 用了什么技术
- 技术原理
- 框架怎么搭建
- 采取的安全措施


### react：

- state和props
- jsx
- class组件、function组件（有状态和无状态）
- 生命周期函数（componentDidMount这个生命周期有点特别= =。
- shouldComponentUpdate？
- setState
- 循环里加上key

> [key 理解](http://taobaofed.org/blog/2016/08/24/react-key/)

- setState可以接受函数作为参数吗？（setState接收一个object，只要函数返回了object数据就没问题）
- HoC higher-order component ？
- Fiber
- 不是父子关系的组件如何传递信息
- 改进react？
- react事务系统？
- 在constructor里bind，还是在使用的时候再bind，这两种方法有什么区别？
- 一般在各种事件里，如onChange、onClick里不要使用匿名函数，因为每次update都会重新渲染一个匿名函数进行绑定。（不过我觉得，一般很少会更新这些对应的按钮吧。不更新按钮的话，应该就不会渲染啊。。传给这些函数的参数改变应该也不会影响啊。

### redux
connect 封装了下组件，让它能够读取到store。只有被connect的才能读取到store窝
参数：mapStateToProps，mapDispatchToProps，
得再看看他是怎么封装的先= =。又忘了。
provider 利用了context将store传递给children，使provider里的孩子都能读取到store。
(这里主要是有一个函数，这个函数是获取store，利用context，
然后它啥也没做，直接返回了children，）


###  exports 、module.exports、export 、export default

import 的是read-only，编译时，require是动态运行时，

export 的模块是会一直存在的，不会die。（[tree-shaking](http://2ality.com/2015/12/webpack-tree-shaking.html))


- exports /module.exports /require 是commonJS规范里的
- export 、import、export default 是es6（es2015里的）

> [Node中没搞明白require和import，你会被坑的很惨](http://imweb.io/topic/582293894067ce9726778be9)

> [stackoverflow -解释](https://stackoverflow.com/questions/31354559/using-node-js-require-vs-es6-import-export)

> [解释-知乎](https://www.zhihu.com/question/56820346)

> [exports module.exports](https://cnodejs.org/topic/5231a630101e574521e45ef8)

> [exports 、module.exports、export 、export default](http://www.jianshu.com/p/076f2af97db0)


### babel原理

> [babel转换之后的代码长什么样](https://github.com/lcxfs1991/blog/issues/9)

> [jscodeshift](https://github.com/whxaxes/blog/issues/10)

> [ASTexplorer](http://astexplorer.net/)

- 解析：将代码字符串解析成抽象语法树
- 变换：对抽象语法树进行变换操作
- 再建：根据变换后的抽象语法树再生成代码字符串

(感觉和模板解析很像啊）读懂下边的这个就算完成了= =。顺便可以看下别人写的模板工具

> [the-super-tiny-compiler](https://github.com/thejameskyle/the-super-tiny-compiler/blob/master/the-super-tiny-compiler.js)

> [实现模板引擎](https://github.com/whxaxes/blog/issues/4)

exports、module.exports

文件是模块，还是对象是模块。

> [Node.js模块](http://www.runoob.com/nodejs/nodejs-module-system.html)


### jest + enzyme

> [使用jest+enzyme进行react项目测试 - 测试手法篇](http://echizen.github.io/tech/2017/02-12-jest-enzyme-method)

#### 断言库：
expect().toBe

- expect()

matcher function :toBe()等

- expect.extend(matcher)定义matcher

``` js
expect.extend({
  toBeDivisibleBy(received, argument) {
    const pass = received % argument == 0;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${argument}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be divisible by ${argument}`,
        pass: false,
      };
    }
  },
});

test('even and odd numbers', () => {
  expect(100).toBeDivisibleBy(2);
  expect(101).not.toBeDivisibleBy(2);
});

```

- expect.anything()
- expect.any(contructor)

... 省略一堆

- .resolves

async/await

- .rejects

- .toBe(value) int

Object.is

- .toHaveBeenCalled() -> toBeCalled()
- .toHaveBeenCalledTimes(number)
- .toHaveBeenCalledWidth(arg1,arg2,...) -> toBeCalledWidth()
- .toHaveBeenLastCalledWidth(arg1,arg2,...) -> lastCalledWidth()
- .toBeCloseTo(number,numdigits)
- .toBeDefined()
- .toBeFalsy()
- .toBegreaterThan(number)

... 省略一堆

#### mock function

jest.fn() 创建一个mock function

method：

- mockFn.getMockName()
- mockFn.mock.calls
- mockFn.mock.instances
- mockFn.mockClear()
- mockFn.mockReset()
- mockFn.mockRestore()
- mockFn.mockImplementation(fn)

Note: `jest.fn(implementation)` is a shorthand for `jest.fn().mockImplementation(implementation)`.
- mockFn.mockImplementationOnce(fn)


#### jest object






#### API：
- afterAll(fn)

execute after all test run 

if describe ,after the block test

- afterEach(fn)

excute after every test run 

- beforeAll(fn)

- beforeEach(fn)

- describe(name,fn)

- describe.only(name,fn) -> fdescribe(name,fn)

- describe.skip(name,fn) -> xdescribe(name,fn)

- require.requireActure(moduleName)
- require.requireMock(moduleName)

- test(name,fn) -> it(name,fn)

return promise

```js
test('has lemon in it', () => {
  return fetchBeverageList().then(list => {
    expect(list).toContain('lemon');
  });
});

```

- test.only(name,fn) -> it.only(name,fn) -> fit(name,fn)
- test.skip(name,fn)



#### enzyme API

- shallow rendering(reactWrapper react树结构
- mount rendering（reactWrapper，包含子组件的）
- render rendering （element，



```js

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-15');
var JSDOM = require('jsdom').JSDOM;

const dom = new JSDOM(
  '<body><div></div><textarea></textarea></body>'
);
dom.window.document.querySelector('div').id = 'app';
dom.window.document.querySelector('textarea').id = 'encryption';
dom.window.document.querySelector('textarea').innerText = '&^$360&&**@auto-penetration-test!Slat~~';

global.window = dom.window;
global.document = global.window.document;
global.navigator = global.window.navigator;
console.log(dom.window.document.querySelector('textarea').id)
enzyme.configure({ adapter: new Adapter() });

```


> [difference between render mount/render](https://github.com/airbnb/enzyme/issues/465)


Snapshots有什么作用 = =。
当有不同的输入时 ，就有不同的展示。


### 想法
可以做一个网页播放器吗？
源可不可以爬数据呢？
然后写入一个json文件里
再读取这些文件（那怎么判断播放的进度呢？audio这个元素自带的功能，会去读取音源的总量，以及播放的进度
(html5,css3,node(爬虫,读写文件，可以作为接口返回数据吗？，不过也不需要，写入到json文件就可以了

或者写个桌面软件，读取固定文件夹的文件，（用到的知识会多一个electron）=>比如说slack，vs code，atom。

node-webkit 简称 nw.js，微信小程序的官方开发工具就是用这个写的。

> [electron体验](http://www.zhangxinxu.com/wordpress/2017/05/electron-node-js-desktop-application-experience/)

> [文档](https://electronjs.org/docs)

> [audio体验](https://github.com/whxaxes/blog/issues/8)




### history

api：

`pushState(stateObject, title, url)`
stateObject存储该url对应的状态对象，title：标题（浏览器尚未实现），url
向浏览器的历史堆栈中push一个url以及state，并改变历史堆栈的指针

`replaceState(stateObject, title, url)`
不会改变指针，替换当前url，记录state，（这个state怎么读取= =。）

事件：`onpopState`
前进、后退发生`forward、back、go`，会改变当前指针

`history.length`


> [History API 与浏览器历史堆栈管理](http://web.jobbole.com/87227/)



### 2017前端新技术概览

- 打包工具：webpack、rollup、Parcel
- 浏览器目前已实现的新功能：访问usb设备、通过蓝牙传输数据、分享内容到社交网站
- 新css属性：overscroll-behavior：auto|none|contain
- 浏览器加载模块：不能直接使用es6的import
- webAssembly：以二进制的形式在浏览器中运行|可以以文本形式查看源码|可以将C++代码编译成 WebAssembly
- headless chrome：可以用来UI test|网页截图|爬虫
- a-frame/webvr.js/babylon.js与sprite.js不同
- fastify使用了JSON schema、object pool、100%异步，
- node LTS支持的特性async函数

> [rollup文档](https://rollupjs.org/zh)

> [Parcel文档](http://www.css88.com/doc/parcel/)

> [适用于移动端的新css属性overscroll-behavior](https://segmentfault.com/a/1190000012014962)

> [webAssembly](http://webassembly.org/)

> [用命令行运行google浏览器](https://zhuanlan.zhihu.com/p/29207391)

> [2017前端新技术概览](https://weekly.75team.com/activity/2017game/?from=timeline&isappinstalled=0)



### js解析

> [浏览器](https://www.zybuluo.com/yangfch3/note/671516)

> [nodejs](https://cnodejs.org/topic/55a4b2123ecc81b621bba8c7)

> [浏览器内核](http://www.cnblogs.com/zichi/p/5116764.html)


### 不错的题目

> [手势密码](https://www.h5jun.com/post/75team-star-handlock.html)








