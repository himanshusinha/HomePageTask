import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../constants/routes';
import {HomeScreen, MoviesScreen, NotificationsScreen} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={routes.NOTIFICATION_SCREEN}
          component={NotificationsScreen}
        />
        <Stack.Screen name={routes.MOVIES_SCREEN} component={MoviesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
