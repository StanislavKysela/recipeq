import React from "react";
import {RecipeDetail} from "../components/RecipeDetail";

export function RecipeDetailScreen({route, navigation}) {

    const { itemId, mealID } = route.params;

    return (
        <RecipeDetail navigation = {navigation} mealID = {mealID}/>
    );
}