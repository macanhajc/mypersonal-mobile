import * as React from 'react';

import {BaseSolidIcon, BaseSolidIconProps} from './Base';
import {ColorsTypes, colors} from '../../../styles/colors';
import Svg, {Path, SvgProps} from 'react-native-svg';

type IconProps = Omit<SvgProps, 'color'> & {
  color?: keyof ColorsTypes;
  strokeWidth?: number;
};

export const ArrowRightIcon = (props: IconProps) => {
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
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </Svg>
  );
};

export const ArrowRightIconSolid = (props: BaseSolidIconProps) => {
  return (
    <BaseSolidIcon {...props}>
      <Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      />
    </BaseSolidIcon>
  );
};
