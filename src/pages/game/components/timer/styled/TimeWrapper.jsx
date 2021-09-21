import styled from 'styled-components';

const TimeWrapper = styled.div`
  position: relative;
  width: ${(props) => props.size || '150px'};
  height: ${(props) => props.size || '150px'};
  margin-bottom: 30px;
`;

export default TimeWrapper;
