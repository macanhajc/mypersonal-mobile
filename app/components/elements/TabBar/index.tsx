import {HomeNavigatorParamList, homeNavigatorIcons} from '../../../navigators';
import {StyledTabBarContent, StyledTabBarItem} from './styles';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {NavigationHelpers} from '@react-navigation/native';
import React from 'react';
import {colors} from '../../../styles/colors';

export type TabBarProps = BottomTabBarProps & {};

type TabBarItemProps = {
  active?: boolean;
  name: string;
  routeKey: string;
  navigation: NavigationHelpers<Record<string, object | undefined>, any>;
  Icon: any;
};

const TabBarItem: React.FC<TabBarItemProps> = ({
  active,
  name,
  routeKey,
  navigation,
  Icon,
}) => {
  const onLongPress = () =>
    navigation.emit({type: 'tabLongPress', target: routeKey});
  const onPress = () => {
    if (!active) {
      navigation.navigate(name);
    }
  };

  return (
    <StyledTabBarItem
      android_ripple={{color: colors['base-200']}}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon gradient={active} color={colors[active ? 'primary' : 'base-200']} />
    </StyledTabBarItem>
  );
};

export const TabBar: React.FC<TabBarProps> = ({state, navigation}) => {
  return (
    <StyledTabBarContent>
      {state.routes.map((route, index) => {
        const active = state.index === index;
        return (
          <TabBarItem
            key={`tabBar-item-${route.name}`}
            active={active}
            name={route.name}
            routeKey={route.key}
            navigation={navigation}
            Icon={
              homeNavigatorIcons[route.name as keyof HomeNavigatorParamList]
            }
          />
        );
      })}
    </StyledTabBarContent>
  );
};
