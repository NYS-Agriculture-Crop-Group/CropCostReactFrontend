import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    withRouter,
    RouteComponentProps
  } from "react-router-dom";


interface LoginFormState{
    username: string;
    real_name: string;
    password: string;
}

class HomeScreen extends React.Component<RouteComponentProps, LoginFormState>{

    private nav(text: string){
        this.props.history.push(text);
    }

    render(){
        return(
            <div>
                <div className="d-flex flex-column">
                    <h1 className='text-center'>Home</h1>
                </div>
                <div className="col-md-12">
                    <div className="row d-flex align-items-center justify-content-center">
                        <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/info')}>Enter Info</button>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/reports')}>Reports</button>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/records')}>View Records</button>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/datatrans')}>Data Transfer</button>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/instruct')}>Instructions</button>
                    </div>
                </div>

            </div>
        );
    }
}

export const HomeScreenWithRouter = withRouter(HomeScreen);

