import styled from 'styled-components';

interface ContainerProps {
  collapsed?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  transition: all 0.2s;
`;

export const ContentContainer = styled.div`
  display: flex;
  margin: 25px 0;
  padding: 0 20px;

  &:hover {
    h3 {
      text-decoration: underline;
    }
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 6px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
`;

export const Title = styled.h3`
  font-size: 18px;
`;

export const Period = styled.span`
  font-size: 15px;
  color: #777;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 15px;
`;

export const SeeMore = styled.button`
  width: 100%;
  background: none;
  border: 0;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  border-top: 1px solid #ddd;
  border-radius: 0 0 8px 8px;

  &:hover {
    background: #1a29ad;
    color: #fff;
  }
`;
