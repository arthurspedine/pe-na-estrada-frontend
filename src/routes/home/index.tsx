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
