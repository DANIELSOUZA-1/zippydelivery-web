/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import LogoComponent from '../../components/logoComponent';
import zippy from '../../../assets/img/zippy.png';
import utilService from "../../../utilService";


function SignUpPage() {
  let navigate = useNavigate();

  const [cnpj, setCnpj] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const apiUrl = utilService.getURlAPI()

  

  function salvar() {
    let empresaRequest = {
      cnpj: cnpj,
      email: email,
      senha: senha,
     
    };
    
    axios.post(`${apiUrl}/empresa`, empresaRequest)
      .then((response) => {
        console.log('Cliente cadastrado com sucesso.')
        navigate("/");
      })
      .catch((error) => {
        console.log('Erro ao incluir o um cliente.')
      });
  }
  
  

  return (
    <div className='flex flex-col gap-14 sm:flex-row items-center h-full'>
      {/* Lado esquerdo do login */}
      <div className="flex gap-5 items-center w-1/2  h-full bg-orange-100 justify-center ">
        {/* Logo Branca */}
        <div className='flex flex-col text-white items-center mb-14'>
          <img className='scale-75 -mb-14 animate-fade-right animate-once animate-duration-[1000ms] animate-ease-out animate-normal animate-fill-both ' src={zippy} alt="" />
          <div className='flex items-center gap-3 z-50'>
            <div className="w-6 h-6 relative">
              <div className="hexagon !bg-white"></div>
            </div>
            <div className="flex flex-col justify-center items-end mb-1">
              <span className="text-3xl font-bold  lowercase">
                Zippy Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Lado direito do login */}
      <div className='flex h-[90%] sm:h-full w-full sm:w-1/2 items-start sm:items-center justify-center'>
        <div className='flex w-full sm:w-[30rem] flex-col  gap-8 px-12 py-16 rounded-md shadow-xl bg-white'>
          <span className='text-3xl font-semibold mx-auto'>
            Cadastre-se</span>
          
          {/* Campos */}
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-1 text-gray-500'>
              <span className='input-label'>CNPJ</span>
              <input className='input' 
              type="text" 
              value={cnpj}
			        onChange={e => setCnpj(e.target.value)}
/>
            </div>

            <div className='flex flex-col gap-1 text-gray-500' >
              <span className='input-label'>Email</span>
              <input placeholder='Exemplo@exemplo.com.br' 
              className='input ' 
              type="text" 
              value={email}
			        onChange={e => setEmail(e.target.value)}
/>
            </div>


            <div className='flex flex-col gap-1 text-gray-500'>
              <span className='input-label'>Senha</span>
              <input placeholder='No mínimo 6 caracteres' 
              className='input' 
              type="text" 
              value={senha}
			        onChange={e => setSenha(e.target.value)}
/>
            </div>
            
          </div>

          {/* Botões */}
          <div className='flex flex-col gap-2'>
            <button onClick={() => salvar()} className='primary-button'>Cadastrar</button>
            <button onClick={() => { navigate('/') }} className='outline-button'>Fazer login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
