// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Layout from './components/layout/index.js';
import store from './store.js';

const App =() => {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );
};

console.log(App);

ReactDOM.render(<App />,document.getElementById('app'));
