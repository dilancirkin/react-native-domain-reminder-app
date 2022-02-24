import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import Login from '../Pages/Login';
import HomePageStack from './HomePageStack';

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.LOGIN} component={Login} />
        <Stack.Screen name={routes.HOMEPAGE_STACK} component={HomePageStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
