import React from 'react';

import TopBar from '@presentation/components/TopBar';
import ComicFeatured from '@presentation/components/ComicFeatured';
import ComicGallery from '@presentation/components/ComicsGallery';
import Footer from '@presentation/components/Footer';
import { ComicsContextProvider } from '@adapters/contexts/providers/ComicsProvider';
import { CharacterProvider } from '@adapters/contexts/providers/CharacterProvider';
import CharacterPresentation from '@presentation/components/CharacterPresentation';
import { Grid } from './styles';

const CharacterPage: React.FC = () =>
  (
    <ComicsContextProvider>
      <CharacterProvider>
        <Grid>
          <TopBar />
          <CharacterPresentation />
          <ComicFeatured />
          <ComicGallery />
          <Footer />
        </Grid>
      </CharacterProvider>

    </ComicsContextProvider>

  );

export default CharacterPage;
