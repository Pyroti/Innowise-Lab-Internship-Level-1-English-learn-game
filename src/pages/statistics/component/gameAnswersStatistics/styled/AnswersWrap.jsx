import styled from 'styled-components';

const AnswersWrap = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  @media (max-width: 630px) {
    justify-content: normal;
  }
`;

export default AnswersWrap;
