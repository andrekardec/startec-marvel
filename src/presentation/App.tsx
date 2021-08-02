import React from "react";

import {
  BrowserRouter, Route, Switch, RouteComponentProps,
} from "react-router-dom";
import appRoutes from "@adapters/infrastructure/http/routes/app.routes";

import GlobalStyles from "@presentation/styles/GlobalStyles";
import { CustomThemeProvider } from "@adapters/contexts/providers/CustomThemeProvider";

const App: React.FC = () =>
  (
    <>
      <CustomThemeProvider>
        <BrowserRouter>
          <Switch>
            {appRoutes.map((route) =>
              (
                <Route
                  key={route.name}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) =>
                    (
                      <route.component
                        name={route.name}
                        {...props}
                        {...route.props}
                      />
                    )}
                />
              ))}
          </Switch>
        </BrowserRouter>
        <GlobalStyles />
      </CustomThemeProvider>
    </>
  );

export default App;