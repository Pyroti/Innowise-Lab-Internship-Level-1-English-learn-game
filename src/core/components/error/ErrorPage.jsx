import React from 'react';
import { useTranslation } from 'react-i18next';
import ErrorPageStyled from './styled/ErrorPageStyled';

function ErrorPage() {
  const { t } = useTranslation();
  return (
    <ErrorPageStyled>
      <h1>{t('error')}</h1>
    </ErrorPageStyled>
  );
}

export default ErrorPage;
