import styled from 'styled-components';

export const StyledSearchBox = styled.div`
    margin: 20px 0;

    .inputSearch {
        width: 100%;
        height: 40px;
        margin-bottom: 16px;
        padding: 8px 16px;

        font-size: 12px;
        line-height: 2;
        letter-spacing: 0.04em;

        color: var(--dark-color);
        /* background-color: transparent; */
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        outline: transparent;
        transition: border-color var(--tr-rule);

        @media screen and (min-width: 576px) {
            width: 264px;
            margin-bottom: 0;
            margin-right: 10px;
        }
    }
    .inputSearch::placeholder {
        color: #000000;
        opacity: 0.6;
    }
    .inputSearch:hover,
    .inputSearch:focus {
        border-color: var(--primary-brand-color);
    }

    .btn {
        display: inline-block;
        min-width: 100px;

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
            width: 100%;
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
`;
