import flatten from 'flat';
import dayjsPt from 'dayjs/locale/pt-br';
import dayjsEn from 'dayjs/locale/en';

import en from './en.json';
import pt from './pt.json';

export type LocaleEnum = 'en' | 'pt';

export type Translation = {
  [key in LocaleEnum]: {[key: string]: string};
};

// A map that converts our locale code to the respective dayjs locale code
export const dayjsLocaleMap = {
  en: 'en',
  pt: 'pt',
};

export const momentLocales = {
  en: {code: 'en', locale: dayjsPt},
  pt: {code: 'pt', locale: dayjsEn},
};

export const authLanguages = {
  en: 'en',
  pt: 'pt',
};

export const defaultLocale = () => 'pt' as LocaleEnum;

const locales: Translation = {
  en: flatten(en),
  pt: flatten(pt),
};

export default locales;
