import React, { useState, useEffect } from 'react';
import { FiStar } from 'react-icons/fi';

import Card from '../Card';
import Link from '../Link';

import recommendations from '../../assets/recommendations.json';

import {
  Container,
  Avatar,
  Details,
  Title,
  Period,
  Content,
  SeeMore,
} from './styles';

interface Recommendation {
  avatar: string;
  link: string;
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
    <Card title="Recomendações" icon={<FiStar />}>
      {filteredRecommendations.map(recommendation => (
        <Container key={recommendation.from}>
          <Link to={recommendation.link}>
            <Avatar src={recommendation.avatar} />
          </Link>

          <Details>
            <Link to={recommendation.link}>
              <Title>{recommendation.from}</Title>
              <Period>{recommendation.occupation}</Period>
            </Link>
          </Details>

          <Content>{recommendation.description}</Content>
        </Container>
      ))}

      <SeeMore onClick={() => setCollapsed(!collapsed)}>
        Ver {collapsed ? 'menos' : 'mais'}...
      </SeeMore>
    </Card>
  );
};

export default Recommendation;
