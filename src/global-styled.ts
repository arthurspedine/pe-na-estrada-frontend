import { createGlobalStyle } from 'styled-components'

export const GlobatStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        scroll-behavior: smooth;
        transition: all 0.3s ease;

        list-style: none;
        text-decoration: none;

        font-family: var(--fonte-principal);
    }

    body {
        width: 100vw;
    }

    #root {
        max-width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;

        background: linear-gradient(0deg,
                #051F52 0.1%,
                #174FB7 100%);
    }

    main {
        width: 1200px;
        margin: 0 auto;
        background-color: #174F51;
        flex-grow: 1;
    }
`
