import {Platform} from 'react-native';

export type FontVariantType = {
  primary?: any;
  /**
   * Display large
   * Size: 48px
   * Weight: Regular
   * Case: Sentence
   * LineHeight: 50
   */
  displayLarge: string;
  /**
   * Display medium
   * Size: 32px
   * Weight: Regular
   * Case: Sentence
   * LineHeight: 36
   */
  displayMedium: string;
  /**
   * Display small
   * Size: 24px
   * Weight: Regular
   * Case: Sentence
   * LineHeight: 32
   */
  displaySmall: string;
  /**
   * Text large
   * Size: 20px
   * Weight: Regular
   * Case: Sentence
   * LineHeight: 32
   */
  textLarge: string;
  /**
   * Text medium
   * Size: 16px
   * Weight: Regular
   * Case: Sentence
   * LineHeight: 28
   */
  textMedium: string;
  /**
   * Text small
   * Size: 14px
   * Weight: Regular
   * Case: Sentence
   * LineHeight: 24
   */
  textSmall: string;
  /**
   * Text XSmall
   * Size: 13px
   * Weight: Regular
   * Case: Sentence
   * LineHeight: 22
   */
  textXSmall: string;
};

export const typography: FontVariantType = {
  /**
   * The primary font.  Used in most places.
   */
  primary: Platform.select({ios: 'Poppins', android: 'Poppins'}),
  displayLarge: '48px',
  displayMedium: '32px',
  displaySmall: '24px',
  textLarge: '20px',
  textMedium: '16px',
  textSmall: '14px',
  textXSmall: '13px',
};
