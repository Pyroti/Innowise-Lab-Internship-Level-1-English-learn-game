import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import React, { useState } from 'react';
import i18n from '../../i18n/i18n';
import HeaderButtonStyled from './styled/HeaderButtonStyled';

export default function ToggleButtons() {
  const [isActive, setIsActive] = useState(true);

  const changeLanguage = (ln) => () => {
    i18n.changeLanguage(ln);
    if (ln === 'ru') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <ToggleButtonGroup>
      <HeaderButtonStyled isActive={isActive} onClick={changeLanguage('ru')} value="ru">
        RU
      </HeaderButtonStyled>
      <HeaderButtonStyled isActive={!isActive} onClick={changeLanguage('en')} value="en">
        ENG
      </HeaderButtonStyled>
    </ToggleButtonGroup>
  );
}
