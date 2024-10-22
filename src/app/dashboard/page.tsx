'use client'
import type { OficinaDetail, OrcamentoDetail } from '@/types'
import Link from 'next/link'
import { useState } from 'react'

type Usuario = {
  nome: string
  email: string
}

export default function dashboardPage() {
  // const data: Usuario = JSON.parse(localStorage.getItem('logado') || '{}')
  const usuario = {
    nome: 'mock',
    email: 'mock',
  }

  const veiculos = [
    {
      imagem: '/image/assistente/veiculos/uno.png',
      marca: 'Fiat',
      modelo: 'Uno',
      ano: '2021',
    },
    {
      imagem: 'image/assistente/veiculos/corolla.jpg',
      marca: 'Toyota',
      modelo: 'Corolla',
      ano: '2017',
    },
    {
      imagem: '/image/assistente/veiculos/civic.jpg',
      marca: 'Honda',
      modelo: 'Civic',
      ano: '2015',
    },
  ]

  const orcamentos: OrcamentoDetail[] = [
    {
      id: 1,
      veiculo: `${veiculos[0].marca} ${veiculos[0].modelo} ${veiculos[0].ano}`,
      data_inicio: '13/09/2024',
      descricao:
        'Reparo do sistema de embreagem travado, incluindo lubrificação e ajuste.',
      status: true,
      valor: 600.0,
    },
    {
      id: 2,
      veiculo: `${veiculos[1].marca} ${veiculos[1].modelo} ${veiculos[1].ano}`,
      data_inicio: '16/08/2024',
      data_termino: '20/08/2024',
      descricao: 'Correção do desalinhamento de direção e de falhas no motor.',
      status: false,
      valor: 400.0,
    },
    {
      id: 3,
      veiculo: `${veiculos[1].marca} ${veiculos[1].modelo} ${veiculos[1].ano}`,
      data_inicio: '16/08/2024',
      data_termino: '20/08/2024',
      descricao: 'Correção do desalinhamento de direção e de falhas no motor.',
      status: false,
      valor: 400.0,
    },
    {
      id: 4,
      veiculo: `${veiculos[2].marca} ${veiculos[2].modelo} ${veiculos[2].ano}`,
      data_inicio: '10/07/2024',
      data_termino: '15/07/2024',
      descricao:
        'Substituição das pastilhas de freio e ajuste no sistema de suspensão.',
      status: false,
      valor: 350.0,
    },
    {
      id: 5,
      veiculo: `${veiculos[0].marca} ${veiculos[0].modelo} ${veiculos[0].ano}`,
      data_inicio: '01/06/2024',
      data_termino: '05/06/2024',
      descricao: 'Troca de óleo e revisão completa do motor.',
      status: false,
      valor: 500.0,
    },
  ]

  const oficinas: OficinaDetail[] = [
    {
      id: 1,
      imagem: 'image/assistente/oficinas/oficina_alphaville.png',
      titulo: 'Oficina Porto - Alphaville',
      endereco:
        'Alameda Araguaia, 211 - Alphaville Industrial, Barueri - SP, 06455-000',
      avaliacao: 4.0,
      maps: 'https://maps.app.goo.gl/iNfzYWVvAKKGoUEbA',
    },
    {
      id: 2,
      imagem: 'image/assistente/oficinas/oficina_leopoldina.png',
      titulo: 'Oficina Porto - Leopoldina',
      endereco: 'R. Guaipá, 1380 - Vila Leopoldina, São Paulo - SP, 05089-000',
      avaliacao: 4.3,
      maps: 'https://maps.app.goo.gl/zy7bkoNsmYSnxUGU7',
    },
    {
      id: 3,
      imagem: 'image/assistente/oficinas/oficina_butanta.png',
      titulo: 'Oficina Porto Butantã',
      endereco: 'Av. Vital Brasil, 963 - Butantã, São Paulo - SP, 05503-001',
      avaliacao: 4.2,
      maps: 'https://maps.app.goo.gl/KiV29uhNXJBKhWfe7',
    },
    {
      id: 4,
      imagem: 'image/assistente/oficinas/oficina_vilamariana.png',
      titulo: 'Oficina Porto - Vila Mariana',
      endereco:
        'Av. Lins de Vasconcelos, 2474 - Vila Mariana, São Paulo - SP, 04112-001',
      avaliacao: 4.1,
      maps: 'https://maps.app.goo.gl/RifAoKxNcCBdBVAy8',
    },
    {
      id: 5,
      imagem: 'image/assistente/oficinas/oficina_ibirapuera.png',
      titulo: 'Oficina Porto - Ibirapuera',
      endereco:
        'Alameda Araguaia, 211 - Alphaville Industrial, Barueri - SP, 06455-000',
      avaliacao: 4.0,
      maps: 'https://maps.app.goo.gl/75WtruHxHSSVtVXU8',
    },
  ]

  function openChat() {}

  return (
    <main className='w-full flex-grow flex flex-col'>
      <div className='w-full flex flex-col'>
        <div className='pt-16 min-h-[300px] bg-#FAFAFA text-center '>
          <h1 className='text-6xl'>Experimente agora a nossa IA!</h1>
          <p className='text-2xl my-[15px] mb-[40px]'>
            Comece seu orçamento em instantes!
          </p>
          <Link
            href={'/dashboard/assistant'}
            className='border-none rounded-[5px] bg-blue-600 text-white text-[1.2rem] px-5 py-3 border border-blue-600 cursor-pointer min-w-[190px] hover:rounded-[15px] transition-all duration-300 ease-in-out'
          >
            Iniciar orçamento
          </Link>
        </div>
        <section className='flex items-center max-w-[1440px] w-full mx-auto shadow-[--10px_0_10px_-5px_rgba(0,_0,_0,_0.1),_10px_0_10px_-5px_rgba(0,_0,_0,_0.1)]'>
          <div className='w-full p-6 flex flex-col minh-[400px] flex-grow'>
            <h2 className='text-left text-4xl mb-4'>
              Bem vindo {usuario.nome}!
            </h2>
            <div className='flex flex-wrap'>
              <div className='w-4/12 flex items-center flex-col'>
                <img
                  className='w-52 mx-auto'
                  src='/image/assistente/foto_user.png'
                  alt='Foto do usuário'
                />
                <div>
                  <p className='my-4 mx-5'>Email: {usuario.email}</p>
                  <p className='my-4 mx-5'>Telefone: (xx) xxxxx-xxxx</p>
                </div>
              </div>
              <div
                className='w-9/12 bg-#F5F5F5 flex-grow border-radius: 8px;
                    padding: 0 0 15px;'
              >
                <h3 className=' py-4 text-center text-xl border-b border-blue-400'>
                  Veículos cadastrados
                </h3>
                <div className='flex'>
                  <ul className='w-full flex items-center justify-start gap-4 pt-[15px] pr-[15px] pb-0 pl-[15px] overflow-auto'>
                    {/* {veiculos.map(v => (
                        <li className='w-60' key={v.marca}>
                          <Image
                            imagem={v.imagem}
                            marca={v.marca}
                            modelo={v.modelo}
                            ano={v.ano}
                          />
                        </li>
                      ))} */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* {pagina === 1 && (
            <div className='w-full p-6 flex flex-col minh-[400px] flex-grow'>
              {orcamentos.map(o => (
                <div
                  className='relative min-w-[330px] max-w-[330px] min-h-[302px] bg-[#FAFAFA] shadow-md rounded-[8px] p-[16px] pb-0 my-[16px] flex flex-col'
                  key={o.id}
                  id={o.id}
                  veiculo={o.veiculo}
                  data_inicio={o.data_inicio}
                  data_termino={o.data_termino}
                  descricao={o.descricao}
                  status={o.status}
                  valor={o.valor}
                />
              ))}
            </div>
          )}
          {pagina === 2 && (
            <div className='w-full p-6 flex flex-col minh-[400px] flex-grow'>
              {oficinas.map(o => (
                <div
                  className='relative min-w-[330px] max-w-[330px] min-h-[302px] bg-[#FAFAFA] shadow-md rounded-[8px] p-[16px] pb-0 my-[16px] flex flex-col'
                  key={o.id}
                  id={o.id}
                  imagem={o.imagem}
                  titulo={o.titulo}
                  endereco={o.endereco}
                  avaliacao={o.avaliacao}
                  maps={o.maps}
                />
              ))}
            </div>
          )} */}
        </section>
      </div>
    </main>
  )
}
