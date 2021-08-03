import React from 'react';
import { Button, Icon } from './styles';

export interface Background {
    image: string;
  }

type Props = {
  onClick(): void;
};
const VoteButton: React.FC<Props> = ({ onClick }) =>
  (
    <Button onClick={onClick}>
      <Icon />
    </Button>
  );

export default VoteButton;
