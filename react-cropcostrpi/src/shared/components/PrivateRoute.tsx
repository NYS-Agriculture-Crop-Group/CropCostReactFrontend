import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import history from '../../context/history';


interface ProtectedRouteProps extends RouteProps {
    authenticated: string | null;
}

class ProtectedRoute extends Route<ProtectedRouteProps> {
    componentDidMount() {
        if(!this.props.authenticated){
            history.push("/login");
        }
    }
}