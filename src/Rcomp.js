import React from "react";
import style from './Recipe.css';
import { useState } from "react";
// import RecipePage from './RecipePage';
import './Recipe.css'
import { Link } from "react-router-dom";
const Recipe = ({ title, calories, image, ingredients, source, url, dietLabels, healthLabels, cuisineType }) => {
    const recipeData = {
        title1: title,
        calories1: calories,
        // image1: image,
        ingredients1: ingredients,
        source: source,
        url: url,
        dietLabels: dietLabels,
        healthLabels: healthLabels,
        cuisineType: cuisineType
    };

    // Serialize the object into a string
    const serializedData = JSON.stringify(recipeData)
    return (
        <>
            <div className="">
                <div class="mainbox bg-success-subtle">
                    <div class="mainbox_form">
                        <img src={image} />
                        <span>{title}</span>
                    </div>
                    <div class="mainbox_data">
                        <div style={{display:"flex"}} class="data">
                            <div class="text">
                                {/* <label class="text_m">Main Title</label> */}
                                <div class="cube text_s bg-success-subtle">
                                    <label class="side front">{cuisineType}</label>
                                    <label class="side top">{dietLabels}</label>
                                </div>
                            </div>
                        </div>
                        <Link to={`/recipepage/${encodeURIComponent(serializedData)}/${encodeURIComponent(image)}`}>Open</Link>
                    </div>
                </div>
            </div>
        </>

);

}
export default Recipe;

{/* <a href={`recipepage/${image}`}>
<button>Open</button>
</a> */}
{/* <Link to={`/recipepage/${encodeURIComponent(serializedData)/${encodeURIComponent(image1)}}`}>Open</Link> */ }
{/* <p>Calories : {cuisineType}</p> */ }
{/* <div className={style.recipe}>
    <h1>{title}</h1>
    <ol>
        {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
        ))}
    </ol>

    <p>Calories : {calories}</p>

    <img className={style.image} src={image} alt="" />
    <Link to={`/recipepage/${encodeURIComponent(serializedData)}/${encodeURIComponent(image)}`}>Open</Link>

</div> */}