import './assets/less/all.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Popup from './components/popup';
import BreadCrumbs from './components/breadcrumbs';


class App extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="wrapper">
                <div className="sidebar">test</div>
                <div className="content">
                    <div className="header">test</div>
                    <div className="main-content">test</div>
                    <div className="footer">footer</div>
                    <Popup />
                    <BreadCrumbs />
                </div>
                
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#app'));

