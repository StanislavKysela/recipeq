import {Button, Text, View, Image, SafeAreaView, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import {RecipesList} from "../components/RecipesList";

export function RecipesListScreen({route, navigation}) {

    const {itemId, strCategory} = route.params;

    return (
        <RecipesList strCategory={strCategory} navigation={navigation}/>
    );
}