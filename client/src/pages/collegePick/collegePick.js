import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleText" sm={2}>College Pick #1</Label>
          <Col sm={5}>
            <Input type="textarea" name="College Pick #1" id="Collegename1" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>College Pick #2</Label>
          <Col sm={5}>
            <Input type="textarea" name="College Pick #2" id="Collegename2" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>College Pick #3</Label>
          <Col sm={5}>
            <Input type="textarea" name="College Pick #3" id="Collegename3" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>College Pick #4</Label>
          <Col sm={5}>
            <Input type="textarea" name="College Pick #4" id="Collegename4" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>College Pick #5</Label>
          <Col sm={5}>
            <Input type="textarea" name="College Pick #5" id="Collegename5" />
          </Col>
        </FormGroup>
        
        
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button id="submit-matrix">Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}