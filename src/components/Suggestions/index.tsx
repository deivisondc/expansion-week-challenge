import React, { useState } from 'react';
import { FiPlus, FiMoreHorizontal } from 'react-icons/fi';

import suggestionsJson from '../../assets/suggestions.json';

import Card from '../Card';
import Link from '../Link';

import { Container, Item, Avatar, Name, ConnectButton } from './styles';

interface Suggestion {
  avatar: string;
  link: string;
  name: string;
  pending?: boolean;
}

const Suggestions: React.FC = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>(suggestionsJson);

  const handleConnectButton = (eventIndex: number): void => {
    setSuggestions(
      suggestions.map((suggestion, index) => {
        if (index === eventIndex) {
          return { ...suggestion, pending: true };
        }
        return suggestion;
      }),
    );
  };

  return (
    <Card title="Sugestões">
      <Container>
        {suggestions.map((suggestion, index) => (
          <Item>
            <Link flex to={suggestion.link}>
              <Avatar src={suggestion.avatar} />
              <Name>{suggestion.name}</Name>
            </Link>
            <ConnectButton
              pending={suggestion.pending}
              type="button"
              onClick={() => handleConnectButton(index)}
              title={suggestion.pending ? 'Pendente' : 'Conectar'}
            >
              {suggestion.pending ? (
                <FiMoreHorizontal size={15} />
              ) : (
                <FiPlus size={15} />
              )}
            </ConnectButton>
          </Item>
        ))}
      </Container>
    </Card>
  );
};

export default Suggestions;
