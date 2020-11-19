import React, { useState, useEffect } from 'react';

import Card from '../Card';

import recommendations from '../../assets/recommendations.json';

import {
  Container,
  ContentContainer,
  Avatar,
  Details,
  Title,
  Period,
  Content,
  SeeMore,
} from './styles';

interface Recommendation {
  avatar: string;
  from: string;
  occupation: string;
  description: string;
}

const Recommendation: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [filteredRecommendations, setFilteredRecommendations] = useState<
    Recommendation[]
  >([]);

  useEffect(() => {
    if (collapsed) {
      setFilteredRecommendations(recommendations);
    } else {
      setFilteredRecommendations([recommendations[0]]);
    }
  }, [collapsed]);

  return (
    <Card title="Recomendações">
      {filteredRecommendations.map(recommendation => (
        <ContentContainer key={recommendation.from}>
          <Container>
            <Avatar src={recommendation.avatar} />

            <Details>
              <Title>{recommendation.from}</Title>
              <Period>{recommendation.occupation}</Period>
            </Details>

            <Content>{recommendation.description}</Content>
          </Container>
        </ContentContainer>
      ))}

      <SeeMore onClick={() => setCollapsed(!collapsed)}>
        Ver {collapsed ? 'menos' : 'mais'}...
      </SeeMore>
    </Card>
  );
};

export default Recommendation;
