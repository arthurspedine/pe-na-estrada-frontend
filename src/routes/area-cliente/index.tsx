import { FormEvent, useState } from 'react'
import { ConteudoCliente, MainContainer, Titulo } from '../../styled'

export default function AreaCliente() {
    document.title = 'Área Cliente - Pé na Estrada'

    const [jaCadastrado, setJaCadastrado] = useState(false)

    function handleCadastrar(e: FormEvent) {
        e.preventDefault()
        setJaCadastrado(!jaCadastrado)
    }

    return (
        <MainContainer>
            <ConteudoCliente>
                <Titulo>Área Cliente</Titulo>
                <legend>
                    {jaCadastrado
                        ? 'Entre com seu email e senha para continuar'
                        : 'Cadastre agora sua conta para continuar'}
                </legend>
                <form>
                    <div className='input_email'>
                        <label htmlFor='email' className='label_form'>
                            Email:
                        </label>
                        <input
                            className='input_form'
                            type='text'
                            id='email'
                            name='email'
                            required
                        />
                    </div>
                    <div className='input_password'>
                        <label htmlFor='senha'>Senha:</label>
                        <input
                            className='input_form'
                            type='password'
                            id='senha'
                            name='senha'
                            required
                        />
                    </div>

                    <div className='botoes_suporte'>
                        <label>
                            <input type='checkbox' />
                            Mantenha-me conectado
                        </label>
                        <label htmlFor='#'>
                            <a href='#'>Esqueceu a senha?</a>
                        </label>
                    </div>

                    <div className='botoes'>
                        <button
                            onClick={handleCadastrar}
                            className='modo_formulario'
                        >
                            {jaCadastrado
                                ? 'Criar uma conta'
                                : 'Já tenho conta'}
                        </button>
                        <button
                            onClick={handleCadastrar}
                            className='botao_submit'
                        >
                            {jaCadastrado ? 'Login' : 'Cadastrar-se'}
                        </button>
                    </div>
                </form>
            </ConteudoCliente>
        </MainContainer>
    )
}
