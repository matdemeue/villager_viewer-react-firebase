import React, {} from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { FirebaseProvider, FirestoreProvider } from './services';
import { RouteWithLayout } from './utilities';

import { BaseLayout } from './layouts';
import { HomePage, VillagersPage, VillagersDetailPage} from './pages';

import * as Routes from './routes';

import './App.scss';

function App() {
  return (
    <div className="app">
      <FirebaseProvider>
        <FirestoreProvider>
          <Router basename={'/eindwerk-matdemeue'}>
            <Switch>
              <RouteWithLayout exact path={Routes.LANDING} layout={ BaseLayout } component={ HomePage }/>
              <Redirect from={Routes.HOME} to={Routes.LANDING}/>
              <RouteWithLayout exact path={Routes.VILLAGER_DETAIL} layout={ BaseLayout } component={ VillagersDetailPage }/>
              <RouteWithLayout exact path={Routes.VILLAGERS} layout={ BaseLayout } component={ VillagersPage }/>
            </Switch>
          </Router>
        </FirestoreProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
