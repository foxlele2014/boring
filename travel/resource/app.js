import './assets/less/all.less';

import React from 'react';
import ReactDOM from 'react-dom';

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
                </div>
                
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#app'));

