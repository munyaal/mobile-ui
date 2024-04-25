import { type UIState } from './types';
import React, {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useMemo,
} from 'react';
import type { Config, ThemeMode } from '../../utils';

const initialState: Partial<UIState> = {};

export const Context = createContext<UIState>(initialState as UIState);

type UIProviderProps = {
  config: Config;
  theme?: ThemeMode;
};

const UIProvider: FC<PropsWithChildren<UIProviderProps>> = (props) => {
  const { theme = 'light', config, children } = props;

  const value: UIState = useMemo(() => {
    const { aliases, tokens, themes } = config;

    const colors = themes[theme].colors;

    return {
      aliases,
      theme,
      colors,
      ...tokens,
    };
  }, [theme, config]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useUIProvider = () => useContext(Context);

export default UIProvider;
