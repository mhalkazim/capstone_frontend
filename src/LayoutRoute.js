import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header.js';
import Footer from "./Footer.js";
import MUIHeader from './MUIHeader.js';
import LoggedInHeader from './LoggedInHeader.js';

function LayoutRoute(props){
    return(
        <React.Fragment>
            <Header />
            <Route path={props.path} exact={props.exact} component={props.component} />
            <Footer />
        </React.Fragment>
    )
}

export default LayoutRoute;