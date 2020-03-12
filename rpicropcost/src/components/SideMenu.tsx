import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom';
import {LoginPage} from '../pages/LoginPage';
import "./SideMenu.css"

export class SideMenu extends React.Component{
    render(){
        return (
            <Router>
                <div className="sidenav">
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
                
                <hr />

                <Switch>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}