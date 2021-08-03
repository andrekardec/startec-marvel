import React from 'react';

import { CharactersProvider } from '@adapters/contexts/providers/CharactersProvider';

import TopBar from '@presentation/components/TopBar';
import Footer from '@presentation/components/Footer';
import CharacterBanner from '@presentation/components/CharacterBanner';
import CharactersWrapper from '@presentation/components/CharactersWrapper';
import { Grid } from './styles';

const CharactersPage: React.FC = () =>
  (
    <CharactersProvider>
      <Grid>
        <TopBar />
        <CharacterBanner />
        <CharactersWrapper />
        <Footer />
      </Grid>
    </CharactersProvider>

  );

export default CharactersPage;
