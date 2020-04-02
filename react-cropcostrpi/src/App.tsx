import React from 'react';
import {StartScreen} from './screens/StartPage/StartPage';
import {LoginScreenWithRouter} from './screens/LoginScreen/LoginScreen';
import {HomeScreenWithRouter} from './screens/HomeScreen/HomeScreen';
import {NavBar} from './shared/components/topbar/NavBar'
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import './App.css';
import { EnterInfoScreenWithRouter } from './screens/EnterInfoScreen/EnterInfoScreen';



function App() {
  return (
    <Router>
      <NavBar/>

      <Switch>
        <Route exact path="/"><StartScreen/></Route>
        <Route path='/login'><LoginScreenWithRouter/></Route>
        <Route path='/home'><HomeScreenWithRouter/></Route>
        <Route path='/info'><EnterInfoScreenWithRouter/></Route>
      </Switch>
    </Router>
  );
}

export default App;
