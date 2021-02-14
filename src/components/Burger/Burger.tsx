import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import Ingredient from '../../model/Ingredient';

const Burger = (props: {ingredients: Ingredient[]}) => {

    const getKey = (idx: number, ingredients: Ingredient[]) => {
        
        var ingredient = ingredients[idx];
        var count = 1;

        for (var i = 0; i < idx; i++) {
            if (ingredients[i] === ingredient)
                count++;
        }

        return 'ig' + ingredient + '_' + count;
    };

    return (
    <div className = {styles.Burger}>
        <BurgerIngredient type = {Ingredient.breadTop} />
        {
            props.ingredients.length !== 0 
            ?
                props.ingredients.map((ingredient, idx, ingredients) => (
                    <BurgerIngredient type = {ingredient} key = {getKey(idx, ingredients)} />
                ))
            :
                <p>Por favor agrega ingredientes</p>

        }
        <BurgerIngredient type = {Ingredient.breadBottom} />
    </div>
    );
}

export default Burger;