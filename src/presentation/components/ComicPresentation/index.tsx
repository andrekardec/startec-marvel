import { useComic } from '@presentation/hooks/useComic';
import React from 'react';
import ComicCard from '../ComicCard';
import {
  Container,
  ComicCardWrapper,
  InfoWrapper, TitleWrapper,
  Title,
  DetailsWrapper,
  Published,
  Creator,
} from './styles';

export interface Background {
  image: string;
}

const ComicPresentation: React.FC = () => {
  const { comic, loading } = useComic();
  return (
    loading ? <div>loading</div> : (
      <Container image={`${comic.images[0].path}.${comic.images[0].extension}`}>
        <ComicCardWrapper>
          <ComicCard
            image={`${comic.images[0].path}.${comic.images[0].extension}`}
            title={comic.title}
          />
        </ComicCardWrapper>

        <InfoWrapper>

          <TitleWrapper>
            <Title>
              {comic.title}
            </Title>
          </TitleWrapper>

          <DetailsWrapper>

            <Published>
              <h2>Published:</h2>
              <p>{`${new Date(comic.modified).toLocaleDateString()}`}</p>
            </Published>

            { comic.creators
          && (
          <Creator>
            <h2>{comic.creators[0].role}</h2>
            <p>{comic.creators[0].name}</p>
          </Creator>
          )}
            { comic.creators && comic.creators.length >= 2
          && (
          <Creator>
            <h2>{comic.creators[1].role}</h2>
            <p>{comic.creators[1].name}</p>
          </Creator>
          )}
          </DetailsWrapper>
        </InfoWrapper>
      </Container>
    )
  );
};

export default ComicPresentation;
