import React, { Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/user/User';
import Questionaire from './pages/questionaire';
import CollegePick from './pages/collegePick';
import Nav from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Home from './pages/collegePick';
import DATA from './utils/API'


const App = () => (

  <Router>
    <Fragment>
      <Nav/>

      <Jumbotron/>


     <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/data" component={DATA}/>

          


    </Switch>
       <Questionaire /> 
       <CollegePick />
          </Fragment>
</Router>
);

export default App;
