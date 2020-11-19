import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 25px 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  margin: 25px 0;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 50%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
`;

export const Title = styled.h3`
  font-size: 18px;
  width: 120px;
`;

export const Period = styled.span`
  font-size: 15px;
  color: #777;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  font-size: 15px;
  margin-left: 20px;
`;

export const SeeMore = styled.button`
  width: 100%;
  background: none;
  border: 0;
  font-size: 14px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;
