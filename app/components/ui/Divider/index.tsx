import {ColorsTypes} from '../../../styles/colors';
import React from 'react';
import {Text} from '../Text';
import styled from 'styled-components/native';

export type DividerProps = {
  text?: string;
  position?: 'center' | 'left' | 'right';
  color?: keyof ColorsTypes;
};

const StyledDividerWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledLine = styled.View<{color?: keyof ColorsTypes}>`
  flex: 1;
  height: 2;
  background-color: ${({theme, color}) => theme.colors[color || 'base-200']};
`;

const StyledText = styled(Text)<DividerProps>`
  color: ${({theme, color}) => theme.colors[color || 'base-200']};
  margin-left: ${({theme, position}) =>
    position === 'center' || position === 'right' ? theme.spacing.md : '0px'};
  margin-right: ${({theme, position}) =>
    position === 'center' || position === 'left' ? theme.spacing.md : '0px'};
`;

export const Divider: React.FC<DividerProps> = ({
  text,
  color,
  position = 'center',
}) => {
  return (
    <StyledDividerWrapper>
      {!!(position === 'center' || position === 'right') && (
        <StyledLine color={color} />
      )}
      {text && (
        <StyledText weight="Medium" position={position} color={color}>
          {text}
        </StyledText>
      )}
      {!!(position === 'center' || position === 'left') && (
        <StyledLine color={color} />
      )}
    </StyledDividerWrapper>
  );
};
