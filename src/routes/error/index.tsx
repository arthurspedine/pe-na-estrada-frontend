import { useNavigate } from 'react-router-dom'
import { ErrorContainer, Titulo } from '../../styled'

export default function Error() {
    document.title = 'Error 404'
    const nav = useNavigate()

    const voltar = () => {
        return nav('/')
    }

    return (
        <ErrorContainer>
            <Titulo style={{ color: 'red' }}>Error 404</Titulo>
            <span>Página não encontrada</span>
            <button onClick={voltar}>Clique aqui para voltar para Home</button>
        </ErrorContainer>
    )
}
