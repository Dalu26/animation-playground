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
import { NavigationContainer } from '@react-navigation/native';
import List from './src/screens/transition_screens/List'
import Details from './src/screens/transition_screens/Details'
import Biometrics from './src/screens/Biometrics'
enableScreens()

const Stack = createSharedElementStackNavigator()

const App = () => {

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='List' screenOptions={{headerShown: false}}  >
    //     <Stack.Screen name='List' component={List} />
    //     <Stack.Screen name='Details' component={Details} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Biometrics />
  );
};


export default App;
