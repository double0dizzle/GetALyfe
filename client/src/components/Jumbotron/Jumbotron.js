import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, } from 'reactstrap';


const Jumbotron = (props) => {
  return (
    <div>
      <h1>GetALyfe</h1>
      <Card>
        <CardImg top width="10%" src="http://dubeat.com/wp-content/uploads/3_idiots_screen_3_720-735x400.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>Let us decide what you want to do ;)</CardText>
         
        </CardBody>
      </Card>
    </div>
  );
};

export default Jumbotron;