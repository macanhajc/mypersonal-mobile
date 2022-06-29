import styled, {css} from 'styled-components/native';

import {ColorsTypes} from '../../../styles/colors';
import {FontVariantType} from '../../../styles/typography';
import {TextStyle} from 'react-native';

type Weight =
  | 'Medium'
  | 'Light'
  | 'Thin'
  | 'Regular'
  | 'Italic'
  | 'SemiBold'
  | 'Bold'
  | 'Black';

const variants: {
  [K in keyof Omit<FontVariantType, 'primary'>]: {
    fontSize: number;
    lineHeight: number;
  };
} = {
  displayLarge: {
    fontSize: 48,
    lineHeight: 50,
  },
  displayMedium: {
    fontSize: 32,
    lineHeight: 37,
  },
  displaySmall: {
    fontSize: 24,
    lineHeight: 26,
  },
  textLarge: {
    fontSize: 20,
    lineHeight: 22,
  },
  textMedium: {
    fontSize: 16,
    lineHeight: 18,
  },
  textSmall: {
    fontSize: 14,
    lineHeight: 16,
  },
  textXSmall: {
    fontSize: 13,
    lineHeight: 15,
  },
};

export const Text = styled.Text<{
  variant?: keyof Omit<FontVariantType, 'primary'>;
  color?: keyof ColorsTypes;
  align?: TextStyle['textAlign'];
  weight?: Weight;
}>`
  font-family: ${props => 'Poppins-' + (props.weight || 'Regular')};
  text-align: ${props => props.align || 'left'};
  ${({variant}) => {
    const attr = variants[variant || 'textMedium'];
    return css`
      font-size: ${attr.fontSize}px;
      line-height: ${attr.lineHeight}px;
    `;
  }}
`;
