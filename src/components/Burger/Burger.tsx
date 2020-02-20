import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import Ingredient from '../../model/Ingredient';

const Burger = (props: {ingredients: Ingredient[]}) => {
    return (
    <div className = {styles.Burger}>
        <BurgerIngredient type = {Ingredient.breadTop} />
        {props.ingredients.map((ingredient) => (
            <BurgerIngredient type = {ingredient} />
        ))}
        <BurgerIngredient type = {Ingredient.breadBottom} />
    </div>
    );
}

export default Burger;