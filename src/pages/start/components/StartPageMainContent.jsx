import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MainRouters from '../../../core/constants/MainRouters';
import StartButton from './styled/StartButton';

function StartPageMainContent() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('welcome')}</h1>
      <Link to={MainRouters.game}>
        <StartButton>{t('start')}</StartButton>
      </Link>
    </>
  );
}

export default StartPageMainContent;
