import styled, { keyframes } from 'styled-components';
import circle from '../../../../../assets/circle.png';

const rotate = keyframes`
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
`;

const RevolvingCircle = styled.div`
  width: ${(props) => props.size || '150px'};
  height: ${(props) => props.size || '150px'};
  background-image: url('${circle}');
  background-size: 100% 100%;
  animation: ${rotate} 2s infinite linear;
`;

export default RevolvingCircle;
