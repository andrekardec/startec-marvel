import React from 'react';

import { ComicProvider } from '@adapters/contexts/providers/ComicProvider';

import { Grid } from './styles';
import TopBar from '@presentation/components/TopBar';
import ComicPresentation from '@presentation/components/ComicPresentation';
import ComicFeatured from '@presentation/components/ComicFeatured';
import ComicGallery from '@presentation/components/ComicsGallery';
import Footer from '@presentation/components/Footer';
import { ComicsContextProvider } from '@adapters/contexts/providers/ComicsProvider';


const ComicPage: React.FC = () => (
  <ComicsContextProvider>
        <ComicProvider>
          <Grid>
            <TopBar />
            <ComicPresentation />
            <ComicFeatured />
            <ComicGallery />
            <Footer />
          </Grid>
        </ComicProvider>

        </ComicsContextProvider>

      );

export default ComicPage;
