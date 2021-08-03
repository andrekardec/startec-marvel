import React from 'react';
import { Link } from 'react-router-dom';
import { useComicsList } from '@presentation/hooks/useComicsList';
import { Container } from './styles';
import ComicsGalleryCard from '../ComicsGalleryCard';

const ComicsGalleryWrapper: React.FC = () => {
  const { listAllComics } = useComicsList();
  const comics = Array.from(listAllComics).slice(0, 12);
  return (
    <Container>
      {comics.length <= 0 ? <div>Loading</div> : (
        comics.map((comic) =>
          (
            <Link to={`/comics/${comic.id}`} key={comic.id}>
              <ComicsGalleryCard
                key={comic.id}
                title={comic.title}
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              />
            </Link>
          )))}
    </Container>
  );
};

export default ComicsGalleryWrapper;
