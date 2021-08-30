import React from 'react';
import { useTranslation } from 'react-i18next';
import StartButton from './styled/StartButton';

function StartPageMainContent(params) {
  const { startGame, isStart, time } = params;
  const { t } = useTranslation();

  if (!isStart) {
    return (
      <>
        <h1>{t('welcome')}</h1>
        <StartButton onClick={startGame}>{t('start')}</StartButton>
      </>
    );
  }
  return (
    <>
      <h1>{time}</h1>
      <h2>{t('getReady')}</h2>
    </>
  );
}

export default StartPageMainContent;
