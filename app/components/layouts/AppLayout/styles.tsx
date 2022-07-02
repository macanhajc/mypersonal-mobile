import styled from 'styled-components/native';

export const AppLayoutWrapper = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.spacing.lg};
  padding-top: ${({theme}) => theme.spacing.xl};
  background-color: ${({theme}) => theme.colors['base-100']};
`;

export const LayoutHeader = styled.View`
  height: 56px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.View`
  flex: 1;
  padding-top: 4px;
  justify-content: center;
  align-items: center;
`;
