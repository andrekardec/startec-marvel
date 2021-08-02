import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            background: string;
            textColor: string;
            white: string;
            offwhite: string;
            offgray: string;
            textGray: string;
        };
    }
}
