import CardOrcamento from '../../components/card-orcamento'
import { ConteudoAssistente, MainContainer, Titulo } from '../../styled'
import { OrcamentoDetail } from '../../types'

export default function AreaAssistente() {
    document.title = 'Assistente - Pé na Estrada'

    const logado = localStorage.getItem('logado')

    const orcamentos: OrcamentoDetail[] = [
        {
            id: 1,
            veiculo: 'Fiat Uno 2005',
            data_inicio: '13/09/2024',
            descricao:
                'Reparo do sistema de embreagem travado, incluindo lubrificação e ajuste.',
            status: true,
            valor: 600.0,
        },
        {
            id: 2,
            veiculo: 'Audi A4 2024',
            data_inicio: '16/08/2024',
            data_termino: '20/08/2024',
            descricao:
                'Correção do desalinhamento de direção e de falhas no motor.',
            status: false,
            valor: 400.0,
        },
    ]

    return (
        <MainContainer>
            <ConteudoAssistente>
                <div className='container_orcamentos'>
                    <h2>Orçamentos</h2>
                    <div className='lista_orcamentos'>
                        {logado ? (
                            orcamentos.map((orcamento) => (
                                <CardOrcamento
                                    key={orcamento.id}
                                    id={orcamento.id}
                                    veiculo={orcamento.veiculo}
                                    data_inicio={orcamento.data_inicio}
                                    data_termino={orcamento.data_termino}
                                    descricao={orcamento.descricao}
                                    status={orcamento.status}
                                    valor={orcamento.valor}
                                />
                            ))
                        ) : (
                            <p>Parece que você tem nenhum orçamento ativo</p>
                        )}
                    </div>
                </div>
                <div className='container_chat'>
                    <Titulo>Chat Pé na Estrada</Titulo>
                    <div className='container_mensagens'></div>
                    <div className='input_mensagem'>
                        <input
                            type='text'
                            name=''
                            id=''
                            placeholder='Digite aqui...'
                        />
                        <button onClick={() => console.log('fodase')}>
                            &gt;
                        </button>
                    </div>
                </div>
            </ConteudoAssistente>
        </MainContainer>
    )
}
