import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { Link } from 'react-router-dom';
import HeaderButtonStyled from './styled/HeaderButtonStyled';

function CloseButton() {
  return (
    <Link to="/">
      <HeaderButtonStyled isActive={false} value="fuck">
        <CloseIcon />
      </HeaderButtonStyled>
    </Link>
  );
}

export default CloseButton;
