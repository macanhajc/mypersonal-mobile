import {AppNavigationProp, AppRoutes} from '../../navigators';

import LoginTemplate from '../../components/templates/LoginTemplate';
import React from 'react';

type LoginScreenProps = AppNavigationProp<AppRoutes.Login>;

export const LoginScreen: React.FC<LoginScreenProps> = ({
  navigation: {goBack},
}) => {
  return <LoginTemplate goBack={goBack} />;
};
