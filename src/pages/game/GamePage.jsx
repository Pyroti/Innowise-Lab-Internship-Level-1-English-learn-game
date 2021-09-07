import React, { useCallback, useEffect, useState } from 'react';
// import GameWrapper from './styled/GameWrapper';
import { useTranslation } from 'react-i18next';
import GameContent from './components/gameContent/GameContent';
import shuffle from './components/shuffleMethods/shuffle';
import shuffleTranslate from './components/shuffleMethods/shuffleTranslate';
import GamePageMain from './styled/GamePageMain';
import RevolvingCircle from './styled/RevolvingCircle';
import TimeElement from './styled/TimeElement';
import TimeWrapper from './styled/TimeWrapper';

function GamePage() {
  const { t } = useTranslation();
  const [wordId, setWordId] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentIndex, SetCurrentIndex] = useState(0);

  const [dictionary, setDictionary] = useState([]);
  const [shuffleTranslation, setShuffleTranslation] = useState([]);

  const [time, setTime] = useState(5);
  const seconds = 1000;

  const [isError, setIsError] = useState(false);

  const [pages, setPages] = useState([]);

  useState(() => {
    const pg = Array.from({ length: 29 }, (item, index) => index);
    const shufflePg = shuffle(pg);
    setPages(shufflePg);
  });

  const wordsAnswered = 15;
  const group = 2;
  const API_URL = `https://afternoon-falls-25894.herokuapp.com/words?page=${pages[pageNumber]}&group=${group}`;

  const dataProcessing = useCallback((data) => {
    const words = shuffle(data);
    const translates = data.map((item) => item.wordTranslate);
    const shuffleWord = shuffleTranslate(translates);
    setDictionary((prevDictionary) => prevDictionary.concat(words));
    setShuffleTranslation(
      (prevShuffleTranslation) => prevShuffleTranslation.concat(shuffleWord),
    );
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setIsError(false);
      try {
        const response = await fetch(API_URL);
        const apiData = await response.json();
        dataProcessing(apiData);
      } catch (error) {
        setIsError(true);
      }
    };
    loadData();
  }, [API_URL, dataProcessing]);

  useEffect(() => {
    let timerId = null;

    if (time) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, seconds);
    }

    return () => {
      clearInterval(timerId);
    };
  });

  function setApi() {
    if (currentIndex === wordsAnswered) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      SetCurrentIndex(-5);
    } else {
      SetCurrentIndex((prevCurrentIndex) => prevCurrentIndex + 1);
    }
  }

  if (time > 0) {
    return (
      <GamePageMain>
        <TimeWrapper>
          <RevolvingCircle />
          <TimeElement>{time}</TimeElement>
        </TimeWrapper>
        <h2>{t('getReady')}</h2>
      </GamePageMain>
    );
  }

  return (
    <>
      <GamePageMain>
        {isError && <div>{t('error')}</div>}
        {(dictionary.length === 0) ? (
          <div>{t('loading')}</div>
        ) : (
          <GameContent
            setWordId={setWordId}
            setApi={setApi}
            wordId={wordId}
            words={dictionary}
            shuffleTranslation={shuffleTranslation}
          />
        )}
      </GamePageMain>
    </>
  );
}

export default GamePage;
