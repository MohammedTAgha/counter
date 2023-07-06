import React, { Component } from "react";
import styled from "styled-components";

export default class Counter extends Component {
    state = {
        myCount : this.props.initial
    }
    
    componentDidMount(){
        
    }
    increment =()=>{
        
        this.setState((prevState) =>{
            return {
                myCount: prevState.myCount + 1
               
            };
  
        })
    }
    

  render() {
    const Container = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 190px;
      font-weight:700;
    `;

    return <Container>
        <button onClick={this.increment}>
            +
        </button>
        <p>
            {this.state.myCount}
        </p>
        <button>
            -
        </button>
    </Container>;
  }
}
