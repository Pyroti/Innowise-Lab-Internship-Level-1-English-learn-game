import styled from 'styled-components';
import colors from '../../../../../../../core/constants/colors';

const GamePointBorder = styled.div`
  position: relative;
  width: 40px;
  height: 60px;
  transform: skew(-20deg, 0);
  background: ${(props) => props.color};
  border: 2px solid ${colors.buttonHover};
  padding: 20px;
`;

export default GamePointBorder;
