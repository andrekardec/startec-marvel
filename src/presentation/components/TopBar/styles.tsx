import styled from 'styled-components';

import { HomeSmile } from 'styled-icons/boxicons-regular';
import { BookOpen } from 'styled-icons/boxicons-regular';
import { PersonBooth } from 'styled-icons/fa-solid';
import { MoviePlay } from 'styled-icons/boxicons-regular';
import { Menu } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
    grid-area: TB;
    display: grid;
    max-height: 60px;

    grid-template-columns: 40% 20% 40%;
    grid-gap: 32px;
    grid-template-areas: 'LEFT CENTER RIGHT';

    padding: 9px 0px;

    background-color: ${props => props.theme.colors.primary};
    opacity: ${props => (props.theme.title === 'dark' ? 0.8 : 1)};
`;

export const LeftWrapper = styled.div`
    grid-area: LEFT;
    display: flex;
    justify-content: space-between;

    padding-right: 150px;
    padding-left: 120px;
    padding-top: 6px;
`;

export const CenterWrapper = styled.div`
    grid-area: CENTER;
    display: flex;
    align-items: flex-start;
    margin-top: 0px;
    justify-content: center;
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
    width: 25px;
    height: 25px;
    margin-bottom: 140px;

    color: ${props => props.theme.colors.white};
    opacity: 0.7;
    cursor: pointer;

    transition: opacity 0.3s transform 0.3s ease-in-out;

    &:hover {
        opacity: 1;
        transform: scale(1.5);
    }
`;

export const RightWrapper = styled.div`
    grid-area: RIGHT;
    display: flex;
    justify-content: space-between;

    padding-right: 210px;
    padding-top: 6px;
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
