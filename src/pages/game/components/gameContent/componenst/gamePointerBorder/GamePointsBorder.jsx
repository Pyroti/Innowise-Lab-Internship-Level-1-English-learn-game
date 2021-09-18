import PropTypes from 'prop-types';
import React from 'react';
import colors from '../../../../../../core/constants/colors';
import GamePointBorderWrap from './styled/GamePointBorderWrap';
import GamePointBorderStyled from './styled/GamePointsBorderStyled';

const oneCorrectAnswer = 1;
const twoCorrectAnswer = 2;
const threeCorrectAnswer = 3;

function GamePointsBorder(props) {
  const { pointsBorderValue } = props;
  return (
    <GamePointBorderWrap>
      <GamePointBorderStyled
        color={
          pointsBorderValue >= oneCorrectAnswer
            ? colors.pointBorder
            : colors.colorless
        }
      />
      <GamePointBorderStyled
        color={
          pointsBorderValue >= twoCorrectAnswer
            ? colors.pointBorder
            : colors.colorless
        }
      />
      <GamePointBorderStyled
        color={
          pointsBorderValue >= threeCorrectAnswer
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
