import styled from 'styled-components';

export const Container = styled.div`
  margin: 25px 0;
  padding: 0 20px;
`;

export const CollapsedContainer = styled.div`
  display: flex;
`;

export const CollapsedContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 15px;
    color: #777;
  }
`;

export const ImageGroup = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-right: 25px;

  & > img:first-of-type {
    top: 0;
    left: 0;
    z-index: 0;
  }

  & > img:last-of-type {
    bottom: 0;
    right: 0;
    z-index: 0;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
`;
