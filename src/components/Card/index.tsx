import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';

import { Container } from './styles';

interface CardInterface {
  centered?: boolean;
  title?: string;
  children?: ReactNode;
}

const Card: React.FC<CardInterface> = ({ centered, title, children }) => {
  return (
    <Container centered={centered}>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};

Card.propTypes = {
  centered: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  centered: false,
  title: '',
};

export default Card;
