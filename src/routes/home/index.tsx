import { Link } from 'react-router-dom'
import { ContainerMain, Titulo } from '../../styled'

export default function Home() {
    return (
        <main>
            <ContainerMain>
                <div className='banner_home'>
                    <div className='banner_texto'>
                        <Titulo>Chatbot Porto Seguro</Titulo>
                        <h2>
                            sua solução rápida e inteligente para seus problemas
                            automotivos!
                        </h2>
                    </div>
                    <div className='banner_assistente'>
                        <p>
                            Experimente agora o <br />
                            Assistente Pé na Estrada!
                        </p>
                        <Link to='area_assistente'>Saiba mais!</Link>
                    </div>
                </div>
                <div className='container_home'>
                    <div className='sobrenos'>
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
                    <div className='container_orcamentos'>
                        <h2>Orçamentos</h2>
                        <div className='lista_orcamentos'>
                            <p>Parece que você tem nenhum orçamento ativo</p>
                        </div>
                    </div>
                </div>
            </ContainerMain>
        </main>
    )
}
