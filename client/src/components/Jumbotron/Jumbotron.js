import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, } from 'reactstrap';

const Jumbotron = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="10%" src="" alt="Card image cap" />
        <CardBody>
          <CardTitle>GetALyfe</CardTitle>
          <CardSubtitle>Get-A-Lyfe</CardSubtitle>
          <CardText>Let us decide what you want to do ;)</CardText>
         
        </CardBody>
      </Card>
    </div>
  );
};

export default Jumbotron;