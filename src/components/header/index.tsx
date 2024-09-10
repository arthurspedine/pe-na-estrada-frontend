import logo from '/image/logo_porto.png'
import { HeaderStyled, NavBar } from '../../styled'
import { Link } from 'react-router-dom'

export default function Header() {
    function sumirMenu() {
        const menu_checkbox = document.querySelector(
            '.menu-faketrigger'
        ) as HTMLInputElement | null
        if (menu_checkbox && menu_checkbox.checked === true) {
            menu_checkbox.checked = false
        } else {
            console.error('Menu não encontrado!')
        }
    }

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
                        <Link to='/' onClick={sumirMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/sobrenos' onClick={sumirMenu}>
                            Sobre Nós
                        </Link>
                    </li>
                    <li>
                        <Link to='/area_assistente' onClick={sumirMenu}>
                            Assistente
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/cliente'
                            className='link_cliente_lista'
                            onClick={sumirMenu}
                        >
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
