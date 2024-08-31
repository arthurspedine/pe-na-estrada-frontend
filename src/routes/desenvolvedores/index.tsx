import { ContainerDev, Titulo } from '../../styled'

export default function Desenvolvedores() {
    return (
        <main>
            <ContainerDev>
                <Titulo>Desenvolvedores</Titulo>
                <div className='container_desenvolvedores'>
                    <div className='card_dev'>
                        <img
                            src='../image/desenvolvedor/guilherme.png'
                            alt='Guilherme'
                            id='imgperfil'
                        />
                        <div className='infodev'>
                            <p>Guilherme Damasio Roselli</p>
                            <span>RM: 555873</span>
                        </div>
                        <div className='linkgithub'>
                            <a
                                href='https://github.com/Guiroselli'
                                target='_blank'
                            >
                                <img
                                    src='../image/github_logo.png'
                                    alt='GitHub logo'
                                />
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className='card_dev'>
                        <img
                            src='../image/desenvolvedor/arthur.png'
                            alt='Arthur'
                            id='imgperfil'
                        />
                        <div className='infodev'>
                            <p>Arthur Chacon Garcia Spedine</p>
                            <span>RM: 554489</span>
                        </div>
                        <div className='linkgithub'>
                            <a
                                href='https://github.com/arthurspedine'
                                target='_blank'
                            >
                                <img
                                    src='../image/github_logo.png'
                                    alt='GitHub logo'
                                />
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className='card_dev'>
                        <img
                            src='../image/desenvolvedor/vinicius.png'
                            alt='Vinicius'
                            id='imgperfil'
                        />
                        <div className='infodev'>
                            <p>Vinicius de Oliveira Coutinho</p>
                            <span>RM: 556182</span>
                        </div>
                        <div className='linkgithub'>
                            <a href='https://github.com/ViniOC' target='_blank'>
                                <img
                                    src='../image/github_logo.png'
                                    alt='GitHub logo'
                                />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </ContainerDev>
        </main>
    )
}
