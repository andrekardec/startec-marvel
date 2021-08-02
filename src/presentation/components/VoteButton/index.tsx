import React from 'react';
import { Button, Icon } from './styles';

export interface Background {
    image: string;
  }

const VoteButton: React.FC = () =>
  (
    <Button>
      <Icon />
    </Button>
  );

export default VoteButton;
