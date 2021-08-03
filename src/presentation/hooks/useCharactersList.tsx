/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import CharactersContext from '@adapters/contexts/CharactersContext';
import { useContextSelector } from 'use-context-selector';

export function useCharactersList() {
  const loading = useContextSelector(CharactersContext, (data) =>
    data.loading);

  const loadCharacters = useContextSelector(CharactersContext, (data) =>
    data.characters);

  return {
    loading,
    loadCharacters,
  };
}
