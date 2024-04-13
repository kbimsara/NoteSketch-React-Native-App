import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomePage from './src/pages/HomePage';
import ViewNotePage from './src/pages/ViewNotePage';
import EditPage from './src/pages/EditPage';
import LoginPage from './src/pages/LoginPage';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    // <Home />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ViewNotePage" component={ViewNotePage} />
        <Stack.Screen name="EditPage" component={EditPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}