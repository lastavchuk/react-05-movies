import styled from 'styled-components';

const StyledHomePage = styled.div`
    h2 {
        margin-top: 30px;
        margin-bottom: 30px;
        font-weight: 700;
        font-size: 24px;
        line-height: 1.11;
        text-align: center;
        letter-spacing: 0.02em;
        color: var(--dark-color);
        @media screen and (min-width: 768px) {
            font-size: 30px;
        }
    }
`;

export default StyledHomePage;
