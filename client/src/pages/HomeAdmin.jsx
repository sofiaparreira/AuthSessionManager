import React from 'react'
import NavBar from '../components/NavBar'

const HomeAdmin = () => {
  return (
    <div>
      <NavBar />
      <span className='h-80 flex flex-col justify-center items-center space-y-2'>
          <h1 className='text-2xl font-bold text-gray-800 text-center'>Bem Vindo, name</h1>
          <p className='text-gray-700 text-center'>Você está logado como administrador</p>
      </span>
    </div>
  )
}

export default HomeAdmin
