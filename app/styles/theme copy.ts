import {colors} from './colors';
import {spacing} from './spacing';
import {typography} from './typography';
import {device} from './device';

export const theme = {
  name: 'Default',
  colors,
  spacing,
  typography,
  device,
};

export type AppTheme = typeof theme;
