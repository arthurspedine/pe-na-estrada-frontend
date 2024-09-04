import logo from '/image/logo_porto.png'
import { HeaderStyled, NavBar } from '../../styled'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <HeaderStyled>
            <div className='logo'>
                <img src={logo} alt='Logo' />
            </div>
            <NavBar className='menu'>
                {/* HAMBURGER */}
                <input type='checkbox' className='menu-faketrigger' />
                <div className='menu-lines'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/sobrenos'>Sobre Nós</Link>
                    </li>
                    <li>
                        <Link to='/area_assistente'>Assistente</Link>
                    </li>
                    <li>
                        <Link to='/cliente' className='link_cliente_lista'>
                            Área do Cliente
                        </Link>
                    </li>
                </ul>
                <div className='botao_cliente'>
                    <Link to='/cliente'>Área do Cliente</Link>
                </div>
            </NavBar>
        </HeaderStyled>
    )
}
