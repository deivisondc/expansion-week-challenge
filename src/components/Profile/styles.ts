import styled from 'styled-components';

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

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border: 2px solid #fff;
  border-radius: 50%;
  object-fit: cover;
  object-position: right;
`;

export const Name = styled.h2`
  margin: 20px 0 10px;
  font-size: 20px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #777;
  text-align: center;
  margin-bottom: 10px;
`;

export const AchievementsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;

  svg {
    margin-right: 10px;
  }
`;

interface ExperienceBarProps {
  color: string;
  percentage: number;
}

export const ExperienceBar = styled.div<ExperienceBarProps>`
  width: 80%;
  height: 10px;
  border-radius: 5px;
  position: relative;

  background-color: #eee;
  box-shadow: inset 0 2px 5px 0 rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.color};
    width: ${props => props.percentage || 0}%;
    height: 10px;
    border-radius: 5px;
    box-shadow: inset 0 2px 5px 0 rgba(0, 0, 0, 0.5);
  }
`;
