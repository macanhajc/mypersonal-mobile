import {Button, Divider, Space, Text, TextInput} from '../../ui';
import {ForgotPassword, LoginTemplateWrapper, TitleWrapper} from './styles';
import {LockClosedIconSolid, UserIconSolid} from '../../ui/Icons';

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
          <TextInput placeholder="Login" prefix={<UserIconSolid />} />
          <TextInput placeholder="Password" prefix={<LockClosedIconSolid />} />
          <ForgotPassword>
            <Text weight="Medium" color="primary">
              Forgot Password ?
            </Text>
          </ForgotPassword>
          <Button text="Login" />
          <Divider text="OR" />
        </Space>
      </LoginTemplateWrapper>
    </AppLayout>
  );
};

export default LoginTemplate;
