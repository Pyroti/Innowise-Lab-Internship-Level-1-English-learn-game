import CloseIcon from '@material-ui/icons/Close';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PointsContext from '../../../pointsContext';
import StatisticsContext from '../../../statisticsContext';
import AppConfig from '../../constants/AppConfig';
import MainRouters from '../../constants/MainRouters';
import HeaderButtonStyled from './styled/HeaderButtonStyled';

function CloseButton() {
  const [, setAnswers] = useContext(StatisticsContext);
  const [, setPoint] = useContext(PointsContext);

  const reset = () => {
    setAnswers({ rightAnswers: [], wrongAnswers: [] });
    setPoint(AppConfig.initialPoint);
  };

  return (
    <Link to={MainRouters.home}>
      <HeaderButtonStyled onClick={reset} isActive={false} value="close">
        <CloseIcon />
      </HeaderButtonStyled>
    </Link>
  );
}

export default CloseButton;
