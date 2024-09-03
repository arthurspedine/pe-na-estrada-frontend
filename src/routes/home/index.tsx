import { Link } from 'react-router-dom'
import { BannerHome, ConteudoHome, MainContainer, Titulo } from '../../styled'

export default function Home() {
    return (
        <MainContainer>
            <BannerHome>
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
            </BannerHome>
            <ConteudoHome>
                <div className='container_orcamentos'>
                    <h2>Orçamentos</h2>
                    <div className='lista_orcamentos'>
                        <p>Parece que você tem nenhum orçamento ativo</p>
                    </div>
                </div>
            </ConteudoHome>
        </MainContainer>
    )
}
