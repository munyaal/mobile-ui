import type {
  BasicSizes,
  ComponentConfiguration,
  Styles,
  ViewSpecificStyles,
} from '../utils';
import { factoryComponent } from '../builder';
import { View as NativeView, type ViewProps } from 'react-native';

export type VStackVariants = {
  space: {
    [key in keyof BasicSizes]: Styles;
  };
  reversed: {
    true: Styles;
  };
};

const config: ComponentConfiguration<ViewProps, VStackVariants> = {
  flexDirection: 'column',
  variants: {
    space: {
      xs: {
        gap: `$1`,
      },
      sm: {
        gap: `$2`,
      },
      md: {
        gap: `$3`,
      },
      lg: {
        gap: `$4`,
      },
      xl: {
        gap: `$5`,
      },
    },
    reversed: {
      true: {
        flexDirection: 'column-reverse',
      },
    },
  },
  defaultProps: {
    space: 'md',
  },
};

export const VStack = factoryComponent<
  ViewProps,
  VStackVariants,
  ViewSpecificStyles
>(NativeView, config);