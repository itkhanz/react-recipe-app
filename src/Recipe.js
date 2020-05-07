import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h2>Ingredients:</h2>            
            <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <h3><span>Calories: {calories}</span></h3>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
};

export default Recipe;