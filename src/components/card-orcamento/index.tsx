import { CardOrcamentoStyled } from '../../styled'
import { OrcamentoDetail } from '../../types'

export default function CardOrcamento({
    id,
    veiculo,
    data_inicio,
    data_termino,
    descricao,
    status,
    valor,
}: OrcamentoDetail) {
    return (
        <CardOrcamentoStyled>
            <h3>Orçamento {id}</h3>
            <p>Veículo: {veiculo}</p>
            <p>Data início: {data_inicio}</p>
            {data_termino && <p>Data Término: {data_termino}</p>}
            <p>Descrição: {descricao}</p>
            <div className='card_orcamento_status'>
                <p className='tipo_status'>
                    <div
                        className={`status status_${
                            status ? 'andamento' : 'finalizado'
                        }`}
                    ></div>
                    {status ? 'Em andamento' : 'Finalizado'}
                </p>
                <p>R${valor}</p>
            </div>
        </CardOrcamentoStyled>
    )
}
