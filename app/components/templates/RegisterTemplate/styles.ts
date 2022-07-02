import styled from 'styled-components/native';

export const RegisterTemplateWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: ${({theme}) => theme.spacing.lg};
`;

export const TitleWrapper = styled.View`
  padding-bottom: ${({theme}) => theme.spacing.lg};
`;

export const SignInButton = styled.TouchableOpacity`
  transform: translateY(5px);
`;

export const TermsWrapper = styled.View`
  width: 100%;
  padding-horizontal: ${({theme}) => theme.spacing.xs};
`;
