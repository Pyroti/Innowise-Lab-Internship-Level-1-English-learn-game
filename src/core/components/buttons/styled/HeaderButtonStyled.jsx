import ToggleButton from '@material-ui/lab/ToggleButton';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colors from '../../../constants/colors';

const ToggleButtonStyled = styled(ToggleButton)`
  && {
    width: 80px;
    height: 40px;
    border-radius: 50px 0px !important;
    background-color: ${(props) => (props.isActive ? colors.buttonHover : colors.buttonNormal)};
    cursor: pointer;
    &:hover {
      background-color: ${colors.buttonHover};
    }
  }
`;

const HeaderButtonStyled = (props) => {
  const { isActive, ...params } = props;
  return <ToggleButtonStyled isActive={isActive} {...params} />;
};

HeaderButtonStyled.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default HeaderButtonStyled;
