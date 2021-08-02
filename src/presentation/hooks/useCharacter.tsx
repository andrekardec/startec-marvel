/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import CharacterContext from '@adapters/contexts/CharacterContext';
import { useContextSelector } from 'use-context-selector';

export function useCharacter() {
  const loading = useContextSelector(CharacterContext, (data) =>
    data.loading);
  const character = useContextSelector(CharacterContext, (data) =>
    data.character);
  return {
    loading,
    character,
  };
}
