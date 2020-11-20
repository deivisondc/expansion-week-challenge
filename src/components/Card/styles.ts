import styled from 'styled-components';

export const Container = styled.div`
  min-width: 300px;
  width: 100%;
  height: auto;

  background: #fff;
  border: 2px solid #ddd;
  border-radius: 8px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  transition: all 0.2s;

  & > * {
    z-index: 5;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.2);

    & > h2 > div,
    & > h2 > div > svg * {
      color: #1a29ad;
    }

    & * {
      ::-webkit-scrollbar-thumb {
        background: #1a29ad;
      }
    }

    & button {
      border-top: 1px solid #1a29ad;
      color: #1a29ad;
      transition: all 0.2s;

      &:hover {
        background: #1a29ad;
        color: #fff;
      }
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;
