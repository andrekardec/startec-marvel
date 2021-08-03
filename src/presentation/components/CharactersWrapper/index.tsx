import React from 'react';
import { Link } from 'react-router-dom';
import { useCharactersList } from '@presentation/hooks/useCharactersList';
import CharacterCard from '@presentation/components/CharacterCard';
import { Container } from './styles';
import Loading from '../Loading';

const CharactersWrapper: React.FC = () => {
  const { loadCharacters } = useCharactersList();
  const characters = Array.from(loadCharacters).slice(0, 12);
  return (
    <Container>
      {characters.length <= 0 ? <Loading /> : (
        characters.map((character) =>
          (
            <Link to={`/character/${character.id}`} key={character.id}>
              <CharacterCard
                key={character.id}
                title={character.name}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            </Link>
          )))}
    </Container>
  );
};

export default CharactersWrapper;
