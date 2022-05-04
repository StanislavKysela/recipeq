import {Button, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import {Audio} from 'expo-av';
import {useTranslation} from 'react-i18next';
import '../i18n';

export function ExportPDF(props) {
    const {strMeal, strInstructions, strIngredients} = props;
    const [created, setCreated] = useState("");
    const [sound, setSound] = React.useState();
    const {t} = useTranslation();

    const htmlRecipe = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${strMeal}</title>
            <style>
                body {
                    font-size: 16px;
                }

                h1 {
                    text-align: center;
                }
                h2 {
                    border-bottom: 1px solid;
                    padding-top: 8px;
                    padding-bottom: 8px;
                }
                p {
                    font-weight: normal;
                }
                footer{
                    font-size: 14px;
                    font-style: italic;
                }
            </style>
        </head>
        <body>
            <h1>${t(strMeal)}</h1>
            <h2>${t('Ingredients')}</h2> 
            <p>${t(strIngredients)}</p>
            <h2>${t('Instructions')}</h2> 
            <p>${t(strInstructions)}</p>
            <br>
            <footer>${t('- PDF was generated in Recipeq. The recipe was extracted from TheMealDB.')}</footer>
        </body>
        </html>
    `;

    async function playNotificationSound() {
        const {sound} = await Audio.Sound.createAsync(
            require('../../assets/sounds/notification.mp3')
        );
        setSound(sound);
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    const createAndSavePDF = async (html) => {
        try {
            const {uri} = await Print.printToFileAsync({html});
            if (Platform.OS === "ios") {
                await Sharing.shareAsync(uri);
            } else {
                const permission = await MediaLibrary.requestPermissionsAsync();

                if (permission.granted) {
                    await MediaLibrary.createAssetAsync(uri);
                    await playNotificationSound();
                    setCreated("Created");
                } else {
                    setCreated("No permission");
                }
            }

        } catch (error) {
            setCreated("Error");
            console.log("nevytvorilo PDF");
            console.error(error);
        }
    };

    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Button color='#225894' title={t('Create PDF')} type="submit" onPress={() => createAndSavePDF(htmlRecipe)}/>
            {created === "Created" && <Text style={styles.successMessage}>{t('PDF was successfully created!')}</Text>}
            {created === "No permission" && <Text style={styles.errorMessage}>{t('Please allow us to use device storage.')}</Text>}
            {created === "Error" && <Text style={styles.errorMessage}>{t('There was an error while creating PDF.')}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    errorMessage: {
        color: "red",
        fontSize: 16,
        marginTop: 12,
    },
    successMessage: {
        color: "green",
        fontSize: 16,
        marginTop: 12,
    },
});