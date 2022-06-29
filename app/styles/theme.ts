import {borders} from './borders';
import {colors} from './colors';
import {device} from './device';
import {spacing} from './spacing';
import {typography} from './typography';

export const theme = {
  name: 'Default',
  colors,
  spacing,
  typography,
  device,
  borders,
};

export type AppTheme = typeof theme;
