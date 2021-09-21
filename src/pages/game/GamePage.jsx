import React, {
  useCallback, useContext, useEffect, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import ErrorPage from '../../core/components/error/ErrorPage';
import Loader from '../../core/components/styled/Loader';
import AppConfig from '../../core/constants/AppConfig';
import timerConfig from '../../core/constants/timerConfig';
import urls from '../../core/constants/urls';
import GlobalContext from '../../globalContext';
import GameContent from './components/gameContent/GameContent';
import shuffle from './components/shuffleMethods/shuffle';
import shuffleTranslate from './components/shuffleMethods/shuffleTranslate';
import Timer from './components/timer/Timer';
import GamePageMain from './styled/GamePageMain';

function GamePage() {
  const { t } = useTranslation();
  const [wordId, setWordId] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTimeLoader, setIsTimeLoader] = useState(false);

  const [dictionary, setDictionary] = useState([]);
  const [shuffleTranslation, setShuffleTranslation] = useState([]);

  const [isError, setIsError] = useState(false);

  const [pages, setPages] = useState([]);
  const [group, setGroup] = useState([]);

  const { isTurnOnSound, setIsTurnOnSound } = useContext(GlobalContext);

  useState(() => {
    const arrayOfPages = Array.from(
      { length: AppConfig.numberOfPages },
      (item, index) => index
    );
    const shuffleArrayOfPages = shuffle(arrayOfPages);
    setPages(shuffleArrayOfPages);
  });

  useState(() => {
    const arrayOfGroups = Array.from(
      { length: AppConfig.numberOfGroups },
      (item, index) => index
    );
    const shuffleArrayOfPages = shuffle(arrayOfGroups);
    setGroup(shuffleArrayOfPages[0]);
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
    if (currentIndex === AppConfig.wordsAnswered) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      setCurrentIndex(AppConfig.offsetByFive);
    } else {
      setCurrentIndex((prevCurrentIndex) => prevCurrentIndex + 1);
    }
  };

  const setLoaderTime = () => setIsTimeLoader(true);

  if (!isTimeLoader) {
    return (
      <GamePageMain>
        <Timer
          seconds={timerConfig.secondsReadyGame}
          command={setLoaderTime}
          isTurnOnSound={isTurnOnSound}
        />
        <h2>{t('getReady')}</h2>
      </GamePageMain>
    );
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <GamePageMain>
      {dictionary.length === 0 ? (
        <Loader />
      ) : (
        <GameContent
          setWordId={setWordId}
          setNewPageWithWords={setNewPageWithWords}
          wordId={wordId}
          words={dictionary}
          shuffleTranslation={shuffleTranslation}
          isTurnOnSound={isTurnOnSound}
          setIsTurnOnSound={setIsTurnOnSound}
        />
      )}
    </GamePageMain>
  );
}

export default GamePage;
