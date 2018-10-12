import React, { Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch }from "react-router-dom";
import Form from "./pages/User";
import Nav from "./components/NavBar"
import Jumbotron from "./components/Jumbotron"


const App = () => (
  <Router>
    <Fragment>
      <Nav/>

      <Jumbotron/>


  <Form/>
     {/* <Switch>
          <Route exact path="/User" component={}/>
          <Route exact path="/" component={}/>
          <Route exact path="/user/:id" component={}/>
          <Route  component={}/>


    </Switch>  */}
          </Fragment>
</Router>
);

export default App;
