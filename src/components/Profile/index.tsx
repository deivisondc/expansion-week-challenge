import React from 'react';

import Card from '../Card';
import ProfileImage from '../ProfileImage';

import { Container, Cover, Name, Description } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Card centered>
        <Cover />
        <ProfileImage />
        <Name>Adaptabilidade</Name>

        <Description>
          Entusiasta em mudar a vida das pessoas para o melhor
        </Description>
      </Card>
    </Container>
  );
};

export default Profile;
