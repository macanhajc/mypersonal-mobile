import {ColorsTypes, colors} from '../../../styles/colors';
import React, {forwardRef} from 'react';

import {PressableProps} from 'react-native';
import {Text} from '../Text';
import styled from 'styled-components/native';

type VariantTypes = 'primary' | 'secondary' | 'subtle' | 'text';

type StyledButtonProps = {
  variant: VariantTypes;
  disabled?: boolean | null;
  color?: keyof ColorsTypes;
};

const StyledButton = styled.View<StyledButtonProps>`
  height: 56px;
  width: 100%;
  overflow: hidden;
  border-radius: ${({theme}) => theme.borders.sm};
`;

const StyledPressable = styled.Pressable`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({theme, disabled}) =>
    theme.colors[disabled ? 'disabled' : 'primary']};
  padding-horizontal: ${({theme}) => theme.spacing.md};
  color: #ffffff;
`;

export type ButtonProps = PressableProps & {
  text?: string;
  loading?: boolean;
  variant?: VariantTypes;
  color?: keyof ColorsTypes;
};

export type ButtonPropsRef = any;

export const Button = forwardRef<ButtonPropsRef, ButtonProps>(
  ({text, color, disabled, variant = 'primary', ...props}, ref) => {
    return (
      <StyledButton variant={variant} disabled={disabled} color={color}>
        <StyledPressable
          ref={ref}
          {...props}
          disabled={disabled}
          android_ripple={{color: colors.white}}>
          <Text weight="SemiBold" style={{color: colors.white}}>
            {text}
          </Text>
        </StyledPressable>
      </StyledButton>
    );
  },
);
