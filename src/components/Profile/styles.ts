import styled from 'styled-components';

export const Container = styled.div`
  grid-area: profile;
`;

export const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;

  border-radius: 8px 8px 0 0;

  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
  overflow: hidden;
  z-index: 0;
`;

export const Name = styled.h2`
  margin: 20px 0 10px;
  font-size: 20px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #777;
  text-align: center;
`;
