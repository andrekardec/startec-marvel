import { createContext } from 'react';
import { DefaultTheme } from 'styled-components';

type ThemeContextData = {
    theme: DefaultTheme;
    toggleTheme(): void;
};

export const CustomThemeContext = createContext<ThemeContextData>({} as ThemeContextData);
