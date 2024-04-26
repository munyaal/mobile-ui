import React, {
  type ComponentType,
  type FC,
  memo,
  type PropsWithChildren,
} from 'react';
import { useComponentBuilder } from '../hooks';
import type {
  BasicProps,
  ComponentConfiguration,
  ComponentProps,
} from '../utils/types';

export function factoryComponent<
  P extends BasicProps,
  V extends Record<string, any>,
>(
  StyledComponent: ComponentType<PropsWithChildren<BasicProps>>,
  configuration: ComponentConfiguration<V>
) {
  const FunctionalComponent: FC<PropsWithChildren<ComponentProps<V> & P>> = (
    props
  ) => {
    const { children, ...allProps } = props;

    const { styles, properties } = useComponentBuilder<P, V>(
      allProps,
      configuration
    );

    return (
      <StyledComponent {...properties} style={styles}>
        {children}
      </StyledComponent>
    );
  };

  return memo(FunctionalComponent);
}