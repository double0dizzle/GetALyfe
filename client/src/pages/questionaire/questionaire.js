import React from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

// export default class Example extends React.Component {
//   render() {
//     return (
//       <ButtonToolbar>
//         <ButtonGroup>
//           <Button>1</Button>
//           <Button>2</Button>
//           <Button>3</Button>
//           <Button>4</Button>
//         </ButtonGroup>
//         <ButtonGroup>
//           <Button>5</Button>
//           <Button>6</Button>
//           <Button>7</Button>
//         </ButtonGroup>
//         <ButtonGroup>
//           <Button>8</Button>
//         </ButtonGroup>
//       </ButtonToolbar>
//     );
//   }
// }

export default class Example extends React.Component {
    constructor(props) {
      super(props);
  
      //this.ButtonToolbar = this.ButtonToolbar.bind(this);
      this.state = {
        collapsed: true
      };
    }
  
    ButtonToolbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
    render() {
        return (
            <div>
                <br /> 
                <br /> 
            <ButtonToolbar>
              <ButtonGroup>
              <p>How important is tuition to you?</p>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
                <Button>5</Button>
              </ButtonGroup>
              </ButtonToolbar>
              <br />
              <br />           
           

     <ButtonToolbar>
      <ButtonGroup>
      <p>How important is the admission rate and selectiveness of your program?</p>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
      </ButtonGroup>
      </ButtonToolbar>
       <br /> 
       <br /> 

      <ButtonToolbar>
      <ButtonGroup>
      <p>What is your SAT score?</p>
      {`  `}     
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
                <Button>5</Button>
              </ButtonGroup>
              </ButtonToolbar>
              <br />
              <br /> 
              

              <ButtonToolbar>
              <ButtonGroup>
              <p>What is your ACT score?</p>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
                <Button>5</Button>
              </ButtonGroup>
              </ButtonToolbar>
              <br />
              <br /> 
              

              <ButtonToolbar>
              <ButtonGroup>
              <p>Earnings after 6 years of graduations?</p>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
                <Button>5</Button>
              </ButtonGroup>
              </ButtonToolbar>
              <br />
              <br /> 
              

              <ButtonToolbar>
              <ButtonGroup>
              <p>How important is debt after graduation?</p>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
                <Button>5</Button>
              </ButtonGroup>
              </ButtonToolbar>
              <br />
              <br /> 
              

              <ButtonToolbar>
              <ButtonGroup>
              <p>How important is proximity?</p>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
                <Button>5</Button>
              </ButtonGroup>
              </ButtonToolbar>
              </div>

              
      
            
            
          );
        }
      }

      
