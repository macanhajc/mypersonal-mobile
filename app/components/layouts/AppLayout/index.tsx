import {AppLayoutWrapper, HeaderTitle, LayoutHeader} from './styles';

import {ArrowLeftIcon} from '../../ui/Icons';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '../../ui';

type AppLayoutProps = {
  children?: React.ReactNode;
  goBack?: () => void;
  title?: string;
};

const AppLayout: React.FC<AppLayoutProps> = ({children, goBack, title}) => {
  return (
    <AppLayoutWrapper contentContainerStyle={style.containerStyle}>
      {(goBack || title) && (
        <LayoutHeader>
          {goBack && <ArrowLeftIcon onPress={goBack} />}
          {title && (
            <HeaderTitle>
              <Text variant="displaySmall" weight="SemiBold">
                {title}
              </Text>
            </HeaderTitle>
          )}
          {goBack && <ArrowLeftIcon color="transparent" />}
        </LayoutHeader>
      )}
      {children}
    </AppLayoutWrapper>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    flexGrow: 1,
    padding: 24,
  },
});

export default AppLayout;
