import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props:any) => {
    
    return(
    <div className={classes.BuildControl}>
        <div>{props.label}</div>
        <button onClick={props.removed} disabled={props.disabled}>Less</button>
        <button onClick={props.added}>More</button>
    </div>
)};

export default buildControl;