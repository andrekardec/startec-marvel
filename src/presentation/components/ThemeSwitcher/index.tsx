import React from 'react';
import Switch from 'react-switch';
import { Container, LightIcon, DarkIcon } from './styles';
import { useTheme, useThemeProfile } from '@presentation/hooks/useTheme';

const ThemeSwitcher: React.FC = () => {
    const { colors } = useThemeProfile();
    const { theme, toggleTheme } = useTheme();

    return (
        <Container>
            <LightIcon />
            <Switch
                onChange={toggleTheme}
                checked={theme.title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                offColor={colors.textColor}
                onColor={colors.background}

            />
            <DarkIcon />
        </Container>
    );
};

export default ThemeSwitcher;
