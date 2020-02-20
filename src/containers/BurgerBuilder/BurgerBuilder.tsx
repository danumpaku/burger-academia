import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import Ingredient from '../../model/Ingredient';

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            Ingredient.bacon,
            Ingredient.cheese,
            Ingredient.meat,
            Ingredient.cheese,
            Ingredient.meat,
            Ingredient.salad,
        ]
    };


    render () {
        return (
            <Fragment>
                <div>Build Controls</div>
                < Burger ingredients = {this.state.ingredients}/>
            </Fragment>
        );
    }

}


export default BurgerBuilder;