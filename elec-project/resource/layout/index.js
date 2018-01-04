/*
* @Author: limin
* @Date:   2017-12-29 18:24:27
* @Last Modified by:   limin
* @Last Modified time: 2017-12-29 18:31:02
*/

/**
 * 
 */

import React from 'react';
import Nav from './route';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="layout-wrapper">
                <Nav />
                <div className=""></div>
            </div>
        )
    }
}