import {LoginScreen, RegisterScreen, WelcomeScreen} from '../screens';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import {HomeStack} from './home-navigator';
import React from 'react';

export enum AppRoutes {
  Welcome = 'welcome',
  Login = 'login',
  Register = 'register',
  Home = 'home',
}

export type AppNavigatorParamList = {
  [AppRoutes.Welcome]: undefined;
  [AppRoutes.Login]: undefined;
  [AppRoutes.Register]: undefined;
  [AppRoutes.Home]: undefined;
};

export type AppNavigationProp<
  RouteName extends keyof AppNavigatorParamList = AppRoutes,
> = NativeStackNavigationProp<AppNavigatorParamList, RouteName>;

export type AppScreenProp<
  RouteName extends keyof AppNavigatorParamList = AppRoutes,
> = NativeStackScreenProps<AppNavigatorParamList, RouteName>;

const Stack = createNativeStackNavigator<AppNavigatorParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AppRoutes.Home}>
      <Stack.Screen name={AppRoutes.Welcome} component={WelcomeScreen} />
      <Stack.Screen name={AppRoutes.Login} component={LoginScreen} />
      <Stack.Screen name={AppRoutes.Register} component={RegisterScreen} />
      <Stack.Screen name={AppRoutes.Home} component={HomeStack} />
    </Stack.Navigator>
  );
};

export const AppNavigator = React.forwardRef<
  NavigationContainerRef<any>,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <AppStack />
    </NavigationContainer>
  );
});

AppNavigator.displayName = 'AppNavigator';

const exitRoutes = ['login'];
export const canExitApp = (routeName: string) => exitRoutes.includes(routeName);
