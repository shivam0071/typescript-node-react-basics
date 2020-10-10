import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props:any) => {
    
    return(
    <div className={classes.BuildControl}>
        <div>{props.label}</div>
        <button>Less</button>
        <button>More</button>
    </div>
)};

export default buildControl;