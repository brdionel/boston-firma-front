import React from 'react'
import useContrato from '../hooks/useContrato'
import Contrato from '../components/Contrato'
import Terminos from '../components/Terminos'
import Wrapper from '../components/Wrapper'
import Loader from 'react-loader-spinner'
import './ContratoPage.css'

export default function ContratoPage({match}) {
  
  const { loading, contrato, error }= useContrato({clicrm: match.params.clicrm})

  if(error) {
    return (
      <div className="container_error">
        <h1>No encontramos estudiante con esa Cedula! </h1>
      </div>
    )
  }

  if(loading) {
    return(
      <div className="loader_container">
        <Loader
          type='TailSpin'
          height={100}
          width={100}
          color='rgba(0, 0, 0, 0.8)'
          className='loader'
        />
      </div>
    )
  }

  if(contrato !== ''){
    return (
      <Wrapper>
        <>
          <Contrato contrato={contrato} />
          <Terminos />
        </>
      </Wrapper>
    )
  }
  return(<></>)
}