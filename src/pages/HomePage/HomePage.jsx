import { useEffect, useState } from 'react';
import { fetchTopMovies } from 'services/api';
import { notifyParams } from 'services/variables';

import Loader from 'components/Loader/Loader';
import Movies from 'components/Movies/Movies';
import { Notify } from 'notiflix';
import Container from 'components/Container/Container';
import StyledHomePage from './HomePage.styled';

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getMovies = async () => {
            setIsLoading(true);
            try {
                const { results } = await fetchTopMovies();
                setMovies(results);
            } catch (error) {
                Notify.failure(
                    `Someting wrong!</br><b>${error.message}</b>`,
                    notifyParams
                );
            } finally {
                setIsLoading(false);
            }
        };
        getMovies();
    }, []);

    return (
        <Container>
            <StyledHomePage>
                {isLoading && <Loader />}
                <h2>Trending movies today</h2>
                <Movies movies={movies} currentUrl={'movies/'} />
            </StyledHomePage>
        </Container>
    );
}
export default HomePage;
