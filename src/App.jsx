import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CloseButton from './core/components/buttons/CloseButton';
import ToggleButtons from './core/components/buttons/ToggleButtons';
import AppWrapper from './core/components/styled/AppWrapper';
import StartPageHeader from './core/components/styled/StartPageHeader';
import MainRouters from './core/constants/MainRouters';
import GamePage from './pages/game/GamePage';
import StartPage from './pages/start/StartPage';
import Statistics from './pages/statistics/Statistics';
import statisticsContext from './statisticsContext';

function App() {
  const answers = {
    rightAnswers: [],
    wrongAnswers: [],
  };

  return (
    <AppWrapper>
      <BrowserRouter>
        <statisticsContext.Provider value={answers}>
          <StartPageHeader>
            <ToggleButtons />
            <CloseButton />
          </StartPageHeader>
          <Switch>
            <Route exact path={MainRouters.home} component={StartPage} />
            <Route path={MainRouters.game} component={GamePage} />
            <Route path={MainRouters.statistics} component={Statistics} />
          </Switch>
        </statisticsContext.Provider>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
