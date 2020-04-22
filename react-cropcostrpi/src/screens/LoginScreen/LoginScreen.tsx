import * as React from 'react';
import {userApiLogin} from '../../shared/api/userapi';

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

class LoginScreen extends React.Component<RouteComponentProps, LoginFormState>{
    
    constructor(props: any){
        super(props);
        this.state = {
            username: '',
            real_name: '',
            password: ''
        }
        //this.history = useHistory();
    }

    private async handleSubmit(event: React.FormEvent){
        //let history = useHistory();
        console.log("User Logged in");
        console.log(this.state);
        event.preventDefault();
        if(await userApiLogin(this.state.username, this.state.password)){
            this.props.history.push('/home');
        } else{
            console.log("Login Failed");
        }
        //history.push("/");
        //this.props.history.push('/home');

    }

    render(){
        return(
            <div>
                <div className="d-flex flex-column">
                    <h1 className='text-center'>MyCosts for Crop Production & Farm Tasks</h1>
                    <h3 className='text-center'>Sign In</h3>
                </div>
                <form className='d-flex flex-column col-md-12' onSubmit={(e) =>this.handleSubmit(e)}>
                    <div className='form-group'>
                        <label htmlFor="username">Email:</label>
                        <input type='email' className="form-control" id="username" value={this.state.username} onChange={(event) => this.setState({username: event.target.value})}></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="username">Name:</label>
                        <input type='text' className="form-control" id="username" value={this.state.real_name} onChange={(event) => this.setState({real_name: event.target.value})}></input>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="username">Password:</label>
                        <input type='password' className="form-control" id="username" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}></input>
                    </div>
                    <button type="submit">Sign In</button>
                </form>

            </div>
        );
    }
}

export const LoginScreenWithRouter = withRouter(LoginScreen);

