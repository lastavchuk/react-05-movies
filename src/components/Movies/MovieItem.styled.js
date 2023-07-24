import styled from 'styled-components';
// import svgSearch from '../../images/search.svg';

const StyledMoviesItem = styled.li`
    /* border-radius: 2px; */
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.03);
        cursor: zoom-in;
    }

    & img {
        width: 100%;
        /* height: 450px; */
        object-fit: cover;
        /* transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1); */
    }

    /* & img:hover {
        transform: scale(1.03);
        cursor: zoom-in;
    } */

    h3 {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;

        font-weight: 500;
        font-size: 20px;
        line-height: 1.2;
        /* text-align: center; */
        letter-spacing: 0.02em;
        color: var(--dark-color);

        @media screen and (min-width: 768px) {
            font-size: 24px;
        }
    }
`;

export default StyledMoviesItem;
