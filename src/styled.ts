import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    .logo {
        img {
            width: 9rem;
            filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.3));
        }
    }
`

export const NavBar = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    /* LISTA COM LINKS */
    ul {
        display: flex;
        align-items: center;

        li {
            margin-left: 32px;

            a {
                width: 100%;
                color: var(--cor-fonte);
                font-size: 1.15rem;
                display: inline-block;
                transform-origin: center;
            }

            a:hover {
                color: var(--cor-azul-claro);
                transform: scale(0.97);
            }

            .link_cliente_lista {
                display: none;
            }
        }
    }

    .botao_cliente {
        border: 2px solid var(--cor-azul-normal);
        padding: 6px;
        border-radius: 5px;
        text-align: center;
        width: 160px;
        display: inline-block;

        cursor: pointer;

        a {
            color: var(--cor-fonte);
            font-weight: 400;
            font-size: 1.1rem;
        }
    }

    .botao_cliente:hover {
        background-color: #00a0fc44;
    }

    /* HAMBURGER */
    .menu-lines,
    .menu-faketrigger {
        display: none;
    }

    @media screen and (max-width: 600px) {
        ul li .link_cliente_lista {
            display: block;
        }
    }
`
