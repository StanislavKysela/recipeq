import {Button, SafeAreaView, ScrollView, View} from "react-native";
import React, {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RecipeCard} from "../components/RecipeCard";
import {useTranslation} from 'react-i18next';
import '../i18n';

export function FavouriteRecipesScreen({navigation}) {

    const [favouriteRecipes, setFavouriteRecipes] = useState([]);
    const [viewRecipes, setViewRecipes] = useState(false);
    const {t} = useTranslation();

    useEffect(() => {
        getData();
    }, []);

    const toggleView = function () {
        setViewRecipes(true);
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favourites_Key')

            if (jsonValue !== null) {
                const value = JSON.parse(jsonValue)

                for (let i = 0; i < value.length; i++) {
                    let url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + value[i];
                    fetch(url)
                        .then((response) => response.json())
                        .then((responseJson) => {
                            let favArr = favouriteRecipes;
                            favArr.push(responseJson.meals[0]);
                            setFavouriteRecipes(favArr);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }
            }
        } catch (e) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView style={{width: "100%"}}>
                {viewRecipes === false &&
                <Button color='#225894' title={t('View Favourite Recipes')} type="submit"
                        onPress={() => toggleView()}/>}
                {viewRecipes === true && favouriteRecipes.map((meal, id) => (
                        <View key={id}>
                            <RecipeCard meal={meal} navigation={navigation}/>
                        </View>
                    )
                )}

            </ScrollView>
        </SafeAreaView>
    );
}