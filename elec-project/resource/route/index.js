import React from 'react';
import {
    BrowserRouter as Router,
    browserHistory,
    Route,
    Link
} from 'react-router-dom';
import { routes } from './routes.js';

/**
 * bundle.js:418 Uncaught Error: A <Router> may have only one child element
 */
const Routers = () => {
    return (
        <Router>
            <React.Fragment>
                {routes.map((opt, i) => {
                    const key = Object.keys(opt)[0];
                    return <Route key={i} path={key} component={opt[key]} />;
                })}
            </React.Fragment>
        </Router>
    );
};

export default Routers;
