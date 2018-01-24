/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(1);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = dll;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(66);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reducers = exports.model = exports.routes = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * 每个页面的路由自己配置，不在统一的文件里边修改增加。
                                                                                                                                                                                                     * 如在pages/index/index.js
                                                                                                                                                                                                     * 增加index.js 用来配置路由，
                                                                                                                                                                                                     * 这个可以连同路由，modal,reducer，action,component一起配置
                                                                                                                                                                                                     * 使用node的fs来读取文件，所以可以使用babel的预处理（在编译过程期间完成）
                                                                                                                                                                                                     */

//TODO 预处理 、读取

/**
  * key:value
    [{route:component}]
  */


var Home = function Home() {
    return _react2.default.createElement(
        "div",
        { className: "test" },
        "Home"
    );
};

var About = function About() {
    return _react2.default.createElement(
        "div",
        { className: "about" },
        "About"
    );
};

var Topic = function Topic() {
    return _react2.default.createElement(
        "div",
        { className: "topic" },
        "topic"
    );
};

var routes = exports.routes = [{
    '/': Home
}, {
    '/about': About
}, {
    '/topic': Topic
}];

/**
 * store
 */

var model = exports.model = {
    home: {
        test: '111'
    },
    about: {
        test: '222'
    },
    topic: {
        test: '333'
    }
};

/**
 *
 */

var reducers = exports.reducers = function reducers() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : model;
    var action = arguments[1];

    switch (action.type) {
        case 'test':
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        case 'ddd':
            return Object.assign({}, state, {
                todos: [].concat(_toConsumableArray(state.todos), [{
                    text: action.text,
                    completed: false
                }])
            });
        default:
            return state;
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(6);

var _layout = __webpack_require__(7);

var _layout2 = _interopRequireDefault(_layout);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store2.default },
        _react2.default.createElement(_layout2.default, null)
    );
}; // This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(57);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(99);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _route = __webpack_require__(8);

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Author: limin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Date:   2017-12-29 18:24:27
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified by:   limin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified time: 2018-01-23 14:40:06
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout(props) {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return _react2.default.createElement(
                'div',
                { className: 'layout-wrapper' },
                _react2.default.createElement(_route2.default, null)
            );
        }
    }]);

    return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _nav = __webpack_require__(9);

var _nav2 = _interopRequireDefault(_nav);

var _routes = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * bundle.js:418 Uncaught Error: A <Router> may have only one child element
 */
var Routers = function Routers() {
    return _react2.default.createElement(
        _reactRouterDom.HashRouter,
        null,
        _react2.default.createElement(
            _react2.default.Fragment,
            null,
            _react2.default.createElement(_nav2.default, null),
            _routes.routes.map(function (opt, i) {
                var key = Object.keys(opt)[0];
                console.log(key, opt[key]);
                return _react2.default.createElement(_reactRouterDom.Route, { key: i, path: key, component: opt[key] });
            })
        )
    );
};

/**
 * 1.不共用router，history会不一样吗？会导致创建了两个history吗？
 * 2.route里的match匹配到的,hash的这种怎么匹配。它也是去读取原来component里的props，并不是页面上看见的
 * 但是现在他不会去渲染component,是因为const定义的不会提升，导致component是undefined了。
 * 3.现在又有一个问题了，它不会去更新。去掉Switch之后它点击之后会变化了，但是第一个它一直在
 * 4.为什么会出现这种情况呢？这时候它的默认是哪个？是第一个？那点击其他，渲染的时候，第一个不会unmount吗？
 * 
 */

exports.default = Routers;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _navigation = __webpack_require__(10);

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Author: limin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Date:   2017-12-29 18:26:50
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified by:   limin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified time: 2018-01-23 14:56:25
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * 导航
 */

//惊叹下，好多黑盒处理啊，例如这个react-router-dom 的BrowserRouter就已经集成了history
// import { browserHistory } from 'react-router';


/**
 * https://stackoverflow.com/questions/36505404/how-to-use-react-router-with-electron
 * Failed to execute 'pushState' on 'History': A history state object with URL 'file:///topic' cannot be created in a document with origin 'null' and URL 'file:///Users/Documents/timeisgone/elec-project/resource/index.html'.
 * Generally speaking, you should use a <BrowserRouter> if you have a server that responds to requests and a <HashRouter> if you are using a static file server.
 */

var Nav = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav(props) {
        _classCallCheck(this, Nav);

        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Nav, [{
        key: 'renderChildren',
        value: function renderChildren() {
            return _navigation2.default.map(function (opt, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: opt.url, replace: true },
                        opt.name
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.HashRouter,
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'ul',
                        null,
                        this.renderChildren()
                    )
                )
            );
        }
    }]);

    return Nav;
}(_react2.default.Component);
/**
 * li
 * Consider adding an error boundary to your tree to customize error handling behavior.
 * 找了好久的一个错误，是因为electron不支持browerhistory,然后就不打算用react-router-dom了。但是我
 * 没注意看，原来react-router是没有Link这个组件的。。。。导致一直说是undefined。。。。
 * 
 */

/**
 * link 的使用依赖router，他需要通过this.context.router来获取到history，里边有点击事件，会使用history.replae 或者history.push
 * 但是link是只做两件事，替换location,做history的存储操作
 * 还有一个NavLink，加了是否active的判断
 */

/**
 * Hash history cannot PUSH the same path; a new entry will not be added to the history stack
 *
 * 连续两次点击同一个url
 * https://github.com/ReactTraining/react-router/issues/4467
 */


exports.default = Nav;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 配置导航链接以及对应的名称（最后还是需要这个东西）
 */

exports.default = [{
    url: '/',
    name: 'HOME'
}, {
    url: '/about',
    name: 'ABOUT'
}, {
    url: '/topic',
    name: 'TOPIC'
}];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _redux = __webpack_require__(12);

var _routes = __webpack_require__(3);

/*
* @Author: limin
* @Date:   2017-12-29 18:25:18
* @Last Modified by:   limin
* @Last Modified time: 2017-12-29 18:26:43
*/

/**
 * 使用redux将各个页面的store组织成一个
 * 一个更大的state
    感也可以每个模块自己配置自己需要的，然后再export出来，再统一放到store里来管理
    感觉这个文件也可以不需要了。
    */
var store = void 0;

store = (0, _redux.createStore)(_routes.reducers, _routes.model);

exports.default = store;

/**
 * Warning: Failed prop type: The prop `store.subscribe` is marked as required in `Provider`, but its value is `undefined`.
    in Provider (created by App)
    in App
*/
// export default {
//     about: {
//         test: false
//     },
//     topic: {
//         test2: 'aaa'
//     },
//     home: {
//         test: 1
//     }
// };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(45);

/***/ })
/******/ ]);