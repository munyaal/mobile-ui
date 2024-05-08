import { factoryComponent } from '../builder';
import {
  ScrollView as NativeScrollView,
  type ScrollViewProps,
} from 'react-native';
import type { ComponentConfiguration } from '../utils';

const config: ComponentConfiguration<ScrollViewProps, {}> = {};

export const ScrollView = factoryComponent<ScrollViewProps, {}, {}>(
  NativeScrollView,
  config
);