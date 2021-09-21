import styled from 'styled-components';
import colors from '../../../../../../../core/constants/colors';

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

export default GameSoundButtonStyled;
