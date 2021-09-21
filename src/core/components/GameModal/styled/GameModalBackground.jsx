import styled from 'styled-components';
import colors from '../../../constants/colors';

const GameModalBackground = styled.div`
  width: 100%;
  height: 100%;
  margin: -20px;
  background: ${colors.GameModalBackground_background};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export default GameModalBackground;
