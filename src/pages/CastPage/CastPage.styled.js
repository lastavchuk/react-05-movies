import styled from 'styled-components';

const StyledCastPage = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
    margin-top: 20px;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    /* margin-left: auto;
    margin-right: auto; */

    h4 {
        padding-bottom: 5px;

        font-weight: 500;
        font-size: 16px;
        line-height: 1.2;
        /* text-align: center; */
        letter-spacing: 0.02em;
        color: var(--dark-color);

        @media screen and (min-width: 768px) {
            font-size: 20px;
        }
    }
`;

export default StyledCastPage;
