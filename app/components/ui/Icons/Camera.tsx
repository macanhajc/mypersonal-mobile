import * as React from 'react';

import {BaseSolidIcon, BaseSolidIconProps} from './Base';
import {ColorsTypes, colors} from '../../../styles/colors';
import Svg, {Path, SvgProps} from 'react-native-svg';

type IconProps = Omit<SvgProps, 'color'> & {
  color?: keyof ColorsTypes;
  strokeWidth?: number;
};

export const CameraIcon = (props: IconProps) => {
  return (
    <Svg
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
      color={colors[props.color || 'black']}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth || 2}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth || 2}
        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </Svg>
  );
};

export const CameraIconSolid = (props: BaseSolidIconProps) => {
  return (
    <BaseSolidIcon {...props}>
      <Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
      />
    </BaseSolidIcon>
  );
};
