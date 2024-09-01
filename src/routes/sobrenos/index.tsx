import CardDev from '../../components/card-dev'
import { ContainerDev } from '../../styled'

import PerfilGui from '/image/desenvolvedor/guilherme.png'
import PerfilArthur from '/image/desenvolvedor/arthur.png'
import PerfilVinicius from '/image/desenvolvedor/vinicius.png'

import ImagemPrincipal from '/image/sobre_nos.jpeg'

export default function SobreNos() {
    return (
        <main>
            <ContainerDev>
                {/* <Titulo>Quem somos?</Titulo> */}

                <div className='container_banner'>
                    <div className='banner_sobrenos'>
                        <h2>Sobre Nós</h2>
                        <div className='sobrenos_texto'>
                            <p>
                                O <strong>Pé na Estrada</strong> é uma
                                ferramenta desenvolvida para revolucionar a
                                maneira como as pessoas lidam com orçamentos de
                                veículos. Nossa missão como grupo é trazer
                                comodidade e eficiência para o processo, tudo
                                através de uma plataforma inovadora impulsionada
                                pela inteligência artificial.
                            </p>
                            <p>
                                Nosso site é projetado para a criação de uma
                                experiência amigável para o usuário. Nosso
                                front-end foi cuidadosamente projetado para
                                proporcionar um ambiente intuitivo e acolhedor,
                                facilitando cada interação com nosso serviço.
                            </p>
                            <p>
                                Após a análise minuciosa de seu caso,
                                encaminhamos o problema para nossas oficinas
                                parceiras, que recebem não apenas a descrição do
                                problema, mas também a solução proposta. Dessa
                                forma, as oficinas podem se concentrar apenas na
                                execução do serviço, garantindo uma resposta
                                rápida e eficiente. A oficina mais próxima ao
                                usuário tem prioridade, assegurando que o
                                cliente seja atendido no menor tempo possível.
                            </p>
                            <p>
                                Estamos comprometidos em oferecer uma solução
                                completa e inovadora para suas necessidades de
                                orçamento de veículos. Junte-se a nós e
                                experimente a diferença que a tecnologia pode
                                fazer em sua jornada automotiva.
                            </p>
                        </div>
                    </div>
                    <div className='banner_imagem'>
                        <img
                            // src='http://via.placeholder.com/150x150'
                            src={ImagemPrincipal}
                            alt='Imagem teste'
                        />
                    </div>
                </div>

                <div className='container_desenvolvedores'>
                    <h2>Equipe</h2>
                    <div className='container_cards'>
                        <CardDev
                            nome='Guilherme Damasio Roselli'
                            rm='555873'
                            usuario_github='Guiroselli'
                            imagem_perfil={PerfilGui}
                        />
                        <CardDev
                            nome='Arthur Chacon Garcia Spedine'
                            rm='554489'
                            usuario_github='arthurspedine'
                            imagem_perfil={PerfilArthur}
                        />

                        <CardDev
                            nome='Vinicius de Oliveira Coutinho'
                            rm='556182'
                            usuario_github='ViniOC'
                            imagem_perfil={PerfilVinicius}
                        />
                    </div>
                </div>
            </ContainerDev>
        </main>
    )
}
