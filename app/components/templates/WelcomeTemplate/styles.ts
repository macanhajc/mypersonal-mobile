import styled from 'styled-components/native';

export const WelcomeTemplateWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: ${({theme}) => theme.spacing.lg};
`;

export const SignInWrapper = styled.View`
  width: 100%;
  height: 56px;
  align-items: center;
  justify-content: center;
  margin-top: ${({theme}) => theme.spacing.sm};
`;

export const SignInButton = styled.TouchableOpacity`
  transform: translateY(5px);
`;
