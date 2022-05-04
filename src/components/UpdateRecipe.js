import {Button, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import {TextInput} from 'react-native';
import {ReturnToHomepageButton} from "./ReturnToHomepageButton";
import {useTranslation} from 'react-i18next';
import '../i18n';

export function UpdateRecipe(props) {
    const {strMeal, strInstructions, strIngredients, navigation} = props;
    const [mealName, setMealName] = useState(strMeal);
    const [mealInstructions, setMealInstructions] = useState(strInstructions);
    const [mealIngredients, setMealIngredients] = useState(strIngredients);
    const {t} = useTranslation();

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView style={{marginLeft: 8, marginRight: 8}}>
                <View>
                    <Text style={styles.categoriesName}>{t('Recipe name')}</Text>
                    <TextInput
                        style={styles.updateCardInput}
                        multiline
                        onChangeText={text => setMealName(text)}
                        value={t(mealName)}
                    />
                    <Text
                        style={styles.categoriesName}>{t('Ingredients')}</Text>
                    <TextInput
                        style={styles.updateCardInput}
                        multiline
                        onChangeText={text => setMealIngredients(text)}
                        value={t(mealIngredients)}
                    />
                    <Text
                        style={styles.categoriesName}>{t('Instructions')}</Text>
                    <TextInput
                        style={styles.updateCardInput}
                        multiline
                        onChangeText={text => setMealInstructions(text)}
                        value={t(mealInstructions)}
                    />
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20}}>
                    <Button
                        color="#225894"
                        title={t('Save changes')}
                        onPress={() => {
                            navigation.navigate(t('Export recipe to PDF'), {
                                itemId: Math.floor(Math.random() * 100),
                                strMeal: mealName,
                                strInstructions: mealInstructions,
                                strIngredients: mealIngredients,
                            });
                        }}
                    />
                    <ReturnToHomepageButton navigation={navigation}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    updateCardInput: {
        backgroundColor: "white",
        padding: 8,
        borderColor: "#e3e3e3",
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
    },
    categoriesName: {
        fontSize: 20,
        padding: 12,
        paddingBottom: 8,
    },
});
