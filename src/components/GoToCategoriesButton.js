import {Button} from "react-native";
import React from "react";
import { useTranslation } from 'react-i18next';
import '../i18n';

export function GoToCategoriesButton(props) {

    const {navigation} = props;
    const {t} = useTranslation();

    return (
        <Button color='#225894'
            title={t('Go to the meal categories')}
            onPress={() => navigation.navigate(t('Meal Categories'))}
        />
    );
}