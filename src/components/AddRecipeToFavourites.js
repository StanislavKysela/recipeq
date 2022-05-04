import {Button, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useTranslation} from 'react-i18next';
import '../i18n';
import AsyncStorage from "@react-native-async-storage/async-storage";

export function AddRecipesToFavourites(props) {

    const [favouriteRecipes, setFavouriteRecipes] = useState([]);
    const {t} = useTranslation();
    const {mealID} = props;
    const [favourite, setFavourite] = useState(-1);
    const [updatedFavourite, setUpdatedFavourite] = useState(false);

    useEffect(() => {
        getFavouriteRecipesData();
    }, []);

    const getFavouriteRecipesData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favourites_Key')
            if (jsonValue !== null) {
                const returnedValue = (JSON.parse(jsonValue));
                setFavouriteRecipes(returnedValue);
                console.log(returnedValue);
                for (let i = 0; i < returnedValue.length; i++) {
                    if (returnedValue[i] === mealID) {
                        setFavourite(i);
                        break;
                    }
                }
            }
        } catch (e) {
            console.error(error);
        }
    }

    const changeData = function () {
        let favArr = favouriteRecipes;
        if (favourite === -1) {
            console.log("pridalo");
            favArr.push(mealID);
            setFavouriteRecipes(favArr);
            setUpdatedFavourite(true);
            console.log(favArr);
            storeData(favArr);

        } else {
            console.log("odobralo");
            favArr.splice(favourite, 1);
            setFavouriteRecipes(favArr);
            setUpdatedFavourite(true);
            console.log(favArr);
            storeData(favArr);
        }
    }

    const storeData = async (data) => {
        try {
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem('@favourites_Key', jsonValue)
        } catch (e) {
            console.error(error);
        }
    }


    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            {updatedFavourite === false && favourite === -1 && <View style={{marginBottom: 12}}><Button color='#225894' title={t('Mark as favourite')} type="submit" onPress={() => changeData()}/></View>}
            {updatedFavourite === false && favourite !== -1 && <View style={{marginBottom: 12}}><Button color='#225894' title={t('Remove from favourite')} type="submit" onPress={() => changeData()}/></View>}
            {updatedFavourite === true && favourite === -1 && <Text style={{fontSize: 16, color: 'green', marginBottom: 12}}>{t('Recipe was marked as Favourite!')}</Text>}
            {updatedFavourite === true && favourite !== -1 && <Text style={{fontSize: 16, color: 'green', marginBottom: 12}}>{t('Recipe was removed from Favourite.')}</Text>}
        </View>
    );
}