# 说明

记录package.json里用到的package，使用它有什么作用。

- babel-preset-react，babel的option的preset，用来解析react
- babel-preset-env ，用来解析es6
- babel-plugin-transform-runtime ，可以引入babel-polyfill，然后解析一些如Object.assign，Array.prototype.find之类的，（用到的才会引用），babel-runtime的自动化版本
- babel-polyfill，全局有效
- babel-runtime,这三个有点类似，按需引入（手动）
- babel-plugin-syntax-dynamic-import ，可以使用import()
- babel-plugin-preval ，用来预编译，编译时执行代码
- [babel-plugin-transform-object-rest-spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread)
- cross-env,兼容各平台（windows、Linux等 )NODE_ENV=development ,Run scripts that set and use environment variables across platforms
- cross-spawn,A cross platform solution to node's spawn and spawnSync.
- [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)只加载引用的内容的代码
- [identity-obj-proxy](https://github.com/keyanzhang/identity-obj-proxy)CSS Modules等
- fs-extra
- ansi-styles
- majo
- ejs