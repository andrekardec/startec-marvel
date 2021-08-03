import React from 'react';

import { ComicProvider } from '@adapters/contexts/providers/ComicProvider';

import TopBar from '@presentation/components/TopBar';
import ComicPresentation from '@presentation/components/ComicPresentation';
import ComicFeatured from '@presentation/components/ComicFeatured';
import Footer from '@presentation/components/Footer';
import { ComicsContextProvider } from '@adapters/contexts/providers/ComicsProvider';
import { Grid } from './styles';

const ComicPage: React.FC = () =>
  (
    <ComicsContextProvider>
      <ComicProvider>
        <Grid>
          <TopBar />
          <ComicPresentation />
          <ComicFeatured />
          <Footer />
        </Grid>
      </ComicProvider>

    </ComicsContextProvider>

  );

export default ComicPage;
