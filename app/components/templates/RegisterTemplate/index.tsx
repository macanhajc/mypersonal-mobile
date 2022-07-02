import {
  AtSymbolIconSolid,
  LockClosedIconSolid,
  UserIconSolid,
} from '../../ui/Icons';
import {Button, Space, Text, TextInput} from '../../ui';
import {
  RegisterTemplateWrapper,
  SignInButton,
  TermsWrapper,
  TitleWrapper,
} from './styles';

import AppLayout from '../../layouts/AppLayout';
import React from 'react';

type RegisterTemplateProps = {
  goBack: () => void;
  onSignIn: () => void;
};

const RegisterTemplate: React.FC<RegisterTemplateProps> = ({
  goBack,
  onSignIn,
}) => {
  return (
    <AppLayout goBack={goBack}>
      <RegisterTemplateWrapper>
        <TitleWrapper>
          <Text variant="displayMedium" weight="SemiBold">
            Sign up
          </Text>
        </TitleWrapper>
        <Space align="center" gap="lg">
          <TextInput placeholder="Fist name" prefix={<UserIconSolid />} />
          <TextInput placeholder="Last name" prefix={<UserIconSolid />} />
          <TextInput placeholder="Email" prefix={<AtSymbolIconSolid />} />
          <TextInput placeholder="Password" prefix={<LockClosedIconSolid />} />

          <TermsWrapper>
            <Text variant="textXSmall">
              By signing up, you agree to our{' '}
              <Text variant="textXSmall" color="primary" weight="SemiBold">
                Terms & Conditions
              </Text>
              {' and '}
              <Text variant="textXSmall" color="primary" weight="SemiBold">
                Privacy Policy
              </Text>
            </Text>
          </TermsWrapper>

          <Button text="Continue" />

          <Text>
            Joined use before ?{' '}
            <SignInButton activeOpacity={0.8} onPress={onSignIn}>
              <Text color="primary" weight="SemiBold">
                Login
              </Text>
            </SignInButton>
          </Text>
        </Space>
      </RegisterTemplateWrapper>
    </AppLayout>
  );
};

export default RegisterTemplate;
