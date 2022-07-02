import {Button, Text} from '../../ui';
import {SignInButton, SignInWrapper, WelcomeTemplateWrapper} from './styles';

import AppLayout from '../../layouts/AppLayout';
import React from 'react';

type WelcomeTemplateProps = {
  onRegister: () => void;
  onSignIn: () => void;
};

const WelcomeTemplate: React.FC<WelcomeTemplateProps> = ({
  onRegister,
  onSignIn,
}) => {
  return (
    <AppLayout>
      <WelcomeTemplateWrapper>
        <Button text="Get Started" onPress={onRegister} />
        <SignInWrapper>
          <Text>
            Already have account?{' '}
            <SignInButton activeOpacity={0.8} onPress={onSignIn}>
              <Text color="primary" weight="SemiBold">
                Sign in
              </Text>
            </SignInButton>
          </Text>
        </SignInWrapper>
      </WelcomeTemplateWrapper>
    </AppLayout>
  );
};

export default WelcomeTemplate;
