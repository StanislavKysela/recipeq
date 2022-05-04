import {Button, SafeAreaView, ScrollView, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import Constants from 'expo-constants';
import {MealCategoriesList} from "../components/MealCategoriesList";

export function MealCategoriesListScreen({navigation}) {

    // const [mealCategories, setMealCategories] = useState([]);
    //
    // useEffect(() => {
    //     fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             console.log(responseJson.meals);
    //             setMealCategories(responseJson.meals);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);


    return (
        <MealCategoriesList navigation = {navigation}/>
    );
}