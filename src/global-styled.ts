import { createGlobalStyle } from 'styled-components'

export const GlobatStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-weight: 400;

        scroll-behavior: smooth;
        transition: all 0.3s ease;

        list-style: none;
        text-decoration: none;

        font-family: var(--fonte-principal);
    }

    body {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        overflow-x: hidden;
    }

    #root {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        min-height: 100vh;
        /* padding: 0px 3rem; */
        background: 
            linear-gradient(0deg, #051F52 0.1%, #174FB7 100%),
            url('/bg.jpg');
        background-size: cover;
        background-position: center;
        background-blend-mode: overlay;
    }

    main {
        margin: 0 auto;
        width: 100%;
        max-width: 1440px;
        flex-grow: 1;
    }
`
