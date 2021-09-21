import SpeakerOutlinedIcon from '@mui/icons-material/SpeakerOutlined';
import SpeakerRoundedIcon from '@mui/icons-material/SpeakerRounded';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colors from '../../../../../core/constants/colors';

const GameSoundButtonStyled = styled.button`
  background-color: ${colors.colorless};
  padding: 0;
  border: none;
  cursor: pointer;
  position: absolute;
  transform: scale(1.5);
  right: 15px;
  top: 15px;
`;

const GameSoundButton = (props) => {
  const { isTurnOnSound, setIsTurnOnSound } = props;

  const setTurnOnSound = () => {
    if (isTurnOnSound) {
      setIsTurnOnSound(false);
    } else {
      setIsTurnOnSound(true);
    }
  };

  if (isTurnOnSound) {
    return (
      <GameSoundButtonStyled onClick={setTurnOnSound}>
        <SpeakerRoundedIcon />
      </GameSoundButtonStyled>
    );
  }
  return (
    <GameSoundButtonStyled onClick={setTurnOnSound}>
      <SpeakerOutlinedIcon />
    </GameSoundButtonStyled>
  );
};

GameSoundButton.propTypes = {
  isTurnOnSound: PropTypes.bool.isRequired,
  setIsTurnOnSound: PropTypes.func.isRequired
};

export default GameSoundButton;
