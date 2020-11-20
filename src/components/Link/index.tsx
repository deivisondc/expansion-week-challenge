import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { Link } from './styles';

interface LinkProps {
  to: string;
  flex?: boolean;
  children: ReactNode;
}

const LinkComponent: React.FC<LinkProps> = ({ to, flex, children }) => {
  return (
    <Link flex={flex} href={to} target="_blank" rel="noreferrer">
      {children}
    </Link>
  );
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  flex: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

LinkComponent.defaultProps = {
  flex: false,
};

export default LinkComponent;
