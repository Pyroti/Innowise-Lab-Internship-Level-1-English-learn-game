import styled from 'styled-components';
import colors from '../../../core/constants/colors';

const GameWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.backgroundContentWrapper};
  padding: 20px;
  box-shadow: 4px 4px 8px 0px ${colors.gameShadow};
  @media (max-width: 768px) {
    width: 350px;
    height: 450px;
  }
`;

export default GameWrapper;
