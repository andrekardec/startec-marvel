import { useComicsList } from '@presentation/hooks/useComicsList';
import React from 'react';
import { Link } from 'react-router-dom';
import ComicCard from '../ComicCard';
import Loading from '../Loading';
import { Container, Box } from './styles';

const ComicGallery: React.FC = () => {
  const { listAllComics } = useComicsList();
  const comics = Array.from(listAllComics).slice(0, 6);
  return (
    comics.length <= 0 ? <Loading /> : (
      <Container>
        <Box>
          {comics.map((comic) =>
            (
              <Link to={`/comics/${comic.id}`}>
                <ComicCard
                  key={comic.id}
                  title={comic.title}
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
              </Link>
            ))}
        </Box>
      </Container>
    )
  );
};
export default ComicGallery;
