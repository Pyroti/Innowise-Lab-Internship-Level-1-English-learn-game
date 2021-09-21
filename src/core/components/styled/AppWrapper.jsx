import styled from 'styled-components';
import colors from '../../constants/colors';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 10px;
  background: ${colors.wrapper};
  overflow-y: auto;
  overflow-x: none;
`;

export default AppWrapper;
