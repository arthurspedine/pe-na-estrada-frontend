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
    .dropdown {
        display: none;
    }

    @media screen and (max-width: 768px) {
        justify-content: flex-end;

        ul li .link_cliente_lista {
            display: block;
        }

        .botao_cliente {
            display: none;
        }

        /* HAMBURGER CONFIG */

        .dropdown {
            display: block;
            position: relative;
            top: -0.86rem;
            right: 2.1rem;
        }

        .menu-faketrigger {
            position: absolute;
            z-index: 1000;
            width: 35px;
            height: 35px;
            opacity: 0;
            cursor: pointer;
            display: block;
        }

        .menu-lines {
            display: block;
            position: absolute;
            z-index: 999;
            width: 35px;
            height: 35px;

            span {
                display: block;
                width: 35px;
                height: 4px;
                margin-bottom: 8px;
                background-color: var(--cor-fonte);
                border-radius: 3px;
            }
        }

        .dropdown .menu-faketrigger:checked ~ ul {
            right: -1px;
        }

        .dropdown .menu-faketrigger:checked ~ .menu-lines span:nth-child(1) {
            transform-origin: 100% 0%;
            transform: rotate(-41deg) scaleX(1.05);
        }

        .dropdown .menu-faketrigger:checked ~ .menu-lines span:nth-child(2) {
            opacity: 0;
        }

        .dropdown .menu-faketrigger:checked ~ .menu-lines span:nth-child(3) {
            transform-origin: 100% 100%;
            transform: rotate(43deg) scaleX(1.05);
        }

        /* DROPDOWN ITEMS CONFIG */

        ul {
            display: block;
            position: absolute;
            z-index: 998;
            top: 30px;
            /* right: -1px; */
            right: -300px;
            background-color: #00a0fc44;
        }
    }
`
