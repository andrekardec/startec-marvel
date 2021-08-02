import React from "react";

import { ComicsContextProvider } from "@adapters/contexts/providers/ComicsProvider";
import { Grid } from "./styles";

import TopBar from "@presentation/components/TopBar";
import WelcomeArea from "@presentation/components/WelcomeArea";
import ComicsList from "@presentation/components/ComicsList";
import BattleArea from "@presentation/components/BattleArea";
import ComicFeatured from '@presentation/components/ComicFeatured';
import ComicsGallery from '@presentation/components/ComicsGallery';
import Footer from "@presentation/components/Footer";


const HomePage: React.FC = () =>
  (
    <ComicsContextProvider>
      <Grid>
        <TopBar />
        <WelcomeArea />
        <ComicsList />
        <BattleArea />
        <ComicFeatured />
        <ComicsGallery />
        <Footer />
      </Grid>
    </ComicsContextProvider>
  );

export default HomePage;
