import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AutoComplete from '@components/AutoComplete';
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
                    <AutoComplete />
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
