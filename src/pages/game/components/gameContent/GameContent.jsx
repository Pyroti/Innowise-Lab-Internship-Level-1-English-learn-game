import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import correctAnswerSound from '../../../../assets/music/correctAnswer.mp3';
import wrongAnswerSound from '../../../../assets/music/wrongAnswer.mp3';
import AppConfig from '../../../../core/constants/AppConfig';
import MainRouters from '../../../../core/constants/MainRouters';
import timerConfig from '../../../../core/constants/timerConfig';
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

const multiplyСoefficient = 2;
const initialCorrectAnswers = 1;
const initialScoreRation = 10;
const initialValueScoreRatio = 10;
const threeCorrectAnswers = 3;
const sixCorrectAnswers = 6;
const initialPointsBorderValue = 0;

function GameContent(props) {
  const {
    words, wordId, shuffleTranslation, setNewPageWithWords, setWordId
  } = props;
  const [, setAnswers] = useContext(StatisticsContext);
  const [point, setPoint] = useContext(PointsContext);
  const [scoreRatio, setScoreRatio] = useState(initialScoreRation);
  const [corNumUserAnswers, setCorNumUserAnswers] = useState(
    initialCorrectAnswers
  );
  const [pointsBorderValue, setPointsBorderValue] = useState(
    initialPointsBorderValue
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
      (prevCorrectNumber) => prevCorrectNumber + AppConfig.defaultOne
    );
    if (corNumUserAnswers === threeCorrectAnswers) {
      setScoreRatio((prevCoefPoint) => prevCoefPoint * multiplyСoefficient);
    } else if (corNumUserAnswers === sixCorrectAnswers) {
      setScoreRatio((prevCoefPoint) => prevCoefPoint * multiplyСoefficient);
    }
  };

  const setWindowCorrectAnswers = () => {
    setPointsBorderValue(
      (prevPointsBorderValue) => prevPointsBorderValue + AppConfig.defaultOne
    );
    if (pointsBorderValue >= threeCorrectAnswers) {
      setPointsBorderValue(AppConfig.defaultOne);
    }
  };

  const setRightAnswer = () => {
    setPointInfo();
    setWindowCorrectAnswers();
    playAudio(correctAnswerSound);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      rightAnswers: [...prevAnswers.rightAnswers, words[wordId]]
    }));
  };

  const setWrongAnswer = () => {
    setScoreRatio(initialValueScoreRatio);
    setCorNumUserAnswers(initialCorrectAnswers);
    setPointsBorderValue(initialPointsBorderValue);
    playAudio(wrongAnswerSound);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      wrongAnswers: [...prevAnswers.wrongAnswers, words[wordId]]
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
        seconds={timerConfig.secondsForGame}
        size={timerConfig.sizeForGameTimer}
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
  setWordId: PropTypes.func.isRequired
};

export default GameContent;
