import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  & > div {
    margin-bottom: 15px;
  }
`;
