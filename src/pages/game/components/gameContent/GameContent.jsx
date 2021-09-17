import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import correctAnswerSound from '../../../../assets/music/correctAnswer.mp3';
import wrongAnswerSound from '../../../../assets/music/wrongAnswer.mp3';
import AppConfig from '../../../../core/constants/AppConfig';
import MainRouters from '../../../../core/constants/MainRouters';
import urls from '../../../../core/constants/urls';
import PointsContext from '../../../../pointsContext';
import StatisticsContext from '../../../../statisticsContext';
import GameWrapper from '../../styled/GameWrapper';
import Timer from '../timer/Timer';
import GamePointsBorder from './componenst/gamePointerBorder/GamePointsBorder';
import AnswerButton from './styled/AnswerButton';
import AnswerButtonsWrap from './styled/AnswerButtonsWrap';
import MusicButton from './styled/MusicButton';
import ScoreRatio from './styled/ScoreRatio';
import WordCard from './styled/WordCard';

function GameContent({
  words,
  wordId,
  shuffleTranslation,
  setNewPageWithWords,
  setWordId,
}) {
  const [, setAnswers] = useContext(StatisticsContext);
  const [point, setPoint] = useContext(PointsContext);
  const [scoreRatio, setScoreRatio] = useState(AppConfig.initialScoreRation);
  const [corNumUserAnswers, setCorNumUserAnswers] = useState(
    AppConfig.initialCorrectAnswers,
  );
  const [pointsBorderValue, setPointsBorderValue] = useState(
    AppConfig.initialPointsBorderValue,
  );
  const [redirect, setRedirect] = useState(false);

  const { t } = useTranslation();

  const { audio, word } = words[wordId];
  const audioSrc = `${urls.cardsUrl}${audio}`;

  const playAudio = (audioFile) => {
    new Audio(audioFile).play();
  };

  const setPointInfo = () => {
    setPoint((prevPoint) => prevPoint + scoreRatio);
    setCorNumUserAnswers(
      (prevCorrectNumber) => prevCorrectNumber + AppConfig.defaultOne,
    );
    if (corNumUserAnswers === AppConfig.threeCorrectAnswers) {
      setScoreRatio(
        (prevCoefPoint) => prevCoefPoint * AppConfig.multiplyСoefficient,
      );
    } else if (corNumUserAnswers === AppConfig.SixCorrectAnswers) {
      setScoreRatio(
        (prevCoefPoint) => prevCoefPoint * AppConfig.multiplyСoefficient,
      );
    }
  };

  const setWindowCorrectAnswers = () => {
    setPointsBorderValue(
      (prevPointsBorderValue) => prevPointsBorderValue + AppConfig.defaultOne,
    );
    if (pointsBorderValue >= AppConfig.threeCorrectAnswers) {
      setPointsBorderValue(AppConfig.defaultOne);
    }
  };

  const setRightAnswer = () => {
    setPointInfo();
    setWindowCorrectAnswers();
    playAudio(correctAnswerSound);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      rightAnswers: [...prevAnswers.rightAnswers, words[wordId]],
    }));
  };

  const setWrongAnswer = () => {
    setScoreRatio(AppConfig.initialValueScoreRatio);
    setCorNumUserAnswers(AppConfig.initialCorrectAnswers);
    setPointsBorderValue(AppConfig.initialPointsBorderValue);
    playAudio(wrongAnswerSound);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      wrongAnswers: [...prevAnswers.wrongAnswers, words[wordId]],
    }));
  };

  const checkAnswer = (isAnswer) => {
    setWordId(wordId + AppConfig.defaultOne);
    setNewPageWithWords();
    const isRight = words[wordId].wordTranslate === shuffleTranslation[wordId];
    if (isRight === isAnswer) {
      setRightAnswer();
    } else {
      setWrongAnswer();
    }
  };

  const redirectToStatistics = () => setRedirect(true);
  const onGiveRightAnswer = () => checkAnswer(true);
  const onGiveWrongAnswer = () => checkAnswer(false);
  const turnOnSound = () => playAudio(audioSrc);

  if (redirect) {
    return <Redirect to={MainRouters.statistics} />;
  }

  return (
    <>
      <Timer
        seconds={AppConfig.secondsForGame}
        size={AppConfig.sizeForGameTimer}
        command={redirectToStatistics}
      />
      <GameWrapper>
        <h1>{point}</h1>

        <ScoreRatio>{`${t('playerGets')} + ${scoreRatio}`}</ScoreRatio>

        <GamePointsBorder pointsBorderValue={pointsBorderValue} />

        <WordCard>{word}</WordCard>
        <WordCard>{shuffleTranslation[wordId]}</WordCard>

        <MusicButton playAudio={turnOnSound} />

        <AnswerButtonsWrap>
          <AnswerButton onClick={onGiveRightAnswer} type="button">
            {t('right')}
          </AnswerButton>
          <AnswerButton onClick={onGiveWrongAnswer} type="button">
            {t('wrong')}
          </AnswerButton>
        </AnswerButtonsWrap>
      </GameWrapper>
    </>
  );
}

GameContent.propTypes = {
  words: PropTypes.instanceOf(Array).isRequired,
  wordId: PropTypes.number.isRequired,
  shuffleTranslation: PropTypes.instanceOf(Array).isRequired,
  setNewPageWithWords: PropTypes.func.isRequired,
  setWordId: PropTypes.func.isRequired,
};

export default GameContent;
