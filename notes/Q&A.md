# Q&A

## todolist

1. [x] curry 函数柯里化
2. [x] 观察者模式（发布订阅模式）
3. [x] babel原理
4. [x] promise
5. [x] require
6. [ ] 路由的实现
7. [x] wireshark
8. [ ] 自动化测试（mocha、breakJs、jest）
9. [ ] webpack打包原理、插件编写
10. [x] 前端安全xss、csrf
11. [x] es6的特性
12. [ ] gulp结合webpack
13. [x] 双向数据的绑定的实现原理
14. [ ] canvas、node（数据可视化方面）
15. [ ] css3
16. [ ] 移动端开发
17. [x] 跨域
18. [x] 浅拷贝和深拷贝
19. [x] 正则
20. [ ] websocket
21. [x] js运行时的函数栈(了解js环境的运行栈（= =。究竟什么时候就会不执行栈里边的东西了）

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





### 项目：（思考方向）

- 用了什么技术
- 技术原理
- 框架怎么搭建
- 采取的安全措施


### react：

- state和props
- jsx
- class组件、function组件
- 生命周期函数
- shouldComponentUpdate？
- setState
- 循环里加上key

> [key 理解](http://taobaofed.org/blog/2016/08/24/react-key/)

- setState可以接受函数作为参数吗？
- HoC higher-order component ？
- Fiber
- 不是父子关系的组件如何传递信息
- 改进react？
- react事务系统？

### redux
connect 封装了下组件，让它能够读取到store。只有被connect的才能读取到store窝
参数：mapStateToProps，mapDispatchToProps，
得再看看他是怎么封装的先= =。又忘了。
provider 利用了context将store传递给children，使provider里的孩子都能读取到store。


###  exports 、module.exports、export 、export default

> [exports 、module.exports、export 、export default](http://www.jianshu.com/p/076f2af97db0)


### babel原理

> [babel转换之后的代码长什么样](https://github.com/lcxfs1991/blog/issues/9)

- 解析：将代码字符串解析成抽象语法树
- 变换：对抽象语法树进行变换操作
- 再建：根据变换后的抽象语法树再生成代码字符串

(感觉和模板解析很像啊）读懂下边的这个就算完成了= =。顺便可以看下别人写的模板工具

> [the-super-tiny-compiler](https://github.com/thejameskyle/the-super-tiny-compiler/blob/master/the-super-tiny-compiler.js)

exports、module.exports

文件是模块，还是对象是模块。

> [Node.js模块](http://www.runoob.com/nodejs/nodejs-module-system.html)


### jest + enzyme

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

- shallow rendering



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








