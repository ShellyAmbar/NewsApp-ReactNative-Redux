import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import HomeScreen from '../Views/Screens/HomeScreen';
import ProfileScreen from '../Views/Screens/ProfileScreen';
import ArticleDetails from '../Views/Screens/ArticleDetails';
import CategoryListScreen from '../Views/Screens/CategoryListScreen';
import FavoritesScreen from '../Views/Screens/FavoritesScreen';
import SplashScreen from '../Views/Screens/SplashScreen';
import Tabs from '../Views/Screens/Tabs';
import NewsflashScreen from '../Views/Screens/NewsflashScreen';

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="CategoryList" component={CategoryListScreen} />
      <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Newsflash" component={NewsflashScreen} /> */}
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
    </Stack.Navigator>
  );
};
export {MainStack};
