import React from 'react';
import { Container, Card, Title } from './styles';

interface Props {
    title: string;
    image: string;
}

const ComicCard: React.FC<Props> = ({ title, image }) =>
  (
    <Container>
      <Card>
        <img src={`${image}`} alt={title} />
        <Title />
      </Card>
    </Container>
  );

export default ComicCard;
