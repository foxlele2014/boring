import './index.less';
import React from 'react';
import PropTypes from 'prop-types';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            close: false //是否需要出现close按钮
        };
    }

    render() {
        //list还是使用reactnode比较实际
        const { list, placeholder, className } = this.props;
        return (
            <div className="autocomplete-wrapper">
                <div className="input-wrapper">
                    <i className="search icon" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder={placeholder}
                    />
                    <i className="close icon" />
                </div>
                <div className="result-list">{list}</div>
            </div>
        );
    }
}

AutoComplete.PropTypes = {
    list: PropTypes.node,
    placeholder:PropTypes.string
};

export default AutoComplete;
