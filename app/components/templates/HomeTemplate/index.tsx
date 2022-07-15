import AppLayout from '../../layouts/AppLayout';
import {HomeTemplateWrapper} from './styles';
import React from 'react';

type HomeTemplateProps = {};

const HomeTemplate: React.FC<HomeTemplateProps> = () => {
  return (
    <AppLayout>
      <HomeTemplateWrapper />
    </AppLayout>
  );
};

export default HomeTemplate;
