import { withFormik, FormikProps } from "formik";
import * as React from 'react';
import * as Yup from "yup";
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
        purchase_date: string;
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

const MachineForm = (props: FormikProps<MachineFormValues>) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = props;

    return (
        <div className="d-flex flex-column">
        <form onSubmit={handleSubmit}>
            <div id="top-box-container" className="border m-4 p-4">
                <div className="form-group">
                    <label htmlFor="motorizedMachinery">Machine Name</label>
                    <input name="motorizedMachinery"
                           type="text"
                           className="form-control"
                           placeholder="Enter a machine name"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.motorizedMachinery || ""} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="row">
                    <div className="col-md-5 form-group">
                        <label htmlFor="MPG">MPG</label>
                        <input name="MPG"
                               type="number"
                               className="form-control"
                               placeholder="0"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.mpg} />
                    </div>
                    <div className="col-md-2 d-flex flex-column">
                        <h4 className="text-center">Fuel Use</h4>
                        <h5 className="text-center">Or</h5>
                    </div>
                    <div className="col-md-5 form-group">
                        <label htmlFor="exampleInputEmail1">HP</label>
                        <input name="hp"
                               type="number"
                               className="form-control"
                               placeholder="0"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.mpg} />
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
                           value={values.implement_wagon_machine} />
                </div>
            </div>
            <div className="px-4 d-flex flex-column">
                <h5 className="row text-center justify-content-center">Hauling Capacity</h5>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label htmlFor="AmountInput">Amount</label>
                        <input 
                            name="amount"
                            type="number"
                               className="form-control"
                               placeholder="0"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.amount} />
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="exampleInputEmail1">Units</label>
                        <select 
                            name="units"
                            className="form-control"
                                placeholder="0"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.units} >
                            <option>Pounds (lbs)</option>
                            <option>Kilograms (kg)</option>
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
                           value={values.working_width} />
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
                        name="acres"
                        type="number"
                           className="form-control"
                           placeholder="$/ac" 
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.operating_costs?.per_acre}></input>
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
                        name="hours"
                        type="number"
                           className="form-control"
                           placeholder="$/hr"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.operating_costs?.per_hour} ></input>
                </div>
            </div>
            <div className = "row px-4 mt-4 text-center justify-content-center">
                <h5>Enter Specific Fixed Costs</h5>
            </div>
            <div className="row px-4 form-group">
                <div className="col-md-12">
                    <label htmlFor="p-date">Purchase Date</label>
                    <input 
                        name="pdate"
                        type="date"
                           className="form-control"
                           placeholder=""
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.fixed_costs?.purchase_date} />
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
                           value={values.fixed_costs?.purchase_price} />
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
                           value={values.fixed_costs?.salvage_price} />
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
                           value={values.fixed_costs?.purchase_price} />
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
                           value={values.fixed_costs?.depriciation_years}/>
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
                           value={values.fixed_costs?.payments_per_year} />
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
                           value={values.fixed_costs?.total_payments} />
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
                        value={values.fixed_costs?.interest_rate} />
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
                           value={values.fixed_costs?.shelter} />
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
                           value={values.fixed_costs?.insurance} />
                </div>
            </div>
            <div className="row px-4 form-group">
                <div className="col-md-12">
                    <label htmlFor="p-notes">Notes</label>
                    <input 
                        name="p-notes"
                        type="text"
                           className="form-control"
                           placeholder="1%"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.fixed_costs?.notes} />
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

const MachineInfoScreen = withFormik<{}, MachineFormValues>({
    handleSubmit(
        values: MachineFormValues,
        {props, setSubmitting, setErrors}
    ){
        //make API call
        //handle return value
        //re enable submit value if possible
        console.log(values);
    }
})(MachineForm);

export default MachineInfoScreen;