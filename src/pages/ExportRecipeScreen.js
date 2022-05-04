import React from "react";
import {ExportRecipe} from "../components/ExportRecipe";

export function ExportRecipeScreen({route, navigation}) {
    const {strMeal, strInstructions, strIngredients} = route.params;

    return (
        <ExportRecipe strMeal = {strMeal} strInstructions={strInstructions} strIngredients={strIngredients} navigation = {navigation}/>
    );
}