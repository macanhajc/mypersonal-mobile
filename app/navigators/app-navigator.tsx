import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import {MainScreen} from '../screens';
import React from 'react';

export enum AppRoutes {
  Main = 'main',
}

export type AppNavigatorParamList = {
  [AppRoutes.Main]: undefined;
};

export type AppNavigationProp<
  RouteName extends keyof AppNavigatorParamList = AppRoutes,
> = NativeStackNavigationProp<AppNavigatorParamList, RouteName>;

const Stack = createNativeStackNavigator<AppNavigatorParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={AppRoutes.Main}>
      <Stack.Screen name={AppRoutes.Main} component={MainScreen} />
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
