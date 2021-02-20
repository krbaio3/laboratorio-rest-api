import { CharacterCollectionScene, CharacterScene } from 'scenes';
import { HashRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import { switchRoutes } from './routes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.hotelCollection]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.createHotel}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editHotel}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.detailCharacter}
          component={CharacterScene}
        />
      </Switch>
    </HashRouter>
  );
};
