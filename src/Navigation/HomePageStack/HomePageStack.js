import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../routes';

import HomePage from '../../Pages/HomePage';
import DomainAdd from '../../Pages/DomainAdd';
import DomainDisplay from '../../Pages/DomainDisplay';

const Stack = createStackNavigator();

const HomePageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.HOMEPAGE}
        component={HomePage}
      />
      <Stack.Screen name={routes.DOMAIN_ADD} component={DomainAdd} />
      <Stack.Screen name={routes.DOMAIN_DISPLAY} component={DomainDisplay} />
    </Stack.Navigator>
  );
};

export default HomePageStack;
