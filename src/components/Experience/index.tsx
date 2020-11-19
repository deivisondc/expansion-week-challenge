import React, { useState } from 'react';

import Card from '../Card';

import {
  Container,
  ContentContainer,
  Logo,
  Content,
  Title,
  Period,
  Description,
  SeeMore,
} from './styles';

const Experience: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Card title="Experiências">
      <Container collapsed={collapsed}>
        <ContentContainer>
          <Logo src="https://avatars2.githubusercontent.com/u/25139090?s=460&u=d313c1479cbc81452d740a9fc73f37fd0f9e7ac4&v=4" />

          <Content>
            <Title>SpaceX</Title>
            <Period>Outubro 2020 até agora</Period>

            <Description>
              Participei do desenvolvimento e evolução do sistema ERP com a
              linguagem Java (Java EE / JSP), utilizando como base de dados
              Oracle e PostgreSQL sobre os servidores de aplicação JBoss e
              Glassfish e utilizando sistemas de controle de versões como
              Subversion e Mercurial com o auxílio de metodologia ágeis como o
              SCRUM e Kanban.
            </Description>
          </Content>
        </ContentContainer>

        {collapsed && (
          <>
            <ContentContainer>
              <Logo src="https://avatars2.githubusercontent.com/u/25139090?s=460&u=d313c1479cbc81452d740a9fc73f37fd0f9e7ac4&v=4" />
              <Content>
                <Title>SpaceX</Title>
                <Period>Outubro 2020 até agora</Period>

                <Description>
                  Participei do desenvolvimento e evolução do sistema ERP com a
                  linguagem Java (Java EE / JSP), utilizando como base de dados
                  Oracle e PostgreSQL sobre os servidores de aplicação JBoss e
                  Glassfish e utilizando sistemas de controle de versões como
                  Subversion e Mercurial com o auxílio de metodologia ágeis como
                  o SCRUM e Kanban.
                </Description>
              </Content>
            </ContentContainer>
            <ContentContainer>
              <Logo src="https://avatars2.githubusercontent.com/u/25139090?s=460&u=d313c1479cbc81452d740a9fc73f37fd0f9e7ac4&v=4" />
              <Content>
                <Title>SpaceX</Title>
                <Period>Outubro 2020 até agora</Period>

                <Description>
                  Participei do desenvolvimento e evolução do sistema ERP com a
                  linguagem Java (Java EE / JSP), utilizando como base de dados
                  Oracle e PostgreSQL sobre os servidores de aplicação JBoss e
                  Glassfish e utilizando sistemas de controle de versões como
                  Subversion e Mercurial com o auxílio de metodologia ágeis como
                  o SCRUM e Kanban.
                </Description>
              </Content>
            </ContentContainer>
          </>
        )}

        <SeeMore onClick={() => setCollapsed(!collapsed)}>
          Ver {collapsed ? 'menos' : 'mais'}...
        </SeeMore>
      </Container>
    </Card>
  );
};

export default Experience;
