import styled from 'styled-components';

interface ContainerProps {
  collapsed?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  transition: all 0.2s;
`;

export const ContentContainer = styled.div`
  display: flex;
  margin: 25px 0;
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
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;
