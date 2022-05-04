import {Text, View, Image, StyleSheet, Pressable} from "react-native";
import React from "react";
import { useTranslation } from 'react-i18next';
import '../i18n';

export function RecipeCard(props) {

    const {meal, navigation} = props;
    const {t} = useTranslation();

    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                navigation.navigate(t('Recipe Detail'), {
                    itemId: Math.floor(Math.random() * 100),
                    mealID: meal.idMeal,
                });
            }}>
                <Text style={{fontSize: 20, margin: 12}}>{t(meal.strMeal)}</Text>
            </Pressable>
            <Image
                style={{width: "100%", height: 200}}
                source={{
                    uri: meal.strMealThumb,
                }}
            />
            <Pressable style={{alignItems: 'center'}} onPress={() => {
                navigation.navigate(t('Recipe Detail'), {
                    itemId: Math.floor(Math.random() * 100),
                    mealID: meal.idMeal,
                });
            }}>
                <Text style={{fontSize: 15, margin: 8, fontStyle: 'italic'}}>{t('Show me more')}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "95%",
        backgroundColor: "white",
        flex: 1,
        padding: 8,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#e3e3e3",
        borderWidth: 1,
        borderRadius: 8,
    },
});