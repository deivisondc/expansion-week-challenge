import React, { useState, useEffect } from 'react';
import { FaUserTie } from 'react-icons/fa';

import experiences from '../../assets/experiences.json';

import Card from '../Card';
import Link from '../Link';

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

interface Experience {
  avatar: string;
  link: string;
  company: string;
  duration: string;
  description: string;
}

const Experience: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>(
    [],
  );

  useEffect(() => {
    if (collapsed) {
      setFilteredExperiences(experiences);
    } else {
      setFilteredExperiences([experiences[0]]);
    }
  }, [collapsed]);

  return (
    <Card title="Experiências" icon={<FaUserTie />}>
      <Container collapsed={collapsed}>
        {filteredExperiences.map(experience => (
          <ContentContainer>
            <Link to={experience.link}>
              <Logo src={experience.avatar} />
            </Link>

            <Content>
              <Link to={experience.link}>
                <Title>{experience.company}</Title>
                <Period>{experience.duration}</Period>
              </Link>

              <Description>{experience.description}</Description>
            </Content>
          </ContentContainer>
        ))}

        <SeeMore onClick={() => setCollapsed(!collapsed)}>
          Ver {collapsed ? 'menos' : 'mais'}...
        </SeeMore>
      </Container>
    </Card>
  );
};

export default Experience;
