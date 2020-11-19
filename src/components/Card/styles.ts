import styled from 'styled-components';

interface ContainerProps {
  centered?: boolean;
}

export const Container = styled.div<ContainerProps>`
  min-width: 250px;
  width: 100%;
  padding: 20px;

  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.centered ? 'center' : 'start')};
  transition: all 0.2s;

  & > * {
    z-index: 5;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;
