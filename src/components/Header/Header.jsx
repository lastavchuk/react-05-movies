import { NavLink } from 'react-router-dom';
import Container from 'components/Container/Container';
import StyledHeader from './Header.styled';

function Header() {
    return (
        <StyledHeader>
            <Container>
                <nav className="main-nav">
                    <NavLink to="/" className="logo">
                        Movie<span className="logo-color">Search</span>
                    </NavLink>
                    <ul className="site-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movies" className="link">
                                Movies
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </StyledHeader>
    );
}

export default Header;
