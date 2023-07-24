import styled from 'styled-components';

const StyledReviewsPage = styled.ul`
    margin-top: 20px;

    img {
        max-width: 80px;
    }
    h4 {
        padding-bottom: 5px;

        font-weight: 500;
        font-size: 14px;
        line-height: 1.2;
        letter-spacing: 0.02em;
        color: var(--dark-color);

        @media screen and (min-width: 768px) {
            font-size: 18px;
        }
    }

    .wrapper {
        margin-bottom: 15px;
        @media screen and (min-width: 768px) {
            display: flex;
            gap: 10px;
        }
    }
`;

export default StyledReviewsPage;
