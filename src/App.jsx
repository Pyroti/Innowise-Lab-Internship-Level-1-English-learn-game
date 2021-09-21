import React, { useMemo, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import countdown from './assets/music/countdown.mp3';
import CloseButton from './core/components/buttons/CloseButton';
import ToggleButtons from './core/components/buttons/ToggleButtons';
import AppWrapper from './core/components/styled/AppWrapper';
import StartPageHeader from './core/components/styled/StartPageHeader';
import AppConfig from './core/constants/AppConfig';
import MainRouters from './core/constants/MainRouters';
import GlobalContext, { initialStateStatistics } from './globalContext';
import GamePage from './pages/game/GamePage';
import StartPage from './pages/start/StartPage';
import Statistics from './pages/statistics/Statistics';

function App() {
  const [answers, setAnswers] = useState(initialStateStatistics);
  const [point, setPoint] = useState(AppConfig.initialPoint);
  const soundTimer = useMemo(() => new Audio(countdown), []);
  const [isGamePage, setIsGamePage] = useState(true);
  const [isShowGameModal, setIsShowGameModal] = useState(false);
  const [isTimerPlay, setIsTimerPlay] = useState(true);
  const [isTurnOnSound, setIsTurnOnSound] = useState(true);

  const reset = () => {
    setAnswers(initialStateStatistics);
    setPoint(AppConfig.initialPoint);
    soundTimer.pause();
    soundTimer.currentTime = 0;
  };

  const valuesContext = {
    answers,
    setAnswers,
    point,
    setPoint,
    soundTimer,
    reset,
    isGamePage,
    setIsGamePage,
    isShowGameModal,
    setIsShowGameModal,
    isTimerPlay,
    setIsTimerPlay,
    isTurnOnSound,
    setIsTurnOnSound
  };

  return (
    <AppWrapper>
      <BrowserRouter>
        <GlobalContext.Provider value={valuesContext}>
          <StartPageHeader>
            <ToggleButtons />
            <CloseButton />
          </StartPageHeader>
          <Switch>
            <Route exact path={MainRouters.home} component={StartPage} />
            <Route path={MainRouters.game} component={GamePage} />
            <Route path={MainRouters.statistics} component={Statistics} />
          </Switch>
        </GlobalContext.Provider>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
