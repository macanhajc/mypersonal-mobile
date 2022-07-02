import {AtSymbolIconSolid, LockClosedIconSolid} from '../../ui/Icons';
import {Button, Space, Text, TextInput} from '../../ui';
import {ForgotPassword, LoginTemplateWrapper, TitleWrapper} from './styles';

import AppLayout from '../../layouts/AppLayout';
import React from 'react';

type LoginTemplateProps = {
  goBack: () => void;
};

const LoginTemplate: React.FC<LoginTemplateProps> = ({goBack}) => {
  return (
    <AppLayout goBack={goBack}>
      <LoginTemplateWrapper>
        <TitleWrapper>
          <Text variant="displayMedium" weight="SemiBold">
            Login
          </Text>
        </TitleWrapper>
        <Space align="flex-end" gap="lg">
          <TextInput placeholder="Email" prefix={<AtSymbolIconSolid />} />
          <TextInput placeholder="Password" prefix={<LockClosedIconSolid />} />
          <ForgotPassword>
            <Text weight="Medium" color="primary">
              Forgot Password ?
            </Text>
          </ForgotPassword>
          <Button text="Login" />
        </Space>
      </LoginTemplateWrapper>
    </AppLayout>
  );
};

export default LoginTemplate;
