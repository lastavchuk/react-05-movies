import styled from 'styled-components';

const StyledHeader = styled.header`
    position: relative;
    border-bottom: 1px solid var(--accent-color);
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
        0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

    .nav-item {
        color: var(--dark-color);
    }
    .main-nav {
        display: flex;
        align-items: center;
    }
    .main-nav .logo {
        margin-right: 60px;
    }
    .site-nav {
        display: flex;
        justify-content: center;
        gap: 30px;
    }
    .site-nav .link {
        display: block;
        padding-top: 24px;
        padding-bottom: 24px;

        font-weight: 500;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.02em;

        transition: color var(--tr-rule);
    }
    .nav-item {
        position: relative;
    }
    .nav-item > .active::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 4px;

        background: var(--pressed-state-color);
        border-radius: 2px;
    }

    .logo {
        font-weight: 800;
        font-size: 18px;
        line-height: 1.17;

        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: var(--primary-brand-color);
    }
    .logo-color {
        color: var(--dark-color);
    }
`;

export default StyledHeader;
