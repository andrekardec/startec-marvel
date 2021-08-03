import React from 'react';
import {
  Container, TitleWrapper, ThanksBox, HappyIcon,
} from './styles';

const WelcomeArea: React.FC = () =>
  (
    <Container>
      <TitleWrapper>
        <h1>WELCOME</h1>
        <h1>WELCOME</h1>
      </TitleWrapper>
      <ThanksBox>
        <p>TO A MARVELOUS WORLD</p>
        <HappyIcon />
      </ThanksBox>
    </Container>
  );

export default WelcomeArea;
