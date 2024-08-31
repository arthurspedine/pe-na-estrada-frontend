import { Link } from 'react-router-dom'
import { ContainerMain } from '../../styled'

export default function Home() {
    return (
        <main>
            <ContainerMain>
                <div className='lado_texto'>
                    <div className='banner_texto'>
                        <h1>Chatbot Porto Seguro</h1>
                        <h2>
                            sua solução rápida e <br />
                            inteligente para seus <br />
                            problemas automotivos!
                        </h2>
                    </div>

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
                </div>
                <div className='lado_bot'>
                    <div className='banner_assistente'>
                        <p>Experimente agora o Assistente Pé na Estrada!</p>
                        <button>
                            <Link to='area_assistente'>Saiba mais!</Link>
                        </button>
                    </div>
                    <div className='orcamentos'>
                        <h2>Orçamentos</h2>
                    </div>
                </div>
            </ContainerMain>
        </main>
    )
}
