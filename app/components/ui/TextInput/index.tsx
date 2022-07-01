import {
  Animated,
  NativeSyntheticEvent,
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {MaskedTextInput, mask} from 'react-native-mask-text';
import React, {forwardRef, useMemo, useState} from 'react';

import {Text} from '../Text';
import {colors} from '../../../styles/colors';
import styled from 'styled-components/native';
import {useAnimated} from '../../../hooks/animation';

type InputWrapperType = {
  active?: boolean;
  error?: boolean;
  disabled?: boolean;
};

const StyledInputWrapper = styled.View<InputWrapperType>`
  flex-direction: row;
  padding-horizontal: ${({theme}) => theme.spacing.sm};
  align-items: center;
  width: 100%;
  min-height: 56px;
  border-radius: 8px;
  border: 2px solid transparent;
`;

type StyledTextInputProps = {
  prefix?: boolean;
  suffix?: boolean;
  active?: boolean;
  disabled?: boolean;
};

const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  font-size: ${({theme}) => theme.typography.textMedium};
  color: ${({theme, active, disabled}) =>
    theme.colors[disabled ? 'base-300' : active ? 'black' : 'base-300']};
  font-family: ${({active}) => `Poppins-${active ? 'Medium' : 'Regular'}`};
  margin-top: 2px;
  flex: 1;
`;

const StyledMaskedTextInput = styled(MaskedTextInput)<StyledTextInputProps>`
  font-size: ${({theme}) => theme.typography.textMedium};
  color: ${({theme, active, disabled}) =>
    theme.colors[disabled ? 'base-300' : active ? 'black' : 'base-300']};
  font-family: ${({active}) => `Poppins-${active ? 'Medium' : 'Regular'}`};
  margin-top: 2px;
  height: 100%;
  width: 100%;
`;

const StyledText = styled(Text)`
  padding-top: ${({theme}) => theme.spacing.sm};
  margin-bottom: ${({theme}) => theme.spacing.sm};
  padding-horizontal: ${({theme}) => theme.spacing.sm};
`;

const StyleIconWrapper = styled.TouchableOpacity<{right?: boolean}>`
  z-index: 9;
  min-width: 36px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export type TextInputProps = NativeTextInputProps & {
  prefix?: React.ReactElement;
  onPressPrefix?: () => void;
  suffix?: React.ReactElement;
  onPressSuffix?: () => void;
  maskFormat?: string;
  disabled?: boolean;
  loading?: boolean;
  success?: string;
  error?: string;
  help?: string;
  currency?: boolean;
};

type StatusType = 'error' | 'success' | 'help' | undefined;

export const TextInput = forwardRef<NativeTextInput | null, TextInputProps>(
  (
    {
      value,
      prefix,
      maskFormat,
      onPressPrefix,
      suffix,
      onPressSuffix,
      onFocus,
      onBlur,
      onChangeText,
      error,
      success,
      disabled,
      loading,
      help,
      currency,
      ...props
    },
    ref,
  ) => {
    const [active, setActive] = useState(false);

    const status: StatusType = useMemo(() => {
      return (
        error ? 'error' : success ? 'success' : help ? 'help' : undefined
      ) as StatusType;
    }, [error, success, help]);

    const [, interpolate] = useAnimated(
      {useNativeDriver: false, duration: 300},
      active || !!value || !!error,
    );

    const [, interpolateStatus] = useAnimated(
      {useNativeDriver: false, duration: 200},
      !!status,
    );

    const animatedWrapperStyle = {
      backgroundColor: disabled
        ? colors.disabled
        : interpolate(['#FFFFFF00', '#FFFFFF']),
      borderColor: disabled
        ? 'transparent'
        : interpolate([colors['base-200'], error ? colors.error : '#000000']),
    };

    const animatedTextStyle = {
      zIndex: -1,
      opacity: interpolateStatus([0, 1]),
      transform: [
        {
          translateY: interpolateStatus([-20, 0]),
        },
      ],
    };

    const config = {
      active: active || !!value,
      suffix: !!suffix,
      prefix: !!prefix || loading,
      disabled: !!disabled,
      editable: active ? true : !disabled && (disabled || !loading),
      selectTextOnFocus: !disabled && (disabled || !loading),
      focusable: !disabled && (disabled || !loading),
      value: value,
      placeholderTextColor: colors['base-300'],
      onFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setActive(true);
        onFocus && onFocus(e);
      },
      onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setActive(false);
        onBlur && onBlur(e);
      },
    };

    const iconColor = useMemo(() => {
      if (disabled) {
        return colors['base-200'];
      } else if (error) {
        return colors.error;
      } else {
        return active || !!value ? colors.black : colors['base-200'];
      }
    }, [error, active, value, disabled]);

    return (
      <>
        <StyledInputWrapper
          as={Animated.View}
          style={animatedWrapperStyle}
          active={active || !!value}
          error={!!error}
          disabled={disabled || loading}>
          {!!(loading || prefix) && (
            <StyleIconWrapper onPress={onPressPrefix} activeOpacity={1}>
              {loading ? (
                <View />
              ) : prefix ? (
                React.cloneElement(prefix, {
                  color: iconColor,
                })
              ) : null}
            </StyleIconWrapper>
          )}
          {currency ? (
            <StyledMaskedTextInput
              {...props}
              type="currency"
              ref={ref}
              {...config}
              options={{
                prefix: 'R$ ',
                decimalSeparator: undefined,
                groupSeparator: undefined,
                precision: 0,
              }}
              onChangeText={(text: string) =>
                onChangeText && onChangeText(text)
              }
              keyboardType="numeric"
            />
          ) : (
            <StyledTextInput
              {...props}
              ref={ref}
              autoCompleteType="off"
              {...config}
              onChangeText={text =>
                onChangeText &&
                onChangeText(maskFormat ? mask(text, maskFormat) : text)
              }
            />
          )}
          {suffix && (
            <StyleIconWrapper right onPress={onPressSuffix} activeOpacity={1}>
              {React.cloneElement(suffix, {
                color: iconColor,
              })}
            </StyleIconWrapper>
          )}
        </StyledInputWrapper>
        {status && (
          <StyledText
            as={Animated.Text}
            style={animatedTextStyle}
            variant="textXSmall"
            weight="Medium"
            color={status === 'help' ? 'base-300' : status}>
            {success || error || help}
          </StyledText>
        )}
      </>
    );
  },
);
