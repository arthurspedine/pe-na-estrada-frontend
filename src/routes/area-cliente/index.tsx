import { FormEvent, useState } from 'react'
import { ConteudoCliente, MainContainer, Titulo } from '../../styled'
import { useNavigate } from 'react-router-dom'

export default function AreaCliente() {
    const nav = useNavigate()

    document.title = 'Área Cliente - Pé na Estrada'

    const [jaCadastrado, setJaCadastrado] = useState(false)

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function opcaoLogin(e: FormEvent) {
        e.preventDefault()
        setJaCadastrado(!jaCadastrado)
    }

    function acaoSubmitForm(e: FormEvent) {
        e.preventDefault()
        let email = (document.getElementById('email') as HTMLInputElement).value
        let senha = (document.getElementById('senha') as HTMLInputElement).value

        if (email !== '' && senha !== '') {
            if (jaCadastrado) {
                localStorage.setItem('logado', 'true')
                alert('Logado com sucesso!')
                nav('/')
            } else {
                alert('Cadastrado com sucesso!')

                setJaCadastrado(true)
            }

            setEmail('')
            setSenha('')
        } else {
            alert('Preencha todos os campos!')
        }
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
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
                            onClick={opcaoLogin}
                            className='modo_formulario'
                        >
                            {jaCadastrado
                                ? 'Criar uma conta'
                                : 'Já tenho conta'}
                        </button>
                        <button
                            onClick={acaoSubmitForm}
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
