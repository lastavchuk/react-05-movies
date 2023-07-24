import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG_BASE_URL, IMG_W500 } from 'services/variables';
import StyledMoviesItem from './MovieItem.styled';
import noImg from '../../images/no-image.png';

const MovieItem = ({ id, poster_path, title, name, currentUrl }) => {
    const location = useLocation();

    return (
        <StyledMoviesItem>
            <Link to={`${currentUrl}${id}`} state={{ from: location }}>
                <img
                    width="100%"
                    src={
                        !!poster_path
                            ? IMG_BASE_URL + IMG_W500 + poster_path
                            : noImg
                    }
                    alt={title || name}
                    loading="lazy"
                />
                <h3>{title || name}</h3>
            </Link>
        </StyledMoviesItem>
    );
};

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    currentUrl: PropTypes.string.isRequired,
};

export default MovieItem;
