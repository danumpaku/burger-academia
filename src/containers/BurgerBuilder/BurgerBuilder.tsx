import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import Ingredient from '../../model/Ingredient';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            Ingredient.bacon,
            Ingredient.cheese,
            Ingredient.meat,
            Ingredient.cheese,
            Ingredient.meat,
            Ingredient.salad,
        ].sort(),
        prices: {
            breadBottom: 0,
            breadTop: 0,
            seeds1: 0,
            seeds2: 0,
            bacon: 2,
            cheese: 1,
            meat: 3,
            salad: 1
        }
    };

    getTotal = () => this.state.ingredients.reduce<number>((total, ig) => total + this.state.prices[ig], 0);

    addIngredientHandler = (index: number, ingredient: Ingredient) => {

        var ingredients: Ingredient [];
        ingredients = [...this.state.ingredients.slice(0, index), ingredient, ...this.state.ingredients.slice(index)].sort();
        this.setState({ingredients: ingredients});
    };

    addLastIngredientHandler = (ingredient: Ingredient) => {
        this.addIngredientHandler(this.state.ingredients.length, ingredient);
    }

    removeLastIngredientHandler = (ingredient: Ingredient) => {
        var idx = this.state.ingredients.findIndex(ig => ig === ingredient);
        if (idx !== -1)
            this.removeIngredientHandler(idx, ingredient);
        
    }


    removeIngredientHandler = (index: number, ingredient: Ingredient) => {
        var ingredients: Ingredient [];
        ingredients = [...this.state.ingredients.slice(0, index), ...this.state.ingredients.slice(index + 1)].sort();
        this.setState({ingredients: ingredients});
    };

    render () {
        return (
            <Fragment>
                <Burger ingredients = {this.state.ingredients} />
                <p>Total: {this.getTotal()}</p>
                <BuildControls addIngredient={this.addLastIngredientHandler} removeIngredient={this.removeLastIngredientHandler}/>
                <Modal></Modal>
            </Fragment>
        );
    };

};


export default BurgerBuilder;