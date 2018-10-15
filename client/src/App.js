import React, { Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch }from "react-router-dom";
import Form from "./pages/user/User";
import Nav from "./components/NavBar"
import Jumbotron from "./components/Jumbotron"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/user/User';
import Questionaire from './pages/questionaire';
import CollegePick from './pages/collegePick';


const App = () => (

  <Router>
    <Fragment>
      <Nav/>

      <Jumbotron/>


     <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/" component={Form}/>
          <Route  component={Nav}/> */}


    </Switch>
       <Questionaire /> 
       <CollegePick />
          </Fragment>
</Router>
);

export default App;
