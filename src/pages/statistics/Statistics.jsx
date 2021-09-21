import React, { useContext, useEffect } from 'react';
import GlobalContext from '../../globalContext';
import StartPageMain from '../start/styled/StartPageMain';
import GameAnswerStatistics from './component/gameAnswersStatistics/GameAnswersStatistics';
import GameStatistics from './component/gameStatistics/GameStatistics';
import StatisticsButtons from './component/statisticsButtons/StatisticsButtons';
import StatisticsWrap from './styled/StatisticsWrap';

export default function Statistics() {
  const {
    answers, point, soundTimer, setIsGamePage
  } = useContext(GlobalContext);
  const ref = React.createRef();

  useEffect(() => {
    soundTimer.pause();
    soundTimer.currentTime = 0;
  }, [soundTimer]);

  useEffect(() => {
    setIsGamePage(false);
  }, [setIsGamePage]);

  return (
    <StartPageMain>
      <StatisticsWrap ref={ref}>
        <GameStatistics answers={answers} point={point} />
        <GameAnswerStatistics answers={answers} />
      </StatisticsWrap>
      <StatisticsButtons trRef={ref} />
    </StartPageMain>
  );
}
