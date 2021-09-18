import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colors from '../../../../../core/constants/colors';

const MusicButtonStyled = styled.button`
  background-color: ${colors.colorless};
  padding: 0;
  border: none;
  cursor: pointer;
  position: absolute;
  transform: scale(1.5);
  right: 15px;
  top: 15px;
`;

const MusicButton = (props) => {
  const { playAudio } = props;
  return (
    <MusicButtonStyled onClick={playAudio}>
      <MusicNoteIcon />
    </MusicButtonStyled>
  );
};

MusicButton.propTypes = {
  playAudio: PropTypes.func.isRequired
};

export default MusicButton;
