import React from 'react';
import styles from './BuildControl.module.css';
import Ingredient from '../../../model/Ingredient';

const BuildControl = (props: {
    ingredient: Ingredient; 
    addIngredient: (ingredient: Ingredient) => void; 
    removeIngredient: (ingredient: Ingredient) => void; 
}) => 
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.ingredient}</div>
        <button className={styles.Less} onClick={()=>props.removeIngredient(props.ingredient)}>-</button>
        <button className={styles.More} onClick={()=>props.addIngredient(props.ingredient)}>+</button>
    </div>
;

export default BuildControl;