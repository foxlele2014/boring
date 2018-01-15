import './assets/less/all.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Popup from './components/popup';

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }

        this.increasement  = this.increasement.bind(this);
    }

    increasement() {
        this.setState(()=> {
            return {count:this.state.count+1}
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="sidebar">test</div>
                <div className="content">
                    <div className="header">test</div>
                    <div className="main-content">
                        <button onClick={this.increasement}>+</button>
                        <button>-</button>
                        <span>{this.state.count}</span>
                    </div>
                    <div className="footer">footer</div>
                    <Popup />
                </div>
                
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#app'));

