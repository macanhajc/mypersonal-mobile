import {SpacingTypes, spacing} from '../../../styles/spacing';
import styled, {css} from 'styled-components/native';

import React from 'react';

export type SpaceProps = {
  children?: React.ReactNode;
  gap?: keyof SpacingTypes | number;
  lastIndex?: boolean;
  horizontal?: boolean;
  align?: 'flex-start' | 'center' | 'flex-end';
};

const StyledItem = styled.View<SpaceProps>`
  ${({gap, lastIndex, horizontal}) =>
    horizontal
      ? css`
          margin-right: ${lastIndex
            ? 0
            : typeof gap === 'number'
            ? `${gap}px`
            : spacing[gap || 'md']};
        `
      : css`
          margin-bottom: ${lastIndex
            ? 0
            : typeof gap === 'number'
            ? `${gap}px`
            : spacing[gap || 'md']};
        `}
  align-items: ${({align}) => align || 'flex-start'};
`;

const StyledHorizontalWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Space: React.FC<SpaceProps> = ({
  children,
  horizontal,
  gap,
  align,
}) => {
  if (horizontal) {
    return (
      <StyledHorizontalWrapper>
        {React.Children.toArray(children).map(
          (item: any, index: number, array) => (
            <StyledItem
              horizontal
              gap={gap}
              align={align}
              key={`space-item-${index}`}
              lastIndex={index === array.length - 1}>
              {item}
            </StyledItem>
          ),
        )}
      </StyledHorizontalWrapper>
    );
  }
  return (
    <React.Fragment>
      {React.Children.toArray(children).map(
        (item: any, index: number, array) => (
          <StyledItem
            gap={gap}
            align={align}
            key={`space-item-${index}`}
            lastIndex={index === array.length - 1}>
            {item}
          </StyledItem>
        ),
      )}
    </React.Fragment>
  );
};
