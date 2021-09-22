import { createGlobalStyle } from 'styled-components';
import color from './core/constants/colors';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  font-family: Roboto;
  color: ${color.appColor};
}

h1 {
  text-align: center;
}

a { 
  text-decoration: none;
}
`;

export default Global;
