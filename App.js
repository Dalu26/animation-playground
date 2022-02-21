import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer, DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import List from './src/screens/transition_screens/List'
import Details from './src/screens/transition_screens/Details'
import Biometrics from './src/screens/Biometrics'
import Barcode from './src/screens/Barcode'
import PushNotifications from './src/screens/PushNotifications'
enableScreens()

const Stack = createSharedElementStackNavigator()

const App = () => {

  // const handleDynamicLink = link => {
  //   // Handle dynamic link inside your own application
  //   if (link.url === 'https://invertase.io/offer') {
  //     // ...navigate to your offers screen
  //   }
  // };
  // React.useEffect(async () => {
  //   let url = await dynamicLinks.links().getInitialLink();
  //   console.log('incoming url', url)
  // }, [])

  // React.useEffect(() => {
  //   const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
  //   // When the component is unmounted, remove the listener
  //   return () => unsubscribe();
  // }, []);

  React.useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        if (link?.url === 'https://invertase.io/offer') {
          // ...set initial route as offers screen
        }
        if(link?.url){
          console.log(link.url, 'link')
        }
      });
  }, []);

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
          initialRouteName='Push' 
          screenOptions={{headerShown: false}}  
        >
        <Stack.Screen name='Push' component={PushNotifications} />
        <Stack.Screen name='Barcode' component={Barcode} />
        <Stack.Screen name='Biometrics' component={Biometrics} />
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
