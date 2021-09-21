import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colors from '../../../../../core/constants/colors';

const VoiceWordButtonStyled = styled.button`
  background-color: ${colors.colorless};
  padding: 0;
  border: none;
  cursor: pointer;
  position: absolute;
  transform: scale(1.5);
  right: 65px;
  top: 15px;
`;

const VoiceWordButton = (props) => {
  const { playAudio } = props;
  return (
    <VoiceWordButtonStyled onClick={playAudio}>
      <MusicNoteIcon />
    </VoiceWordButtonStyled>
  );
};

VoiceWordButton.propTypes = {
  playAudio: PropTypes.func.isRequired
};

export default VoiceWordButton;
