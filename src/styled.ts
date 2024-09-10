import styled from 'styled-components'

export const MainContainer = styled.main`
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
    flex-grow: 1;

    display: flex;
    flex-direction: column;

    padding: 0 45px;

    @media screen and (max-width: 400px) {
        padding: 0 25px;
    }
`

export const Titulo = styled.h1`
    font-size: 2.7rem;
    color: var(--cor-branco);
`

export const HeaderStyled = styled.header`
    width: 100%;
    max-width: 1440px;
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
        z-index: 999;
    }

    @media screen and (max-width: 768px) {
        flex-direction: row-reverse;
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
        position: relative;
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
                transform: scale(1.1);
            }

            .link_cliente_lista {
                display: none;
            }
        }
    }

    .botao_cliente {
        border: 3px solid var(--cor-azul-claro);
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
    .menu-faketrigger,
    .menu-lines {
        display: none;
    }

    @media screen and (max-width: 768px) {
        ul li .link_cliente_lista {
            display: block;
        }

        .botao_cliente {
            display: none;
        }

        /* HAMBURGER CONFIG */

        .menu-faketrigger {
            position: absolute;
            z-index: 1000;
            width: 35px;
            height: 35px;
            opacity: 0;
            top: -0.86rem;
            cursor: pointer;
            display: block;
        }

        .menu-lines {
            display: block;
            position: absolute;
            top: -0.86rem;
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

        .menu-faketrigger:checked ~ ul {
            margin-left: -20px;
        }

        .menu-faketrigger:checked ~ .menu-lines span:nth-child(1) {
            transform-origin: 0% 0%;
            transform: rotate(44deg) scaleX(1.05);
        }

        .menu-faketrigger:checked ~ .menu-lines span:nth-child(2) {
            opacity: 0;
        }

        .menu-faketrigger:checked ~ .menu-lines span:nth-child(3) {
            transform-origin: 0% 100%;
            transform: rotate(-42deg) scaleX(1.05);
        }

        /* DROPDOWN ITEMS CONFIG */

        ul {
            display: block;
            position: absolute;
            z-index: 998;
            border-radius: 0 0 8px 8px;
            width: 100vw;
            padding: 1rem;
            background-color: var(--cor-bg-escuro);

            top: -40px;
            margin-left: -150vw;
            padding-top: 70px;

            li {
                margin: 0;
                a,
                .link_cliente_lista {
                    width: 100% !important;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    height: 60px;
                }
            }
        }
    }

    @media screen and (max-width: 428px) {
        ul li a {
            width: 180px;
        }
    }
`

export const FooterStyled = styled.footer`
    background-color: #00000055;
    padding: 1rem 0;
    margin-top: 50px;
    p {
        font-size: 0.9rem;
        color: var(--cor-fonte);
        text-align: center;
    }
`

export const ErrorContainer = styled.main`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
        color: var(--cor-fonte);
        font-size: 1.4rem;
    }

    button {
        margin-top: 10px;
        border: 2px solid var(--cor-azul-claro);
        background-color: var(--cor-azul-principal);
        padding: 10px 20px;
        border-radius: 5px;
        color: var(--cor-branco);
        font-size: 1.05rem;
        cursor: pointer;
    }

    button:hover {
        border-radius: 10px;
    }
`

export const BannerHome = styled.section`
    width: 100%;
    height: 70vh;
    max-height: 70vh;
    display: flex;

    .banner_texto {
        width: 60%;
        display: flex;
        justify-content: center;
        flex-direction: column;

        h2 {
            font-weight: 600;
            font-size: 2.4rem;
            color: var(--cor-fonte);
            margin-left: 27px;
            max-width: 450px;
        }
    }

    .banner_assistente {
        width: 40%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        p {
            text-align: center;
            font-size: 1.4rem;
            color: var(--cor-fonte);
            margin-bottom: 10px;
        }

        a {
            margin-top: 10px;
            background-color: #061124cc;
            border: 3px solid var(--cor-azul-normal);
            box-shadow: 1px 1px 4px 1px rgba(200, 200, 200, 0.6);
            border-radius: 7px;
            padding: 18px 40px;
            color: var(--cor-fonte);
            font-size: 1.3rem;
        }

        a:hover {
            background-color: #042052cc;
        }
    }

    @media screen and (max-width: 1023px) {
        .banner_texto {
            h1 {
                font-size: 2.3rem;
            }
            h2 {
                font-size: 2rem;
            }
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-height: 80vh;
        height: 80vh;

        .banner_texto,
        .banner_assistente {
            width: 100%;
        }

        .banner_texto {
            text-align: center;

            h2 {
                margin: 15px auto 40px;
                text-align: left;
                padding-left: 50px;
            }
        }
    }

    @media screen and (max-width: 528px) {
        .banner_texto {
            h1 {
                font-size: 1.93rem;
            }

            h2 {
                font-size: 1.8rem;
                padding-left: 13%;
            }
        }
    }

    @media screen and (max-width: 480px) {
        .banner_texto {
            h2 {
                padding-left: 10%;
            }
        }
    }

    @media screen and (max-width: 389px) {
        .banner_texto {
            h1 {
                font-size: 1.7rem;
            }

            h2 {
                font-size: 1.4rem;
            }
        }
    }
`

export const ConteudoHome = styled.div`
    width: 100%;
    display: flex;

    .descricao_projeto {
        p {
            color: var(--cor-branco);
            font-size: 1.1rem;
            text-indent: 40px;
            font-weight: 400;
            line-height: 1.8rem;
        }

        img {
            width: 200px;
            border-radius: 8px;
            box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.7);
            margin-left: 25px;
            max-height: 300px;
            float: right;
        }
    }

    @media screen and (max-width: 600px) {
        .descricao_projeto {
            img {
                display: none;
            }
        }
    }
`

export const BannerSobreNos = styled.section`
    /* h1 {
        position: absolute;
    } */
    max-height: 70vh;
    margin-top: 50px;
    display: flex;

    img {
        border-radius: 3px;
        box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.7);
    }

    .banner_sobrenos {
        width: 70%;
        h2 {
            font-size: 2rem;
            color: var(--cor-branco);
        }

        .sobrenos_texto {
            padding: 0.5rem 1.5rem;
        }

        p {
            text-indent: 40px;
            font-size: 1.05rem;
            margin-bottom: 5px;
            word-spacing: 2px;
            letter-spacing: 1px;
            color: var(--cor-branco);
        }

        .imagem_texto {
            display: none;
        }

        strong {
            font-weight: 600;
        }
    }

    .banner_imagem {
        width: 30%;
        display: flex;
        align-items: center;
        img {
            width: 365px;
        }
    }

    @media screen and (max-width: 1300px) {
        .banner_sobrenos {
            width: 60%;
        }

        .banner_imagem {
            width: 40%;

            img {
                margin: auto;
            }
        }
    }

    @media screen and (max-width: 1023px) {
        .banner_imagem {
            display: none;
        }

        .banner_sobrenos {
            width: 100%;

            .imagem_texto {
                display: block;
                width: 340px;
                float: right;
                margin: 0 0 20px 20px;
            }

            .sobrenos_texto {
                padding: 0.5rem 0;
            }
        }
    }

    @media screen and (max-width: 768px) {
        max-height: 100vh;
        .banner_sobrenos {
            .imagem_texto {
                width: 45%;
                margin: 20px;
                margin-right: 0;
            }
        }
    }

    @media screen and (max-width: 564px) {
        max-height: none;
        margin-top: 0;
        .banner_sobrenos {
            .imagem_texto {
                display: none;
            }

            p {
                font-size: 1rem;
            }
        }
    }
`

export const ConteudoDev = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 15px;

    gap: 10px;

    h2 {
        font-size: 2rem;
        color: var(--cor-branco);
    }

    .container_cards {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`

export const CardDevStyled = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;

    min-width: 350px;
    max-width: 350px;
    /* background: linear-gradient(180deg, #06368eb9 35%, #eee); */
    background-color: var(--cor-azul-normal);
    padding: 20px 12px;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);

    #imgperfil {
        border-radius: 50%;
        width: 130px;
        box-shadow: 0px 1px 9px var(--cor-azul-claro);
    }

    .infodev {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding-left: 10px;

        p {
            color: var(--cor-branco);
            font-size: 1.1rem;
            margin-bottom: 5px;
        }

        span {
            color: var(--cor-fonte);
            text-align: center;
        }

        .linkgithub a {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;
            gap: 5px;

            font-size: 1rem;
            text-decoration: none;
            color: var(--cor-branco);
            transition: color 0.3s ease, transform 0.3s ease !important;
            transform-origin: center;

            img {
                width: 20px;
            }
        }

        .linkgithub a:hover {
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 564px) {
        min-width: 300px;
        margin-top: 15px;

        #imgperfil {
            width: 90px;
        }
    }
`

export const ConteudoCliente = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;

    max-width: 720px;
    max-height: 70vh;
    width: 100%;
    margin: 0 auto;

    legend {
        color: var(--cor-fonte);
        font-size: 1.2rem;
        margin: 15px 15px 0;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 8px 15px;

        max-width: 520px;
        width: 100%;

        div {
            display: flex;
            flex-direction: column;
            margin: 10px 0;
        }

        label {
            color: var(--cor-branco);
            font-size: 1.1rem;
        }

        .input_form {
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            min-width: 300px;
            border: none;

            font-size: 1rem;

            border: 2px solid var(--cor-branco);
        }

        input:focus {
            outline: none;
            border: 2px solid var(--cor-bg-escuro);
        }

        .botoes_suporte {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 30px;

            label {
                display: flex;
                align-items: center;
                font-size: 0.9rem;

                a {
                    text-decoration: none;
                    color: var(--cor-branco);
                }
            }

            input {
                width: 15px;
                height: 15px;
                margin-right: 8px;
            }
        }

        .botoes {
            display: flex;
            flex-direction: row;

            justify-content: space-between;
            gap: 80px;

            button {
                font-size: 1.05rem;
                color: var(--cor-fonte);
                padding: 5px 10px;
                min-width: 130px;

                cursor: pointer;
            }

            .modo_formulario {
                background-color: transparent;
                border: none;
            }

            .botao_submit {
                background-color: var(--cor-azul-claro);
                border: none;
                border-radius: 15px;
                color: var(--cor-bg-escuro);
            }
        }
    }

    @media screen and (max-width: 564px) {
        padding: 30px 0;

        legend {
            margin: 15px 0 0;
            font-size: 1.1rem;
        }

        form {
            padding: 4px 0;

            .botoes {
                gap: 60px;
            }
        }
    }

    @media screen and (max-width: 370px) {
        legend {
            font-size: 1.05rem;
        }

        form {
            .botoes_suporte {
                gap: 10px;
            }

            .botoes {
                gap: 50px;
                button {
                    font-size: 1rem;
                }
            }
        }
    }
`

export const ConteudoAssistente = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    margin: auto;

    .container_orcamentos {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        h2 {
            position: absolute;
            font-size: 2rem;
            color: var(--cor-branco);
            z-index: 1;
            top: -20px;
        }

        .lista_orcamentos {
            overflow: auto;
            width: 100%;
            flex-grow: 1;
            margin: 0 auto;
            max-width: 340px;
            max-height: 515px;
            background-color: var(--cor-bg-escuro);
            border-radius: 15px;
            padding: 1.5rem 1rem;

            p {
                color: var(--cor-fonte);
                font-size: 1.2rem;
            }
        }

        .lista_orcamentos::-webkit-scrollbar {
            background-color: var(--cor-bg-escuro);
            border-radius: 0 10px 10px 0;
            width: 10px;
        }

        .lista_orcamentos::-webkit-scrollbar-thumb {
            background-color: var(--cor-fonte);
            border-radius: 0 10px 10px 0;
        }
    }

    .container_chat {
        position: relative;
        background-color: #131313;
        border-radius: 15px;
        padding: 8px;
        width: 60%;
        display: flex;
        flex-direction: column;
        max-height: 515px;

        align-items: center;

        h1 {
            font-size: 2rem;
            position: absolute;
            top: -20px;
        }

        .container_mensagens {
            min-height: 450px;
            max-height: 450px;
            min-width: 100%;
            background-color: #191919;
            border-radius: 15px;
        }

        .input_mensagem {
            position: relative;
            width: 100%;

            input {
                display: block;
                border: none;
                background-color: #04245e;
                border-radius: 5px;

                width: 90%;
                padding: 8px 12px;
                margin: 8px auto 0;

                color: var(--cor-branco);
                font-size: 1.1rem;

                border: 2px solid #04245e;
            }

            input::placeholder {
                color: var(--cor-branco);
            }

            input:focus {
                outline: none;
                border: 2px solid var(--cor-azul-claro);
            }

            button {
                position: absolute;
                right: 60px;
                font-size: 2rem;
                background-color: transparent;
                border: none;
                color: var(--cor-fonte);
                top: 9px;
            }
        }
    }

    @media screen and (max-width: 1023px) {
        .container_orcamentos,
        .container_chat {
            width: 100%;
        }

        .container_orcamentos {
            margin-bottom: 40px;

            .lista_orcamentos {
                max-width: 100%;
            }
        }

        .container_chat {
            max-width: 100%;
        }
    }

    @media screen and (max-width: 630px) {
        .container_chat {
            .input_mensagem {
                button {
                    right: 50px;
                }
            }
        }
    }

    @media screen and (max-width: 630px) {
        .container_chat {
            .input_mensagem {
                button {
                    right: 40px;
                }
            }
        }
    }
`

export const CardOrcamentoStyled = styled.div`
    position: relative;
    width: 100%;
    background-color: #0e419f;
    border-radius: 8px;
    padding: 16px 12px;

    margin: 16px 0 32px;

    h3 {
        background-color: #002775;
        position: absolute;
        top: -15px;
        left: 10px;
        color: var(--cor-fonte);
        padding: 3px 8px;

        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
    }

    p {
        margin-top: 5px;
        font-size: 1.1rem !important;
        color: var(--cor-fonte) !important;
    }

    .card_orcamento_status {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .tipo_status {
            display: flex;
            align-items: center;
            gap: 5px;

            .status {
                width: 8px;
                height: 8px;
                border-radius: 50%;
            }

            .status_finalizado {
                background-color: #0f0;
            }

            .status_andamento {
                background-color: #ff0;
            }
        }
    }
`
