import React from 'react';

import About from '../../components/About';
import Profile from '../../components/Profile';
import Experience from '../../components/Experience';
import Connection from '../../components/Connection';
import Recommendation from '../../components/Recommendation';

import { Container, Feed } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Profile />

      <Feed>
        <About />
        <Experience />
        <Connection />
        <Recommendation />
      </Feed>
    </Container>
  );
};

export default Landing;
