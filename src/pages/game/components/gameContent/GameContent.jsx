import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MainRouters from '../../../../core/constants/MainRouters';
import statisticsContext from '../../../../statisticsContext';
import GameWrapper from '../../styled/GameWrapper';

function GameContent({
  words, wordId, shuffleTranslation, setApi, setWordId,
}) {
  const answers = useContext(statisticsContext);
  const [point, setPoint] = useState(0);
  const [coefPoint, setCoefPoint] = useState(1);
  const [correctNumber, setCorrectNumber] = useState(0);
  const { t } = useTranslation();

  const { audio, image, word } = words[wordId];
  const audioSrc = `https://raw.githubusercontent.com/Pyroti/rslang-data/master/${audio}`;
  const imageSrc = `https://raw.githubusercontent.com/Pyroti/rslang-data/master/${image}`;

  function playAudio() {
    new Audio(audioSrc).play();
  }

  function setPointInfo() {
    setPoint((prevPoint) => prevPoint + (10 * coefPoint));
    setCorrectNumber((prevCorrectNumber) => prevCorrectNumber + 1);
    if (correctNumber === 3) {
      setCoefPoint((prevCoefPoint) => prevCoefPoint * 2);
    } else if (correctNumber === 6) {
      setCoefPoint((prevCoefPoint) => prevCoefPoint * 2);
    }
  }

  function answer(isAnswer) {
    setWordId(wordId + 1);
    setApi();
    const isRight = (words[wordId].wordTranslate === shuffleTranslation[wordId]);
    if (isRight === isAnswer) {
      setPointInfo();
      answers.rightAnswers.push(words[wordId]);
    } else {
      setCoefPoint(1);
      setCorrectNumber(1);
      answers.wrongAnswers.push(words[wordId]);
    }
  }

  return (
    <GameWrapper>
      <p>{point}</p>
      <p>
        {t('playerGets')}
        {' '}
        +
        {10 * coefPoint}
      </p>
      <p>{word}</p>
      <br />
      <p>{shuffleTranslation[wordId]}</p>
      <img src={imageSrc} alt="images" />
      <br />
      <button type="button" onClick={playAudio}>Play audio</button>
      <button onClick={() => answer(true)} type="button">{t('right')}</button>
      <button onClick={() => answer(false)} type="button">{t('wrong')}</button>
      <Link to={MainRouters.statistics}>
        <button type="button">Statistics</button>
      </Link>
    </GameWrapper>
  );
}

GameContent.propTypes = {
  words: PropTypes.instanceOf(Array).isRequired,
  wordId: PropTypes.number.isRequired,
  shuffleTranslation: PropTypes.instanceOf(Array).isRequired,
  setApi: PropTypes.func.isRequired,
  setWordId: PropTypes.func.isRequired,
};

export default GameContent;
