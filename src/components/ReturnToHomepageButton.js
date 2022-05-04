import {Button, View} from "react-native";
import React from "react";
import { useTranslation } from 'react-i18next';
import '../i18n';

export function ReturnToHomepageButton(params){

    const {navigation} = params;
    const {t} = useTranslation();

    return(
        <View style={{margin: 12}}>
            <Button color='#707070'
                    title={t('Return to Homepage')}
                    onPress={() => navigation.navigate(t('Home'))}
            />
        </View>
    );
}