/*
* @Author: limin
* @Date:   2017-12-29 18:26:50
* @Last Modified by:   limin
* @Last Modified time: 2018-01-18 14:35:00
*/
/**
 * 导航
 */

import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//惊叹下，好多黑盒处理啊，例如这个react-router-dom 的BrowserRouter就已经集成了history
 // import { browserHistory } from 'react-router';
import nav from '../../config/navigation.js';


/**
 * https://stackoverflow.com/questions/36505404/how-to-use-react-router-with-electron
 * Failed to execute 'pushState' on 'History': A history state object with URL 'file:///topic' cannot be created in a document with origin 'null' and URL 'file:///Users/Documents/timeisgone/elec-project/resource/index.html'.
 * Generally speaking, you should use a <BrowserRouter> if you have a server that responds to requests and a <HashRouter> if you are using a static file server.
 */
const Nav = () => {
    return (
        <Router>
            <div>
                <ul>
                    {nav.map((opt, i) => {
                        return (
                            <li key={i}>
                                <Link to={opt.url}>{opt.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Router>
    );
};

export default Nav;
