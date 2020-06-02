import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './index.css';
import Home from './pages/Home';
import History from './pages/History';
import Gallery from "./pages/Gallery";
import Games from "./pages/Games";
import Links from "./pages/Links";
import GameWord from "./pages/GameWord";
import GameFindFoot from "./pages/GameFindFoot";
import GamesPaywall from "./pages/GamesPaywall";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/links" component={Links} exact={true} />
        <Route path="/history" component={History} exact={true} />
        <Route path="/gallery" component={Gallery} exact={true} />
        <Route path="/games-paywall" component={GamesPaywall} exact={true} />
        <Route path="/games" component={Games} exact={true} />
        <Route path="/games-find-foot" component={GameFindFoot} exact={true} />
        <Route path="/games-word" component={GameWord} exact={true} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
