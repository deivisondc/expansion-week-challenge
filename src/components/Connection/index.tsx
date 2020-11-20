import React, { useState } from 'react';
import { FiLink } from 'react-icons/fi';

import connections from '../../assets/connections.json';

import Card from '../Card';
import Link from '../Link';

import {
  Container,
  ImageGroup,
  MiniAvatar,
  Avatar,
  ContentContainer,
  Content,
  SeeMore,
} from './styles';

const Connection: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Card title="Conexões" icon={<FiLink />}>
      <Container>
        <ContentContainer>
          <ImageGroup>
            <MiniAvatar src={connections[0].avatar} />
            <MiniAvatar src={connections[1].avatar} />
          </ImageGroup>
          <Content>
            <h3>Muitas conexões em comum</h3>
            <p>
              Você e Adaptabilidade conhecem Resiliência, Auto Conhecimento e
              muitos outros.
            </p>
          </Content>
        </ContentContainer>

        <ContentContainer>
          {collapsed &&
            connections.map(connection => (
              <Content className="vertical" key={connection.name}>
                <Link flexColumn to={connection.link}>
                  <Avatar src={connection.avatar} />
                  <h3>{connection.name}</h3>
                  <p>{connection.occupation}</p>
                </Link>
              </Content>
            ))}
        </ContentContainer>
      </Container>

      <SeeMore onClick={() => setCollapsed(!collapsed)}>
        Ver {collapsed ? 'menos' : 'mais'}...
      </SeeMore>
    </Card>
  );
};

export default Connection;
