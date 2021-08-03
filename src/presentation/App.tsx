/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import {
  BrowserRouter, Route, Switch, RouteComponentProps,
} from 'react-router-dom';
import appRoutes from '@adapters/infrastructure/http/routes/app.routes';

import GlobalStyles from '@presentation/styles/GlobalStyles';
import { CustomThemeProvider } from '@adapters/contexts/providers/CustomThemeProvider';
import { InitialContextProvider } from '@adapters/contexts/providers/InitialContextProvider';

const App: React.FC = () =>
  (
    <>
      <InitialContextProvider>
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
      </InitialContextProvider>
    </>
  );

export default App;
