import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";
import {ExportPDF} from "./ExportPDF";
import {ReturnToHomepageButton} from "./ReturnToHomepageButton";
import {useTranslation} from 'react-i18next';
import '../i18n';

export function ExportRecipe(params) {
    const {strMeal, strInstructions, strIngredients, navigation} = params;
    const {t} = useTranslation();

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{
                fontSize: 30,
                padding: 20,
                paddingBottom: 8,
                borderBottomWidth: 1,
                marginBottom: 12
            }}>{t('Export')} {t(strMeal)} {t('to PDF')}</Text>

            <View style={styles.card}>
                <Text style={{
                    fontSize: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 8
                }}>{t('If you want, you can edit the content of the recipe.')}</Text>

                <Button color='#225894'
                        title={t('Rewrite recipe')}
                        onPress={() => {
                            navigation.navigate(t('Update recipe'), {
                                itemId: Math.floor(Math.random() * 100),
                                strMeal: strMeal,
                                strInstructions: strInstructions,
                                strIngredients: strIngredients,
                            });
                        }}
                />
            </View>

            <View style={styles.card}>
                <Text style={{
                    fontSize: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 8
                }}>{t('If you are satisfied with the recipe, export it to PDF.')}</Text>

                <ExportPDF strMeal={strMeal} strInstructions={strInstructions} strIngredients={strIngredients}/>
            </View>
            <ReturnToHomepageButton navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 12,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#e3e3e3",
        borderWidth: 1,
        borderRadius: 8,
    },
});