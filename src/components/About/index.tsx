import React from 'react';

import Card from '../Card';

import { Container, Content } from './styles';

const About: React.FC = () => {
  return (
    <Card title="Sobre">
      <Container>
        <Content>
          Sou a capacidade que um indivíduo tem de se adaptar, de acordo com as
          necessidades, situações e circunstâncias. Construo no indivíduo a
          aptidão de viver em condições diferentes daquelas as quais está
          naturalmente acostumado.
          <br />
          <br />
          Com minha ajuda as pessoas conseguem assumir o protagonismo da
          carreira, identificando o que precisa ser modificado e mantendo seu
          espaço no mercado de trabalho.
          <br />
          <br />
          Não desgrudo da minha parceira Resiliência. Juntas fomos capazes de
          construir histórias juntas, desde as mais particulares, até as que
          mudaram o rumo da humanidade.
        </Content>
      </Container>
    </Card>
  );
};

export default About;
