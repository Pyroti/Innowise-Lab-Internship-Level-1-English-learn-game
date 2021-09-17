import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CloseButton from './core/components/buttons/CloseButton';
import ToggleButtons from './core/components/buttons/ToggleButtons';
import AppWrapper from './core/components/styled/AppWrapper';
import StartPageHeader from './core/components/styled/StartPageHeader';
import AppConfig from './core/constants/AppConfig';
import MainRouters from './core/constants/MainRouters';
import GamePage from './pages/game/GamePage';
import StartPage from './pages/start/StartPage';
import Statistics from './pages/statistics/Statistics';
import PointContext from './pointsContext';
import StatisticsContext, { initialStateStatistics } from './statisticsContext';

function App() {
  const [answers, setAnswers] = useState(initialStateStatistics);
  const [point, setPoint] = useState(AppConfig.initialPoint);

  return (
    <AppWrapper>
      <BrowserRouter>
        <StatisticsContext.Provider value={[answers, setAnswers]}>
          <PointContext.Provider value={[point, setPoint]}>
            <StartPageHeader>
              <ToggleButtons />
              <CloseButton />
            </StartPageHeader>
            <Switch>
              <Route exact path={MainRouters.home} component={StartPage} />
              <Route path={MainRouters.game} component={GamePage} />
              <Route path={MainRouters.statistics} component={Statistics} />
            </Switch>
          </PointContext.Provider>
        </StatisticsContext.Provider>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
