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

export const ContainerMain = styled.div`
    display: flex;
    padding: 0 45px;

    .lado_texto {
        width: 60%;

        .banner_texto {
            min-height: 40vh;
            display: flex;
            justify-content: center;
            flex-direction: column;

            h1 {
                font-size: 2.7rem;
                color: var(--cor-branco);
            }

            h2 {
                font-weight: 600;
                font-size: 2.4rem;
                color: var(--cor-fonte);
                margin-left: 27px;
            }
        }

        .sobrenos {
            h2 {
                font-size: 2rem;
                color: var(--cor-branco);
            }

            .sobrenos_texto {
                padding: 0.5rem 1.5rem;
            }

            p {
                text-indent: 40px;
                font-size: 1rem;
                margin-bottom: 5px;
                word-spacing: 2px;
                letter-spacing: 1px;
                color: var(--cor-fonte);
            }
        }
    }
    .lado_bot {
        width: 40%;
    }
`

export const DevMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;

    .desenvolvedores {
        display: flex;
        flex-direction: row;
        gap: 50px;
        justify-content: center;
        align-items: center;
    }

    .desenvolvedor {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 310px;
        background: linear-gradient(180deg, #06368eb9 35%, #fff);
        padding: 20px 12px;
        border-radius: 15px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);
    }

    .desenvolvedor img {
        border-radius: 50%;
        width: 230px;
        box-shadow: 0px 1px 9px var(--cor-fonte-azul);
        margin-bottom: 20px;
    }

    .infodev {
        text-align: center;
    }

    .infodev p {
        font-size: 1rem;
        font-weight: 600;
    }

    .linkgithub a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 4px;
        gap: 5px;
        font-size: 0.95rem;
        text-decoration: none;
        color: var(--cor-fonte-azul);
        transition: color 0.3s ease, transform 0.3s ease !important;
        transform-origin: center;
    }

    .linkgithub a:hover {
        color: var(--cor-divmain);
        transform: scale(1.15);
    }

    .linkgithub img {
        width: 20px;
    }

`

    