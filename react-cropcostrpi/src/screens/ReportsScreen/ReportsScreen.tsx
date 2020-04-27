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

import {MachineryReportScreenWithRouter} from './MachineryReportScreen/MachineryReportScreen'

class ReportScreen extends React.Component<RouteComponentProps>{
    constructor(props: RouteComponentProps){
        super(props);
        console.log(this.props.location.pathname);
    }
    private nav(text: string){
        this.props.history.push(text);
    }

    render(){
        return(
            <div>
                <div className="d-flex flex-column">
                    <h1 className='text-center'>Reports</h1>
                </div>
                <Switch>
                    <Route exact path={this.props.match.url}>
                        <div className="col-md-12">
                            <div className="row d-flex align-items-center justify-content-center">
                                <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/croprotreport')}>Crop Rotation & Acreage</button>
                            </div>
                            <div className="row d-flex align-items-center justify-content-center">
                                <button className="btn btn-warning w-25 m-1" onClick={() => this.nav(`${this.props.location.pathname}/fieldperationreport`)}>Field Operations Costs</button>
                            </div>
                            <div className="row d-flex align-items-center justify-content-center">
                                <button className="btn btn-warning w-25 m-1" onClick={() => this.nav(`${this.props.location.pathname}/machineryreport`)}>Machinery Costs</button>
                            </div>
                            <div className="row d-flex align-items-center justify-content-center">
                                <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/cropcostreport')}>Crop Costs</button>
                            </div>
                            <div className="row d-flex align-items-center justify-content-center">
                                <button className="btn btn-warning w-25 m-1" onClick={() => this.nav('/fsareport')}>FSA Acreage Report</button>
                            </div>
                            <div className="row d-flex align-items-center justify-content-center">
                                <p>More to come...</p>
                            </div>
                        </div>
                    </Route>
                    <Route path={`${this.props.match.url}/machineryreport`}>
                        <MachineryReportScreenWithRouter/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export const ReportScreenWithRouter = withRouter(ReportScreen);

