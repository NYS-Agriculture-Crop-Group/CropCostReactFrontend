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


class MachineInfoScreen extends React.Component<RouteComponentProps>{

    private nav(text: string){
        this.props.history.push(text);
    }

    render(){
        return(
            <div className="d-flex flex-column">
                <form>
                    <div id="top-box-container" className="border m-4 p-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Machine Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="row">
                            <div className="col-md-5 form-group">
                                <label htmlFor="exampleInputEmail1">MPG</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0"/>
                            </div>
                            <div className="col-md-2 d-flex flex-column">
                                <h4 className="text-center">Fuel Use</h4>
                                <h5 className="text-center">Or</h5>
                            </div>
                            <div className="col-md-5 form-group">
                                <label htmlFor="exampleInputEmail1">HP</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row px-4">
                        <div className="col-md-12 form-group">
                            <label htmlFor="exampleInputEmail1">Implement Wagon Machine</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What is this"/>
                        </div>
                    </div>
                    <div className="px-4 d-flex flex-column">
                        <h5 className="row text-center justify-content-center">Hauling Capacity</h5>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="exampleInputEmail1">Amount</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="exampleInputEmail1">Units</label>
                                <select className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0">
                                    <option>Pounds (lbs)</option>
                                    <option>Kilograms (kg)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row px-4">
                        <div className="col-md-12 form-group">
                            <label htmlFor="exampleInputEmail1">Working Width (ft)</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export const MachineInfoScreenWithRouter = withRouter(MachineInfoScreen);

