import {SafeAreaView, ScrollView, View} from "react-native";
import React, {useEffect, useState} from "react";
import {MealCategoryCard} from "./MealCategoryCard";

export function MealCategoriesList(props) {

    const {navigation} = props;
    const [mealCategories, setMealCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.meals);
                setMealCategories(responseJson.meals);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    return (
        <SafeAreaView
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView style={{width: "100%"}}>
                {mealCategories.map((mealCategory, id) => (
                        <View key={id}>
                        <MealCategoryCard strCategory = {mealCategory.strCategory} navigation = {navigation}/>
                        </View>
                    )
                )}
            </ScrollView>
        </SafeAreaView>
    );
}