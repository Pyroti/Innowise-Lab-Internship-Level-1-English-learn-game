import styled from 'styled-components';
import colors from '../../../constants/colors';

const GameModalWrapper = styled.div`
width:500px;
height: 400px;
box-shadow: 0 5px 16px ${colors.GameModalWrapper_shadow};
background: ${colors.GameModalWrapper_background};
color: ${colors.GameModalWrapper_color};
display: grid;
position: relative;
z-index: 100;
border-radius: 10px;
padding: 10px;
@media (max-width: 768px) {
    width:400px;
    height: 350px;
  }
@media (max-width: 400px) {
    width: 310px;
    height: 350px;
}
`;

export default GameModalWrapper;
