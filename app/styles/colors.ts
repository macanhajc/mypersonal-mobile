import _range from 'lodash-es/range';
import chroma from 'chroma-js';

export type ColorsTypes = {
  black: string;
  white: string;

  error: string;
  success: string;

  disabled: string;

  primary: string;
  ['primary-darken']: string;
  ['primary-100']: string;
  ['primary-200']: string;
  ['primary-300']: string;
  ['primary-400']: string;
  ['primary-500']: string;
  ['primary-600']: string;
  ['primary-700']: string;
  ['primary-800']: string;
  ['primary-900']: string;

  secondary: string;
  ['secondary-darken']: string;
  ['secondary-100']: string;
  ['secondary-200']: string;
  ['secondary-300']: string;
  ['secondary-400']: string;
  ['secondary-500']: string;
  ['secondary-600']: string;
  ['secondary-700']: string;
  ['secondary-800']: string;
  ['secondary-900']: string;

  // Base color of page, used for blank backgrounds
  ['base-100']: string;
  // Base color, a little darker
  ['base-200']: string;
  // Base color, even more darker
  ['base-300']: string;

  transparent: string;
  current: string;
};

const baseColor = '#F9F9F9';

const defaultColors = {
  primary: '#272727',
  secondary: '#008662',
};

const autoGradient = (color: any, numColors: number): string[] => {
  const lab = chroma(color).lab();
  const lRange = 100 * (0.95 - 1 / numColors);
  const lStep = lRange / (numColors - 1);
  let lStart = (100 - lRange) * 0.5;
  const range = _range(lStart, lStart + numColors * lStep, lStep);
  let offset = 9999;
  for (let i = 0; i < numColors; i++) {
    let diff = lab[0] - range[i];
    if (Math.abs(diff) < Math.abs(offset)) {
      offset = diff;
    }
  }
  return range.map((l: number) =>
    chroma.lab([l + offset, lab[1], lab[2]]).hex(),
  );
};

const generateColors = () => {
  let obj = {};
  // Generate gradients based on default Colors;
  for (const attr in defaultColors) {
    const color = defaultColors[attr];

    const scale = autoGradient(color, 10);

    obj[attr] = color;
    scale.forEach((cor, i) => {
      obj[`${attr}${i > 0 ? `-${(10 - i) * 100}` : '-darken'}`] = cor;
    });
  }

  obj['base-100'] = baseColor;
  obj['base-200'] = chroma(baseColor).darken(1).hex();
  obj['base-300'] = chroma(baseColor).darken(2).hex();

  obj['black'] = '#000000';
  obj['white'] = '#FFFFFF';

  obj['error'] = '#FF0000';
  obj['success'] = '#00FF00';

  obj['disabled'] = '#ebebeb';

  return obj;
};

export const colors: ColorsTypes = generateColors();
