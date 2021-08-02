import React from 'react';
import ThemeSwitcher from '@presentation/components/ThemeSwitcher';

import LogoWhite from '@presentation/assets/logoWhite.svg';
import { Link } from 'react-router-dom';
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

const TopBar: React.FC = () =>
  (
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

export default TopBar;
