webpackJsonp([1],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(8);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _popup = __webpack_require__(18);

var _popup2 = _interopRequireDefault(_popup);

var _breadcrumbs = __webpack_require__(35);

var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'sidebar' },
                    'test'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'header' },
                        'test'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'main-content' },
                        'test'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer' },
                        'footer'
                    ),
                    _react2.default.createElement(_popup2.default, null),
                    _react2.default.createElement(_breadcrumbs2.default, null)
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('#app'));

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Author: limin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Date:   2017-12-28 15:41:57
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified by:   limin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @Last Modified time: 2017-12-28 16:02:07
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/**
 * 
 */

var defaultProps = {
    parent: [{
        name: 'first',
        url: 'www.baidu.com',
        content: ''
    }, {
        name: 'second',
        url: 'www.so.com',
        content: '' //自定义内容支持dom
    }],
    current: {
        name: 'aaa',
        content: ''
    }
};

var BreadCrumbs = function (_React$Component) {
    _inherits(BreadCrumbs, _React$Component);

    function BreadCrumbs(props) {
        _classCallCheck(this, BreadCrumbs);

        var _this = _possibleConstructorReturn(this, (BreadCrumbs.__proto__ || Object.getPrototypeOf(BreadCrumbs)).call(this, props));

        _this.state = {};

        _this.breadList = Object.assign(defaultProps.parent, props.parent);
        _this.current = props.current;
        return _this;
    }

    _createClass(BreadCrumbs, [{
        key: 'render',
        value: function render() {
            console.log(this.current ? this.current.content ? _react2.default.createElement(
                'li',
                null,
                this.current.content
            ) : _react2.default.createElement(
                'li',
                null,
                this.current.name
            ) : null);
            return _react2.default.createElement(
                'div',
                { className: '' },
                _react2.default.createElement(
                    'ul',
                    null,
                    this.breadList.map(function (opt, i) {
                        var text = opt.content ? _react2.default.createElement(
                            'li',
                            null,
                            opt.content,
                            _react2.default.createElement(
                                'i',
                                null,
                                '/'
                            )
                        ) : _react2.default.createElement(
                            'li',
                            { key: i },
                            _react2.default.createElement(
                                'a',
                                { href: opt.url },
                                opt.name
                            ),
                            _react2.default.createElement(
                                'i',
                                null,
                                '/'
                            )
                        );

                        return text;
                    }),
                    this.current ? this.current.content ? _react2.default.createElement(
                        'li',
                        null,
                        this.current.content
                    ) : _react2.default.createElement(
                        'li',
                        null,
                        this.current.name
                    ) : null
                )
            );
        }
    }]);

    return BreadCrumbs;
}(_react2.default.Component);

exports.default = BreadCrumbs;

/***/ })

},[19]);