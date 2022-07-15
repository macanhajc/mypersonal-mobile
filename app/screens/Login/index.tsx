import {AppRoutes, AppScreenProp} from '../../navigators';

import LoginTemplate from '../../components/templates/LoginTemplate';
import React from 'react';

type LoginScreenProps = AppScreenProp<AppRoutes.Login>;

export const LoginScreen: React.FC<LoginScreenProps> = ({
  navigation: {navigate},
}) => {
  return <LoginTemplate goBack={() => navigate(AppRoutes.Welcome)} />;
};
