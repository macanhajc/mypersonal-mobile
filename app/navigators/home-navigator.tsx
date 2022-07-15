import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '../screens';
import {HouseIconSolid} from '../components/ui/Icons';
import React from 'react';
import {TabBar} from '../components/elements';

export enum HomeRoutes {
  Home = 'home',
}

export type HomeNavigatorParamList = {
  [HomeRoutes.Home]: undefined;
};

export type HomeNavigationProp<
  RouteName extends keyof HomeNavigatorParamList = HomeRoutes,
> = BottomTabNavigationProp<HomeNavigatorParamList, RouteName>;

export type HomeScreenProp<
  RouteName extends keyof HomeNavigatorParamList = HomeRoutes,
> = BottomTabScreenProps<HomeNavigatorParamList, RouteName>;

const Tab = createBottomTabNavigator<HomeNavigatorParamList>();

export const homeNavigatorIcons: {[key in keyof HomeNavigatorParamList]: any} =
  {
    [HomeRoutes.Home]: HouseIconSolid,
  };

export const HomeStack: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName={HomeRoutes.Home}>
      <Tab.Screen name={HomeRoutes.Home} component={HomeScreen} />
    </Tab.Navigator>
  );
};

const exitRoutes = ['home'];
export const canExitHome = (routeName: string) =>
  exitRoutes.includes(routeName);
