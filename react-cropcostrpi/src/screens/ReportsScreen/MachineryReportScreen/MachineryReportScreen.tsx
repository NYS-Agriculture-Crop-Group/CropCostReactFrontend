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

import {getMachines} from "../../../shared/api/machineapi";

interface MachineReportState{
    report_name: string,
    year: number,
    machines: Array<any>
}

export class MachineryReportScreen extends React.Component<RouteComponentProps, MachineReportState>{
    //private machines = [];
    constructor(props: RouteComponentProps){
        super(props);
        console.log(this.props.location.pathname);
        this.state = {
            report_name: "",
            year: 0,
            machines: []
        }
        //this.setState({machines: []});
        getMachines()
        .then((machines) => {
            console.log(machines);
            this.setState({machines: machines});
        })
    }

    private nav(text: string){
        this.props.history.push(text);
    }

    private onSubmit(clickEvent: React.MouseEvent){
        clickEvent.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <div className="d-flex flex-column">
                    <h1 className='text-center'>Machinery</h1>
                </div>
                <form>
                    <div className="d-flex flex-column">
                        <label>Report Name</label>
                        <input type="text" value={this.state.report_name} onChange={(name) => this.setState({report_name: name.currentTarget.value})}></input>
                        <label>Year</label>
                        <input type="date" value={this.state.year} onChange={(name) => this.setState({report_name: name.currentTarget.value})}></input>
                        <label>Machine To Report</label>
                        <select onChange={(name) => this.setState({report_name: name.currentTarget.value})}>
                            {this.state.machines.map(machine => (
                                <option>{machine.name}</option>
                            ))}
                        </select>
                        <button type="submit" onClick={(click) => this.onSubmit(click)}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export const MachineryReportScreenWithRouter = withRouter(MachineryReportScreen);

