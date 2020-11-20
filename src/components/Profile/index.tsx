import React from 'react';
import { BiMedal } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';
import { GiTrophy } from 'react-icons/gi';
import { FiTrendingUp } from 'react-icons/fi';

import Card from '../Card';

import {
  Cover,
  Content,
  Image,
  Name,
  Description,
  ExperienceBar,
  AchievementsContainer,
} from './styles';

const Profile: React.FC = () => {
  return (
    <Card>
      <Cover />
      <Content id="profile-card">
        <Image src="https://cdn.trend.az/media/pictures/2018/07/10/puzzle_100718.jpg" />
        <Name>Adaptabilidade</Name>

        <Description>
          Entusiasta em mudar a vida das pessoas para o melhor
        </Description>

        <AchievementsContainer>
          <GiTrophy />
          <ExperienceBar color="#e6d70e" percentage={100} />
        </AchievementsContainer>

        <AchievementsContainer>
          <BiMedal />
          <ExperienceBar color="#00c3ff" percentage={80} />
        </AchievementsContainer>

        <AchievementsContainer>
          <BsHeartFill />
          <ExperienceBar color="#00b600" percentage={70} />
        </AchievementsContainer>

        <AchievementsContainer>
          <FiTrendingUp />
          <ExperienceBar color="#b411ff" percentage={80} />
        </AchievementsContainer>
      </Content>
    </Card>
  );
};

export default Profile;
