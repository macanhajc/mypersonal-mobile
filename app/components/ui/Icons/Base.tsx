import * as React from 'react';

import {ColorsTypes, colors} from '../../../styles/colors';
import Svg, {SvgProps} from 'react-native-svg';

export type BaseSolidIconProps = Omit<SvgProps, 'color'> & {
  color?: keyof ColorsTypes;
  strokeWidth?: number;
};

export const BaseSolidIcon: React.FC<BaseSolidIconProps & {children?: any}> = ({
  children,
  color,
  ...rest
}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 20 20" {...rest} fill={color}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          fill: colors[color || 'current'],
        }),
      )}
    </Svg>
  );
};
