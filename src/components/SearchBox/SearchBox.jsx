import PropTypes from 'prop-types';
import { StyledSearchBox } from './SearchBox.styled';

const SearchBox = ({ search, hundleSubmit }) => {
    return (
        <StyledSearchBox>
            <form onSubmit={hundleSubmit}>
                <input
                    className="inputSearch"
                    placeholder="Search movies"
                    type="text"
                    name="inputSearch"
                    defaultValue={search}
                    autoComplete="off"
                    required
                />
                <button type="submit" className="btn btn-action">
                    search
                </button>
            </form>
        </StyledSearchBox>
    );
};
SearchBox.propTypes = {
    search: PropTypes.string,
    hundleSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
