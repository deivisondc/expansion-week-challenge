import React from 'react';
import PropTypes from 'prop-types';

import { CardTitle } from './styles';

const Title: React.FC = ({ children }) => {
  return <CardTitle>{children}</CardTitle>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
