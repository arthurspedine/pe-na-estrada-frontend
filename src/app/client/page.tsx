'use client'
import { useState, type FormEvent } from 'react'
import { LoginForm } from './_components/login-form'

export default function clientePage() {
  const [cadastrado, setCadastrado] = useState<boolean>(false)

  return (
    <main className='w-full flex-grow flex flex-col'>
      <div className='flex justify-around w-full min-h-[80vh] max-w-[1440px] mx-auto'>
        {/* DIV FORM */}
        <div className='py-6 px-5 my-auto text-center min-h-[500px] max-w-[431px] w-full '>
          <h1 className='text-4xl font-extrabold'>
            {cadastrado ? 'Login' : 'Cadastro'}
          </h1>
          <p className='mx-auto text-muted-foreground text-base mt-2'>
            {cadastrado
              ? 'Entre com seu email e senha para continuar'
              : 'Cadastre agora sua conta para continuar'}
          </p>
          {cadastrado ? <LoginForm /> : ''}
          {/* <RegisterForm /> */}

          <p className='mx-auto flex justify-center text-left text-muted-foreground'>
            {cadastrado ? 'Não tem uma conta?' : 'Já tem uma conta?'}

            <button
              className='text-left ml-1 font-semibold text-[0.95rem] bg-transparent border-none text-foreground'
              type='button'
              onClick={() => setCadastrado(!cadastrado)}
            >
              {cadastrado ? 'Criar uma conta aqui' : 'Login na conta aqui'}
            </button>
          </p>

          {/* <div className='mt-4 w-full flex flex-col gap-5'>
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
          <div className='flex flex-col'>
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
                    placeholder='Marca Carro'
                    type='text'
                    id='marca'
                    name='marca'
                    value={marca}
                    onChange={e => setMarca(e.target.value)}
                    required
                  />
                  <Input
                    className='py-6 px-4'
                    placeholder='Modelo Carro'
                    type='text'
                    id='modelo'
                    name='modelo'
                    value={modelo}
                    onChange={e => setModelo(e.target.value)}
                    required
                  />
                  <Input
                    className='py-6 px-4'
                    placeholder='Ano Carro'
                    type='number'
                    min={1950}
                    max={2025}
                    id='ano'
                    name='ano'
                    value={ano}
                    onChange={e => setAno(e.target.value)}
                    required
                  />
                  <Input
                    className='py-6 px-4'
                    placeholder='Placa Carro'
                    type='text'
                    id='placa'
                    name='placa'
                    value={placa}
                    onChange={e => setPlaca(e.target.value)}
                    required
                  />
                </>
              )}
            </form>
          </div> */}
        </div>
        {/* IMAGEM CELULAR */}
        <div className='imagem_celular_home'>
          <img src='image/imagem_celular_login.png' alt='Imagem com celular' />
        </div>
      </div>
    </main>
  )
}
