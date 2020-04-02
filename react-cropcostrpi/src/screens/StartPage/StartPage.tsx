import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./StartPage.css"

interface props{
    navigation: any;
}

export class StartScreen extends React.Component{
    render(){
        return(
            <div>
                <div className='d-flex flex-column align-items-center'> 
                    <h1 className='text-center'>MyCosts for Crop Production & Farm Tasks</h1>
                    <div className="text-container">
                        <p>ASDASDASDASD</p>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center btn-group-vertical container' role="group">
                    <Link to="/login" className='btn btn-warning mt-1'>Log In</Link>
                    <Link to="/signup" className='btn btn-warning mt-1'>Create Account</Link>
                    <Link to="/explore" className='btn btn-warning mt-1'>Explore Information</Link>
                </div>

            </div>

        )
    }
}