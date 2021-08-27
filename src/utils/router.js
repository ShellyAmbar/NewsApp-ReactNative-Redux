import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import {Home} from '../Views/Screens/HomeScreen';
import ProfileScreen from '../Views/Screens/ProfileScreen';
import LoginScreen from '../Views/Screens/LoginScreen';
import Article from '../Views/Screens/Article';
import CategoryListScreen from '../Views/Screens/CategoryListScreen';
import FavoritesScreen from '../Views/Screens/FavoritesScreen';
import SplashScreen from '../Views/Screens/SplashScreen';

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="CategoryList" component={CategoryListScreen} />
        <Stack.Screen name="Article" component={Article} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export {MyStack};
