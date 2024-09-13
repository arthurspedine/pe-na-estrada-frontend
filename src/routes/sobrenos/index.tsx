import CardDev from '../../components/card-dev'
import { BannerSobreNos, ConteudoDev, MainContainer } from '../../styled'

import PerfilGui from '/image/desenvolvedor/guilherme.png'
import PerfilArthur from '/image/desenvolvedor/arthur.png'
import PerfilVinicius from '/image/desenvolvedor/vinicius.png'

import ImagemPrincipal from '/image/sobre_nos.jpeg'

export default function SobreNos() {
    document.title = 'Sobre nós - Pé na Estrada'

    return (
        <MainContainer>
            <BannerSobreNos>
                <div className='banner_sobrenos'>
                    <h2>Sobre Nós</h2>
                    <div className='sobrenos_texto'>
                        <p>
                            O <strong>Pé Na Estrada</strong> surgiu de uma
                            parceria entre a Porto Seguro e a FIAP. Nossa missão
                            é transformar a manutenção automotiva, tornando-a
                            mais eficiente e acessível. Valorizamos a inovação,
                            qualidade, transparência e sustentabilidade, atuando
                            no setor automotivo com soluções de inteligência
                            artificial.
                        </p>
                        <img
                            className='imagem_texto'
                            src={ImagemPrincipal}
                            alt='Imagem com mecanicos em volta de um carro'
                        />
                        <p>
                            Compreendemos que muitos clientes não têm total
                            confiança ao levar seu veículo a uma oficina
                            mecânica para diagnóstico, especialmente quando não
                            possuem conhecimentos técnicos e podem acabar sendo
                            enganados. É para resolver essa questão que o Pé na
                            Estrada foi desenvolvido. Nossa plataforma permite
                            que o cliente obtenha um orçamento de forma rápida e
                            prática. Basta conversar com o Chat Pé na Estrada,
                            que vai entender o problema e fornecer um
                            diagnóstico preliminar. Com esse diagnóstico em
                            mãos, o cliente pode então levar seu veículo a uma
                            oficina mecânica parceira com maior segurança e
                            transparência.
                        </p>
                        <p>
                            Estamos comprometidos em oferecer uma solução
                            completa e inovadora para suas necessidades de
                            orçamento de veículos. Junte-se a nós e experimente
                            a diferença que a tecnologia pode fazer em sua
                            jornada automotiva.
                        </p>
                    </div>
                </div>
                <div className='banner_imagem'>
                    <img
                        // src='http://via.placeholder.com/150x150'
                        src={ImagemPrincipal}
                        alt='Imagem com mecanicos em volta de um carro'
                    />
                </div>
            </BannerSobreNos>

            <ConteudoDev>
                <h2>Equipe</h2>
                <div className='container_cards'>
                    <CardDev
                        nome='Arthur Chacon Garcia Spedine'
                        rm='554489'
                        usuario_github='arthurspedine'
                        imagem_perfil={PerfilArthur}
                    />

                    <CardDev
                        nome='Guilherme Damasio Roselli'
                        rm='555873'
                        usuario_github='Guiroselli'
                        imagem_perfil={PerfilGui}
                    />

                    <CardDev
                        nome='Vinicius de Oliveira Coutinho'
                        rm='556182'
                        usuario_github='ViniOC'
                        imagem_perfil={PerfilVinicius}
                    />
                </div>
                <div className='link_repositorio'>
                    <a
                        href='https://github.com/arthurspedine/pe-na-estrada-frontend'
                        target='_blank'
                        className=''
                    >
                        <img src='/image/github_logo.png' alt='Logo GitHub' />
                        Link repositório
                    </a>
                </div>
            </ConteudoDev>
        </MainContainer>
    )
}
