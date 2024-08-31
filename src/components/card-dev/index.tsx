import { CardDevStyled } from '../../styled'
import logo_github from '/image/github_logo.png'

interface CardDevProps {
    nome: string
    rm: string
    usuario_github: string
    imagem_perfil: string
}

export default function CardDev({
    nome,
    rm,
    usuario_github,
    imagem_perfil,
}: CardDevProps) {
    return (
        <CardDevStyled>
            <img src={imagem_perfil} alt={nome} id='imgperfil' />
            <div className='infodev'>
                <p>{nome}</p>
                <span>RM: {rm}</span>
                <div className='linkgithub'>
                    <a
                        href={`https://github.com/${usuario_github}`}
                        target='_blank'
                    >
                        <img src={logo_github} alt='GitHub logo' />
                        GitHub
                    </a>
                </div>
            </div>
        </CardDevStyled>
    )
}
