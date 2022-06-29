import {Button, Text} from '../../ui';
import {SignInButton, SignInWrapper, WelcomeTemplateWrapper} from './styles';

import React from 'react';

type WelcomeTemplateProps = {};

const WelcomeTemplate: React.FC<WelcomeTemplateProps> = () => {
  return (
    <WelcomeTemplateWrapper>
      <Button text="Get Started" />
      <SignInWrapper>
        <Text>
          Already have account?{' '}
          <SignInButton activeOpacity={0.8}>
            <Text color="primary" weight="SemiBold">
              Sign in
            </Text>
          </SignInButton>
        </Text>
      </SignInWrapper>
    </WelcomeTemplateWrapper>
  );
};

export default WelcomeTemplate;
