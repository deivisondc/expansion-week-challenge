import React from 'react';

import Profile from '../../components/Profile';
import Suggestions from '../../components/Suggestions';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Connection from '../../components/Connection';
import Recommendation from '../../components/Recommendation';

import { Container, Aside, Feed } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Aside>
        <Profile />
        <Suggestions />
      </Aside>

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
