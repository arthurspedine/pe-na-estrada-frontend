'use client'
import { Input } from '@/components/ui/input'
import { useState, type FormEvent } from 'react'

export default function clientePage() {
  const [jaCadastrado, setJaCadastrado] = useState<boolean>(false)

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function opcaoLogin(e: FormEvent) {
    e.preventDefault()
    setJaCadastrado(!jaCadastrado)
  }

  function acaoSubmitForm(e: FormEvent) {
    e.preventDefault()

    // Validação dos campos
    if (!jaCadastrado) {
      if (!nome.trim() || !cpf.trim() || !email.trim() || !senha.trim()) {
        alert('Preencha todos os campos!')
      }
    } else if (!email.trim() || !senha.trim()) {
      alert('Preencha todos os campos!')
      return
    }

    if (senha.trim().length < 8) {
      alert('A senha deve ter pelo menos 8 caracteres!')
      return
    }

    const usuario = { nome: nome, email: email }

    // Se todos os campos estiverem válidos
    if (jaCadastrado) {
      alert('Logado com sucesso!')
      usuario.nome = 'Cliente' // Resgatar nome no banco
    } else {
      alert('Cadastrado com sucesso!')
    }

    localStorage.setItem('logado', JSON.stringify(usuario))
    // nav('/area_assistente')

    // Limpa os campos após a submissão
    setNome('')
    setCpf('')
    setEmail('')
    setSenha('')
  }

  return (
    <main className='w-full flex-grow flex flex-col'>
      {/* conteudo cliente */}
      <div className='flex justify-around w-full min-h-[80vh] max-w-[1440px] mx-auto'>
        <div className='py-6 px-5 my-auto text-center max-w-[431px] w-full'>
          {localStorage.getItem('logado') ? (
            <>
              <h1 className='text-blue-600 font-bold text-4xl'>
                Área do Cliente
              </h1>
              <button
                type='button'
                className='p-4 rounded-2xl mt-7 text-base font-semibold bg-blue-600 border border-blue-600 cursor-pointer hover:scale-98'
                onClick={() => {
                  //   nav('/area_assistente')
                }}
              >
                Ir para a área do assistente
              </button>
              <button
                type='button'
                className='p-4 rounded-2xl mt-7 text-base font-semibold bg-blue-600 border border-blue-600 cursor-pointer hover:scale-98'
                onClick={() => {
                  localStorage.removeItem('logado')
                  window.location.href = '/'
                }}
              >
                Clique aqui para sair da conta
              </button>
            </>
          ) : (
            <>
              <h1>{jaCadastrado ? 'Login' : 'Cadastro'}</h1>
              <div className='mt-4 w-full flex flex-col gap-5'>
                <legend className='w-4/5 mx-auto text-muted-foreground text-base mt-5'>
                  {jaCadastrado
                    ? 'Entre com seu email e senha para continuar'
                    : 'Cadastre agora sua conta para continuar'}
                </legend>
                <form
                  className='flex flex-col items-center max-w-lg w-full gap-5'
                  onSubmit={acaoSubmitForm}
                >
                  {jaCadastrado ? (
                    ''
                  ) : (
                    <>
                      <Input
                        className='py-6 px-4'
                        placeholder='Seu nome'
                        type='text'
                        id='nome'
                        name='nome'
                        value={nome} // TODO
                        onChange={e => setNome(e.target.value)} // TODO
                        required
                      />
                      <Input
                        className='py-6 px-4'
                        placeholder='Seu cpf'
                        type='text'
                        id='cpf'
                        name='cpf'
                        value={cpf} // TODO
                        onChange={e => setCpf(e.target.value)} // TODO
                        required
                      />
                    </>
                  )}
                  <Input
                    className='py-6 px-4'
                    placeholder='Seu email'
                    type='text'
                    id='email'
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    className='py-6 px-4'
                    placeholder='Sua senha'
                    type='password'
                    id='senha'
                    name='senha'
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    required
                  />
                  <a
                    className='w-full mt-[2px] text-right text-sm no-underline text-blue-400 hover:text-blue-600'
                    href='/client#'
                  >
                    Esqueceu a senha?
                  </a>

                  <div className='botoes'>
                    <button
                      type='submit'
                      onClick={acaoSubmitForm}
                      className='bg-blue-600 no-underline border rounded-[15px] text-white font-semibold py-1 px-2 min-w-32 h-12 '
                    >
                      {jaCadastrado ? 'Login' : 'Cadastrar-se'}
                    </button>

                    {jaCadastrado ? (
                      <p className='mx-auto flex text-left text-sm'>
                        Não tem uma conta?
                        <button type='button' onClick={opcaoLogin}>
                          Criar uma conta aqui
                        </button>
                      </p>
                    ) : (
                      <p className='mx-auto flex text-left text-sm '>
                        Já tem uma conta?
                        <button
                          className='text-left ml-1 font-semibold text-[0.95rem] bg-transparent border-none'
                          type='button'
                          onClick={opcaoLogin}
                        >
                          Login na conta aqui
                        </button>
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
        <div className='imagem_celular_home'>
          <img src='image/imagem_celular_login.png' alt='Imagem com celular' />
        </div>
      </div>
    </main>
  )
}
