import styled from 'styled-components';
import { Sun } from 'styled-icons/boxicons-regular';
import { Nightlight } from 'styled-icons/material';

export const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: -2px;
    margin-left: 65px;
`;

export const LightIcon = styled(Sun)`
    display: flex;
    width: 28px;
    height: 28px;
    margin-right: 6px;
    color: ${props =>
        props.theme.title === 'dark'
            ? props.theme.colors.background
            : props.theme.colors.white};
`;

export const DarkIcon = styled(Nightlight)`
    display: flex;
    width: 28px;
    height: 28px;
    margin-left: 6px;
    ${props =>
        props.theme.title === 'dark'
            ? props.theme.colors.background
            : props.theme.colors.white};
`;
