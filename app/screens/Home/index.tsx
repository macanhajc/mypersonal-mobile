import {AppRoutes, AppScreenProp} from '../../navigators';

import HomeTemplate from '../../components/templates/HomeTemplate';
import React from 'react';

type HomeScreenProps = AppScreenProp<AppRoutes.Home>;

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return <HomeTemplate />;
};
