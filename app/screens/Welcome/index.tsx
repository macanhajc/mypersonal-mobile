import {AppRoutes, AppScreenProp} from '../../navigators';

import React from 'react';
import WelcomeTemplate from '../../components/templates/WelcomeTemplate';

type WelcomeScreenProps = AppScreenProp<AppRoutes.Welcome>;

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  navigation: {navigate},
}) => {
  return (
    <WelcomeTemplate
      onRegister={() => navigate(AppRoutes.Register)}
      onSignIn={() => navigate(AppRoutes.Login)}
    />
  );
};
