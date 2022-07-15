import {AppRoutes, AppScreenProp} from '../../navigators';

import React from 'react';
import RegisterTemplate from '../../components/templates/RegisterTemplate';

type RegisterScreenProps = AppScreenProp<AppRoutes.Register>;

export const RegisterScreen: React.FC<RegisterScreenProps> = ({
  navigation: {navigate, reset},
}) => {
  return (
    <RegisterTemplate
      goBack={() => navigate(AppRoutes.Welcome)}
      onSignIn={() =>
        reset({
          index: 1,
          routes: [{name: AppRoutes.Welcome}, {name: AppRoutes.Login}],
        })
      }
    />
  );
};
