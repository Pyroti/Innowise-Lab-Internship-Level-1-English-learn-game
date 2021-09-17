import React, { useContext } from 'react';
import PointsContext from '../../pointsContext';
import StatisticsContext from '../../statisticsContext';
import StartPageMain from '../start/styled/StartPageMain';
import GameAnswerStatistics from './component/gameAnswersStatistics/GameAnswersStatistics';
import GameStatistics from './component/gameStatistics/GameStatistics';
import StatisticsButtons from './component/statisticsButtons/StatisticsButtons';
import StatisticsWrap from './styled/StatisticsWrap';

export default function Statistics() {
  const [answers] = useContext(StatisticsContext);
  const [point] = useContext(PointsContext);
  const ref = React.createRef();

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
