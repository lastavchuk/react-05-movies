import { Link, Outlet, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import StarRatings from 'react-star-ratings';
import { Notify } from 'notiflix';

import { IMG_BASE_URL, IMG_W500, notifyParams } from 'services/variables';
import { fetchMovieDetails } from 'services/api';

import StyledMovieDetails from './MovieDetails.styled';
import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';

import noImg from '../../images/no-image.png';

const MovieDetails = ({ movieId }) => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const backUrl = useRef(location.state?.from);

    useEffect(() => {
        const getMovieDetails = async () => {
            setIsLoading(true);
            try {
                setMovie(await fetchMovieDetails(movieId));
            } catch (error) {
                Notify.failure(
                    `Someting wrong!</br><b>${error.message}</b>`,
                    notifyParams
                );
            } finally {
                setIsLoading(false);
            }
        };
        getMovieDetails();
    }, [movieId]);

    return (
        <>
            {isLoading && <Loader />}
            {movie && (
                <Container>
                    <StyledMovieDetails>
                        <div>
                            <img
                                className="center"
                                width="320"
                                height="570"
                                src={
                                    movie.poster_path
                                        ? IMG_BASE_URL +
                                          IMG_W500 +
                                          movie.poster_path
                                        : noImg
                                }
                                alt={movie.title}
                            />
                        </div>
                        <div>
                            <Link
                                to={backUrl.current ?? '/'}
                                className="btn btn-secondary"
                            >
                                ⟸ go back
                            </Link>
                            <h2>{movie.title}</h2>
                            <div className="section">
                                <StarRatings
                                    rating={movie.vote_average}
                                    starRatedColor="#5a67ee"
                                    numberOfStars={10}
                                    name="rating"
                                    starDimension="30px"
                                    starSpacing="0"
                                />
                            </div>

                            <div className="section">
                                <h3>Overview:</h3>
                                <p>{movie.overview || 'No overview!'}</p>
                            </div>
                            <div className="section">
                                <h3>Genres: </h3>
                                <p>
                                    {movie.genres
                                        .map(genre => genre.name)
                                        .join(', ')}
                                </p>
                            </div>

                            <div className="section">
                                <h3>Additional information</h3>
                                <div className="btnGroup">
                                    <Link to="cast" className="btn btn-action">
                                        Cast
                                    </Link>
                                    <Link
                                        to="reviews"
                                        className="btn btn-action"
                                    >
                                        Reviews
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </StyledMovieDetails>
                    <Outlet />
                </Container>
            )}
        </>
    );
};

MovieDetails.propTypes = {
    movieId: PropTypes.string.isRequired,
};

export default MovieDetails;
