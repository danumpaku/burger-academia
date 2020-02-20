import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import Ingredient from '../../model/Ingredient';

class BurgerBuilder extends Component {


    render () {
        return (
            <Fragment>
            <div>Burguer</div>
            <div>Build Controls</div>
            
            <Burger ingredients = {[
                Ingredient.bacon,
                Ingredient.cheese,
                Ingredient.meat,
                Ingredient.cheese,
                Ingredient.meat,
                Ingredient.salad,
            ]}/>
            
            </Fragment>
        );
    }

}


export default BurgerBuilder;