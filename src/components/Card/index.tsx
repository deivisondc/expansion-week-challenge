import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';

import { Container, TitleContainer } from './styles';

interface CardInterface {
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const Card: React.FC<CardInterface> = ({ title, icon, children }) => {
  return (
    <Container>
      {title && (
        <Title>
          <TitleContainer>
            {icon} {title}
          </TitleContainer>
        </Title>
      )}
      {children}
    </Container>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  title: '',
  icon: undefined,
};

export default Card;
