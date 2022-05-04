import React from "react";
import {UpdateRecipe} from "../components/UpdateRecipe";

export function UpdateRecipeScreen({route, navigation}) {
    const {strMeal, strInstructions, strIngredients} = route.params;

    return (
        <UpdateRecipe strMeal = {strMeal} strInstructions={strInstructions} strIngredients={strIngredients} navigation={navigation}/>
    );
}