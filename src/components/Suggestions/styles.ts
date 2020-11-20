import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & + div {
    margin-top: 10px;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.h3`
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

interface ConnectButtonProps {
  pending?: boolean;
}

export const ConnectButton = styled.button<ConnectButtonProps>`
  border: 0;
  font-size: 15px;
  font-weight: bold;
  color: #1a29ad;
  border: 2px solid #1a29ad;
  background: transparent;
  border-radius: 50%;
  margin-left: auto;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  svg * {
    color: #1a29ad;
  }

  &:hover {
    background-color: #1a29ad;
    color: #fff;

    svg * {
      color: #fff;
    }
  }

  ${props =>
    props.pending &&
    css`
      cursor: initial;
      color: #777;
      border: 2px solid #777 !important;

      svg * {
        color: #777;
      }

      &:hover {
        background-color: #ddd !important;
        color: #777;

        svg * {
          color: #777;
        }
    `}
`;
