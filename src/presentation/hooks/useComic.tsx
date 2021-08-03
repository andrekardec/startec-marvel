/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContextSelector } from 'use-context-selector';
import ComicContext from '@adapters/contexts/ComicContext';

export function useComic() {
  const loading = useContextSelector(ComicContext, (data) =>
    data.loading);
  const comic = useContextSelector(ComicContext, (data) =>
    data.comic);
  return {
    loading,
    comic,
  };
}
