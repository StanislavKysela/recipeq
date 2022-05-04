import { Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import { useTranslation } from 'react-i18next';
import '../i18n';

export function MealCategoryCard(props) {

    const {navigation, strCategory} = props;
    const {t} = useTranslation();

    return (

            <Pressable onPress={() => {
                navigation.navigate(t('Recipes List'), {
                    itemId: Math.floor(Math.random() * 100),
                    strCategory: strCategory,
                });
            }}>
                <View style={styles.container}>
                <Text style={{fontSize: 20}}>{t(strCategory)}</Text>
                </View>
                </Pressable>

    );
}

const styles = StyleSheet.create({
    container: {
        width: "95%",
        flex: 1,
        padding: 12,
        marginLeft: 8,
        marginTop: 12,
        marginBottom: 0,
        justifyContent: 'center',
        borderColor: "#d9d9d9",
        borderWidth: 1,
        borderRadius: 8,
    },
});