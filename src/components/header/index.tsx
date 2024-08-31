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
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/desenvolvedores'>Desenvolvedores</Link>
                    </li>
                    <li>
                        <Link to='/login' className='link_cliente_lista'>
                            Área do Cliente
                        </Link>
                    </li>
                </ul>
                {/* HAMBURGER */}
                <input type='checkbox' className='menu-faketrigger' />
                <div className='menu-lines'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='botao_cliente'>
                    <Link to='/login'>Área do Cliente</Link>
                </div>
            </NavBar>
        </HeaderStyled>
    )
}
