import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import languages from '../../constants/languages';
import i18n from '../../i18n/i18n';
import HeaderButtonStyled from './styled/HeaderButtonStyled';

export default function ToggleButtons() {
  const [isActive, setIsActive] = useState(true);
  const { t } = useTranslation();

  const changeLanguage = (ln) => () => {
    i18n.changeLanguage(ln);
    if (ln === languages.ru) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <ToggleButtonGroup>
      <HeaderButtonStyled
        isActive={isActive}
        onClick={changeLanguage(languages.ru)}
        value={languages.ru}
      >
        {t('ru')}
      </HeaderButtonStyled>
      <HeaderButtonStyled
        isActive={!isActive}
        onClick={changeLanguage(languages.en)}
        value={languages.en}
      >
        {t('en')}
      </HeaderButtonStyled>
    </ToggleButtonGroup>
  );
}
