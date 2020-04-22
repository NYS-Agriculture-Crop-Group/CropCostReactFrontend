import { withFormik, FormikProps } from "formik";
import * as React from 'react';
import * as Yup from "yup";
import {makeMachine} from '../../../shared/api/machineapi'; 
import {APIResponse} from '../../../shared/api/api';
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

interface MachineFormValues{
    name: string;
    efficiency: number;
    efficiencyUnit?: string;
    haulingCapacity: number;
    haulingCapacityUnits?: string;
    workingWidth: number;
    operatingCost: number;
    operatingCostUnits?: ["lbs", "kgs"];
    wagonMachine: string;

    purchaseDate: string;
    purchasePrice: number;
    salvagePrice?: number;
    depriciation?: number;
    paymentsPerYear?: number;
    paymentsTotal?: number;
    interestRate?: number;
    shelter?: number;
    insurance?: number;
}

class MachineInfoScreen extends React.Component<FormikProps<MachineFormValues>>{
    
    
    render(){
        const {
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
        } = this.props;

        return (
            <div className="d-flex flex-column">
                <form onSubmit={handleSubmit}>
                    <div id="top-box-container" className="border m-4 p-4">
                        <div className="form-group">
                            <label htmlFor="name">Machine Name</label>
                            <input name="name"
                                type="text"
                                className="form-control"
                                placeholder="Enter a machine name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="row">
                            <div className="col-md-5 form-group">
                                <label htmlFor="MPG">MPG</label>
                                <input name="efficiency"
                                    type="number"
                                    className="form-control"
                                    placeholder="0"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.efficiency} />
                            </div>
                            <div className="col-md-2 d-flex flex-column">
                                <h4 className="text-center">Fuel Use</h4>
                                <h5 className="text-center">Or</h5>
                            </div>
                            <div className="col-md-5 form-group">
                                <label htmlFor="exampleInputEmail1">HP</label>
                                <input name="efficiency"
                                    type="number"
                                    className="form-control"
                                    placeholder="0"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.efficiency} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row px-4">
                        <div className="col-md-12 form-group">
                            <label htmlFor="ImplementWagonInput">Implement Wagon Machine</label>
                            <input 
                                name="ImplementWagonInput"
                                type="text"
                                className="form-control"
                                placeholder="What is this"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.wagonMachine} />
                        </div>
                    </div>
                    <div className="px-4 d-flex flex-column">
                        <h5 className="row text-center justify-content-center">Hauling Capacity</h5>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label htmlFor="AmountInput">Amount</label>
                                <input 
                                    name="haulingCapacity"
                                    type="number"
                                    className="form-control"
                                    placeholder="0"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.haulingCapacity} />
                            </div>
                            <div className="col-md-6 form-group">
                                <label htmlFor="exampleInputEmail1">Units</label>
                                <select 
                                    name="units"
                                    className="form-control"
                                        placeholder="0"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.haulingCapacityUnits} >
                                    <option value="lbs">Pounds (lbs)</option>
                                    <option value="kgs">Kilograms (kg)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row px-4">
                        <div className="col-md-12 form-group">
                            <label htmlFor="exampleInputEmail1">Working Width (ft)</label>
                            <input 
                                name="workingWidth"
                                type="number"
                                className="form-control"
                                placeholder="0"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.workingWidth} />
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
                            <input 
                                name="operatingCost"
                                type="number"
                                className="form-control"
                                placeholder="$/ac" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.operatingCost}></input>
                        </div>
                    </div>
                    <div className="row px-4">
                        <div className="col-md-6">
                            <div className="row px-4">
                                Per Hour
                            </div>
                        </div>
                        <div className="col-md-6">
                            <input 
                                name="operatingCost"
                                type="number"
                                className="form-control"
                                placeholder="$/hr"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.operatingCost} ></input>
                        </div>
                    </div>
                    <div className = "row px-4 mt-4 text-center justify-content-center">
                        <h5>Enter Specific Fixed Costs</h5>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-date">Purchase Date</label>
                            <input 
                                name="purchaseDate"
                                type="date"
                                className="form-control"
                                placeholder=""
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.purchaseDate} />
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-price">Purchase Price</label>
                            <input 
                                name="p-price"
                                type="number"
                                className="form-control"
                                placeholder=""
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.purchasePrice} />
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-salvage">Salvage Price Estimate</label>
                            <input 
                                name="s-price"
                                type="number"
                                className="form-control"
                                placeholder=""
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.salvagePrice} />
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-dep">Years of Depriciation</label>
                            <input 
                                name="dep-years"
                                type="number"
                                className="form-control"
                                placeholder=""
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.depriciation}/>
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-num-payments-current"># of Payments Per Year</label>
                            <input 
                                name="p-num-payments-current"
                                type="number"
                                className="form-control"
                                placeholder=""
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.paymentsPerYear} />
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-num-payments-total">Total # of Payments</label>
                            <input 
                                name="p-num-payments-total"
                                type="number"
                                className="form-control"
                                placeholder=""
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.paymentsTotal} />
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-interest-rate">Interest Rate</label>
                            <input 
                                type="number"
                                className="form-control"
                                name="p-interest-rate"
                                placeholder=""
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.interestRate} />
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-shelter">Shelter - % of machine value</label>
                            <input 
                                name="p-shelter"
                                type="number"
                                className="form-control"
                                placeholder="1%"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.shelter} />
                        </div>
                    </div>
                    <div className="row px-4 form-group">
                        <div className="col-md-12">
                            <label htmlFor="p-insurance">Insurance - $/1000</label>
                            <input 
                                name="p-insurance"
                                type="number"
                                className="form-control"
                                placeholder=".42"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.insurance} />
                        </div>
                    </div>
                    <div className="row px-4">
                        <button 
                            type="submit"
                            className="btn btn-primary col-md-12"
                            disabled={
                                isSubmitting
                            }
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const MachineInfoScreenWithFormik = withFormik<{}, MachineFormValues>({
    async handleSubmit(
        values: MachineFormValues,
        {props, setSubmitting, setErrors}
    ){
        //make API call
        //handle return value
        //re enable submit value if possible
        console.log(values);
        makeMachine(values)
            .then((result: APIResponse) => {
                //show message saying machine was created
                console.log(result);
                setSubmitting(false);
            })
            .catch((err) => {
                //show error message
                console.log(err);
                setSubmitting(false);
            });
    }
})(MachineInfoScreen);

export default MachineInfoScreenWithFormik;