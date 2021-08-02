import React from 'react';
import {
    Container,
    LeftWrapper,
    HomeButton,
    ComicButton,
    CharacterButton,
    SeriesButton,
    CenterWrapper,
    LogoButton,
    RightWrapper,
    HamburgerMenu,
} from './styles';
import ThemeSwitcher from '../ThemeSwitcher';

import LogoWhite from '@presentation/assets/logoWhite.svg';
import { Link } from 'react-router-dom';

const TopBar: React.FC = () => {
    return (
        <Container>
            <LeftWrapper>
            <Link to="/"><HomeButton /></Link>
                <ComicButton />
                <CharacterButton />
                <SeriesButton />
            </LeftWrapper>

            <CenterWrapper>
                <Link to="/">
                    <LogoButton>
                        <img src={LogoWhite} alt="Marvel" width="110" height="auto" />
                    </LogoButton>
                </Link>
            </CenterWrapper>

            <RightWrapper>
                <ThemeSwitcher />
                <HamburgerMenu />
            </RightWrapper>
        </Container>
    );
};

export default TopBar;
