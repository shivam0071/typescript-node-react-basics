import React from 'react';
import './Counter.css';

class Counter extends React.Component{

    constructor(){
        super();
        this.state= {
        counter : 0
        }

        this.changeCounter = this.changeCounter.bind(this);

    }

    changeCounter(event){
            
        let data = parseInt(event.target.value);
        let state_copy = {...this.state, counter: this.state.counter + data};
        this.setState(
            state_copy
        )
        console.log(state_copy);
    }

    render(){
        return(
            <div className="Counter">
            <h2>COUNTER</h2>
            <p>{this.state.counter}</p>
            <button onClick={this.changeCounter} value="1"> ADD 1</button>
            <button onClick={this.changeCounter} value="10"> ADD 10</button>
            <button onClick={this.changeCounter} value="-1"> SUB 1</button>
            <button onClick={this.changeCounter} value="-5"> SUB 5</button>
            </div>

            
        );
    }
}

export default Counter;