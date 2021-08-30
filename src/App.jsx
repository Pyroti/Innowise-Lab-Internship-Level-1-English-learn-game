import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CloseButton from './core/components/buttons/CloseButton';
import ToggleButtons from './core/components/buttons/ToggleButtons';
import AppWrapper from './core/components/styled/AppWrapper';
import StartPageHeader from './core/components/styled/StartPageHeader';
import GamePage from './core/pages/game/GamePage';
import StartPage from './core/pages/start/StartPage';

function App() {
  return (
    <AppWrapper>
      <Router>
        <StartPageHeader>
          <ToggleButtons />
          <CloseButton />
        </StartPageHeader>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/Game" component={GamePage} />
          {/* <Route path="/Statistics" component={Statistics} />
  <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
