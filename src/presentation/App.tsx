import React from "react";

import GlobalStyles from "@presentation/styles/GlobalStyles";

import { CustomThemeProvider } from "@adapters/contexts/providers/CustomThemeProvider";

const App: React.FC = () =>
  (
    <>
      <CustomThemeProvider>
        <h1>Andre</h1>
        <GlobalStyles />
      </CustomThemeProvider>
    </>
  );

export default App;
