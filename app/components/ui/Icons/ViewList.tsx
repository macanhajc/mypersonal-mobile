import * as React from 'react';

import {BaseSolidIcon, BaseSolidIconProps} from './Base';
import {ColorsTypes, colors} from '../../../styles/colors';
import Svg, {Path, SvgProps} from 'react-native-svg';

type IconProps = Omit<SvgProps, 'color'> & {
  color?: keyof ColorsTypes;
  strokeWidth?: number;
};

export const ViewListIcon = (props: IconProps) => {
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
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </Svg>
  );
};

export const ViewListIconSolid = (props: BaseSolidIconProps) => {
  return (
    <BaseSolidIcon {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      />
    </BaseSolidIcon>
  );
};
