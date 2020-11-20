import styled, { css } from 'styled-components';

interface LinkProps {
  flex?: boolean;
  flexColumn?: boolean;
}

export const Link = styled.a<LinkProps>`
  text-decoration: none;

  ${props =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
    `}

  ${props =>
    props.flexColumn &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}

  span {
    display: block;
  }

  &:hover {
    h3 {
      text-decoration: underline;
    }
  }
`;
