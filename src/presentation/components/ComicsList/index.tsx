import React from 'react';
import { useComicsList } from '@presentation/hooks/useComicsList';
import { Link } from 'react-router-dom';
import { Container, ComicCarousel } from './styles';
import ComicCard from '../ComicCard';

const ComicsList: React.FC = () => {
  const { listAllComics } = useComicsList();
  const comics = Array.from(listAllComics);

  return (
    <Container>
      <ComicCarousel>
        {comics.map((card) =>
          (
            <Link to={`/comic/${card.id}`} key={card.id}>
              <ComicCard
                key={card.id}
                title={card.title}
                image={`${card.images[0].path}.${card.images[0].extension}`}
              />
            </Link>
          ))}
      </ComicCarousel>
    </Container>
  );
};

export default ComicsList;
