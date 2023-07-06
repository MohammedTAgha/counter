
 
import React , { Component } from 'react';
import styled from "styled-components";
import { Counter } from './Components';

const Container = styled.div`
      
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    `;
    class App extends Component {
  state = {
    total : 0
  }

  getTotal=(num)=>{
    this.setState((prevState) => ({
      total: prevState.total + num,
    })
    
    )
  }
  
  render(){
     return (
    <Container>
        <Counter initial={2} getTotal={this.getTotal} />
        <Counter initial={4} getTotal={this.getTotal}/>
        <Counter initial={10} getTotal={this.getTotal}/>
        <p>total : {this.state.total}</p>
    </Container>
  );
  }
}

export default App;


