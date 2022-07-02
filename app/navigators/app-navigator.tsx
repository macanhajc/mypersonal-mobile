import {LoginScreen, RegisterScreen, WelcomeScreen} from '../screens';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import React from 'react';

export enum AppRoutes {
  Welcome = 'welcome',
  Login = 'login',
  Register = 'register',
}

export type AppNavigatorParamList = {
  [AppRoutes.Welcome]: undefined;
  [AppRoutes.Login]: undefined;
  [AppRoutes.Register]: undefined;
};

export type AppNavigationProp<
  RouteName extends keyof AppNavigatorParamList = AppRoutes,
> = NativeStackScreenProps<AppNavigatorParamList, RouteName>;

const Stack = createNativeStackNavigator<AppNavigatorParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AppRoutes.Welcome}>
      <Stack.Screen name={AppRoutes.Welcome} component={WelcomeScreen} />
      <Stack.Screen name={AppRoutes.Login} component={LoginScreen} />
      <Stack.Screen name={AppRoutes.Register} component={RegisterScreen} />
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
