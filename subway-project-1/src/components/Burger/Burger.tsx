import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props:any)=> {
    
    // SIMPLE VERSION of the below Mappings, this is a way of iterating over
    // a object , we just iterate over keys, create an empty array and then
    // map values to that empty array
    // +
    //  REDUCE is like python reduce, we modify the original array
    // Here we have list of lists but what if the inner arrays are all 0
    // we can check and give use a message accordingly such as (ADD INGREDIENTS)
    // So what we do is we flatten the array using reduce
    // reduce takes the accumulator and the currValue and an initial value, here []
    // so we just keep adding the values to this initial value and flatten the list of list

    // Object.keys(props.ingredients).map(igKey => {
    //     return[...Array(props.ingredients[igKey])].map( (_, i) =>{
    //       return igKey
    //     })}).reduce((arr, el) => {
    //       return arr.concat(el)…
    //   Array(6) [ "salad", "bacon", "cheese", "cheese", "meat", "meat" ]

    let transformedIngredients:any = Object.keys(props.ingredients).map(igKey =>{
        return[...Array(props.ingredients[igKey])].map((_ , i) => {
            return <BurgerIngredient key={igKey + i}  type={igKey} />;
        });     
    }).reduce((accumulator, currValue) => {
        return accumulator.concat(currValue)
    },[])
if (transformedIngredients.length === 0){
    transformedIngredients = <p>Please Start Adding Ingredients</p>
}
return(
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
    </div>
);
};

export default burger;