import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { Link } from './styles';

interface LinkProps {
  to: string;
  flex?: boolean;
  flexColumn?: boolean;
  children: ReactNode;
}

const LinkComponent: React.FC<LinkProps> = ({
  to,
  flex,
  flexColumn,
  children,
}) => {
  return (
    <Link
      flex={flex}
      flexColumn={flexColumn}
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </Link>
  );
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  flex: PropTypes.bool,
  flexColumn: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

LinkComponent.defaultProps = {
  flex: false,
  flexColumn: false,
};

export default LinkComponent;
