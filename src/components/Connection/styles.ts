import styled from 'styled-components';

export const Container = styled.div`
  margin: 25px 0;
  padding: 0 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  overflow: auto;

  ::-webkit-scrollbar {
    height: 7px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.vertical {
    flex: 1 0 175px;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 15px;

    h3 {
      margin-top: 10px;
    }

    p {
      margin-top: 5px;
    }
  }

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

export const MiniAvatar = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
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
