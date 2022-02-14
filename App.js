/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer, DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native';
import List from './src/screens/transition_screens/List'
import Details from './src/screens/transition_screens/Details'
import Biometrics from './src/screens/Biometrics'
enableScreens()

const Stack = createSharedElementStackNavigator()

const App = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      headerTextColor: '#000'
    },
  };

  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      headerTextColor: '#FFF'
    }
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator 
          initialRouteName='Biometrics' 
          screenOptions={{headerShown: false}}  
        >
        <Stack.Screen name='Biometrics' component={Biometrics} />
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
