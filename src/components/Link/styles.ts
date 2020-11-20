import styled, { css } from 'styled-components';

interface LinkProps {
  flex?: boolean;
}

export const Link = styled.a<LinkProps>`
  text-decoration: none;

  ${props =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
    `}

  span {
    display: block;
  }

  &:hover {
    h5 {
      text-decoration: underline;
    }
  }
`;
