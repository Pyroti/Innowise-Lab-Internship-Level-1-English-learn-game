import styled from 'styled-components';
import color from '../../../constants/colors';

const GameModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: ${color.GameModalContent_color};
  p {
    margin: 20px 0 25px;
    text-align: center;
  }
  button {
    padding: 10px 24px;
    background: ${color.GameModalContent_button_background};
    color: ${color.GameModalContent_button_color};
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;

export default GameModalContent;
