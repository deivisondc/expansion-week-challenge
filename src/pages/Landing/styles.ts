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

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 15px;
  }

  & > div:nth-child(2) {
    position: sticky;
    top: 15px;
  }
`;
