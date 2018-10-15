import React, {Component}from "react";
import API from "../../utils/API";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';





 export default class Login extends React.Component {
  
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",

    password: "",
    newUsername: "",
    userPassword:""

  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ username: "", password: "" });
    if (this.state.username && this.state.password) {
      API.saveUser({
        username: this.state.username,
        password: this.state.password,
      })
        .then(res => this.loadUser())
        .catch(err => console.log(err));
    }


  };

  render() {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="username" className="mr-sm-2">username/email</Label>
          <Input
           type="text"
           name="username"
            value={this.state.username}
             onChange={this.handleInputChange}
              placeholder="username" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="password" className="mr-sm-2">Password</Label>
          <Input 
          type="password"
           name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
             placeholder="Password" />
        </FormGroup>
        <Button onClick={this.handleFormSubmit}>Submit</Button>
      </Form>
    );
  }
}


