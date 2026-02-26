import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {navigationRef} from './NavigationService';

import AuthNavigator from './navigators/AuthNavigator';
import LandingNavigator from './navigators/LandingNavigator';

const Stack = createNativeStackNavigator();

const App = (props) => {
  const {theme} = props;

  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle="light-content" />

      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoggedIn ? <AuthNavigator /> : <LandingNavigator />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
