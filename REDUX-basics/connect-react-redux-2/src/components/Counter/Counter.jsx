import React from 'react';
import './Counter.css';

import {connect} from 'react-redux';

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
            {/* <p>{this.state.counter}</p> */}
            <p>{this.props.ctr}</p>
            <button onClick={() => this.props.onIncrementCounter(1)} value="1"> ADD 1</button>
            <button onClick={() => this.props.onIncrementCounter(10)} value="10"> ADD 10</button>
            <button onClick={() => this.props.onIncrementCounter(-1)} value="-1"> SUB 1</button>
            <button onClick={() => this.props.onIncrementCounter(-5)} value="-5"> SUB 5</button>
            </div>

            
        );
    }
}


// What state we want from central store
const mapStateToProps = state => {
    return{
        ctr:state.counter
    };
};

// what actions we want to dispatch on the states which updates the central store
const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: (val) => dispatch({type:'INCREMENT', buttVal:val}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// HERE we can pass which states we want in this container AND
// which actions do we need to perform 


// OLD
// const mapDispatchToProps = dispatch =>{
    // return {
        // onIncrementCounter: (val) => dispatch({type:'INCREMENT', buttVal:val}),
        // onIncrementTen: () => dispatch({type:'INCREMENT10', val:10}),
        // onDecrementOne: () => dispatch({type:'DECREMENT1', val :-1}),
        // onDecrementFive: () => dispatch({type:'DECREMENT10', val:-10})
    // };
// };