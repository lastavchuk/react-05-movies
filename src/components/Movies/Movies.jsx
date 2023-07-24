import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import StyledMovies from './Movies.styled';

function Movies({ movies, currentUrl }) {
    return (
        <>
            <StyledMovies>
                {!!movies?.length &&
                    movies.map(movie => (
                        <MovieItem
                            key={movie.id}
                            id={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.title}
                            name={movie.name}
                            currentUrl={currentUrl}
                        />
                    ))}
            </StyledMovies>
        </>
    );
}

Movies.propTypes = {
    movies: PropTypes.array.isRequired,
    currentUrl: PropTypes.string.isRequired,
};

export default Movies;
