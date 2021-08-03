import React, { useState } from 'react';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import { dark, light } from '@presentation/styles/themes';

import { CustomThemeContext } from '@adapters/contexts/CustomThemeContext';

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const toggleTheme = () =>
    setTheme(theme.title === 'dark' ? light : dark);

  return (
    <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
