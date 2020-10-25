import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

// just a fancy way of declaring list
const controls = [
    {"label": 'Salad', "type":'salad'},
    {"label": 'Bacon', "type":'bacon'},
    {"label": 'Cheese', "type":'cheese'},
    {"label": 'Meat', "type":'meat'},
];

// in added prop we also send a type which gets called by more button
// Notice how the fuction is called by some inner component but it gets executed in
// BurgerBuilder.tsx module and updates the states there...
// There is no transfer of state data tho (redux doubts) 
const buildControls = (props:any) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {
            controls.map(ctrl =>{
                return <BuildControl key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientsAdded(ctrl.type)} 
                removed={() => props.ingredientsRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
            })}
        <button>ORDER NOW</button>
    </div>
)

export default buildControls;