import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from '../Views/Screens/HomeScreen';
import ProfileScreen from '../Views/Screens/ProfileScreen';
import LoginScreen from '../Views/Screens/LoginScreen';
import ArticleDetails from '../Views/Screens/ArticleDetails';
import CategoryListScreen from '../Views/Screens/CategoryListScreen';
import FavoritesScreen from '../Views/Screens/FavoritesScreen';
import SplashScreen from '../Views/Screens/SplashScreen';
import Tabs from '../Views/Screens/Tabs';

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CategoryList" component={CategoryListScreen} />
      <Stack.Screen name="ArticleDetails" component={ArticleDetails} />

      {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> 
      <Stack.Screen name="Favorites" component={FavoritesScreen} /> 
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Home" component={HomeScreen} /> */}
    </Stack.Navigator>
  );
};
export default AuthStack;
