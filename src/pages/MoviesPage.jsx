import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Notify } from 'notiflix';

import { fetchSearchMovies } from 'services/api';
import { notifyParams } from 'services/variables';

import Loader from 'components/Loader/Loader';
import Movies from 'components/Movies/Movies';
import SearchBox from 'components/SearchBox/SearchBox';
import StyledContainer from 'components/Container/Container.styled';

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q');

    const hundleSubmit = e => {
        e.preventDefault();
        setSearchParams({ q: e.target.elements.inputSearch.value });
    };

    useEffect(() => {
        if (!q) return;
        async function getImg() {
            try {
                const { results } = await fetchSearchMovies(q);
                if (!results.length) {
                    Notify.warning('<b>No movies found!</b>', notifyParams);
                }
                setMovies(results);
            } catch (error) {
                Notify.failure(
                    `Someting wrong!</br><b>${error.message}</b>`,
                    notifyParams
                );
            } finally {
                setIsLoading(false);
            }
        }
        getImg();
    }, [q]);

    return (
        <StyledContainer>
            {isLoading && <Loader />}
            <SearchBox search={q} hundleSubmit={hundleSubmit} />
            {!!movies.length && <Movies movies={movies} currentUrl={''} />}
        </StyledContainer>
    );
}
export default MoviesPage;
