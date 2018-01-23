import React from 'react';
import {
    Router,
    Route,
    Link
} from 'react-router';
import createHistory from 'history/createHashHistory';

import { routes } from './routes.js';

/**
 * bundle.js:418 Uncaught Error: A <Router> may have only one child element
 */
const Routers = () => {
    return (
        <Router history={createHistory}>
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
