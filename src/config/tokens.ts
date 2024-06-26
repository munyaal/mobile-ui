import type {
  BorderRadius,
  BorderWidths,
  FontFamilies,
  FontSizes,
  FontWeights,
  LetterSpacings,
  LineHeights,
  Opacity,
  Sizes,
  Spaces,
  Tokens,
} from '../types';

export const fontSizes: FontSizes = {
  'xs': 10.11,
  'sm': 11.11,
  'md': 13.33,
  'lg': 16,
  'xl': 19.2,
  '2xl': 23.04,
  '3xl': 27.65,
  '4xl': 33.18,
  '5xl': 39.81,
  '6xl': 47.78,
};

export const fontWeights: FontWeights = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const fontFamilies: FontFamilies = {
  sans: 'monospace',
  serif: 'monospace',
  mono: 'monospace',
};

export const lineHeights: LineHeights = {
  'xs': 14,
  'sm': 16,
  'md': 20,
  'lg': 24,
  'xl': 24,
  '2xl': 28,
  '3xl': 32,
  '4xl': 36,
  '5xl': 40,
  '6xl': 44,
};

export const letterSpacings: LetterSpacings = {
  'xs': 0,
  'sm': 0,
  'md': 0,
  'lg': 0,
  'xl': 0,
  '2xl': 0,
  '3xl': 0,
  '4xl': 0,
  '5xl': 0,
  '6xl': 0,
};

export const borderWidths: BorderWidths = {
  '0': 0,
  '1': 1,
  '2': 2,
  '4': 4,
  '8': 8,
};

export const borderRadius: BorderRadius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
};

export const sizes: Sizes = {
  '0': 0,
  '0.5': 2,
  '1': 4,
  '1.5': 6,
  '2': 8,
  '2.5': 10,
  '3': 12,
  '3.5': 14,
  '4': 16,
  '4.5': 18,
  '5': 20,
  '6': 24,
  '7': 28,
  '8': 32,
  '9': 36,
  '10': 40,
  '11': 44,
  '12': 48,
  '16': 64,
  '18': 72,
  '20': 80,
  '24': 96,
  '32': 128,
  '40': 160,
  '48': 192,
  '56': 224,
  '64': 256,
  '72': 288,
  '80': 320,
  '96': 384,
  '102': 408,
  '1/2': '50%',
  '1/3': '33.333%',
  '2/3': '66.666%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666%',
  '2/6': '33.333%',
  '3/6': '50%',
  '4/6': '66.666%',
  '5/6': '83.333%',
  'full': '100%',
};

export const spaces: Spaces = {
  '0': 0,
  '0.5': 2,
  '1': 4,
  '1.5': 6,
  '2': 8,
  '2.5': 10,
  '3': 12,
  '3.5': 14,
  '4': 16,
  '4.5': 18,
  '5': 20,
  '6': 24,
  '7': 28,
  '8': 32,
  '9': 36,
  '10': 40,
  '11': 44,
  '12': 48,
  '16': 64,
  '18': 72,
  '20': 80,
  '24': 96,
  '32': 128,
  '40': 160,
  '48': 192,
  '56': 224,
  '64': 256,
  '72': 288,
  '80': 320,
  '96': 384,
  '102': 408,
};

export const opacity: Opacity = {
  0: 0,
  5: 0.05,
  10: 0.1,
  20: 0.2,
  25: 0.25,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  75: 0.75,
  80: 0.8,
  90: 0.9,
  95: 0.95,
  100: 1,
};

export const tokens: Tokens = {
  fontSizes,
  fontWeights,
  lineHeights,
  fontFamilies,
  letterSpacings,
  borderWidths,
  borderRadius,
  opacity,
  spaces,
  sizes,
};
