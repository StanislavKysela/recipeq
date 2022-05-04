import {SafeAreaView, Button, Text, ScrollView, View} from "react-native";
import React, {useEffect, useState} from "react";
import {RecipeCard} from "./RecipeCard";
import {GoToCategoriesButton} from "./GoToCategoriesButton";
import {useTranslation} from 'react-i18next';
import '../i18n';

export function Home(props) {

    const {navigation} = props;
    const {t} = useTranslation();
    const [randomRecipe, setRandomRecipe] = useState([]);

    useEffect(() => {
        let url = 'https://www.themealdb.com/api/json/v1/1/random.php';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.meals[0]);
                setRandomRecipe(responseJson.meals[0]);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView style={{width: "100%"}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 30, paddingTop: 20, paddingBottom: 20}}>{t('Welcome to Recipeq!')}</Text>
                    <Text style={{fontSize: 22, padding: 12}}>{t('Search in meal categories')}</Text>
                    <GoToCategoriesButton navigation={navigation}/>
                    <View style={{marginTop: 12}}>
                        <Button color='#225894'
                                title={t('Go to Favourite Recipes')}
                                onPress={() =>
                                    navigation.navigate(t('Favourite Recipes'))}
                        />
                    </View>
                    <Text style={{fontSize: 22, padding: 12}}>{t('Or try for example')}</Text>
                    <RecipeCard meal={randomRecipe} navigation={navigation}/>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}