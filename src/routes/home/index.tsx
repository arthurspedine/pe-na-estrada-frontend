import { Link } from 'react-router-dom'
import { BannerHome, ConteudoHome, MainContainer, Titulo } from '../../styled'
import img_celular_mao from '/image/pessoa_celular_mao.jpeg'

export default function Home() {
    document.title = 'Home - Pé na Estrada'

    return (
        <MainContainer>
            <BannerHome>
                <div className='banner_texto'>
                    <Titulo>Pé na Estrada</Titulo>
                    <h2>conectando você à solução ideal para o seu veículo</h2>
                </div>
                <div className='banner_assistente'>
                    <p>
                        Experimente agora o <br />
                        Assistente Pé na Estrada!
                    </p>
                    <Link to='area_assistente'>Saiba mais!</Link>
                </div>
            </BannerHome>
            <ConteudoHome>
                <div className='descricao_projeto'>
                    <img
                        src={img_celular_mao}
                        alt='Pessoa em um carro com o celular na mão'
                    />
                    <p>
                        O Pé na Estrada é uma solução inovadora, acessível
                        diretamente do seu dispositivo, que facilita o primeiro
                        contato entre você e as oficinas mecânicas. Utilizando
                        Inteligência Artificial, nossa aplicação realiza uma
                        análise rápida do que pode estar acontecendo com o seu
                        veículo e oferece uma estimativa precisa, tudo na palma
                        da sua mão, de forma simples e eficiente.
                    </p>

                    <p>
                        Com base nas informações fornecidas pelo usuário, nossa
                        IA realiza uma análise inicial e sugere as melhores
                        opções de oficinas próximas ou de preferência. Dessa
                        forma, você pode escolher o local mais adequado para o
                        seu veículo, agendar o serviço e receber todas as
                        informações de forma clara e transparente.
                    </p>
                    <p>
                        Nosso compromisso é com a sua satisfação. Priorizamos a
                        transparência em cada etapa do processo, garantindo que
                        o usuário tenha total clareza sobre os diagnósticos e
                        orçamentos. Ao escolher o Pé na Estrada, você garante um
                        atendimento profissional, focado em resolver o seu
                        problema da maneira mais prática e confiável possível.
                    </p>
                </div>
            </ConteudoHome>
        </MainContainer>
    )
}
