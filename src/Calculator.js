import React, { Component } from 'react';


class Calculator extends Component {
    constructor(props) {
        super();
        this.state = {
            result: 0,
            num1: "",
            num2: ""
        }

    }
    
    handleFirstNum = e => {
        this.setState({
            num1: Number.parseInt(e.target.value)
        })
    }
    handleSecondNum = e => {
        this.setState({
            num2: Number.parseInt(e.target.value)
        })
    }
    
    add = () =>{
       this.setState({
           result: this.state.num1 + this.state.num2
       })
    }
    subtract = () =>{
       this.setState({
           result: this.state.num1 - this.state.num2
       })
    }
    multiply = () =>{
       this.setState({
           result: this.state.num1 * this.state.num2
       })
    }
    divide = () =>{
       this.setState({
           result: this.state.num1 / this.state.num2
       })
    }
    clear = () =>{
       this.setState({
           result: 0,
           num1: "",
           num2: ""
       })
    }
    
    render() {
        const {result, num1, num2} = this.state
        
        return (
            <div>
                <h1>Result: {result}</h1>
                <input onChange={this.handleFirstNum} value={num1} placeholder='First number'/>
                <input onChange={this.handleSecondNum} value={num2} placeholder='Second number'/>
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
                <button onClick={this.clear}>clear</button>
            </div>
        );
    }
}


export default Calculator;