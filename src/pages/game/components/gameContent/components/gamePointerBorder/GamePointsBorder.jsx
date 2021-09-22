import PropTypes from 'prop-types';
import React from 'react';
import AppConfig from '../../../../../../core/constants/AppConfig';
import colors from '../../../../../../core/constants/colors';
import GamePointBorderWrap from './styled/GamePointBorderWrap';
import GamePointBorderStyled from './styled/GamePointsBorderStyled';

function GamePointsBorder(props) {
  const { pointsBorderValue } = props;
  return (
    <GamePointBorderWrap>
      <GamePointBorderStyled
        color={
          pointsBorderValue >= AppConfig.oneCorrectAnswer
            ? colors.pointBorder
            : colors.colorless
        }
      />
      <GamePointBorderStyled
        color={
          pointsBorderValue >= AppConfig.twoCorrectAnswers
            ? colors.pointBorder
            : colors.colorless
        }
      />
      <GamePointBorderStyled
        color={
          pointsBorderValue >= AppConfig.threeCorrectAnswers
            ? colors.pointBorder
            : colors.colorless
        }
      />
    </GamePointBorderWrap>
  );
}

GamePointsBorder.propTypes = {
  pointsBorderValue: PropTypes.number.isRequired
};

export default GamePointsBorder;
