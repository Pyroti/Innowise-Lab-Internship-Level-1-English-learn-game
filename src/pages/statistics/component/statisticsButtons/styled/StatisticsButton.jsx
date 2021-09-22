import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import colors from '../../../../../core/constants/colors';

const StatisticsButton = styled(Button)`
  && {
    background-color: ${colors.buttonNormal};
    font-size: 16px;
    width: 170px;
    margin: 10px;
    font-weight: bold;
    text-transform: none;
    &:hover {
      background-color: ${colors.buttonHover};
    }
  }
`;

export default StatisticsButton;
