import React, { useState, useEffect } from 'react';

import IComicDTO from '@domain/dto/IComicDTO';
import { useParams } from 'react-router-dom';

import { container } from 'tsyringe';
import ListOneComicUseCase from '@adapters/usecases/ListOneComicUseCase';

import ComicContext from '@adapters/contexts/ComicContext';

export const ComicProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [comic, setComic] = useState<IComicDTO>({} as IComicDTO);
    const [error, setError] = useState<NotFound>({} as NotFound);

    const params = useParams<RouteParams>();
    const requestedComic = parseInt(Object.values(params)[0]);

    const listComic = container.resolve(ListOneComicUseCase);

    const listComicById = async () => {
        const comicData = await listComic.execute(requestedComic);
        if(comicData) {
            setComic(comicData)
            setLoading(false)
        }
        setError({ code: 404, error: "Not found"});
        setLoading(false);
    };

    useEffect(() => {
        listComicById();
    }, [requestedComic]);

    return (
        <ComicContext.Provider value={{ comic, loading, error }}>
            {children}
        </ComicContext.Provider>
    );
};
