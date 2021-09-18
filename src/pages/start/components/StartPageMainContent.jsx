import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MainRouters from '../../../core/constants/MainRouters';
import StartButton from './styled/StartButton';
import Welcome from './styled/Welcome';

function StartPageMainContent() {
  const { t } = useTranslation();

  return (
    <>
      <Welcome>{t('welcome')}</Welcome>
      <Link to={MainRouters.game}>
        <StartButton>{t('start')}</StartButton>
      </Link>
    </>
  );
}

export default StartPageMainContent;
