import { useCharacter } from '@presentation/hooks/useCharacter';
import React from 'react';
import ComicCard from '../ComicCard';
import {
  Container,
  ComicCardWrapper,
  InfoWrapper, TitleWrapper,
  Title,
  DetailsWrapper,
  Published,
} from './styles';

export interface Background {
  image: string;
}

const CharacterPresentation: React.FC = () => {
  const { character, loading } = useCharacter();
  return (
    loading ? <div>loading</div> : (
      <Container image={`${character.thumbnail.path}.${character.thumbnail.extension}`}>
        <ComicCardWrapper>
          <ComicCard
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            title={character.name}
          />
        </ComicCardWrapper>

        <InfoWrapper>

          <TitleWrapper>
            <Title>
              {character.name}
            </Title>
          </TitleWrapper>

          <DetailsWrapper>

            <Published>
              <h2>Published:</h2>
              <p>{`${new Date(character.modified).toLocaleDateString()}`}</p>
            </Published>
          </DetailsWrapper>
        </InfoWrapper>
      </Container>
    )
  );
};

export default CharacterPresentation;
