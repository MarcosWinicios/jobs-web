import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Jobs from './pages/jobs';
const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Jobs} path="/" exact />
        </BrowserRouter>
    );
}

export default Routes;