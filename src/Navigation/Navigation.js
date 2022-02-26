import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import Login from '../Pages/Login';
import HomePageStack from './HomePageStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={routes.LOGIN}
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={routes.HOMEPAGE_STACK}
          component={HomePageStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
