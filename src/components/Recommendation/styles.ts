import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 25px 0;
  padding: 0 20px;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 50%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;

  margin-left: 20px;

  &:hover {
    h3 {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h3`
  font-size: 18px;
`;

export const Period = styled.span`
  font-size: 15px;
  color: #777;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  font-size: 15px;
  margin-left: 20px;
  flex: 1;
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
`;
