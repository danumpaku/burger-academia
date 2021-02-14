import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import Ingredient from '../../model/Ingredient';

const BuildControls = (props: { 
    addIngredient: (ingredient: Ingredient) => void;
    removeIngredient: (ingredient: Ingredient) => void;
}) => {
    return (
    <div className = {styles.BuildControls}>
        {Object.values(Ingredient).map((ingredient) => {
            if (! [Ingredient.breadTop, Ingredient.breadBottom, Ingredient.seeds1, Ingredient.seeds2].includes(ingredient))
                return <BuildControl key={ingredient} ingredient={ingredient} addIngredient={props.addIngredient} removeIngredient={props.removeIngredient}/>;
            return null;
        })}
        <button className={styles.OrderButton}>ORDENAR</button>
    </div>
);
    };

export default BuildControls;