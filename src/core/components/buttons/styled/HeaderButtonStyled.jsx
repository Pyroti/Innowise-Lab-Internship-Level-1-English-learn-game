import ToggleButton from '@material-ui/lab/ToggleButton';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colors from '../../../constants/colors';

const ToggleButtonStyled = styled(ToggleButton)`
    width: 80px;
    height: 40px;
    border-radius: 50px 0px !important;
<<<<<<< HEAD
    background-color: ${(props) => (props.isactive === 'true' ? colors.buttonHover : colors.buttonNormal)} !important;
=======
    background-color: ${(props) => (props.isActive ? colors.buttonHover : colors.buttonNormal)} !important;
>>>>>>> feature/Start-page
  &:hover{
    background-color: ${colors.buttonHover} !important;
  }
`;

<<<<<<< HEAD
/* eslint-disable react/jsx-props-no-spreading */
const HeaderButtonStyled = (props) => {
  const { isActive, ...params } = props;
  return <ToggleButtonStyled isactive={isActive.toString()} {...params} />;
=======
const HeaderButtonStyled = (props) => {
  const { isActive, ...params } = props;
  return <ToggleButtonStyled isActive={isActive} {...params} />;
>>>>>>> feature/Start-page
};

HeaderButtonStyled.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default HeaderButtonStyled;
