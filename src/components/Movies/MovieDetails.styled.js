import styled from 'styled-components';

const StyledMovieDetails = styled.div`
    margin-top: 20px;
    @media screen and (min-width: 768px) {
        display: flex;
        gap: 20px;
    }

    img {
        max-width: 320px;
    }

    h2 {
        margin-top: 10px;
        margin-bottom: 30px;
        font-weight: 700;
        font-size: 24px;
        line-height: 1.11;
        letter-spacing: 0.02em;
        text-align: center;
        color: var(--dark-color);
        @media screen and (min-width: 768px) {
            font-size: 34px;
            text-align: left;
        }
    }
    h3 {
        font-weight: 500;
        font-size: 18px;
        line-height: 1.11;
        letter-spacing: 0.02em;
        color: var(--dark-color);
        @media screen and (min-width: 768px) {
            font-size: 24px;
        }
    }
    .center {
        margin: 0 auto;
    }
    .section {
        margin-bottom: 20px;
    }

    .btnGroup {
        display: flex;
        gap: 10px;
        margin-top: 5px;
    }
    .btn {
        display: inline-block;
        min-width: 150px;

        padding: 8px 16px;
        border: 1px solid var(--accent-color);
        border-radius: 4px;

        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 1.5;

        text-align: center;
        letter-spacing: 0.04em;
        cursor: pointer;

        @media screen and (max-width: 576px) {
            flex-grow: 1;
        }
    }

    .btn-action {
        background-color: var(--primary-brand-color);
        color: var(--white-color);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border: none;

        transition: background-color var(--tr-rule);
    }
    .btn-action:hover,
    .btn-action:focus {
        background-color: var(--pressed-state-color);
    }
    .btn-secondary {
        padding: 4px 8px;
        background-color: var(--light-color);
        color: var(--primary-brand-color);
        border: 1px solid var(--accent-color);

        transition-property: color, background-color, border, box-shadow;
        transition-duration: var(--tr-duration);
        transition-timing-function: var(--tr-cubic);
    }
    .btn-secondary:hover,
    .btn-secondary:focus {
        background-color: var(--pressed-state-color);
        color: var(--white-color);
        border: 1px solid transparent;
        box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
            0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
    }
`;

export default StyledMovieDetails;
