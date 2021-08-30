import ToggleButton from '@material-ui/lab/ToggleButton';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colors from '../../../constants/colors';

const ToggleButtonStyled = styled(ToggleButton)`
    width: 80px;
    height: 40px;
    border-radius: 50px 0px !important;
    background-color: ${(props) => (props.isactive === 'true' ? colors.buttonHover : colors.buttonNormal)} !important;
  &:hover{
    background-color: ${colors.buttonHover} !important;
  }
`;

/* eslint-disable react/jsx-props-no-spreading */
const HeaderButtonStyled = (props) => {
  const { isActive, ...params } = props;
  return <ToggleButtonStyled isactive={isActive.toString()} {...params} />;
};

HeaderButtonStyled.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default HeaderButtonStyled;
