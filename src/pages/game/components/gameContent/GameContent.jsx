import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import correctAnswerSound from '../../../../assets/music/correctAnswer.mp3';
import gameStartSound from '../../../../assets/music/gameStartSound.mp3';
import wrongAnswerSound from '../../../../assets/music/wrongAnswer.mp3';
import AppConfig from '../../../../core/constants/AppConfig';
import MainRouters from '../../../../core/constants/MainRouters';
import timerConfig from '../../../../core/constants/timerConfig';
import urls from '../../../../core/constants/urls';
import GlobalContext from '../../../../globalContext';
import GameWrapper from '../../styled/GameWrapper';
import Timer from '../timer/Timer';
import GamePointsBorder from './components/gamePointerBorder/GamePointsBorder';
import GameSoundButton from './components/gameSoundButton/GameSoundButton';
import AnswerButton from './styled/AnswerButton';
import AnswerButtonsWrap from './styled/AnswerButtonsWrap';
import ScoreRatio from './styled/ScoreRatio';
import VoiceWordButton from './styled/VoiceWordButton';
import WordCard from './styled/WordCard';

function GameContent(props) {
  const {
    words, wordId,
    shuffleTranslation, setNewPageWithWords,
    setWordId, isTurnOnSound, setIsTurnOnSound
  } = props;
  const {
    point, setPoint, setAnswers, setIsGamePage, setIsShowGameModal
  } = useContext(GlobalContext);
  const [scoreRatio, setScoreRatio] = useState(AppConfig.initialScoreRation);
  const [corNumUserAnswers, setCorNumUserAnswers] = useState(
    AppConfig.initialCorrectAnswers
  );
  const [pointsBorderValue, setPointsBorderValue] = useState(0);
  const [redirect, setRedirect] = useState(false);

  const { t } = useTranslation();

  const { audio, word } = words[wordId];
  const audioSrc = `${urls.cardsUrl}${audio}`;

  const playAudio = (audioFile) => {
    new Audio(audioFile).play();
  };

  useEffect(() => {
    playAudio(gameStartSound);
    setIsGamePage(true);
    setIsShowGameModal(false);
  }, [setIsGamePage, setIsShowGameModal]);

  const setPointInfo = () => {
    setPoint((prevPoint) => prevPoint + scoreRatio);
    setCorNumUserAnswers(
      (prevCorrectNumber) => prevCorrectNumber + 1
    );
    if (corNumUserAnswers === AppConfig.threeCorrectAnswers) {
      setScoreRatio((prevCoefPoint) => prevCoefPoint * AppConfig.multiplyСoefficient);
    } else if (corNumUserAnswers === AppConfig.sixCorrectAnswers) {
      setScoreRatio((prevCoefPoint) => prevCoefPoint * AppConfig.multiplyСoefficient);
    }
  };

  const setWindowCorrectAnswers = () => {
    setPointsBorderValue(
      (prevPointsBorderValue) => prevPointsBorderValue + 1
    );
    if (pointsBorderValue >= AppConfig.threeCorrectAnswers) {
      setPointsBorderValue(1);
    }
  };

  const setRightAnswer = () => {
    setPointInfo();
    setWindowCorrectAnswers();

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      rightAnswers: [...prevAnswers.rightAnswers, words[wordId]]
    }));
    if (isTurnOnSound) {
      playAudio(correctAnswerSound);
    }
  };

  const setWrongAnswer = () => {
    setScoreRatio(AppConfig.initialScoreRation);
    setCorNumUserAnswers(AppConfig.initialCorrectAnswers);
    setPointsBorderValue(0);
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      wrongAnswers: [...prevAnswers.wrongAnswers, words[wordId]]
    }));
    if (isTurnOnSound) {
      playAudio(wrongAnswerSound);
    }
  };

  const checkAnswer = (isAnswer) => {
    setWordId(wordId + 1);
    setNewPageWithWords();
    const isRight = words[wordId].wordTranslate === shuffleTranslation[wordId];
    if (isRight === isAnswer) {
      setRightAnswer();
    } else {
      setWrongAnswer();
    }
  };

  const onGiveRightAnswer = () => checkAnswer(true);
  const onGiveWrongAnswer = () => checkAnswer(false);
  const turnOnSound = () => playAudio(audioSrc);

  const redirectToStatistics = () => {
    setRedirect(true);
    if (isTurnOnSound) {
      playAudio(gameStartSound);
    }
  };

  if (redirect) {
    return <Redirect to={MainRouters.statistics} />;
  }

  return (
    <>
      <Timer
        seconds={timerConfig.secondsForGame}
        size={timerConfig.sizeForGameTimer}
        command={redirectToStatistics}
        isTurnOnSound={isTurnOnSound}
      />
      <GameWrapper>
        <h1>{point}</h1>

        <ScoreRatio>{`${t('playerGets')} + ${scoreRatio}`}</ScoreRatio>

        <GamePointsBorder pointsBorderValue={pointsBorderValue} />

        <WordCard>{word}</WordCard>
        <WordCard>{shuffleTranslation[wordId]}</WordCard>

        <VoiceWordButton playAudio={turnOnSound} />
        <GameSoundButton isTurnOnSound={isTurnOnSound} setIsTurnOnSound={setIsTurnOnSound} />
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
  isTurnOnSound: PropTypes.bool.isRequired,
  setIsTurnOnSound: PropTypes.func.isRequired
};

export default GameContent;
