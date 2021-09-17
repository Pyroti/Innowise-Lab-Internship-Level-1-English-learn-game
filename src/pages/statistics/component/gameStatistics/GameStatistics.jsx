import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AppConfig from '../../../../core/constants/AppConfig';
import GameScore from './styled/GameScore';
import GameScoreWrap from './styled/GameScoreWrap';

export default function GameStatistics(props) {
  const { answers, point } = props;
  const { t } = useTranslation();
  const numCorrectAnswers = answers.rightAnswers.length;
  const numWrongAnswers = answers.wrongAnswers.length;
  let sumAllAnswers = numWrongAnswers + numCorrectAnswers;
  sumAllAnswers = sumAllAnswers === AppConfig.defaultZero
    ? AppConfig.defaultOne
    : sumAllAnswers;
  const percentageCorrectAnswers = (
    (numCorrectAnswers / sumAllAnswers)
    * AppConfig.oneHundredPercent
  ).toFixed(1);

  return (
    <GameScoreWrap>
      <GameScore>{`${t('youScored')} ${point} ${t('points')}`}</GameScore>
      <GameScore>{`${t('numCorrectAnswers')} ${numCorrectAnswers}`}</GameScore>
      <GameScore>{`${t('numWrongAnswers')}  ${numWrongAnswers}`}</GameScore>
      <GameScore>
        {`${t('percentageCorrectAnswers')}  ${percentageCorrectAnswers}%`}
      </GameScore>
    </GameScoreWrap>
  );
}

GameStatistics.propTypes = {
  answers: PropTypes.oneOfType([PropTypes.object]).isRequired,
  point: PropTypes.number.isRequired,
};
