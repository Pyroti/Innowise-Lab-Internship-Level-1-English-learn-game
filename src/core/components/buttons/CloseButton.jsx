import CloseIcon from '@material-ui/icons/Close';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import statisticsContext from '../../../statisticsContext';
import MainRouters from '../../constants/MainRouters';
import HeaderButtonStyled from './styled/HeaderButtonStyled';

function CloseButton() {
  const answers = useContext(statisticsContext);

  function reset() {
    answers.rightAnswers = [];
    answers.wrongAnswers = [];
  }

  return (
    <Link to={MainRouters.home}>
      <HeaderButtonStyled onClick={reset} isActive={false} value="close">
        <CloseIcon />
      </HeaderButtonStyled>
    </Link>
  );
}

export default CloseButton;
