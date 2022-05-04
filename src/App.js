import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from "./pages/HomeScreen";
import {RecipeDetailScreen} from "./pages/RecipeDetailScreen";
import {RecipesListScreen} from "./pages/RecipesListScreen";
import {MealCategoriesListScreen} from "./pages/MealCategoriesListScreen";
import {ExportRecipeScreen} from "./pages/ExportRecipeScreen";
import {UpdateRecipeScreen} from "./pages/UpdateRecipeScreen";
import {useTranslation} from 'react-i18next';
import './i18n';
import {FavouriteRecipesScreen} from "./pages/FavouriteRecipesScreen";

const Stack = createStackNavigator();

export default function App() {

  const {t} = useTranslation();

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName={t('Home')}>
        <Stack.Screen name={t('Home')} component={HomeScreen} />
        <Stack.Screen name={t('Recipe Detail')} component={RecipeDetailScreen} />
        <Stack.Screen name={t('Recipes List')} component={RecipesListScreen} />
        <Stack.Screen name={t('Meal Categories')} component={MealCategoriesListScreen} />
        <Stack.Screen name={t('Export recipe to PDF')} component={ExportRecipeScreen} />
        <Stack.Screen name={t('Update recipe')} component={UpdateRecipeScreen} />
        <Stack.Screen name={t('Favourite Recipes')} component={FavouriteRecipesScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
