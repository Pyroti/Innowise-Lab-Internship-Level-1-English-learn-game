import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Loader from '../../core/components/styled/Loader';
import AppConfig from '../../core/constants/AppConfig';
import timerConfig from '../../core/constants/timerConfig';
import urls from '../../core/constants/urls';
import GameContent from './components/gameContent/GameContent';
import shuffle from './components/shuffleMethods/shuffle';
import shuffleTranslate from './components/shuffleMethods/shuffleTranslate';
import Timer from './components/timer/Timer';
import GamePageMain from './styled/GamePageMain';

const initialWordId = 0;
const initialPageNumber = 0;
const initialCurrentIndex = 0;
const wordsAnswered = 15;
const group = 3;
const numberOfPages = 29;
const offsetByFive = -5;

function GamePage() {
  const { t } = useTranslation();
  const [wordId, setWordId] = useState(initialWordId);
  const [pageNumber, setPageNumber] = useState(initialPageNumber);
  const [currentIndex, setCurrentIndex] = useState(initialCurrentIndex);
  const [isTimeLoader, setIsTimeLoader] = useState(false);

  const [dictionary, setDictionary] = useState([]);
  const [shuffleTranslation, setShuffleTranslation] = useState([]);

  const [isError, setIsError] = useState(false);

  const [pages, setPages] = useState([]);

  useState(() => {
    const pg = Array.from({ length: numberOfPages }, (item, index) => index);
    const shufflePg = shuffle(pg);
    setPages(shufflePg);
  });

  const wordsUrl = `${urls.wordsUrl}/words?page=${pages[pageNumber]}&group=${group}`;

  const receivedDataProcessing = useCallback((data) => {
    const words = shuffle(data);
    const translates = data.map((item) => item.wordTranslate);
    const shuffleWord = shuffleTranslate(translates);
    setDictionary((prevDictionary) => prevDictionary.concat(words));
    setShuffleTranslation((prevShuffleTranslation) => prevShuffleTranslation.concat(shuffleWord));
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setIsError(false);
      try {
        const response = await fetch(wordsUrl);
        const apiData = await response.json();
        receivedDataProcessing(apiData);
      } catch (error) {
        setIsError(true);
      }
    };
    loadData();
  }, [wordsUrl, receivedDataProcessing]);

  const setNewPageWithWords = () => {
    if (currentIndex === wordsAnswered) {
      setPageNumber((prevPageNumber) => prevPageNumber + AppConfig.defaultOne);
      setCurrentIndex(offsetByFive);
    } else {
      setCurrentIndex(
        (prevCurrentIndex) => prevCurrentIndex + AppConfig.defaultOne
      );
    }
  };

  const setLoaderTime = () => setIsTimeLoader(true);

  if (!isTimeLoader) {
    return (
      <GamePageMain>
        <Timer seconds={timerConfig.secondsReadyGame} command={setLoaderTime} />
        <h2>{t('getReady')}</h2>
      </GamePageMain>
    );
  }

  if (isError) {
    return (
      <GamePageMain>
        <div>{t('error')}</div>
      </GamePageMain>
    );
  }

  return (
    <GamePageMain>
      {dictionary.length === AppConfig.defaultZero ? (
        <Loader />
      ) : (
        <GameContent
          setWordId={setWordId}
          setNewPageWithWords={setNewPageWithWords}
          wordId={wordId}
          words={dictionary}
          shuffleTranslation={shuffleTranslation}
        />
      )}
    </GamePageMain>
  );
}

export default GamePage;
