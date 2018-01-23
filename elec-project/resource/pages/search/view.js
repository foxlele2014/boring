import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    searchWord() {}
    getNotes() {}
    getRelation() {}
    addToNotes() {}

    render() {
        return (
            <div className="search-wrapper">
                <div className="search-header">
                    <input type="text" className="search-input" />
                    <i className="search icon" />
                    <i className="close icon" />
                </div>
                <div className="result-list">
                    <ul>
                        <li>aaa v.aaa</li>
                    </ul>
                </div>
                <div className="search-content" />
                <div className="search-tools" />
            </div>
        );
    }
}

export default connect(({ search }) => ({
    search
}))(Search);
