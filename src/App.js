
 
import react , { Component } from 'react';
import styled from "styled-components";
import { Counter } from './Components';

const Container = styled.div`
        width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    `;
export default class App extends Component() {
  state = {
    total : 0
  }

  getTotal=(num)=>{
    this.setState(prevState => ({total : prevState.total + num}))
  }
  
  render(){
     return (
    <Container>
        <Counter initial={2} total={this.getTotal} />
        <Counter initial={4} />
        <Counter initial={100} />
        <p>total :</p>
    </Container>
  );
  }
}


