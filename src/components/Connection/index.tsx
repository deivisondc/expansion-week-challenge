import React from 'react';

import Card from '../Card';

import {
  Container,
  ImageGroup,
  Avatar,
  CollapsedContainer,
  CollapsedContainerContent,
} from './styles';

const Connection: React.FC = () => {
  return (
    <Card title="Conexões">
      <Container>
        <CollapsedContainer>
          <ImageGroup>
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQEFVCRAPFpbUA/profile-displayphoto-shrink_800_800/0?e=1611187200&v=beta&t=C1hgMaT2sw0GI3zMlXBvG-n_U_r_vpFJyXn2WuxZjjA" />
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQGIUOHfzExl3g/profile-displayphoto-shrink_800_800/0?e=1611187200&v=beta&t=rLvyMgaNTjd3LfI8xInTuobhp5bNlfSpcNerJ4fQv4w" />
          </ImageGroup>
          <CollapsedContainerContent>
            <h3>Muitas conexões em comum</h3>
            <p>
              Você e Adaptabilidade conhecem Resiliência, Auto Conhecimento e
              muitos outros.
            </p>
          </CollapsedContainerContent>
        </CollapsedContainer>
      </Container>
    </Card>
  );
};

export default Connection;
