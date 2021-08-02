import { CustomThemeContext } from '@adapters/contexts/CustomThemeContext';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const useTheme = () => useContext(CustomThemeContext);
export const useThemeProfile = () => useContext(ThemeContext);
