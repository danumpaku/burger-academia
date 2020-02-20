import React from 'react';
import styles from './BurgerIngredient.module.css';
import Ingredient from '../../../model/Ingredient';

const BurgerIngredient = (props: {type: Ingredient}) => {

    var ingredientComp: JSX.Element | null;
    ingredientComp = null;

    switch (props.type) {
        case (Ingredient.breadBottom):
            ingredientComp = 
                <div className={styles.BreadBottom}/>;
            break;
        case (Ingredient.breadTop):
            ingredientComp = 
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}/>
                    <div className={styles.Seeds2}/>
                </div>;
            break;
        case (Ingredient.meat):
            ingredientComp = 
                <div className={styles.Meat}/>;
            break;
        case (Ingredient.cheese):
            ingredientComp = 
                <div className={styles.Cheese}/>;
            break;
        case (Ingredient.salad):
            ingredientComp = 
                <div className={styles.Salad}/>;
            break;
        case (Ingredient.bacon):
            ingredientComp = 
                <div className={styles.Bacon}/>;
            break;
    }

    return ingredientComp;
}

export default BurgerIngredient;