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

interface MachineFormState{
    motorizedMachinery?: string;
    mpg?: number;
    hp?: number;
    implement_wagon_machine?: string;
    amount?: number;
    units?: "lbs" | "kgs";
    working_width?: number;
    operating_costs?: {
        per_acre: number,
        per_hour: number
    };
    fixed_costs?: {
        purchase_date: Date;
        purchase_price: number;
        salvage_price: number;
        depriciation_years: number;
        payments_per_year: number;
        total_payments: number;
        interest_rate: number;
        shelter: number;
        insurance: number;
        notes: string;
    }
}

class MachineInfoScreen extends React.Component<RouteComponentProps, MachineFormState>{
   
    public state: MachineFormState = {};

    private nav(text: string){
        this.props.history.push(text);
    }

    public handleChange(e: React.FormEvent<HTMLInputElement>){
        const {name, value} = e.currentTarget;
        const n = name as keyof MachineFormState;
        this.setState({
            [n]: value
        });
    }

    private handleSubmit(e: React.MouseEvent<HTMLButtonElement>){
        console.log(this.state);
        e.stopPropagation();
        e.preventDefault();
    }

    render(){
        return(
            <div className="d-flex flex-column">
                <form>
                    <div id="top-box-container" className="border m-4 p-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Machine Name</label>
                            <input name="motorizedMachinery" type="email" className="form-control" value={this.state.motorizedMachinery} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a machine name" onChange={(e) => this.handleChange(e)}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="row">
                            <div className="col-md-5 form-group">
                                <label htmlFor="exampleInputEmail1">MPG</label>
                                <input name="mpg" type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" value={this.state.mpg} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className="col-md-2 d-flex flex-column">
                                <h4 className="text-center">Fuel Use</h4>
                                <h5 className="text-center">Or</h5>
                            </div>
                            <div className="col-md-5 form-group">
                                <label htmlFor="exampleInputEmail1">HP</label>
                                <input name="hp" type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" value={this.state.hp} onChange={(e) => this.handleChange(e)}/>
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
                    <div className="row px-4">
                        <div className="col-md-12">
                            Operating Cost
                        </div>
                    </div>
                    <div className="row px-4">
                        <div className="col-md-6">
                            <div className="row px-4">
                                Per acre
                            </div>
                            <div className="row px-4">
                                OR
                            </div>
                        </div>
                        <div className="col-md-6">
                            <input type="number" className="form-control" id="OpCostPerAcre" placeholder="$/ac"></input>
                        </div>
                    </div>
                    <div className="row px-4">
                        <div className="col-md-6">
                            <div className="row px-4">
                                Per Hour
                            </div>
                        </div>
                        <div className="col-md-6">
                            <input type="number" className="form-control" id="OpCostPerHour" placeholder="$/hr"></input>
                        </div>
                    </div>
                    <div className = "row px-4 mt-4 text-center justify-content-center">
                        <h5>Enter Specific Fixed Costs</h5>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-date">Purchase Date</label>
                            <input type="date" className="form-control" id="p-date" aria-describedby="p-date" placeholder=""/>
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-price">Purchase Price</label>
                            <input type="number" className="form-control" id="p-price" aria-describedby="p-price" placeholder=""/>
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-salvage">Salvage Price Estimate</label>
                            <input type="number" className="form-control" id="p-price" aria-describedby="p-salvage" placeholder=""/>
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-price">Purchase Price</label>
                            <input type="number" className="form-control" id="p-price" aria-describedby="p-price" placeholder=""/>
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-dep">Years of Depriciation</label>
                            <input type="number" className="form-control" id="p-dep" aria-describedby="p-dep" placeholder=""/>
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-num-payments-current"># of Payments Per Year</label>
                            <input type="number" className="form-control" id="p-num-payments" aria-describedby="p-num-payments" placeholder=""/>
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-num-payments-total">Total # of Payments</label>
                            <input type="number" className="form-control" id="p-num-payments-total" aria-describedby="p-num-payments-total" placeholder=""/>
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-interest-rate">Interest Rate</label>
                            <input type="number" className="form-control" id="p-interest-rate" aria-describedby="p-interest-rate" placeholder=""/>
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-shelter">Shelter - % of machine value</label>
                            <input type="number" className="form-control" id="p-shelter" aria-describedby="p-shelter" placeholder="1%"/>
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-insurance">Insurance - $/1000</label>
                            <input type="number" className="form-control" id="p-insurance" aria-describedby="p-insurance" placeholder=".42"/>
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-notes">Notes</label>
                            <input type="string" className="form-control" id="p-notes" aria-describedby="p-notes" placeholder="1%"/>
                        </div>
                    </div>
                    <div className="row px-4">
                        <button type="button" className="btn btn-primary col-md-12" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export const MachineInfoScreenWithRouter = withRouter(MachineInfoScreen);

