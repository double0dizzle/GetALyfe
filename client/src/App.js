import React, { Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/user/User';
import Question from './pages/questionaire/questionaire';
import Jumbotron from "./components/Jumbotron"
import Nav from "./components/NavBar"


const App = () => (

  <Router>
    <Fragment>
      <Nav/>

      <Jumbotron/>


     <Switch>
          <Route exact path="/" component={Login}/>
          {/* <Route exact path="/" component={Question}/> */}

    </Switch> 
          </Fragment>
</Router>
);

export default App;
