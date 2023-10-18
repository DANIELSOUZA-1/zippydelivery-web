import React from 'react';
import { useNavigate } from "react-router-dom";


function ResetPasswordPage() {
  let navigate = useNavigate()
  return (
    <div className='h-full flex items-center justify-center'>
      <div className='flex flex-col gap-4 p-8 items-center bg-white w-80 -mt-40 rounded-md shadow-sm'>
        <span className='bg-blue-100 rounded-full p-2.5'><svg className='fill-blue-700 w-8 h-8 -mr-1 -mb-1' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m720-160-56-56 63-64H560v-80h167l-63-64 56-56 160 160-160 160ZM160-280q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h520q33 0 56.5 23.5T760-760v204q-10-2-20-3t-20-1q-10 0-20 .5t-20 2.5v-147L416-520 160-703v343h323q-2 10-2.5 20t-.5 20q0 10 1 20t3 20H160Zm58-480 198 142 204-142H218Zm-58 400v-400 400Z"/></svg></span>
        <span className='text-xl font-semibold'>Redefinir Senha</span>
        <span className='text-center text-sm'>Preencha com seu email o campo abaixo para redefinir sua senha</span>
        <div className='flex flex-col w-full gap-1 text-gray-500' >
            <input placeholder='Exemplo@exemplo.com.br' className='input placeholder:text-sm' type="text" />
        </div>
        <button onClick={() => { navigate('/') }} className='primary-button w-full bg-blue-700'>Enviar Email</button>
        <button onClick={() => { navigate('/') }} className='outline-button w-full bg-slate-200'>Fazer Login</button>
      </div>
    </div>
  )
}

export default ResetPasswordPage
