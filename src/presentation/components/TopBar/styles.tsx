import styled from 'styled-components';

import { HomeSmile } from 'styled-icons/boxicons-regular';
import { BookOpen } from 'styled-icons/boxicons-regular';
import { PersonBooth } from 'styled-icons/fa-solid';
import { MoviePlay } from 'styled-icons/boxicons-regular';
import { Menu } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
    grid-area: TB;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    max-height: 60px;
    width: 100vw;
    padding: 9px 0px;

    background-color: ${props => props.theme.colors.primary};
    opacity: ${props => (props.theme.title === 'dark' ? 0.8 : 1)};
`;

export const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;
`;

export const CenterWrapper = styled.div`
    display: flex;
    width: 30%;
    justify-content: center;
`;

export const RightWrapper = styled.div`
    display: flex;
    width: 40%;
    justify-content: space-between;
`;

export const LogoButton = styled.div`
    display: flex;
    flex-shrink: 0;

    width: 100px;
    height: auto;
    transition: transform 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }
`;
export const HomeButton = styled(HomeSmile)`
    display: flex;
    width: 25px;
    height: 25px;

    color: ${props => props.theme.colors.white};
    opacity: 0.7;
    cursor: pointer;

    transition: opacity 0.3s transform 0.3s ease-in-out;

    &:hover {
        opacity: 1;
        transform: scale(1.5);
    }
`;
export const ComicButton = styled(BookOpen)`
    display: flex;
    width: 25px;
    height: 25px;

    color: ${props => props.theme.colors.white};
    opacity: 0.7;
    cursor: pointer;

    transition: opacity 0.3s transform 0.3s ease-in-out;

    &:hover {
        opacity: 1;
        transform: scale(1.5);
    }
`;
export const CharacterButton = styled(PersonBooth)`
    display: flex;
    width: 25px;
    height: 25px;

    color: ${props => props.theme.colors.white};
    opacity: 0.7;
    cursor: pointer;

    transition: opacity 0.3s transform 0.3s ease-in-out;

    &:hover {
        opacity: 1;
        transform: scale(1.5);
    }
`;
export const SeriesButton = styled(MoviePlay)`
    display: flex;
    width: 25px;
    height: 25px;

    color: ${props => props.theme.colors.white};
    opacity: 0.7;
    cursor: pointer;

    transition: opacity 0.3s transform 0.3s ease-in-out;

    &:hover {
        opacity: 1;
        transform: scale(1.5);
    }
`;

export const HamburgerMenu = styled(Menu)`
    width: 40px;
    height: 40px;
    margin-right: 40px;
    margin-top: -7px;

    color: ${props => props.theme.colors.white};
    cursor: pointer;

    transition: transform 0.2s;

    &:hover {
        transform: scale(1.5);
    }
`;
