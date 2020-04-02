import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    withRouter,
    RouteComponentProps,
    useRouteMatch
  } from "react-router-dom";


class EnterInfoScreen extends React.Component<RouteComponentProps>{

    private nav(text: string){
        this.props.history.push(text);
    }

    render(){
        return(
            <div>
                <div className="d-flex flex-column">
                    <h1 className='text-center'>Enter Information</h1>
                </div>
                <div className="col-md-12">
                    <div className="row d-flex align-items-center justify-content-center">
                        <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/info')}>Field Operation</button>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/reports')}>Machinery Info</button>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/records')}>Field Information</button>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/datatrans')}>Personnel/Cust. Hire</button>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/instruct')}>Instructions</button>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center">
                        <p>More to come...</p>
                    </div>
                </div>
            </div>
        );
    }
}

export const EnterInfoScreenWithRouter = withRouter(EnterInfoScreen);

