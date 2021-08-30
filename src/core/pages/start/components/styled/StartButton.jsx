import styled from 'styled-components';
import arrowRight from '../../../../../assets/arrow-right.svg';
import color from '../../../../constants/colors';

const StartButton = styled.div`
  font-size: 20px;
  cursor: pointer;
  color: ${color.appColor};
  margin-top: 100px;
  display: flex;
  align-items: center;
  z-index: 10;
  padding: 10px;
  border: 3px ${color.transparent} solid;

  &::after {
    content: '';
    background-image: url("${arrowRight}");
    background-size: 100% 100%;
    width: 22px;
    height: 6px;
    margin-top: 5px;
    margin-left: 5px;
    transition: 0.3s;    
  }

  &:hover {
    border: 3px ${color.buttonHover} solid;
    border-radius: 40px;
    &::after {
      margin-left: 20px;      
      transition: 0.3s;
    }
  }
`;

export default StartButton;
