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
  CenterWrapper,
  LogoButton,
  RightWrapper,
  FacebookButton,
} from './styles';

const TopBar: React.FC = () =>
  (
    <Container>

      <LeftWrapper>
        <Link to="/"><HomeButton /></Link>
        <Link to="/comics"><ComicButton /></Link>
        <Link to="/characters"><CharacterButton /></Link>
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
        <Link to="https://www.facebook.com/MarvelBR/"><FacebookButton /></Link>
      </RightWrapper>
    </Container>
  );

export default TopBar;
