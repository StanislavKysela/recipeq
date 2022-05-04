import {Text, View, SafeAreaView, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import {RecipeCard} from "./RecipeCard";
import { useTranslation } from 'react-i18next';
import '../i18n';

export function RecipesList(props) {

    const {strCategory, navigation} = props;
    const [recipesList, setRecipesList] = useState([]);
    const {t} = useTranslation();

    useEffect(() => {
        let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + strCategory;
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.meals);
                setRecipesList(responseJson.meals);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ScrollView style={{width: "100%"}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30, padding: 20, paddingBottom: 8, borderBottomWidth: 1, marginBottom: 12}}>{t(strCategory)} {t('meals')}</Text>
            </View>
            {recipesList.map((meal, id) => (
                    <View key={id}>
                        <RecipeCard meal={meal} navigation={navigation}/>
                    </View>
                )
            )}
        </ScrollView>
        </SafeAreaView>
    );
}