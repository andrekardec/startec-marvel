import { useContextSelector } from 'use-context-selector';
import ComicsContext from '@adapters/contexts/ComicsContext';

export function useComicsList() {
    const loading = useContextSelector(ComicsContext, data => data.loading);
    const listAllComics = useContextSelector(ComicsContext, data => data.comics);
    return {
        loading,
        listAllComics,
    };
}


