import {Button, Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {ReturnToHomepageButton} from "./ReturnToHomepageButton";
import { useTranslation } from 'react-i18next';
import '../i18n';
import {AddRecipesToFavourites} from "./AddRecipeToFavourites";

export function RecipeDetail(props) {

    const {t} = useTranslation();
    const {navigation, mealID} = props;
    const [recipe, setRecipe] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [ingredientsForExport, setIngredientsForExport] = useState("");

    useEffect(() => {
        if (recipe.length !== 0) {
            let createdIngredients = [];
            let i;
            let nameForIndentIngr;
            let nameForIndentMeas;
            let ingredient;
            let ingredientsOneString = "";
            for (i = 1; i < 21; i++) {
                nameForIndentIngr = `strIngredient${i}`;
                nameForIndentMeas = `strMeasure${i}`;
                if (recipe[nameForIndentIngr] !== "" && recipe[nameForIndentIngr] !== null) {
                    //console.log(recipe[nameForIndentIngr]);
                    ingredient = recipe[nameForIndentMeas] + " - " + recipe[nameForIndentIngr];
                    createdIngredients.push(ingredient);
                    ingredientsOneString = ingredientsOneString + ingredient + ", ";
                }
            }
            //console.log(ingredientsOneString);
            setIngredients(createdIngredients);
            setIngredientsForExport(ingredientsOneString);
        }
    }, [recipe]);

    useEffect(() => {
        let url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealID;
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.meals[0]);
                setRecipe(responseJson.meals[0]);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView style={{marginLeft: 8, marginRight: 8}}>

                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{
                        fontSize: 30,
                        padding: 20,
                        paddingBottom: 8,
                        borderBottomWidth: 1,
                        marginBottom: 12
                    }}>{t(recipe.strMeal)}</Text>
                </View>

                <AddRecipesToFavourites mealID={mealID}/>

                <Image
                    style={{width: "100%", height: 200}}
                    source={{
                        uri: recipe.strMealThumb,
                    }}
                />

                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text
                        style={{fontSize: 20, padding: 20, paddingBottom: 8, borderBottomWidth: 3}}>{t('Ingredients')}</Text>
                    <View style={{paddingTop: 8, alignItems: 'center', justifyContent: 'center'}}>
                        {ingredients.map((item, key) => (
                            <Text style={{fontSize: 16}} key={key}>{t(item)}</Text>)
                        )}
                    </View>
                    <Text
                        style={{fontSize: 20, padding: 20, paddingBottom: 8, borderBottomWidth: 3}}>{t('Instructions')}</Text>
                </View>

                <Text style={{fontSize: 16, paddingTop: 8, paddingBottom: 20}}>{t(recipe.strInstructions)}</Text>

                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
                    <View style={{margin: 8}}>
                        <Button color='#225894'
                                title={t('Export recipe to PDF')}
                                onPress={() => {
                                    navigation.navigate(t('Export recipe to PDF'), {
                                        itemId: Math.floor(Math.random() * 100),
                                        strMeal: recipe.strMeal,
                                        strInstructions: recipe.strInstructions,
                                        strIngredients: ingredientsForExport,
                                    });
                                }}
                        />
                    </View>
                    <ReturnToHomepageButton navigation={navigation}/>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}