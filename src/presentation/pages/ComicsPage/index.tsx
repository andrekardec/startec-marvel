import React from 'react';

import TopBar from '@presentation/components/TopBar';
import Footer from '@presentation/components/Footer';
import ComicsBanner from '@presentation/components/ComicsBanner';
import ComicsGalleryWrapper from '@presentation/components/ComicsGalleryWrapper';
import { ComicsContextProvider } from '@adapters/contexts/providers/ComicsProvider';
import { Grid } from './styles';

const ComicsPage: React.FC = () =>
  (
    <ComicsContextProvider>
      <Grid>
        <TopBar />
        <ComicsBanner />
        <ComicsGalleryWrapper />
        <Footer />
      </Grid>
    </ComicsContextProvider>

  );

export default ComicsPage;
