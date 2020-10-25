import React,{Component, Fragment} from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES:any = {
    salad: 0.5,
    cheese:0.4,
    meat: 1.3,
    bacon:0.7
}

class BurgerBuilder extends Component<any>{

    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4
    }

    // Two ways of doing the same thing...in add and remove notice one is taking the ordiginal value
    // while remove is manipulating the copy
    addIngredientHandler = (type:any) => {
        // Update the count
        // const {ingredients} = this.state.ingredients[]; // This gives an error
        // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type

        const {ingredients}:any = this.state;   // A workaround
        const updatedCount = ingredients[type] + 1;
        ingredients[type] = updatedCount;
        
        // Update the Price of the burger
        const newPrice = INGREDIENT_PRICES[type] + this.state.totalPrice

        // Updating the current state using set state
        this.setState({totalPrice:newPrice, ingredients});

    }

    
    removeIngredientHandler = (type:string) => {
        const ingredientsData:any = {...this.state.ingredients};
        const oldCount = ingredientsData[type];
        if (oldCount > 0){
            const updatedCount = oldCount - 1;
            ingredientsData[type] = updatedCount;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({totalPrice:newPrice, ingredients:ingredientsData});
        }

    }

    render(){
        const disableInfo:any = {...this.state.ingredients};
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        return(
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientsAdded={this.addIngredientHandler}
                ingredientsRemoved={this.removeIngredientHandler}
                disabled={disableInfo}
                price={this.state.totalPrice}
                />
                
            </Fragment>
        );
    }
}

export default BurgerBuilder;